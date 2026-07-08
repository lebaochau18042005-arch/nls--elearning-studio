const GOOGLE_AI_API_KEY_PATTERN = /^(?:AIzaSy|AQ)\S{8,}$/;

const FALLBACK_MODELS = [
  'gemini-3.5-flash',
  'gemini-3.1-flash-lite',
  'gemini-3.1-pro-preview',
  'gemini-2.5-flash'
];

function getApiKey() {
  return process.env.GEMINI_API_KEY || process.env.GOOGLE_AI_API_KEY || '';
}

function maskKey(key) {
  if (!key) return '';
  return key.slice(0, 6) + '...' + key.slice(-4);
}

function isTemporaryModelError(error) {
  const text = JSON.stringify(error || {}).toLowerCase();
  return text.includes('503') ||
    text.includes('504') ||
    text.includes('unavailable') ||
    text.includes('deadline_exceeded') ||
    text.includes('overloaded') ||
    text.includes('high demand') ||
    text.includes('temporarily unavailable') ||
    text.includes('not_found');
}

function classifyError(error) {
  const text = JSON.stringify(error || {}).toLowerCase();
  if (text.includes('401') || text.includes('api_key_invalid') || text.includes('invalid api key')) return 'INVALID_API_KEY';
  if (text.includes('403') || text.includes('permission_denied')) return 'PERMISSION_DENIED';
  if (text.includes('429') || text.includes('resource_exhausted') || text.includes('quota')) return 'QUOTA_EXCEEDED';
  if (isTemporaryModelError(error)) return 'MODEL_OVERLOADED';
  return 'GOOGLE_API_ERROR';
}

function orderedModels(selectedModel) {
  const selected = String(selectedModel || '').trim();
  if (!selected) return FALLBACK_MODELS;
  return [selected].concat(FALLBACK_MODELS.filter(function(model) { return model !== selected; }));
}

function json(res, status, payload) {
  res.statusCode = status;
  res.setHeader('Content-Type', 'application/json; charset=utf-8');
  res.setHeader('Cache-Control', 'no-store');
  res.end(JSON.stringify(payload));
}

function readBody(req) {
  return new Promise(function(resolve, reject) {
    let body = '';
    req.on('data', function(chunk) {
      body += chunk;
      if (body.length > 1024 * 1024) {
        reject(new Error('Payload too large'));
        req.destroy();
      }
    });
    req.on('end', function() {
      try {
        resolve(body ? JSON.parse(body) : {});
      } catch (error) {
        reject(error);
      }
    });
    req.on('error', reject);
  });
}

async function callGemini(apiKey, model, prompt, options) {
  const response = await fetch('https://generativelanguage.googleapis.com/v1beta/models/' + encodeURIComponent(model) + ':generateContent?key=' + encodeURIComponent(apiKey), {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      contents: [{ role: 'user', parts: [{ text: prompt }] }],
      generationConfig: {
        temperature: typeof options.temperature === 'number' ? options.temperature : 0.4,
        maxOutputTokens: typeof options.maxOutputTokens === 'number' ? options.maxOutputTokens : 2048
      }
    })
  });
  const data = await response.json().catch(function() { return {}; });
  if (!response.ok) {
    const error = new Error(data.error && data.error.message ? data.error.message : 'Gemini request failed');
    error.status = response.status;
    error.payload = data;
    throw error;
  }
  const text = (data.candidates || [])
    .flatMap(function(candidate) { return candidate.content && candidate.content.parts ? candidate.content.parts : []; })
    .map(function(part) { return part.text || ''; })
    .join('\n')
    .trim();
  return { text: text, raw: data };
}

module.exports = async function handler(req, res) {
  if (req.method === 'GET') {
    const key = getApiKey();
    return json(res, 200, {
      configured: GOOGLE_AI_API_KEY_PATTERN.test(key.trim()),
      key: key ? maskKey(key) : '',
      defaultModel: FALLBACK_MODELS[0],
      fallbackModels: FALLBACK_MODELS
    });
  }

  if (req.method !== 'POST') {
    res.setHeader('Allow', 'GET, POST');
    return json(res, 405, { error: 'METHOD_NOT_ALLOWED' });
  }

  const apiKey = getApiKey().trim();
  if (!GOOGLE_AI_API_KEY_PATTERN.test(apiKey)) {
    return json(res, 401, {
      error: 'GOOGLE_API_KEY_MISSING',
      message: 'Chua cau hinh GEMINI_API_KEY hoac GOOGLE_AI_API_KEY tren server.'
    });
  }

  let payload;
  try {
    payload = await readBody(req);
  } catch (error) {
    return json(res, 400, { error: 'INVALID_JSON', message: 'Payload JSON khong hop le.' });
  }

  const prompt = String(payload.prompt || '').trim();
  if (!prompt) return json(res, 400, { error: 'EMPTY_PROMPT', message: 'Prompt rong.' });

  let lastError = null;
  const attempts = [];
  for (const model of orderedModels(payload.model)) {
    try {
      const result = await callGemini(apiKey, model, prompt, payload || {});
      return json(res, 200, {
        ok: true,
        model: model,
        text: result.text,
        attempts: attempts.concat([{ model: model, ok: true }])
      });
    } catch (error) {
      lastError = error;
      const type = classifyError(error);
      attempts.push({ model: model, ok: false, type: type });
      if (type !== 'MODEL_OVERLOADED') break;
    }
  }

  const errorType = classifyError(lastError);
  return json(res, errorType === 'MODEL_OVERLOADED' ? 503 : 400, {
    ok: false,
    error: errorType,
    message: errorType === 'MODEL_OVERLOADED'
      ? 'Model Google dang qua tai hoac tam thoi khong kha dung.'
      : 'Khong the goi Gemini API. Vui long kiem tra key, quyen truy cap hoac quota.',
    attempts: attempts
  });
};
