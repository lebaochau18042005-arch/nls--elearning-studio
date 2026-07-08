const http = require('http');
const fs = require('fs');
const path = require('path');
const { exec } = require('child_process');
const geminiHandler = require('./api/gemini');

const root = __dirname;
const port = Number(process.env.PORT || 4173);
const types = {
  '.html': 'text/html; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.js': 'text/javascript; charset=utf-8',
  '.json': 'application/json; charset=utf-8',
  '.webmanifest': 'application/manifest+json; charset=utf-8',
  '.svg': 'image/svg+xml; charset=utf-8',
  '.md': 'text/markdown; charset=utf-8'
};

const server = http.createServer((req, res) => {
  const url = new URL(req.url, 'http://127.0.0.1:' + port);
  if (url.pathname === '/api/gemini') {
    geminiHandler(req, res);
    return;
  }
  let filePath = decodeURIComponent(url.pathname);
  if (filePath === '/' || filePath === '') filePath = '/index.html';
  const fullPath = path.normalize(path.join(root, filePath));
  if (!fullPath.startsWith(root)) {
    res.writeHead(403);
    res.end('Forbidden');
    return;
  }
  fs.readFile(fullPath, (error, data) => {
    if (error) {
      res.writeHead(404, { 'Content-Type': 'text/plain; charset=utf-8' });
      res.end('Không tìm thấy file');
      return;
    }
    res.writeHead(200, {
      'Content-Type': types[path.extname(fullPath)] || 'application/octet-stream',
      'Cache-Control': 'no-store, no-cache, must-revalidate, proxy-revalidate',
      'Pragma': 'no-cache',
      'Expires': '0'
    });
    res.end(data);
  });
});

server.listen(port, '127.0.0.1', () => {
  const url = 'http://127.0.0.1:' + port + '/';
  console.log('NLS E-Learning Studio đang chạy tại ' + url);
  if (process.env.NLS_STUDIO_NO_OPEN !== '1') {
    exec('start "" "' + url + '"');
  }
});
