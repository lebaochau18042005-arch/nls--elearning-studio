const TT02 = {
  name: 'Thông tư 02/2025/TT-BGDĐT',
  issued: '24/01/2025',
  effective: '11/03/2025',
  source: 'https://thuvienphapluat.vn/van-ban/Giao-duc/Thong-tu-02-2025-TT-BGDDT-quy-dinh-Khung-nang-luc-so-cho-nguoi-hoc-625668.aspx',
  levels: ['Bậc 1', 'Bậc 2', 'Bậc 3', 'Bậc 4', 'Bậc 5', 'Bậc 6', 'Bậc 7', 'Bậc 8'],
  domains: [
    {
      id: 'data', code: '1', color: 'blue', title: 'Khai thác dữ liệu và thông tin',
      desc: 'Tìm kiếm, lọc, đánh giá, quản lý dữ liệu, thông tin và nội dung số.',
      competencies: [
        { code: '1.1', name: 'Duyệt, tìm kiếm và lọc dữ liệu, thông tin và nội dung số', action: 'xác định từ khóa, chọn nguồn phù hợp và lọc thông tin theo mục tiêu học tập' },
        { code: '1.2', name: 'Đánh giá dữ liệu, thông tin và nội dung số', action: 'đối chiếu nguồn, nhận biết thông tin thiếu căn cứ và nêu mức độ tin cậy' },
        { code: '1.3', name: 'Quản lý dữ liệu, thông tin và nội dung số', action: 'lưu trữ, đặt tên, sắp xếp và trích dẫn nguồn học liệu số' }
      ]
    },
    {
      id: 'communication', code: '2', color: 'teal', title: 'Giao tiếp và hợp tác trong môi trường số',
      desc: 'Tương tác, chia sẻ, hợp tác, tham gia công dân số và quản lý danh tính số.',
      competencies: [
        { code: '2.1', name: 'Tương tác thông qua công nghệ số', action: 'trao đổi trong kênh số đúng mục đích, lịch sự và rõ ràng' },
        { code: '2.2', name: 'Chia sẻ thông qua công nghệ số', action: 'chia sẻ tài liệu/sản phẩm đúng người nhận, đúng quyền truy cập' },
        { code: '2.3', name: 'Tham gia công dân thông qua công nghệ số', action: 'tham gia hoạt động cộng đồng số có trách nhiệm và tôn trọng quy định' },
        { code: '2.4', name: 'Hợp tác thông qua công nghệ số', action: 'phân công, góp ý và hoàn thiện sản phẩm chung trên công cụ số' },
        { code: '2.5', name: 'Quy tắc ứng xử trong môi trường số', action: 'dùng ngôn ngữ tôn trọng, không kỳ thị, không phát tán nội dung gây hại' },
        { code: '2.6', name: 'Quản lý danh tính số', action: 'nhận biết thông tin định danh, bảo vệ hình ảnh và danh tiếng trực tuyến' }
      ]
    },
    {
      id: 'content', code: '3', color: 'gold', title: 'Sáng tạo nội dung số',
      desc: 'Phát triển, tích hợp, tạo lập lại nội dung số, bản quyền, giấy phép và lập trình.',
      competencies: [
        { code: '3.1', name: 'Phát triển nội dung số', action: 'tạo sản phẩm số đúng chủ đề, rõ thông điệp và phù hợp người xem' },
        { code: '3.2', name: 'Tích hợp và tạo lập lại nội dung số', action: 'kết hợp văn bản, hình ảnh, âm thanh hoặc dữ liệu để tạo sản phẩm mới' },
        { code: '3.3', name: 'Bản quyền và giấy phép', action: 'ghi nguồn, dùng học liệu được phép và tôn trọng quyền tác giả' },
        { code: '3.4', name: 'Lập trình', action: 'mô tả hoặc tạo quy trình lệnh đơn giản để tự động hóa nhiệm vụ học tập' }
      ]
    },
    {
      id: 'safety', code: '4', color: 'red', title: 'An toàn',
      desc: 'Bảo vệ thiết bị, dữ liệu cá nhân, quyền riêng tư, sức khỏe, an sinh số và môi trường.',
      competencies: [
        { code: '4.1', name: 'Bảo vệ thiết bị', action: 'nhận biết rủi ro, bảo quản thiết bị và dùng phần mềm/công cụ an toàn' },
        { code: '4.2', name: 'Bảo vệ dữ liệu cá nhân và quyền riêng tư', action: 'không chia sẻ dữ liệu nhạy cảm, hình ảnh riêng tư hoặc mật khẩu' },
        { code: '4.3', name: 'Bảo vệ sức khỏe và an sinh số', action: 'cân bằng thời gian dùng thiết bị, nhận diện bắt nạt mạng và tìm hỗ trợ' },
        { code: '4.4', name: 'Bảo vệ môi trường', action: 'sử dụng thiết bị tiết kiệm, tái dùng học liệu và giảm rác thải điện tử' }
      ]
    },
    {
      id: 'problem', code: '5', color: 'green', title: 'Giải quyết vấn đề',
      desc: 'Xử lý vấn đề kỹ thuật, xác định nhu cầu, chọn giải pháp công nghệ và tự cải thiện năng lực số.',
      competencies: [
        { code: '5.1', name: 'Giải quyết vấn đề kỹ thuật', action: 'mô tả lỗi, thử cách khắc phục đơn giản và nhờ hỗ trợ đúng lúc' },
        { code: '5.2', name: 'Xác định nhu cầu và giải pháp công nghệ', action: 'chọn công cụ số phù hợp với mục tiêu, điều kiện và người dùng' },
        { code: '5.3', name: 'Sử dụng sáng tạo công nghệ số', action: 'thử nghiệm công cụ số để tạo cách trình bày hoặc giải pháp mới' },
        { code: '5.4', name: 'Xác định thiếu hụt về năng lực số', action: 'tự đánh giá kỹ năng số còn thiếu và lập kế hoạch cải thiện' }
      ]
    },
    {
      id: 'ai', code: '6', color: 'violet', title: 'Ứng dụng trí tuệ nhân tạo',
      desc: 'Hiểu, sử dụng có đạo đức, có trách nhiệm và đánh giá công cụ AI/GenAI.',
      competencies: [
        { code: '6.1', name: 'Hiểu biết về trí tuệ nhân tạo', action: 'nhận biết AI/GenAI có thể hỗ trợ gì và có giới hạn gì' },
        { code: '6.2', name: 'Sử dụng trí tuệ nhân tạo có đạo đức và trách nhiệm', action: 'đặt yêu cầu rõ, kiểm chứng kết quả, không nhập dữ liệu nhạy cảm' },
        { code: '6.3', name: 'Đánh giá công cụ trí tuệ nhân tạo', action: 'so sánh kết quả AI với nguồn tin cậy, phát hiện thiên kiến và lỗi' }
      ]
    }
  ]
};

const LEVELS = {
  mamNon: {
    label: 'Mầm non', band: 'Làm quen an toàn số, gợi ý Bậc 1 khi phù hợp',
    grades: ['Nhà trẻ', 'Mẫu giáo 3-4 tuổi', 'Mẫu giáo 4-5 tuổi', 'Mẫu giáo 5-6 tuổi'],
    subjects: ['Khám phá', 'Làm quen văn học', 'Tạo hình', 'Âm nhạc', 'Hoạt động góc', 'Hoạt động trải nghiệm'],
    action: 'quan sát, nghe kể chuyện, thao tác vật thật, nói bằng câu ngắn hoặc tạo sản phẩm trực quan',
    caution: 'Dùng ngôn ngữ rất đơn giản, ưu tiên tranh ảnh, trò chơi, bảo vệ hình ảnh trẻ và cần sự đồng hành của người lớn.'
  },
  tieuHoc: {
    label: 'Tiểu học', band: 'Bậc 1-2',
    grades: ['Lớp 1', 'Lớp 2', 'Lớp 3', 'Lớp 4', 'Lớp 5'],
    subjects: ['Tiếng Việt', 'Toán', 'Tự nhiên và Xã hội', 'Đạo đức', 'Lịch sử và Địa lí', 'Tin học', 'Nghệ thuật', 'Hoạt động trải nghiệm'],
    action: 'nhận biết, kể lại, làm việc cặp đôi, dùng phiếu/hình ảnh và tạo sản phẩm đơn giản',
    caution: 'Nhiệm vụ ngắn, hướng dẫn từng bước, không yêu cầu học sinh tự tạo tài khoản hoặc chia sẻ dữ liệu cá nhân.'
  },
  thcs: {
    label: 'THCS', band: 'Bậc 2-4',
    grades: ['Lớp 6', 'Lớp 7', 'Lớp 8', 'Lớp 9'],
    subjects: ['Ngữ văn', 'Toán', 'Khoa học tự nhiên', 'Lịch sử và Địa lí', 'Giáo dục công dân', 'Tin học', 'Công nghệ', 'Hoạt động trải nghiệm'],
    action: 'tìm kiếm, phân tích tình huống, thảo luận có căn cứ, tạo sản phẩm nhóm và tự đánh giá',
    caution: 'Cần kiểm chứng nguồn, ghi nguồn hình ảnh/tư liệu và có quy tắc hợp tác số rõ ràng.'
  },
  thpt: {
    label: 'THPT', band: 'Bậc 3-5, dự án nâng cao có thể Bậc 6',
    grades: ['Lớp 10', 'Lớp 11', 'Lớp 12'],
    subjects: ['Ngữ văn', 'Toán', 'Lịch sử', 'Địa lí', 'Giáo dục kinh tế và pháp luật', 'Tin học', 'Công nghệ', 'Hoạt động trải nghiệm'],
    action: 'nghiên cứu nguồn, lập luận, thiết kế dự án, phản biện và đề xuất giải pháp có trách nhiệm',
    caution: 'Yêu cầu minh chứng nguồn, nhận diện thiên kiến dữ liệu/AI và phân tích tác động đạo đức, pháp lý, xã hội.'
  }
};

const INTEGRATIONS = {
  heritage: {
    label: 'Giáo dục di sản', color: 'gold', short: 'Di sản vật thể, phi vật thể, ký ức địa phương và trách nhiệm bảo tồn.',
    byLevel: {
      mamNon: ['Trẻ nhận biết nét đẹp địa phương qua tranh, bài hát, câu chuyện hoặc đồ vật quen thuộc.', 'Góc trải nghiệm di sản: quan sát, chạm, nghe kể và tạo tranh/sản phẩm đơn giản.', 'Lời kể ngắn hoặc sản phẩm tạo hình về điều trẻ thích.'],
      tieuHoc: ['Học sinh kể được tên, giá trị và một việc phù hợp để giữ gìn di sản.', 'Lập thẻ thông tin di sản và thiết kế thông điệp bảo vệ di sản.', 'Thẻ thông tin có tên, giá trị, nguồn và hành động của em.'],
      thcs: ['Học sinh phân tích giá trị lịch sử, văn hóa, môi trường của di sản và nguy cơ mai một.', 'Tạo bản đồ di sản địa phương, so sánh nguồn tư liệu và đề xuất chiến dịch truyền thông.', 'Infographic/bản đồ có nguồn, dữ liệu và giải pháp khả thi.'],
      thpt: ['Học sinh đánh giá quan hệ giữa di sản, kinh tế, công nghệ, du lịch và trách nhiệm công dân.', 'Thiết kế dự án số hóa/truyền thông di sản có cân nhắc bản quyền, chủ thể văn hóa và tác động.', 'Đề cương dự án có mục tiêu, đối tượng, nguồn dữ liệu và chỉ số tác động.']
    }
  },
  inclusion: {
    label: 'Giáo dục hòa nhập', color: 'green', short: 'Thiết kế phổ quát, điều chỉnh nhiệm vụ và tham gia bình đẳng.',
    byLevel: {
      mamNon: ['Trẻ được tham gia bằng nhiều cách: nghe, nhìn, chạm, vận động, nói hoặc chỉ tranh.', 'Chuẩn bị thẻ tranh, mẫu vật, bạn đồng hành và lựa chọn cách thể hiện.', 'Trẻ tham gia ít nhất một nhiệm vụ bằng lời nói, cử chỉ hoặc sản phẩm.'],
      tieuHoc: ['Học sinh tôn trọng khác biệt, có lựa chọn cách hoàn thành nhiệm vụ và nhận hỗ trợ phù hợp.', 'Chia nhiệm vụ ba mức, có mẫu câu trả lời, tranh gợi ý và vai trò rõ trong nhóm.', 'Minh chứng cá nhân phù hợp mức độ và phản hồi tích cực từ bạn.'],
      thcs: ['Học sinh hợp tác công bằng, lắng nghe tiếng nói của bạn cần hỗ trợ và điều chỉnh cách làm.', 'Dùng hợp đồng nhóm, bảng theo dõi vai trò và phiên bản sản phẩm có nhiều cách trình bày.', 'Bảng phân công, tự đánh giá tham gia và sản phẩm nhóm.'],
      thpt: ['Học sinh thiết kế giải pháp có tính đến tiếp cận, công bằng và tác động với nhóm dễ bị tổn thương.', 'Kiểm tra sản phẩm bằng checklist tiếp cận: ngôn ngữ rõ, tương phản, mô tả hình ảnh, không định kiến.', 'Sản phẩm có phần điều chỉnh tiếp cận và lập luận về công bằng.']
    }
  },
  population: {
    label: 'Giáo dục dân số', color: 'violet', short: 'Dân số, gia đình, bình đẳng giới, sức khỏe và phát triển bền vững.',
    byLevel: {
      mamNon: ['Trẻ nhận biết bản thân, gia đình, bạn bè và tôn trọng sự khác nhau.', 'Kể chuyện về người chăm sóc, nhu cầu cơ bản, chia sẻ và giúp bạn.', 'Trẻ nêu được một hành vi quan tâm hoặc tự chăm sóc.'],
      tieuHoc: ['Học sinh hiểu quyền trẻ em, trách nhiệm trong gia đình/lớp học và cơ hội tham gia bình đẳng.', 'Phân tích tình huống chia sẻ việc nhà, tôn trọng bạn và giữ vệ sinh sức khỏe.', 'Phiếu xử lý tình huống có lựa chọn và lý do phù hợp.'],
      thcs: ['Học sinh nhận diện tác động của dân số, giới, sức khỏe vị thành niên và lựa chọn có trách nhiệm.', 'Đọc bảng số liệu đơn giản, thảo luận áp lực đồng trang lứa và kênh hỗ trợ tin cậy.', 'Bảng phân tích dữ liệu/tình huống và thông điệp ứng xử có trách nhiệm.'],
      thpt: ['Học sinh phân tích quan hệ giữa dân số, lao động, di cư, phúc lợi xã hội và phát triển bền vững.', 'Khai thác dữ liệu địa phương/quốc gia, lập luận về một vấn đề dân số và đề xuất giải pháp.', 'Bài trình bày có dữ liệu, lập luận, nguồn và khuyến nghị.']
    }
  },
  drug: {
    label: 'Phòng chống ma túy', color: 'red', short: 'Nhận diện nguy cơ, kỹ năng từ chối, an toàn số và tìm hỗ trợ.',
    byLevel: {
      mamNon: ['Trẻ biết không nhận đồ lạ, không tự ý dùng thuốc/đồ uống lạ và tìm người lớn tin cậy.', 'Đóng vai tình huống: không nhận, rời khỏi, báo người lớn bằng tranh và câu nói ngắn.', 'Trẻ thực hành câu nói từ chối và chỉ ra người có thể giúp.'],
      tieuHoc: ['Học sinh nhận biết nguy cơ từ đồ lạ/chất gây hại, biết từ chối và báo tin cho người lớn.', 'Sắp xếp thẻ hành động an toàn, luyện câu từ chối và vẽ sơ đồ người tin cậy.', 'Sơ đồ hỗ trợ và câu xử lý tình huống an toàn.'],
      thcs: ['Học sinh nhận diện áp lực đồng trang lứa, thông tin sai lệch và biết lập kế hoạch tự bảo vệ.', 'Phân tích tình huống rủ rê, luyện nói không, rời khỏi tình huống và thiết kế thông điệp phòng ngừa.', 'Kịch bản ứng phó, thông điệp truyền thông và cam kết hành động.'],
      thpt: ['Học sinh hiểu hậu quả sức khỏe, pháp lý, xã hội ở mức phù hợp và tham gia truyền thông phòng ngừa.', 'Thiết kế chiến dịch truyền thông dựa trên dữ liệu đúng, không kỳ thị, có kênh hỗ trợ.', 'Kế hoạch chiến dịch có thông điệp, đối tượng, kênh hỗ trợ và tiêu chí đo tác động.']
    }
  }
};

const APP_SKILLS_SAFE = Array.isArray(window.APP_SKILLS) ? window.APP_SKILLS : [];

const LIBRARY = [
  { type: 'heritage', title: 'Hồ sơ di sản địa phương', level: 'Tiểu học, THCS', text: 'Mẫu thẻ gồm tên di sản, câu chuyện, giá trị, nguồn ảnh/tư liệu và hành động bảo tồn.' },
  { type: 'heritage', title: 'Bản đồ số tuyến tham quan', level: 'THCS, THPT', text: 'Gắn điểm trên bản đồ, viết lời thuyết minh ngắn, kiểm tra quyền sử dụng hình ảnh.' },
  { type: 'inclusion', title: 'Phiếu nhiệm vụ ba mức', level: 'Tất cả cấp học', text: 'Cùng một mục tiêu nhưng có lựa chọn nhận biết, giải thích, sáng tạo sản phẩm.' },
  { type: 'inclusion', title: 'Checklist tiếp cận sản phẩm', level: 'THCS, THPT', text: 'Kiểm tra văn bản ngắn, từ khóa rõ, tương phản đủ, mô tả hình ảnh và vai trò công bằng.' },
  { type: 'population', title: 'Bảng số liệu dân số đơn giản', level: 'THCS, THPT', text: 'Đọc xu hướng, đặt câu hỏi nguyên nhân-hệ quả và đề xuất giải pháp địa phương.' },
  { type: 'population', title: 'Tình huống bình đẳng tham gia', level: 'Tiểu học, THCS', text: 'Phân vai, chọn cách ứng xử tôn trọng sự khác biệt, quyền trẻ em và trách nhiệm chung.' },
  { type: 'drug', title: 'Sơ đồ người tin cậy', level: 'Mầm non, Tiểu học', text: 'Chỉ ra người có thể báo tin khi gặp đồ lạ, lời rủ rê hoặc tình huống không an toàn.' },
  { type: 'drug', title: 'Kịch bản từ chối áp lực đồng trang lứa', level: 'THCS, THPT', text: 'Luyện câu từ chối ngắn gọn, rời khỏi tình huống, lưu bằng chứng an toàn và tìm hỗ trợ.' },
  { type: 'ai', title: 'Nhật ký prompt AI', level: 'THCS, THPT', text: 'Ghi prompt, kết quả, nguồn đối chiếu, điểm chưa chắc, chỉnh sửa của học sinh và kết luận.' },
  { type: 'data', title: 'Phiếu kiểm chứng nguồn', level: 'Tiểu học, THCS, THPT', text: 'So sánh ít nhất hai nguồn, ghi tác giả, thời điểm, mục đích và độ tin cậy.' }
];

const state = {
  appMode: 'studio',
  tab: 'studio',
  ribbonTab: 'insert',
  aiPanelOpen: false,
  aiMessages: [],
  geminiModel: 'gemini-3.5-flash',
  plan: null,
  lesson: null,
  lessonSignature: '',
  selectedScene: 0,
  previewIndex: 0,
  previewAnswer: null
};
const form = document.getElementById('plannerForm');
const levelSelect = document.getElementById('levelSelect');
const gradeSelect = document.getElementById('gradeSelect');
const subjectSelect = document.getElementById('subjectSelect');
const topicInput = document.getElementById('topicInput');
const durationSelect = document.getElementById('durationSelect');
const productSelect = document.getElementById('productSelect');
const learnerNeedsInput = document.getElementById('learnerNeedsInput');
const lessonModeSelect = document.getElementById('lessonModeSelect');
const slideCountSelect = document.getElementById('slideCountSelect');
const narrationStyleSelect = document.getElementById('narrationStyleSelect');
const includeQuizInput = document.getElementById('includeQuizInput');
const includeTranscriptInput = document.getElementById('includeTranscriptInput');
const pptxInput = document.getElementById('pptxInput');
const importPptxButton = document.getElementById('importPptxButton');
const pptxStatus = document.getElementById('pptxStatus');
const authoringPresetSelect = document.getElementById('authoringPresetSelect');
const publishStandardSelect = document.getElementById('publishStandardSelect');
const passingScoreSelect = document.getElementById('passingScoreSelect');
const completionRuleSelect = document.getElementById('completionRuleSelect');
const navigationModeSelect = document.getElementById('navigationModeSelect');
const attemptLimitSelect = document.getElementById('attemptLimitSelect');
const shuffleAnswersInput = document.getElementById('shuffleAnswersInput');
const showFeedbackInput = document.getElementById('showFeedbackInput');
const responsivePlayerInput = document.getElementById('responsivePlayerInput');
const domainList = document.getElementById('domainList');
const integrationList = document.getElementById('integrationList');
const output = document.getElementById('output');
const modeButtons = Array.from(document.querySelectorAll('[data-app-mode]'));

const AUTHORING_PRESETS = {
  activepresenter: {
    label: 'ActivePresenter-like',
    fit: 'Bài giảng có timeline, ghi màn hình, nhánh tương tác, biến/trạng thái và quiz theo chuẩn LMS.',
    standard: 'SCORM 2004',
    completion: 'Đạt điểm quiz và xem 80% số cảnh',
    navigation: 'Khóa cảnh đến khi hoàn thành',
    attempts: '2',
    score: '80',
    feedback: 'Phản hồi tức thì + cho làm lại theo số lần quy định',
    equivalent: ['Timeline từng cảnh', 'Event-action cho nút bấm', 'Quiz có điểm', 'Xuất HTML5/SCORM/xAPI', 'Player có mục lục']
  },
  ispring: {
    label: 'iSpring Suite-like',
    fit: 'Bài giảng chuyển từ slide, có narration, quiz, tương tác nhanh, mô phỏng hội thoại và player LMS.',
    standard: 'SCORM 1.2',
    completion: 'Đạt điểm quiz và xem 80% số cảnh',
    navigation: 'Tuyến tính có mục lục',
    attempts: '2',
    score: '70',
    feedback: 'Phản hồi thân thiện sau mỗi câu hỏi',
    equivalent: ['Slide-to-course', 'Quiz tương tác', 'Role-play/simulation', 'Video/narration', 'Player responsive']
  },
  classroom: {
    label: 'Lớp học tự học',
    fit: 'Bài học chạy trực tiếp trên web, dùng trong lớp hoặc giao qua đường link, chưa cần LMS.',
    standard: 'HTML5 offline',
    completion: 'Xem 80% số cảnh',
    navigation: 'Tự do',
    attempts: 'Không giới hạn',
    score: '60',
    feedback: 'Phản hồi tức thì để học sinh tự điều chỉnh',
    equivalent: ['Chạy bằng trình duyệt', 'Lưu mẫu trên máy', 'Xem thử như học sinh', 'Xuất HTML5/SCORM/xAPI', 'In/PDF']
  }
};

function init() {
  renderLevelOptions();
  renderDomainOptions();
  renderIntegrationOptions();
  syncLevelFields();
  bindEvents();
  syncTabFromHash();
  applyAppMode(state.appMode, false);
  generatePlan();
}

function syncTabFromHash() {
  const requestedTab = window.location.hash ? window.location.hash.slice(1) : '';
  if (requestedTab === 'ai') {
    state.appMode = 'studio';
    state.ribbonTab = 'ai';
    state.aiPanelOpen = true;
    setActiveTab('studio');
    return;
  }
  const tabButton = requestedTab ? document.querySelector('.tab[data-tab="' + requestedTab + '"]') : null;
  if (!tabButton) return;
  const surface = tabButton.dataset.surface || 'studio';
  if (surface === 'planner') state.appMode = 'planner';
  if (surface === 'studio') state.appMode = 'studio';
  setActiveTab(requestedTab);
}

function renderLevelOptions() {
  levelSelect.innerHTML = Object.keys(LEVELS).map(function(key) {
    return '<option value="' + key + '">' + LEVELS[key].label + '</option>';
  }).join('');
  levelSelect.value = 'thcs';
}

function syncLevelFields() {
  const level = LEVELS[levelSelect.value];
  gradeSelect.innerHTML = level.grades.map(function(item) { return '<option>' + item + '</option>'; }).join('');
  subjectSelect.innerHTML = level.subjects.map(function(item) { return '<option>' + item + '</option>'; }).join('');
  if (levelSelect.value === 'thcs') {
    gradeSelect.value = 'Lớp 7';
    subjectSelect.value = 'Lịch sử và Địa lí';
  }
}

function renderDomainOptions() {
  domainList.innerHTML = TT02.domains.map(function(domain, index) {
    const checked = index === 0 || index === 1 || index === 2 || domain.id === 'ai' ? ' checked' : '';
    return '<label class="check-item">' +
      '<input type="checkbox" name="domain" value="' + domain.id + '"' + checked + ' />' +
      '<span><strong>' + domain.code + '. ' + domain.title + '</strong><small>' + domain.desc + '</small></span>' +
      '</label>';
  }).join('');
}

function renderIntegrationOptions() {
  integrationList.innerHTML = Object.keys(INTEGRATIONS).map(function(key) {
    const item = INTEGRATIONS[key];
    const checked = key === 'heritage' || key === 'inclusion' ? ' checked' : '';
    return '<label class="check-item">' +
      '<input type="checkbox" name="integration" value="' + key + '"' + checked + ' />' +
      '<span><strong>' + item.label + '</strong><small>' + item.short + '</small></span>' +
      '</label>';
  }).join('');
}

function bindEvents() {
  window.addEventListener('hashchange', function() {
    syncTabFromHash();
    applyAppMode(state.appMode, false);
    renderOutput();
  });
  modeButtons.forEach(function(button) {
    button.addEventListener('click', function() {
      applyAppMode(button.dataset.appMode || 'studio', true);
    });
  });
  levelSelect.addEventListener('change', function() { syncLevelFields(); generatePlan(); });
  authoringPresetSelect.addEventListener('change', applyAuthoringPreset);
  form.addEventListener('input', generatePlan);
  form.addEventListener('submit', function(event) { event.preventDefault(); generatePlan(); showToast('Đã tạo kế hoạch mới.'); });
  if (pptxInput) pptxInput.addEventListener('change', function() { updatePptxStatus(pptxInput, pptxStatus); });
  if (importPptxButton) importPptxButton.addEventListener('click', function() { importPptxLesson(pptxInput, pptxStatus); });
  document.getElementById('resetButton').addEventListener('click', resetForm);
  document.getElementById('saveButton').addEventListener('click', saveTemplate);
  document.getElementById('loadButton').addEventListener('click', loadTemplate);
  document.getElementById('copyButton').addEventListener('click', copyVisibleText);
  document.getElementById('jsonButton').addEventListener('click', exportPackage);
  document.getElementById('printButton').addEventListener('click', function() { window.print(); });
  document.getElementById('selectAllDomains').addEventListener('click', function() { toggleAll('domain'); });
  document.getElementById('selectAllIntegrations').addEventListener('click', function() { toggleAll('integration'); });
  Array.from(document.querySelectorAll('.tab')).forEach(function(tab) {
    tab.addEventListener('click', function() {
      setActiveTab(tab.dataset.tab);
      const surface = tab.dataset.surface || 'studio';
      if (surface === 'planner') state.appMode = 'planner';
      if (surface === 'studio') state.appMode = 'studio';
      applyAppMode(state.appMode, false);
      if (history.replaceState) history.replaceState(null, '', '#' + state.tab);
      renderOutput();
    });
  });
}

function applyAuthoringPreset() {
  const preset = AUTHORING_PRESETS[authoringPresetSelect.value];
  if (!preset) return;
  publishStandardSelect.value = preset.standard;
  passingScoreSelect.value = preset.score;
  completionRuleSelect.value = preset.completion;
  navigationModeSelect.value = preset.navigation;
  attemptLimitSelect.value = preset.attempts;
  shuffleAnswersInput.checked = authoringPresetSelect.value !== 'classroom';
  showFeedbackInput.checked = true;
  responsivePlayerInput.checked = true;
  generatePlan();
  showToast('Đã áp dụng preset: ' + preset.label + '.');
}

function applyAppMode(mode, shouldRender) {
  state.appMode = mode === 'planner' ? 'planner' : 'studio';
  document.body.classList.toggle('mode-planner', state.appMode === 'planner');
  document.body.classList.toggle('mode-studio', state.appMode === 'studio');
  modeButtons.forEach(function(button) {
    button.classList.toggle('is-active', button.dataset.appMode === state.appMode);
  });
  const activeButton = document.querySelector('.tab.is-active');
  const activeSurface = activeButton ? activeButton.dataset.surface : '';
  if (state.appMode === 'studio' && activeSurface === 'planner') setActiveTab('studio');
  if (state.appMode === 'planner' && activeSurface === 'studio') setActiveTab('plan');
  if (history.replaceState) history.replaceState(null, '', '#' + state.tab);
  if (shouldRender) renderOutput();
}

function setActiveTab(tabName) {
  state.tab = tabName;
  Array.from(document.querySelectorAll('.tab')).forEach(function(item) {
    item.classList.toggle('is-active', item.dataset.tab === tabName);
  });
}

function checkedValues(name) {
  return Array.from(document.querySelectorAll('input[name="' + name + '"]:checked')).map(function(input) { return input.value; });
}

function currentDepth() {
  const selected = document.querySelector('input[name="depth"]:checked');
  return selected ? selected.value : 'Lồng ghép';
}

function generatePlan() {
  const levelKey = levelSelect.value;
  const selectedDomains = checkedValues('domain');
  const selectedIntegrations = checkedValues('integration');
  const domains = TT02.domains.filter(function(domain) { return selectedDomains.indexOf(domain.id) >= 0; });
  const integrations = selectedIntegrations.map(function(key) {
    const source = INTEGRATIONS[key];
    return { key: key, label: source.label, color: source.color, short: source.short, data: source.byLevel[levelKey] };
  });
  state.plan = {
    levelKey: levelKey,
    level: LEVELS[levelKey],
    grade: gradeSelect.value,
    subject: subjectSelect.value,
    topic: topicInput.value.trim() || 'Chủ đề bài học',
    duration: durationSelect.value,
    product: productSelect.value,
    learnerNeeds: learnerNeedsInput.value.trim(),
    depth: currentDepth(),
    lessonMode: lessonModeSelect.value,
    slideCount: Number(slideCountSelect.value) || 7,
    narrationStyle: narrationStyleSelect.value,
    includeQuiz: includeQuizInput.checked,
    includeTranscript: includeTranscriptInput.checked,
    interactionConfig: getInteractionConfig(),
    domains: domains,
    integrations: integrations
  };
  syncLessonWithPlan();
  updateSummary();
  renderOutput();
}

function buildLessonSignature(plan) {
  return [
    plan.levelKey,
    plan.grade,
    plan.subject,
    plan.topic,
    plan.duration,
    plan.product,
    plan.depth,
    plan.lessonMode,
    plan.slideCount,
    plan.narrationStyle,
    plan.includeQuiz ? 'quiz' : 'noquiz',
    plan.includeTranscript ? 'script' : 'noscript',
    plan.interactionConfig.preset,
    plan.interactionConfig.standard,
    plan.interactionConfig.passingScore,
    plan.interactionConfig.completionRule,
    plan.interactionConfig.navigationMode,
    plan.interactionConfig.attemptLimit,
    plan.interactionConfig.shuffleAnswers ? 'shuffle' : 'ordered',
    plan.interactionConfig.showFeedback ? 'feedback' : 'silent',
    plan.interactionConfig.responsivePlayer ? 'responsive' : 'fixed',
    plan.domains.map(function(item) { return item.id; }).join(','),
    plan.integrations.map(function(item) { return item.key; }).join(',')
  ].join('|');
}

function getInteractionConfig() {
  const preset = AUTHORING_PRESETS[authoringPresetSelect.value] || AUTHORING_PRESETS.activepresenter;
  return {
    preset: authoringPresetSelect.value,
    presetLabel: preset.label,
    fit: preset.fit,
    standard: publishStandardSelect.value,
    passingScore: Number(passingScoreSelect.value) || 70,
    completionRule: completionRuleSelect.value,
    navigationMode: navigationModeSelect.value,
    attemptLimit: attemptLimitSelect.value,
    shuffleAnswers: shuffleAnswersInput.checked,
    showFeedback: showFeedbackInput.checked,
    responsivePlayer: responsivePlayerInput.checked,
    feedbackMode: preset.feedback,
    equivalent: preset.equivalent
  };
}

function syncLessonWithPlan() {
  const signature = buildLessonSignature(state.plan);
  if (state.lesson && state.lessonSignature === signature) return;
  state.lesson = createLessonFromPlan(state.plan);
  state.lessonSignature = signature;
  state.selectedScene = 0;
  state.previewIndex = 0;
  state.previewAnswer = null;
}

function createLessonFromPlan(plan) {
  const baseScenes = [
    {
      type: 'cover',
      title: plan.topic,
      layout: 'Tiêu đề lớn + ảnh/biểu tượng chủ đề',
      content: 'Giới thiệu vấn đề học tập, sản phẩm cần hoàn thành và lý do bài học có ý nghĩa với đời sống.',
      narration: narrationLine('Mở đầu bài học về "' + plan.topic + '" theo cách gần gũi, đặt một câu hỏi khơi gợi.', plan),
      visual: 'Ảnh minh họa địa phương, biểu tượng môn học hoặc ảnh sản phẩm mẫu',
      duration: 45
    },
    {
      type: 'objective',
      title: 'Mục tiêu học tập',
      layout: 'Danh sách mục tiêu + nhãn năng lực',
      content: 'Học sinh nắm nhiệm vụ chính, biết tiêu chí sản phẩm và hiểu các năng lực số sẽ được rèn luyện.',
      narration: narrationLine('Nêu rõ học sinh sẽ làm gì, tạo ra sản phẩm gì và cần chú ý điều gì khi học trên môi trường số.', plan),
      visual: 'Bảng mục tiêu, nhãn NLS, biểu tượng kiểm chứng nguồn',
      duration: 50
    },
    {
      type: 'content',
      title: 'Khám phá kiến thức nền',
      layout: 'Văn bản ngắn + hình minh họa + ghi chú nguồn',
      content: contentFocus(plan),
      narration: narrationLine('Dẫn học sinh quan sát học liệu, đánh dấu thông tin quan trọng và liên hệ với môn ' + plan.subject + '.', plan),
      visual: 'Tư liệu, bản đồ, ảnh, bảng số liệu hoặc trích đoạn ngắn',
      duration: 80
    },
    {
      type: 'activity',
      title: 'Hoạt động tương tác',
      layout: 'Nhiệm vụ nhóm + ô nhập ý tưởng',
      content: activityFocus(plan),
      narration: narrationLine('Giao nhiệm vụ theo từng bước, nhắc học sinh phân vai, ghi nguồn và hỗ trợ bạn cần điều chỉnh.', plan),
      visual: 'Phiếu nhiệm vụ, bảng phân vai, checklist sản phẩm',
      duration: 95
    },
    {
      type: 'quiz',
      title: 'Kiểm tra nhanh',
      layout: 'Câu hỏi trắc nghiệm + phản hồi',
      content: 'Chọn nhận định phù hợp nhất với yêu cầu của bài học.',
      narration: narrationLine('Mời học sinh tự kiểm tra trước khi chuyển sang phần thực hành.', plan),
      visual: 'Thẻ câu hỏi, trạng thái đúng/sai, phản hồi ngắn',
      duration: 55,
      question: buildQuestion(plan)
    },
    {
      type: 'practice',
      title: 'Tạo sản phẩm học tập',
      layout: 'Quy trình 3 bước + tiêu chí',
      content: 'Học sinh tạo bản nháp ' + plan.product.toLowerCase() + ', nhận phản hồi và cải tiến để đạt tiêu chí.',
      narration: narrationLine('Hướng dẫn học sinh tạo sản phẩm, soát nguồn, chỉnh thông điệp và chuẩn bị chia sẻ.', plan),
      visual: 'Mẫu sản phẩm, thanh tiến độ, tiêu chí rubric',
      duration: 110
    },
    {
      type: 'summary',
      title: 'Tổng kết và giao nhiệm vụ',
      layout: 'Ba điều đã học + nhiệm vụ sau bài',
      content: 'Tổng hợp kiến thức, năng lực số đã rèn luyện, minh chứng cần nộp và câu hỏi tự đánh giá.',
      narration: narrationLine('Khép lại bài học bằng một hành động cụ thể và lời nhắc sử dụng công nghệ có trách nhiệm.', plan),
      visual: 'Checklist nộp bài, câu hỏi phản tư, huy hiệu hoàn thành',
      duration: 45
    }
  ];
  let scenes = baseScenes.filter(function(scene) { return plan.includeQuiz || scene.type !== 'quiz'; });
  while (scenes.length < plan.slideCount) {
    const index = scenes.length + 1;
    scenes.splice(Math.max(3, scenes.length - 1), 0, {
      type: index % 2 === 0 ? 'activity' : 'content',
      title: 'Cảnh mở rộng ' + index,
      layout: 'Nội dung ngắn + câu hỏi dẫn dắt',
      content: 'Bổ sung một ví dụ, tình huống hoặc học liệu để học sinh luyện tập sâu hơn với chủ đề "' + plan.topic + '".',
      narration: narrationLine('Kết nối ví dụ mở rộng với nhiệm vụ chính của bài học.', plan),
      visual: 'Ảnh/tư liệu bổ sung, nhãn nguồn, ghi chú ngắn',
      duration: 70
    });
  }
  scenes = scenes.slice(0, plan.slideCount).map(function(scene, index) {
    return Object.assign({ id: 'scene-' + (index + 1) }, scene);
  });
  return {
    title: plan.topic,
    mode: plan.lessonMode,
    style: plan.narrationStyle,
    includeTranscript: plan.includeTranscript,
    interactionConfig: plan.interactionConfig,
    scenes: scenes
  };
}

function narrationLine(text, plan) {
  const prefix = {
    'Ngắn gọn': 'Nói ngắn:',
    'Thân thiện': 'Lời dẫn thân thiện:',
    'Gợi mở': 'Câu hỏi gợi mở:',
    'Trang trọng': 'Lời dẫn chuẩn mực:'
  }[plan.narrationStyle] || 'Lời dẫn:';
  return prefix + ' ' + text;
}

function contentFocus(plan) {
  const nls = plan.domains[0] ? plan.domains[0].competencies[0].action : 'khai thác học liệu số có chọn lọc';
  const integration = plan.integrations[0] ? plan.integrations[0].data[0] : 'liên hệ nội dung bài học với đời sống';
  return integration + ' Học sinh luyện ' + nls + '.';
}

function activityFocus(plan) {
  const integration = plan.integrations[0] ? plan.integrations[0].data[1] : 'Hoàn thành nhiệm vụ theo nhóm với vai trò rõ ràng.';
  return integration + ' Sản phẩm đích: ' + plan.product + '.';
}

function buildQuestion(plan) {
  const domain = plan.domains[0];
  const right = domain ? 'Ghi nguồn, kiểm chứng thông tin và giải thích lựa chọn trước khi đưa vào sản phẩm.' : 'Nêu nguồn học liệu và giải thích lựa chọn của nhóm.';
  return {
    kind: 'single',
    typeLabel: 'Nhiều lựa chọn',
    prompt: 'Khi tạo ' + plan.product.toLowerCase() + ' cho chủ đề này, thao tác nào giúp bài làm đáng tin cậy hơn?',
    choices: [
      'Chọn hình ảnh đẹp nhất mà không cần ghi nguồn.',
      right,
      'Sao chép toàn bộ nội dung tìm được để tiết kiệm thời gian.',
      'Chỉ trình bày ý kiến cá nhân, không cần minh chứng.'
    ],
    answer: 1,
    feedback: 'Đúng. Sản phẩm e-learning cần có nguồn rõ ràng, thông tin được kiểm chứng và giải thích phù hợp với mục tiêu học tập.'
  };
}

function createQuestionByKind(kind) {
  const meta = QUESTION_TYPES[kind] || QUESTION_TYPES.single;
  const base = {
    kind: kind,
    typeLabel: meta.label,
    prompt: 'Nhập câu hỏi ' + meta.label.toLowerCase() + ' tại đây.',
    choices: ['Phương án A', 'Phương án B', 'Phương án C', 'Phương án D'],
    answer: 0,
    answers: [0],
    accepted: 'Từ khóa đúng',
    blanks: ['Từ khóa 1', 'Từ khóa 2'],
    sequence: ['Bước 1', 'Bước 2', 'Bước 3'],
    pairs: ['Khái niệm A -> Mô tả A', 'Khái niệm B -> Mô tả B'],
    ratingMax: 5,
    feedback: 'Đúng. Hãy tiếp tục với nhiệm vụ tiếp theo.',
    points: 1
  };
  if (kind === 'truefalse') {
    base.prompt = 'Phát biểu sau là đúng hay sai?';
    base.choices = ['Đúng', 'Sai'];
    base.answer = 0;
  }
  if (kind === 'multiple') {
    base.prompt = 'Chọn tất cả đáp án đúng.';
    base.answers = [0, 2];
  }
  if (kind === 'fill') {
    base.prompt = 'Điền từ còn thiếu vào chỗ trống.';
    base.accepted = 'đáp án';
  }
  if (kind === 'multiblank' || kind === 'paragraph') {
    base.prompt = 'Hoàn thành các chỗ trống trong đoạn văn.';
  }
  if (kind === 'essay') {
    base.prompt = 'Viết câu trả lời tự luận ngắn.';
    base.accepted = 'Giáo viên chấm theo rubric.';
  }
  if (kind === 'sequence') {
    base.prompt = 'Sắp xếp các bước theo đúng thứ tự.';
  }
  if (kind === 'dragdrop') {
    base.prompt = 'Kéo thả thẻ vào nhóm phù hợp.';
  }
  if (kind === 'hotspot') {
    base.prompt = 'Bấm vào vùng đúng trên hình/slide.';
  }
  if (kind === 'dropdown' || kind === 'multidropdown') {
    base.prompt = 'Chọn đáp án đúng từ danh sách thả xuống.';
  }
  if (kind === 'drawing') {
    base.prompt = 'Tô vẽ hoặc đánh dấu theo yêu cầu.';
  }
  if (kind === 'rating') {
    base.prompt = 'Đánh giá mức độ đồng ý/tự tin của em.';
  }
  return base;
}

function updateSummary() {
  const plan = state.plan;
  document.getElementById('pageTitle').textContent = plan.topic;
  document.getElementById('pageSubtitle').textContent = plan.level.label + ' - ' + plan.grade + ' - ' + plan.subject + ' - ' + plan.duration;
  document.getElementById('metricBand').textContent = plan.level.band;
  document.getElementById('metricDomains').textContent = plan.domains.length + '/6 miền';
  document.getElementById('metricIntegrations').textContent = plan.integrations.length ? plan.integrations.map(function(item) { return item.label; }).join(', ') : 'Chưa chọn';
  document.getElementById('metricProduct').textContent = plan.product + ' - ' + plan.depth;
}

function renderOutput() {
  if (!state.plan) {
    output.innerHTML = '<section class="empty-state"><h2>Sẵn sàng thiết kế</h2><p>Chọn cấu hình ở bên trái để tạo kế hoạch.</p></section>';
    return;
  }
  const views = {
    studio: renderStudio,
    timeline: renderTimeline,
    preview: renderPreview,
    config: renderConfig,
    guide: renderGuide,
    matrix: renderMatrix,
    plan: renderPlan,
    activities: renderActivities,
    assessment: renderAssessment,
    ai: renderAi,
    framework: renderFramework,
    library: renderLibrary,
    skills: renderSkills
  };
  output.innerHTML = views[state.tab]();
  bindOutputEvents();
}

function currentScene() {
  if (!state.lesson || !state.lesson.scenes.length) return null;
  state.selectedScene = Math.max(0, Math.min(state.selectedScene, state.lesson.scenes.length - 1));
  return state.lesson.scenes[state.selectedScene];
}

function sceneTypeLabel(type) {
  const labels = {
    cover: 'Mở đầu',
    objective: 'Mục tiêu',
    content: 'Nội dung',
    activity: 'Tương tác',
    quiz: 'Quiz',
    practice: 'Thực hành',
    summary: 'Tổng kết'
  };
  return labels[type] || 'Cảnh';
}

const INTERACTION_OBJECTS = {
  button: {
    label: 'Nút bấm',
    icon: 'BTN',
    text: 'Tiếp tục',
    action: 'Chuyển sang slide tiếp theo',
    hint: 'Dùng cho lệnh điều hướng hoặc mở phản hồi.'
  },
  hotspot: {
    label: 'Khu vực thả',
    icon: 'DROP',
    text: 'Kéo thẻ vào đây',
    action: 'Chấp nhận thao tác kéo thả',
    hint: 'Dùng cho câu hỏi kéo thả hoặc phân loại.'
  },
  typing: {
    label: 'Nhập chữ',
    icon: 'ABC',
    text: 'Câu trả lời ngắn',
    action: 'Ghi nhận phản hồi tự luận ngắn',
    hint: 'Dùng khi học sinh cần nhập ý kiến.'
  },
  checkbox: {
    label: 'Ô đánh dấu',
    icon: 'CHK',
    text: 'Tôi đã hoàn thành nhiệm vụ',
    action: 'Bật/tắt trạng thái hoàn thành',
    hint: 'Dùng cho checklist hoặc cam kết hành động.'
  },
  radio: {
    label: 'Nút radio',
    icon: 'RAD',
    text: 'Chọn một phương án',
    action: 'Ghi nhận lựa chọn đơn',
    hint: 'Dùng cho lựa chọn một đáp án.'
  },
  slider: {
    label: 'Thanh trượt',
    icon: 'SLD',
    text: 'Mức độ tự tin',
    action: 'Ghi nhận giá trị 1-5',
    hint: 'Dùng cho tự đánh giá hoặc khảo sát nhanh.'
  },
  image: {
    label: 'Khung ảnh',
    icon: 'IMG',
    text: 'Hình ảnh minh họa',
    action: 'Giữ vị trí cho ảnh/tư liệu',
    hint: 'Dùng để đánh dấu nơi cần thêm hình.'
  },
  audio: {
    label: 'Âm thanh',
    icon: 'AUD',
    text: 'Lời đọc / nhạc nền',
    action: 'Phát âm thanh',
    hint: 'Dùng để ghi chú audio cần thêm.'
  },
  video: {
    label: 'Video',
    icon: 'VID',
    text: 'Video minh họa',
    action: 'Phát video',
    hint: 'Dùng để ghi chú video cần nhúng.'
  },
  web: {
    label: 'Đối tượng Web',
    icon: 'WEB',
    text: 'Nguồn học liệu web',
    action: 'Mở liên kết học liệu',
    hint: 'Dùng cho iframe/link học liệu.'
  },
  container: {
    label: 'Khung chứa',
    icon: 'BOX',
    text: 'Nhóm nội dung / vùng bố cục',
    action: 'Tạo vùng chứa cho nhiều đối tượng',
    hint: 'Dùng để gom nội dung, nút hoặc câu hỏi trong cùng một vùng.'
  },
  shape: {
    label: 'Hình dạng',
    icon: 'SHP',
    text: 'Hình chữ nhật / tròn / mũi tên',
    action: 'Thêm hình trang trí hoặc nhấn mạnh',
    hint: 'Dùng để tạo nền, nhãn, mũi tên hoặc khối thông tin.'
  },
  text: {
    label: 'Chú thích văn bản',
    icon: 'TXT',
    text: 'Nhập nội dung chú thích',
    action: 'Hiển thị văn bản trên slide',
    hint: 'Dùng cho tiêu đề phụ, ghi chú, chỉ dẫn hoặc nhãn.'
  },
  spotlight: {
    label: 'Vùng sáng',
    icon: 'LIT',
    text: 'Làm nổi bật vùng cần chú ý',
    action: 'Nhấn mạnh một vùng trên slide',
    hint: 'Dùng để hướng mắt người học vào nội dung quan trọng.'
  },
  equation: {
    label: 'Phương trình',
    icon: 'EQ',
    text: 'a² + b² = c²',
    action: 'Hiển thị công thức hoặc ký hiệu',
    hint: 'Dùng cho Toán, Khoa học tự nhiên hoặc công thức ngắn.'
  },
  icon: {
    label: 'Biểu tượng',
    icon: 'ICO',
    text: 'Biểu tượng minh họa',
    action: 'Thêm ký hiệu trực quan',
    hint: 'Dùng để làm rõ ý, trạng thái hoặc nhóm nội dung.'
  },
  cursor: {
    label: 'Hiệu ứng cử chỉ',
    icon: 'CUR',
    text: 'Nhấp / kéo / chạm',
    action: 'Mô phỏng thao tác con trỏ',
    hint: 'Dùng cho bài hướng dẫn thao tác phần mềm.'
  },
  separator: {
    label: 'Chân trang',
    icon: 'SEP',
    text: 'Đường phân cách / chân trang',
    action: 'Thêm đường phân cách bố cục',
    hint: 'Dùng để chia vùng nội dung hoặc đặt thông tin cuối slide.'
  },
  chart: {
    label: 'Biểu đồ',
    icon: 'BAR',
    text: 'Biểu đồ cột / đường / tròn',
    action: 'Giữ chỗ cho biểu đồ dữ liệu',
    hint: 'Dùng khi cần trình bày số liệu hoặc so sánh.'
  },
  table: {
    label: 'Bảng',
    icon: 'TBL',
    text: 'Bảng thông tin',
    action: 'Tạo khung bảng dữ liệu',
    hint: 'Dùng để so sánh, phân loại hoặc ghi kết quả học tập.'
  },
  screenshot: {
    label: 'Chụp màn hình',
    icon: 'CAP',
    text: 'Ảnh chụp thao tác',
    action: 'Giữ chỗ cho ảnh chụp màn hình',
    hint: 'Dùng khi biên soạn bài hướng dẫn thao tác máy tính.'
  },
  youtube: {
    label: 'YouTube',
    icon: 'YTB',
    text: 'Video YouTube',
    action: 'Nhúng video YouTube',
    hint: 'Dùng để đặt link video học liệu từ YouTube.'
  },
  model3d: {
    label: 'Mô hình 3D',
    icon: '3D',
    text: 'Đối tượng 3D',
    action: 'Giữ chỗ cho mô hình 3D',
    hint: 'Dùng cho vật thể, mô hình khoa học hoặc không gian.'
  },
  mouse: {
    label: 'Nhập chuột',
    icon: 'MOU',
    text: 'Bấm vào vùng yêu cầu',
    action: 'Ghi nhận thao tác chuột',
    hint: 'Dùng cho mô phỏng thao tác hoặc bài luyện click.'
  },
  keyboard: {
    label: 'Gõ phím',
    icon: 'KEY',
    text: 'Nhấn phím theo yêu cầu',
    action: 'Ghi nhận thao tác bàn phím',
    hint: 'Dùng cho bài hướng dẫn phím tắt hoặc nhập liệu.'
  },
  droparea: {
    label: 'Khu vực thả',
    icon: 'DND',
    text: 'Thả thẻ trả lời vào đây',
    action: 'Ghi nhận thao tác kéo thả',
    hint: 'Dùng cho phân loại, nối cặp hoặc sắp xếp.'
  },
  draw: {
    label: 'Tô vẽ theo mẫu',
    icon: 'DRW',
    text: 'Vẽ / đánh dấu theo yêu cầu',
    action: 'Ghi nhận thao tác vẽ',
    hint: 'Dùng cho khoanh vùng, nối điểm hoặc ghi chú trực tiếp.'
  },
  dropdown: {
    label: 'Danh sách thả xuống',
    icon: 'DDL',
    text: 'Chọn một mục từ danh sách',
    action: 'Ghi nhận lựa chọn từ menu',
    hint: 'Dùng cho câu hỏi chọn đáp án gọn trên slide.'
  },
  timer: {
    label: 'Bộ đếm thời gian',
    icon: 'TIM',
    text: '00:30',
    action: 'Đếm thời gian làm nhiệm vụ',
    hint: 'Dùng cho câu hỏi nhanh, trò chơi hoặc luyện tập giới hạn thời gian.'
  },
  path: {
    label: 'Đường đi con trỏ chuột',
    icon: 'PTH',
    text: 'Đường di chuyển thao tác',
    action: 'Mô phỏng đường đi của chuột',
    hint: 'Dùng cho bài hướng dẫn thao tác phần mềm từng bước.'
  },
  zoompan: {
    label: 'Zoom-n-Pan',
    icon: 'ZP',
    text: 'Phóng to vùng nội dung',
    action: 'Phóng to và di chuyển khung nhìn',
    hint: 'Dùng khi cần tập trung vào chi tiết nhỏ trên slide.'
  },
  caption: {
    label: 'Phụ đề',
    icon: 'CC',
    text: 'Phụ đề / transcript ngắn',
    action: 'Hiển thị phụ đề cho lời dẫn',
    hint: 'Dùng để tăng khả năng tiếp cận và hỗ trợ người học đọc lại.'
  }
};

function ensureSceneObjects(scene) {
  if (!scene) return [];
  if (!Array.isArray(scene.objects)) scene.objects = [];
  return scene.objects;
}

function renderObjectRibbonGroup(label, groupKey, types) {
  return '<div class="ribbon-group" data-ribbon-group="' + groupKey + '"><span>' + label + '</span>' +
    types.map(function(type) { return renderObjectRibbonButton(type); }).join('') +
  '</div>';
}

function renderObjectRibbonButton(type) {
  const meta = INTERACTION_OBJECTS[type] || INTERACTION_OBJECTS.button;
  return '<button class="ribbon-tool" type="button" data-insert-object="' + type + '"><strong>' + esc(meta.icon) + '</strong><small>' + esc(meta.label) + '</small></button>';
}

const QUESTION_TYPES = {
  truefalse: { label: 'Đúng/Sai', icon: 'T/F', group: 'Câu hỏi phổ biến' },
  single: { label: 'Nhiều lựa chọn', icon: '1', group: 'Câu hỏi phổ biến' },
  multiple: { label: 'Nhiều đáp án', icon: 'M', group: 'Câu hỏi phổ biến' },
  fill: { label: 'Điền vào chỗ trống', icon: '___', group: 'Câu hỏi phổ biến' },
  multiblank: { label: 'Điền vào nhiều chỗ trống', icon: 'TXT', group: 'Câu hỏi phổ biến' },
  paragraph: { label: 'Điền vào đoạn văn', icon: 'P', group: 'Câu hỏi phổ biến' },
  essay: { label: 'Bài luận', icon: 'A', group: 'Câu hỏi phổ biến' },
  sequence: { label: 'Tuần tự', icon: '1-3', group: 'Câu hỏi nâng cao' },
  dragdrop: { label: 'Kéo-Thả', icon: 'DND', group: 'Câu hỏi nâng cao' },
  hotspot: { label: 'Điểm ảnh', icon: 'PIN', group: 'Câu hỏi nâng cao' },
  dropdown: { label: 'Lựa chọn từ danh sách thả xuống', icon: 'DDL', group: 'Câu hỏi nâng cao' },
  multidropdown: { label: 'Lựa chọn từ nhiều danh sách thả xuống', icon: 'MDD', group: 'Câu hỏi nâng cao' },
  drawing: { label: 'Tô vẽ theo mẫu', icon: 'DRW', group: 'Câu hỏi nâng cao' },
  rating: { label: 'Đánh giá', icon: '★', group: 'Câu hỏi nâng cao' },
  bank: { label: 'Từ tập tin', icon: 'QBK', group: 'Slide đặc biệt' },
  random: { label: 'Slide ngẫu nhiên', icon: 'RND', group: 'Slide đặc biệt' },
  report: { label: 'Slide báo cáo', icon: 'RPT', group: 'Slide đặc biệt' },
  settings: { label: 'Cài đặt câu hỏi', icon: 'CFG', group: 'Cài đặt & Sự kiện' },
  submit: { label: 'Sự kiện', icon: 'EVT', group: 'Cài đặt & Sự kiện' },
  action: { label: 'Hành động nâng cao', icon: 'ACT', group: 'Cài đặt & Sự kiện' },
  info: { label: 'Thông báo', icon: 'INF', group: 'Cài đặt & Sự kiện' },
  prev: { label: 'Slide câu hỏi trước', icon: '◀', group: 'Điều hướng' },
  next: { label: 'Slide câu hỏi tiếp theo', icon: '▶', group: 'Điều hướng' }
};

const DESIGN_THEMES = {
  clean: { label: 'Sáng tối giản', accent: '#255c99', bg: '#ffffff', ink: '#17212f', panel: '#f5f8fb', font: 'Arial, Helvetica, sans-serif' },
  teacher: { label: 'Lớp học', accent: '#0f766e', bg: '#f7fbf8', ink: '#18312d', panel: '#e7f4f1', font: 'Arial, Helvetica, sans-serif' },
  science: { label: 'Khoa học', accent: '#287855', bg: '#f4fbf6', ink: '#193325', panel: '#e8f6ee', font: 'Georgia, serif' },
  creative: { label: 'Sáng tạo', accent: '#946200', bg: '#fff9ed', ink: '#352713', panel: '#fff1cf', font: 'Trebuchet MS, Arial, sans-serif' },
  dark: { label: 'Tối hiện đại', accent: '#5db7ff', bg: '#101827', ink: '#f7fbff', panel: '#17243a', font: 'Arial, Helvetica, sans-serif' },
  violet: { label: 'AI tím', accent: '#6650a4', bg: '#f7f4ff', ink: '#241d3a', panel: '#eee8ff', font: 'Arial, Helvetica, sans-serif' }
};

const DESIGN_FONTS = {
  sans: { label: 'Sans', font: 'Arial, Helvetica, sans-serif' },
  serif: { label: 'Serif', font: 'Georgia, Times New Roman, serif' },
  rounded: { label: 'Rounded', font: 'Trebuchet MS, Arial, sans-serif' },
  mono: { label: 'Mono', font: 'Consolas, monospace' }
};

const DESIGN_BACKGROUNDS = {
  plain: { label: 'Trơn', panel: '#f5f8fb' },
  soft: { label: 'Mềm', panel: '#e7f4f1' },
  warm: { label: 'Ấm', panel: '#fff1cf' },
  grid: { label: 'Lưới', panel: '#edf3f8' },
  dark: { label: 'Tối', panel: '#17243a' }
};

const SLIDE_SIZES = {
  wide: { label: '16:9', ratio: '16 / 9' },
  standard: { label: '4:3', ratio: '4 / 3' },
  vertical: { label: '9:16', ratio: '9 / 16' },
  square: { label: '1:1', ratio: '1 / 1' }
};

const TRANSITION_EFFECTS = {
  none: { label: 'Không có', icon: 'NONE', effect: 'None' },
  cut: { label: 'Cắt', icon: 'CUT', effect: 'Cut' },
  fade: { label: 'Mờ dần', icon: 'FADE', effect: 'Fade' },
  push: { label: 'Đẩy vào', icon: 'PUSH', effect: 'Push' },
  wipe: { label: 'Quét', icon: 'WIPE', effect: 'Wipe' },
  cover: { label: 'Che phủ', icon: 'COV', effect: 'Cover' },
  uncover: { label: 'Mở ra', icon: 'OPEN', effect: 'Uncover' },
  reveal: { label: 'Lộ ra', icon: 'REV', effect: 'Reveal' },
  split: { label: 'Phân chia', icon: 'SPL', effect: 'Split' },
  bars: { label: 'Thanh ngẫu nhiên', icon: 'BAR', effect: 'Random Bars' }
};

const TRANSITION_DIRECTIONS = {
  auto: 'Tự động',
  left: 'Từ trái',
  right: 'Từ phải',
  up: 'Từ dưới lên',
  down: 'Từ trên xuống',
  center: 'Từ giữa'
};

const AI_TOOLS = {
  image: { label: 'Tạo hình ảnh', icon: 'IMG', group: 'Công cụ AI', hint: 'Tạo gợi ý hình ảnh minh họa cho slide hiện tại.' },
  editImage: { label: 'Chỉnh sửa hình ảnh', icon: 'FIX', group: 'Công cụ AI', hint: 'Gợi ý chỉnh hình ảnh, bố cục và mô tả thay thế.' },
  voice: { label: 'Giọng nói đám mây', icon: 'VO', group: 'Công cụ AI', hint: 'Tạo kịch bản giọng đọc từ lời dẫn.' },
  caption: { label: 'Tạo phụ đề tự động', icon: 'CC', group: 'Công cụ AI', hint: 'Thêm phụ đề/tóm tắt lời dẫn vào slide.' },
  quiz: { label: 'Viết bằng AI', icon: '?', group: 'Công cụ AI', hint: 'Tạo câu hỏi kiểm tra nhanh từ nội dung slide.' },
  autoLesson: { label: 'Dịch bài giảng tự động', icon: 'TR', group: 'Công cụ AI', hint: 'Tạo bản dịch nháp tiếng Anh cho slide.' },
  translateText: { label: 'Dịch văn bản', icon: 'TXT', group: 'Công cụ AI', hint: 'Dịch nhanh tiêu đề và nội dung slide.' },
  service: { label: 'Nhà cung cấp dịch vụ', icon: 'AI', group: 'Tài khoản', hint: 'Kiểm tra trạng thái kết nối AI nội bộ.' },
  usage: { label: 'Thống kê sử dụng', icon: 'USE', group: 'Tài khoản', hint: 'Xem số slide, câu hỏi và đối tượng đang có.' },
  credit: { label: 'Credit', icon: '0', group: 'Tài khoản', hint: 'Bản local dùng AI mô phỏng, không trừ credit.' },
  assistant: { label: 'Trợ lý AI', icon: '✦', group: 'Trợ lý AI', hint: 'Mở khung trò chuyện về bài giảng.' },
  mcp: { label: 'Kết nối MCP', icon: 'MCP', group: 'Trợ lý AI', hint: 'Gợi ý cách kết nối dịch vụ AI ngoài sau này.' }
};

const GEMINI_MODELS = [
  { value: 'gemini-3.5-flash', label: 'Gemini 3.5 Flash' },
  { value: 'gemini-3.1-flash-lite', label: 'Gemini 3.1 Flash-Lite' },
  { value: 'gemini-3.1-pro-preview', label: 'Gemini 3.1 Pro Preview' },
  { value: 'gemini-2.5-flash', label: 'Gemini 2.5 Flash' }
];

function renderQuestionRibbonGroup(label, groupKey, types) {
  return '<div class="ribbon-group question-ribbon-group" data-ribbon-group="' + groupKey + '"><span>' + label + '</span>' +
    types.map(function(type) { return renderQuestionRibbonButton(type); }).join('') +
  '</div>';
}

function renderQuestionRibbonButton(type) {
  const meta = QUESTION_TYPES[type] || QUESTION_TYPES.single;
  return '<button class="ribbon-tool" type="button" data-insert-question="' + type + '"><strong>' + esc(meta.icon) + '</strong><small>' + esc(meta.label) + '</small></button>';
}

function defaultDesign() {
  return Object.assign({ theme: 'clean', fontKey: 'sans', backgroundKey: 'plain', slideSize: 'wide' }, DESIGN_THEMES.clean);
}

function currentDesign() {
  if (!state.lesson) return defaultDesign();
  if (!state.lesson.design) state.lesson.design = defaultDesign();
  return state.lesson.design;
}

function renderDesignThemeGroup() {
  return '<div class="ribbon-group design-theme-group" data-ribbon-group="design-themes"><span>Chủ đề</span>' +
    Object.keys(DESIGN_THEMES).map(function(key) {
      const theme = DESIGN_THEMES[key];
      return '<button class="theme-tile" type="button" data-apply-design="' + key + '" style="--tile-accent:' + esc(theme.accent) + ';--tile-bg:' + esc(theme.bg) + ';--tile-panel:' + esc(theme.panel) + '"><strong>Aa</strong><small>' + esc(theme.label) + '</small></button>';
    }).join('') +
  '</div>';
}

function renderDesignOptionGroup(label, groupKey, attr, options) {
  return '<div class="ribbon-group" data-ribbon-group="' + groupKey + '"><span>' + label + '</span>' +
    Object.keys(options).map(function(key) {
      const item = options[key];
      return '<button class="ribbon-tool" type="button" data-design-' + attr + '="' + key + '"><strong>' + esc(item.label.split(' ')[0]) + '</strong><small>' + esc(item.label) + '</small></button>';
    }).join('') +
  '</div>';
}

function renderTransitionRibbonGroup() {
  const scene = currentScene() || {};
  const currentKey = scene.transitionKey || transitionKeyFromEffect(scene.transition || 'None');
  return '<div class="ribbon-group transition-effect-group" data-ribbon-group="transition-effects"><span>Chuyển tiếp sang slide này</span>' +
    Object.keys(TRANSITION_EFFECTS).map(function(key) {
      const item = TRANSITION_EFFECTS[key];
      return '<button class="ribbon-tool' + (key === currentKey ? ' is-selected' : '') + '" type="button" data-transition-effect="' + key + '"><strong>' + esc(item.icon) + '</strong><small>' + esc(item.label) + '</small></button>';
    }).join('') +
  '</div>';
}

function renderTransitionTimingGroup() {
  const scene = currentScene() || {};
  const effectDuration = Number(scene.transitionEffectDuration || 0.7);
  const slideDuration = Number(scene.duration || 30);
  const direction = scene.transitionDirection || 'auto';
  const checked = scene.autoAdvance === false ? '' : ' checked';
  return '<div class="ribbon-group transition-timing-group" data-ribbon-group="transition-timing"><span>Đặt thời gian</span>' +
    '<label class="ribbon-field"><small>Tùy chọn hiệu ứng</small><select data-transition-field="transitionDirection">' + transitionDirectionOptions(direction) + '</select></label>' +
    '<label class="ribbon-field"><small>Thời lượng hiệu ứng</small><input data-transition-field="transitionEffectDuration" type="number" min="0" max="10" step="0.1" value="' + esc(effectDuration) + '" /></label>' +
    '<label class="ribbon-field"><small>Thời lượng slide</small><input data-transition-field="duration" type="number" min="5" max="300" step="1" value="' + esc(slideDuration) + '" /></label>' +
    '<label class="ribbon-check"><input data-transition-field="autoAdvance" type="checkbox"' + checked + ' /><span>Tự chuyển slide</span></label>' +
  '</div>';
}

function renderAiRibbonGroup(label, groupKey, tools) {
  return '<div class="ribbon-group ai-ribbon-group" data-ribbon-group="' + groupKey + '"><span>' + label + '</span>' +
    tools.map(function(toolKey) {
      const item = AI_TOOLS[toolKey];
      return '<button class="ribbon-tool" type="button" data-ai-tool="' + toolKey + '" title="' + esc(item.hint) + '"><strong>' + esc(item.icon) + '</strong><small>' + esc(item.label) + '</small></button>';
    }).join('') +
  '</div>';
}

function renderStudio() {
  const lesson = state.lesson;
  const scene = currentScene();
  if (!lesson || !scene) return '<section class="empty-state"><h2>Chưa có kịch bản</h2><p>Hãy tạo kế hoạch để app sinh bài giảng e-learning.</p></section>';
  const isPptxMode = isPptxLesson(lesson);
  const sceneButtons = lesson.scenes.map(function(item, index) {
    if (isPptxMode) return renderSlideThumbnail(item, index);
    return '<button class="scene-chip' + (index === state.selectedScene ? ' is-active' : '') + '" type="button" data-select-scene="' + index + '">' +
      '<span>' + String(index + 1).padStart(2, '0') + '</span><strong>' + esc(item.title) + '</strong><small>' + sceneTypeLabel(item.type) + ' · ' + item.duration + 's</small></button>';
  }).join('');
  return '<section class="studio-board activepresenter-board' + (isPptxMode ? ' pptx-authoring-mode' : '') + '">' +
    (isPptxMode ? renderPptxImportMini(lesson) : renderPptxImportBox()) +
    renderAuthorRibbon(lesson) +
    '<div class="author-workspace">' +
      '<aside class="slides-pane" aria-label="Danh sách slide"><div class="pane-title"><strong>Slide chính</strong><span>' + lesson.scenes.length + '</span></div><div class="scene-list' + (isPptxMode ? ' thumbnail-list' : '') + '">' + sceneButtons + '<button class="add-scene-button" type="button" data-add-scene="1">+ Thêm slide</button></div></aside>' +
      '<main class="canvas-pane">' +
        '<div class="canvas-toolbar"><div><strong>' + (isPptxMode ? 'Màn hình chính từ PPTX' : 'Canvas') + '</strong><span>' + esc(sceneTypeLabel(scene.type)) + ' · ' + esc(scene.duration) + 's</span></div><div class="canvas-tools"><span>16:9</span><span>Fit</span><span>100%</span></div></div>' +
        '<div class="canvas-stage">' + renderSlideCanvas(scene, state.selectedScene, lesson.scenes.length) + '</div>' +
      '</main>' +
      '<aside class="inspector-pane" aria-label="Thuộc tính và tương tác">' + renderSceneInspector(scene, lesson) + (isPptxMode ? renderPptxResourcePanel(scene, lesson) : '') + '</aside>' +
    '</div>' +
    renderAuthorTimeline(lesson) +
    renderAiAssistantPanel() +
  '</section>';
}

function isPptxLesson(lesson) {
  if (!lesson) return false;
  if (lesson.source && lesson.source.type === 'pptx') return true;
  if (String(lesson.mode || '').toLowerCase().indexOf('ppt') >= 0) return true;
  const scenes = Array.isArray(lesson.scenes) ? lesson.scenes : [];
  return scenes.some(function(scene) {
    return String(scene.id || '').indexOf('pptx-') === 0 ||
      String(scene.layout || '').toLowerCase().indexOf('powerpoint') >= 0 ||
      String(scene.visual || '').indexOf('PPTX') >= 0 ||
      (Array.isArray(scene.pptxObjects) && scene.pptxObjects.length) ||
      (Array.isArray(scene.images) && scene.images.length);
  });
}

function renderSlideThumbnail(scene, index) {
  const thumb = Array.isArray(scene.pptxObjects) && scene.pptxObjects.length
    ? renderPptxReplica(scene, 'thumb')
    : '<div class="thumb-fallback"><strong>' + esc(scene.title || ('Slide ' + (index + 1))) + '</strong></div>';
  return '<button class="slide-thumb-card' + (index === state.selectedScene ? ' is-active' : '') + '" type="button" data-select-scene="' + index + '">' +
    '<div class="slide-thumb-preview">' + thumb + '</div>' +
    '<span>' + (index + 1) + '</span>' +
  '</button>';
}

function renderPptxImportMini(lesson) {
  const source = lesson.source || {};
  return '<div class="pptx-mini-bar">' +
    '<strong>Đã nhập PPTX</strong><span>' + esc(source.filename || lesson.title || 'PowerPoint') + '</span><small>' + esc(source.slideCount || lesson.scenes.length) + ' slide</small>' +
    '<button class="utility-button" type="button" data-focus-pptx="1">Nhập file khác</button>' +
  '</div>';
}

function renderPptxImportBox() {
  return '<div class="pptx-import-banner">' +
    '<div><h2>Nhập PowerPoint để tạo bài giảng e-learning</h2><p>Chọn file .pptx, app sẽ đọc chữ trên từng slide và chuyển thành cảnh, lời dẫn, timeline và quiz kiểm tra nhanh.</p></div>' +
    '<div class="pptx-import-controls"><input id="pptxInputMain" type="file" accept=".pptx,application/vnd.openxmlformats-officedocument.presentationml.presentation" />' +
    '<button class="primary-button" type="button" id="importPptxButtonMain">Tạo bài giảng từ PPTX</button><span id="pptxStatusMain" class="mini-status">Chưa chọn file</span></div>' +
  '</div>';
}

function renderAuthorRibbon(lesson) {
  const config = state.plan.interactionConfig;
  const ribbonTabs = [
    ['Tệp', 'file'],
    ['Trang đầu', 'slide'],
    ['Thêm', 'insert'],
    ['Câu hỏi', 'question'],
    ['Thiết kế', 'design'],
    ['Chuyển tiếp', 'transition'],
    ['Hoạt hình', 'animation'],
    ['AI', 'ai'],
    ['Xuất bản', 'publish'],
    ['Khung nhìn', 'view'],
    ['Trợ giúp', 'guide']
  ];
  return '<div class="author-ribbon" aria-label="Thanh công cụ tác giả">' +
    '<div class="ribbon-tabs" role="tablist" aria-label="Nhóm công cụ">' +
      ribbonTabs.map(function(tab) {
        return '<button class="ribbon-tab' + (tab[1] === (state.ribbonTab || 'insert') ? ' is-active' : '') + '" type="button" data-ribbon-tab="' + tab[1] + '">' + tab[0] + '</button>';
      }).join('') +
    '</div>' +
    '<div class="ribbon-tools">' +
      '<div class="ribbon-group primary-import" data-ribbon-group="file"><span>Tệp</span><button class="ribbon-tool" type="button" data-focus-pptx="1"><strong>＋</strong><small>Nhập PPTX</small></button><button class="ribbon-tool" type="button" data-rebuild-lesson="1"><strong>↺</strong><small>Từ kế hoạch</small></button></div>' +
      '<div class="ribbon-group" data-ribbon-group="slide"><span>Slide</span><button class="ribbon-tool" type="button" data-add-scene="1"><strong>□</strong><small>Slide mới</small></button><button class="ribbon-tool" type="button" data-duplicate-scene="1"><strong>⧉</strong><small>Nhân bản</small></button><button class="ribbon-tool" type="button" data-delete-scene="1"><strong>×</strong><small>Xóa</small></button></div>' +
      renderObjectRibbonGroup('Chú thích', 'insert', ['container', 'shape', 'text', 'spotlight', 'equation', 'icon', 'cursor', 'separator']) +
      renderObjectRibbonGroup('Phương tiện', 'media', ['chart', 'table', 'image', 'screenshot', 'audio', 'video', 'youtube', 'web', 'model3d']) +
      renderObjectRibbonGroup('Tương tác', 'interaction', ['mouse', 'keyboard', 'typing', 'droparea', 'draw', 'button', 'checkbox', 'radio', 'slider', 'dropdown', 'timer']) +
      renderQuestionRibbonGroup('Câu hỏi phổ biến', 'question-basic', ['truefalse', 'single', 'multiple', 'fill', 'multiblank', 'paragraph', 'essay']) +
      renderQuestionRibbonGroup('Câu hỏi nâng cao', 'question-advanced', ['sequence', 'dragdrop', 'hotspot', 'dropdown', 'multidropdown', 'drawing', 'rating']) +
      renderQuestionRibbonGroup('Slide đặc biệt', 'question-special', ['bank', 'random', 'report']) +
      renderQuestionRibbonGroup('Cài đặt & Sự kiện', 'question-events', ['settings', 'submit', 'action', 'info']) +
      renderQuestionRibbonGroup('Điều hướng', 'question-nav', ['prev', 'next']) +
      renderDesignThemeGroup() +
      renderDesignOptionGroup('Màu', 'design-colors', 'color', DESIGN_THEMES) +
      renderDesignOptionGroup('Font chữ', 'design-fonts', 'font', DESIGN_FONTS) +
      renderDesignOptionGroup('Kiểu nền', 'design-backgrounds', 'background', DESIGN_BACKGROUNDS) +
      renderDesignOptionGroup('Kích cỡ slide', 'design-sizes', 'size', SLIDE_SIZES) +
      renderTransitionRibbonGroup() +
      renderTransitionTimingGroup() +
      renderObjectRibbonGroup('Khác', 'other', ['path', 'zoompan', 'caption']) +
      renderAiRibbonGroup('Công cụ AI', 'ai-tools', ['image', 'editImage', 'voice', 'caption', 'quiz', 'autoLesson', 'translateText']) +
      renderAiRibbonGroup('Tài khoản', 'ai-account', ['service', 'usage', 'credit']) +
      renderAiRibbonGroup('Trợ lý AI', 'ai-assistant', ['assistant', 'mcp']) +
      '<div class="ribbon-group" data-ribbon-group="publish"><span>Xuất bản</span><button class="ribbon-tool" type="button" data-open-preview="1"><strong>▷</strong><small>Xem thử</small></button><button class="ribbon-tool" type="button" id="ribbonExportButton"><strong>⬇</strong><small>Xuất LMS</small></button></div>' +
      '<div class="ribbon-status"><span>' + esc(config.standard) + '</span><strong>' + totalLessonTime(lesson) + '</strong></div>' +
    '</div>' +
    '<div class="trial-bar"><span>Studio tương tác độc lập</span><strong>Nhập PPTX, tạo slide, thêm quiz, chạy thử và xuất HTML5/SCORM/xAPI.</strong></div>' +
  '</div>';
}

function renderSceneInspector(scene, lesson) {
  const design = currentDesign();
  return '<div class="inspector-scroll">' +
    '<section class="inspector-section"><div class="pane-title"><strong>Properties</strong><span>Slide ' + (state.selectedScene + 1) + '</span></div>' +
      '<div class="field-grid">' +
        '<label class="field"><span>Loại slide</span><select data-scene-field="type">' + sceneTypeOptions(scene.type) + '</select></label>' +
        '<label class="field"><span>Thời lượng (giây)</span><input data-scene-field="duration" type="number" min="10" max="300" value="' + esc(scene.duration) + '" /></label>' +
      '</div>' +
      '<div class="field-grid">' +
        '<label class="field"><span>Chuyển tiếp</span><select data-transition-field="transition">' + transitionOptions(scene.transition || 'None') + '</select></label>' +
        '<label class="field"><span>Hoạt hình</span><select data-scene-field="animation">' + sceneEffectOptions(scene.animation || 'None', ['None', 'Appear', 'Zoom', 'Fly in']) + '</select></label>' +
      '</div>' +
      '<div class="field-grid">' +
        '<label class="field"><span>Tùy chọn hiệu ứng</span><select data-transition-field="transitionDirection">' + transitionDirectionOptions(scene.transitionDirection || 'auto') + '</select></label>' +
        '<label class="field"><span>Thời lượng hiệu ứng (giây)</span><input data-transition-field="transitionEffectDuration" type="number" min="0" max="10" step="0.1" value="' + esc(scene.transitionEffectDuration || 0.7) + '" /></label>' +
      '</div>' +
      '<label class="check-item"><input data-transition-field="autoAdvance" type="checkbox"' + (scene.autoAdvance === false ? '' : ' checked') + ' /><span><strong>Tự chuyển slide</strong><small>Khi bật, player có thể tự chuyển sau thời lượng slide.</small></span></label>' +
      '<div class="field-grid">' +
        '<label class="field"><span>Chủ đề</span><select data-design-select="theme">' + designOptions(DESIGN_THEMES, design.theme || 'clean') + '</select></label>' +
        '<label class="field"><span>Kích cỡ slide</span><select data-design-select="size">' + designOptions(SLIDE_SIZES, design.slideSize || 'wide') + '</select></label>' +
      '</div>' +
      '<label class="field"><span>Tiêu đề</span><input data-scene-field="title" value="' + esc(scene.title) + '" /></label>' +
      '<label class="field"><span>Nội dung hiển thị</span><textarea data-scene-field="content" rows="4">' + esc(scene.content) + '</textarea></label>' +
      '<label class="field"><span>Media / annotation</span><input data-scene-field="visual" value="' + esc(scene.visual) + '" /></label>' +
      '<label class="field"><span>Narration / caption</span><textarea data-scene-field="narration" rows="4">' + esc(scene.narration) + '</textarea></label>' +
      '<div class="scene-actions"><button class="utility-button" type="button" data-move-scene="-1">←</button><button class="utility-button" type="button" data-move-scene="1">→</button><button class="utility-button" type="button" data-duplicate-scene="1">Nhân bản</button><button class="utility-button danger" type="button" data-delete-scene="1">Xóa</button></div>' +
    '</section>' +
    renderQuestionEditor(scene) +
    renderObjectPanel(scene) +
    renderEventActionPanel(scene) +
    renderVariablePanel(lesson) +
  '</div>';
}

function renderPptxResourcePanel(scene, lesson) {
  const objects = Array.isArray(scene.pptxObjects) ? scene.pptxObjects : [];
  const images = objects.filter(function(object) { return object.type === 'image'; });
  const texts = objects.filter(function(object) { return object.type === 'text'; });
  const animated = objects.filter(function(object) { return object.animation; });
  const cards = objects.length ? objects.slice(0, 12).map(function(object, index) {
    if (object.type === 'image') {
      return '<article class="resource-card"><img src="' + esc(object.src) + '" alt="' + esc(object.alt || object.name || 'Ảnh PPTX') + '" /><small>' + esc(object.name || ('Ảnh ' + (index + 1))) + '</small></article>';
    }
    return '<article class="resource-card text-resource"><strong>TXT</strong><small>' + esc((object.text || '').slice(0, 42) || ('Văn bản ' + (index + 1))) + '</small></article>';
  }).join('') : '<p class="mini-note">Slide này chưa có tài nguyên tái dựng từ PPTX.</p>';
  return '<section class="pptx-resource-dock" aria-label="Tài nguyên từ PPTX">' +
    '<div class="pane-title"><strong>Tài nguyên</strong><span>' + objects.length + '</span></div>' +
    '<div class="resource-summary"><span>Ảnh: ' + images.length + '</span><span>Văn bản: ' + texts.length + '</span><span>Animation: ' + animated.length + '</span></div>' +
    '<div class="resource-grid">' + cards + '</div>' +
  '</section>';
}

function renderAiAssistantPanel() {
  if (!state.aiPanelOpen) return '';
  const messages = state.aiMessages.length ? state.aiMessages : [
    { role: 'assistant', text: 'Xin chào! Tôi là Trợ lý AI của bài giảng. Bạn có thể yêu cầu tạo câu hỏi, dịch slide, viết phụ đề hoặc hỏi về nội dung hiện tại.' }
  ];
  const rows = messages.map(function(message) {
    return '<article class="ai-message ' + esc(message.role) + '"><strong>' + (message.role === 'user' ? 'Bạn' : 'Trợ lý AI') + '</strong><p>' + esc(message.text) + '</p></article>';
  }).join('');
  return '<aside class="ai-assistant-panel" aria-label="Trợ lý AI">' +
    '<div class="ai-panel-head"><strong>✦ Trợ lý AI</strong><button class="icon-button" type="button" data-ai-close="1">×</button></div>' +
    '<div class="ai-panel-toolbar"><button class="icon-button" type="button">☰</button><strong>Trò chuyện mới</strong><span>0% đầy</span><button class="icon-button" type="button" data-ai-tool="assistant">＋</button></div>' +
    '<div class="ai-model-row"><label><span>Model Google</span><select data-gemini-model>' + geminiModelOptions() + '</select></label><button class="utility-button" type="button" data-ai-tool="service">Kiểm tra API</button></div>' +
    '<div class="ai-message-list">' + rows + '</div>' +
    '<div class="ai-quick-actions">' +
      '<button class="utility-button" type="button" data-ai-quick="quiz">Tạo câu hỏi</button>' +
      '<button class="utility-button" type="button" data-ai-quick="autoLesson">Dịch bài giảng</button>' +
      '<button class="utility-button" type="button" data-ai-quick="ask">Hỏi về bài giảng</button>' +
    '</div>' +
    '<div class="ai-input-row"><input id="aiAssistantInput" type="text" placeholder="Hỏi bất kỳ điều gì hoặc yêu cầu một hành động..." /><button class="primary-button" type="button" data-ai-send="1">Gửi</button></div>' +
  '</aside>';
}

function geminiModelOptions() {
  return GEMINI_MODELS.map(function(model) {
    return '<option value="' + esc(model.value) + '"' + (model.value === state.geminiModel ? ' selected' : '') + '>' + esc(model.label) + '</option>';
  }).join('');
}

function renderObjectPanel(scene) {
  const objects = ensureSceneObjects(scene);
  const quickButtons = ['text', 'image', 'video', 'button', 'typing', 'checkbox', 'radio', 'slider', 'dropdown', 'timer', 'caption', 'zoompan'].map(function(type) {
    const meta = INTERACTION_OBJECTS[type];
    return '<button class="utility-button" type="button" data-insert-object="' + type + '">' + esc(meta.label) + '</button>';
  }).join('');
  const objectRows = objects.length ? objects.map(function(object, index) {
    const meta = INTERACTION_OBJECTS[object.type] || INTERACTION_OBJECTS.button;
    return '<article class="object-editor">' +
      '<div class="object-editor-head"><span>' + esc(meta.icon) + '</span><strong>' + esc(meta.label) + '</strong><button class="icon-button" type="button" data-delete-object="' + index + '">×</button></div>' +
      '<label class="field"><span>Nhãn hiển thị</span><input data-object-field="label" data-object-index="' + index + '" value="' + esc(object.label || meta.label) + '" /></label>' +
      '<label class="field"><span>Nội dung / lời nhắc</span><input data-object-field="text" data-object-index="' + index + '" value="' + esc(object.text || meta.text) + '" /></label>' +
      '<label class="field"><span>Action</span><input data-object-field="action" data-object-index="' + index + '" value="' + esc(object.action || meta.action) + '" /></label>' +
      '<p class="mini-note">' + esc(meta.hint) + '</p>' +
    '</article>';
  }).join('') : '<p class="mini-note">Chưa có đối tượng tương tác. Dùng ribbon phía trên hoặc các nút nhanh dưới đây để thêm vào slide hiện tại.</p>';
  return '<section class="inspector-section interaction-inspector"><div class="pane-title"><strong>Interactions</strong><span>' + objects.length + ' object</span></div>' +
    '<div class="object-quickbar">' + quickButtons + '</div>' +
    '<div class="object-list">' + objectRows + '</div>' +
  '</section>';
}

function renderEventActionPanel(scene) {
  const events = [
    ['On Load', 'Set slide status = visited'],
    ['On Next', 'Commit progress to LMS'],
    scene.type === 'quiz' ? ['On Answer', 'Evaluate choice, show feedback, update score'] : ['On Click', 'Go to next slide or reveal activity prompt'],
    ['On Complete', 'Check completion rule']
  ].map(function(row) {
    return '<tr><td>' + esc(row[0]) + '</td><td>' + esc(row[1]) + '</td></tr>';
  }).join('');
  return '<section class="inspector-section"><div class="pane-title"><strong>Events - Actions</strong><span>Rules</span></div>' +
    '<table class="mini-table"><tbody>' + events + '</tbody></table>' +
    '<p class="mini-note">Các action này được app dùng khi xuất HTML5/SCORM/xAPI: theo dõi tiến độ, điểm quiz và trạng thái hoàn thành.</p>' +
  '</section>';
}

function renderVariablePanel(lesson) {
  const quizCount = lesson.scenes.filter(function(item) { return item.type === 'quiz'; }).length;
  const variables = [
    ['v_slideIndex', String(state.selectedScene + 1)],
    ['v_totalSlides', String(lesson.scenes.length)],
    ['v_quizCount', String(quizCount)],
    ['v_passingScore', String(state.plan.interactionConfig.passingScore) + '%'],
    ['v_publishStandard', state.plan.interactionConfig.standard]
  ].map(function(row) {
    return '<tr><td>' + esc(row[0]) + '</td><td>' + esc(row[1]) + '</td></tr>';
  }).join('');
  return '<section class="inspector-section"><div class="pane-title"><strong>Variables</strong><span>Runtime</span></div><table class="mini-table"><tbody>' + variables + '</tbody></table></section>';
}

function renderAuthorTimeline(lesson) {
  const total = lesson.scenes.reduce(function(sum, scene) { return sum + Number(scene.duration || 0); }, 0) || 1;
  const markers = lesson.scenes.map(function(scene, index) {
    const width = Math.max(7, Math.round((Number(scene.duration || 0) / total) * 100));
    return '<button class="timeline-segment' + (index === state.selectedScene ? ' is-active' : '') + '" type="button" data-select-scene="' + index + '" style="flex-basis:' + width + '%"><span>' + (index + 1) + '</span><strong>' + esc(scene.title) + '</strong><small>' + esc(scene.duration) + 's</small></button>';
  }).join('');
  const rows = [
    ['Slide Track', 'slide'],
    ['Media / Annotation', 'media'],
    ['Narration / Captions', 'narration'],
    ['Quiz / Events', 'event']
  ].map(function(row) {
    return '<div class="timeline-layer"><span>' + row[0] + '</span><div class="timeline-lane ' + row[1] + '">' + markers + '</div></div>';
  }).join('');
  return '<section class="author-timeline" aria-label="Timeline biên soạn"><div class="timeline-head"><div><strong>Timeline</strong><span>Main timeline · interactive timeline · click sequence</span></div><strong>' + totalLessonTime(lesson) + '</strong></div>' + rows + '</section>';
}

function sceneTypeOptions(selected) {
  return ['cover', 'objective', 'content', 'activity', 'quiz', 'practice', 'summary'].map(function(type) {
    return '<option value="' + type + '"' + (type === selected ? ' selected' : '') + '>' + sceneTypeLabel(type) + '</option>';
  }).join('');
}

function sceneEffectOptions(selected, options) {
  return options.map(function(option) {
    return '<option value="' + esc(option) + '"' + (option === selected ? ' selected' : '') + '>' + esc(option) + '</option>';
  }).join('');
}

function transitionOptions(selected) {
  return Object.keys(TRANSITION_EFFECTS).map(function(key) {
    const item = TRANSITION_EFFECTS[key];
    return '<option value="' + esc(item.effect) + '"' + (item.effect === selected ? ' selected' : '') + '>' + esc(item.label) + '</option>';
  }).join('');
}

function transitionDirectionOptions(selected) {
  return Object.keys(TRANSITION_DIRECTIONS).map(function(key) {
    return '<option value="' + key + '"' + (key === selected ? ' selected' : '') + '>' + esc(TRANSITION_DIRECTIONS[key]) + '</option>';
  }).join('');
}

function transitionKeyFromEffect(effect) {
  const normalized = String(effect || 'None').toLowerCase();
  const found = Object.keys(TRANSITION_EFFECTS).find(function(key) {
    return TRANSITION_EFFECTS[key].effect.toLowerCase() === normalized;
  });
  return found || 'none';
}

function designOptions(options, selected) {
  return Object.keys(options).map(function(key) {
    return '<option value="' + key + '"' + (key === selected ? ' selected' : '') + '>' + esc(options[key].label) + '</option>';
  }).join('');
}

function renderQuestionEditor(scene) {
  if (scene.type !== 'quiz') return '';
  const question = scene.question || buildQuestion(state.plan);
  scene.question = question;
  if (!question.kind) question.kind = 'single';
  const meta = QUESTION_TYPES[question.kind] || QUESTION_TYPES.single;
  const typeOptions = Object.keys(QUESTION_TYPES)
    .filter(function(key) { return ['bank', 'random', 'report', 'settings', 'submit', 'action', 'info', 'prev', 'next'].indexOf(key) < 0; })
    .map(function(key) {
      return '<option value="' + key + '"' + (key === question.kind ? ' selected' : '') + '>' + esc(QUESTION_TYPES[key].label) + '</option>';
    }).join('');
  const commandNote = question.command ? '<p class="mini-note"><strong>' + esc(question.command) + ':</strong> ' + esc(question.commandNote || '') + '</p>' : '';
  return '<div class="quiz-editor"><h3>Câu hỏi tương tác</h3>' +
    '<div class="field-grid"><label class="field"><span>Dạng câu hỏi</span><select data-question-field="kind">' + typeOptions + '</select></label>' +
    '<label class="field"><span>Điểm</span><input data-question-field="points" type="number" min="0" max="100" value="' + esc(question.points || 1) + '" /></label></div>' +
    '<label class="field"><span>Câu hỏi</span><textarea data-question-field="prompt" rows="2">' + esc(question.prompt) + '</textarea></label>' +
    renderQuestionSpecificEditor(question, meta) +
    '<label class="field"><span>Phản hồi</span><textarea data-question-field="feedback" rows="2">' + esc(question.feedback || '') + '</textarea></label>' +
    commandNote +
  '</div>';
}

function renderQuestionSpecificEditor(question, meta) {
  const choices = Array.isArray(question.choices) && question.choices.length ? question.choices : ['Phương án A', 'Phương án B', 'Phương án C', 'Phương án D'];
  if (question.kind === 'truefalse') {
    return '<label class="field"><span>Đáp án đúng</span><select data-question-field="answer"><option value="0"' + (Number(question.answer) === 0 ? ' selected' : '') + '>Đúng</option><option value="1"' + (Number(question.answer) === 1 ? ' selected' : '') + '>Sai</option></select></label>';
  }
  if (question.kind === 'multiple') {
    return choices.map(function(choice, index) {
      const checked = (question.answers || []).indexOf(index) >= 0 ? ' checked' : '';
      return '<label class="field"><span>Đáp án ' + (index + 1) + '</span><input data-choice-index="' + index + '" value="' + esc(choice) + '" /></label>' +
        '<label class="check-item compact-answer"><input type="checkbox" data-answer-toggle="' + index + '"' + checked + ' /><span><strong>Đáp án đúng</strong><small>Cho phép chọn nhiều đáp án.</small></span></label>';
    }).join('');
  }
  if (['fill', 'paragraph', 'essay', 'hotspot', 'drawing'].indexOf(question.kind) >= 0) {
    return '<label class="field"><span>Đáp án / tiêu chí chấm</span><textarea data-question-field="accepted" rows="3">' + esc(question.accepted || '') + '</textarea></label>';
  }
  if (question.kind === 'multiblank' || question.kind === 'multidropdown') {
    const blanks = Array.isArray(question.blanks) && question.blanks.length ? question.blanks : ['Từ khóa 1', 'Từ khóa 2'];
    return blanks.map(function(blank, index) {
      return '<label class="field"><span>Ô trống ' + (index + 1) + '</span><input data-blank-index="' + index + '" value="' + esc(blank) + '" /></label>';
    }).join('');
  }
  if (question.kind === 'sequence' || question.kind === 'dragdrop') {
    const items = Array.isArray(question.sequence) && question.sequence.length ? question.sequence : ['Bước 1', 'Bước 2', 'Bước 3'];
    return items.map(function(item, index) {
      return '<label class="field"><span>Mục ' + (index + 1) + '</span><input data-sequence-index="' + index + '" value="' + esc(item) + '" /></label>';
    }).join('');
  }
  if (question.kind === 'dropdown') {
    return choices.map(function(choice, index) {
      return '<label class="field"><span>Mục chọn ' + (index + 1) + '</span><input data-choice-index="' + index + '" value="' + esc(choice) + '" /></label>';
    }).join('') +
    '<label class="field"><span>Đáp án đúng</span><select data-question-field="answer">' +
      choices.map(function(choice, index) { return '<option value="' + index + '"' + (index === Number(question.answer) ? ' selected' : '') + '>' + esc(choice) + '</option>'; }).join('') +
    '</select></label>';
  }
  if (question.kind === 'rating') {
    return '<label class="field"><span>Thang đánh giá tối đa</span><input data-question-field="ratingMax" type="number" min="3" max="10" value="' + esc(question.ratingMax || 5) + '" /></label>';
  }
  return choices.map(function(choice, index) {
    return '<label class="field"><span>Đáp án ' + (index + 1) + (index === Number(question.answer) ? ' (đúng)' : '') + '</span><input data-choice-index="' + index + '" value="' + esc(choice) + '" /></label>';
  }).join('') +
  '<label class="field"><span>Đáp án đúng</span><select data-question-field="answer">' +
    choices.map(function(choice, index) { return '<option value="' + index + '"' + (index === Number(question.answer) ? ' selected' : '') + '>' + (index + 1) + '</option>'; }).join('') +
  '</select></label>';
}

function renderSlideCanvas(scene, index, total) {
  const quiz = scene.type === 'quiz' && scene.question ? '<div class="canvas-quiz">' + esc(scene.question.prompt) + '</div>' : '';
  const script = state.lesson.includeTranscript ? '<p class="canvas-script">' + esc(scene.narration) + '</p>' : '';
  const objects = renderSceneObjects(scene);
  const content = renderSceneContent(scene);
  const media = renderSceneMedia(scene);
  const fallback = renderSlideFallback(scene, index, total);
  const design = currentDesign();
  const designStyle = [
    '--slide-accent:' + (design.accent || '#255c99'),
    '--slide-bg:' + (design.bg || '#ffffff'),
    '--slide-ink:' + (design.ink || '#17212f'),
    '--slide-panel:' + (design.panel || '#f5f8fb'),
    'font-family:' + (design.font || 'Arial, Helvetica, sans-serif'),
    'aspect-ratio:' + (design.ratio || '16 / 9')
  ].join(';');
  if (Array.isArray(scene.pptxObjects) && scene.pptxObjects.length) {
    return '<div class="slide-frame slide-' + esc(scene.type) + ' designed-slide pptx-slide-frame" style="' + esc(designStyle) + '">' +
      renderPptxReplica(scene, 'canvas') + quiz + script +
    '</div>';
  }
  return '<div class="slide-frame slide-' + esc(scene.type) + ' designed-slide" style="' + esc(designStyle) + '">' +
    fallback + content + media + objects + quiz + script +
  '</div>';
}

function renderSlideFallback(scene, index, total) {
  const title = scene.title || scene.rawText || ('Slide ' + (index + 1));
  return '<div class="slide-top"><span>' + sceneTypeLabel(scene.type || 'content') + '</span><span>' + (index + 1) + '/' + total + '</span></div>' +
    '<h3>' + esc(title) + '</h3>';
}

function renderPptxReplica(scene, mode) {
  const objects = Array.isArray(scene.pptxObjects) ? scene.pptxObjects : [];
  if (!objects.length) return '';
  return '<div class="pptx-replica" aria-label="Slide PowerPoint gốc">' + objects.map(function(object, index) {
    const style = pptxObjectStyle(object);
    const animation = mode === 'thumb' ? '' : pptxAnimationClass(object.animation, index);
    if (object.type === 'image') {
      return '<div class="pptx-object pptx-image ' + animation + '" style="' + esc(style) + '"><img src="' + esc(object.src) + '" alt="' + esc(object.alt || object.name || 'Ảnh từ PowerPoint') + '" /></div>';
    }
    const textStyle = pptxTextInlineStyle(object.style || {});
    return '<div class="pptx-object pptx-text ' + animation + '" style="' + esc(style + textStyle) + '">' + esc(object.text || '') + '</div>';
  }).join('') + '</div>';
}

function pptxObjectStyle(object) {
  const left = clampNumber(object.left, -20, 120, 0);
  const top = clampNumber(object.top, -20, 120, 0);
  const width = clampNumber(object.width, 0, 120, 10);
  const height = clampNumber(object.height, 0, 120, 10);
  const animation = object.animation || {};
  return 'left:' + left + '%;top:' + top + '%;width:' + width + '%;height:' + height + '%;--pptx-delay:' + Number(animation.delay || 0) + 's;--pptx-duration:' + Number(animation.duration || .65) + 's;';
}

function pptxTextInlineStyle(style) {
  const parts = [];
  if (style.fontSize) parts.push('font-size:' + clampNumber(style.fontSize, 8, 72, 24) + 'px');
  if (style.color) parts.push('color:' + style.color);
  if (style.bold) parts.push('font-weight:700');
  if (style.italic) parts.push('font-style:italic');
  return parts.length ? parts.join(';') + ';' : '';
}

function pptxAnimationClass(animation, index) {
  if (!animation) return '';
  const type = String(animation.type || 'fade').toLowerCase();
  if (type === 'zoom') return 'pptx-anim pptx-anim-zoom';
  if (type === 'fly') return 'pptx-anim pptx-anim-fly';
  if (type === 'spin') return 'pptx-anim pptx-anim-spin';
  if (type === 'wipe') return 'pptx-anim pptx-anim-wipe';
  return 'pptx-anim pptx-anim-fade';
}

function renderSceneContent(scene) {
  const bullets = Array.isArray(scene.bullets) ? scene.bullets.filter(Boolean) : [];
  if (bullets.length) {
    const intro = scene.content && bullets.join(' ').indexOf(scene.content) < 0
      ? '<p>' + esc(scene.content) + '</p>'
      : '';
    return '<div class="canvas-content">' + intro + '<ul>' + bullets.map(function(item) {
      return '<li>' + esc(item) + '</li>';
    }).join('') + '</ul></div>';
  }
  const text = scene.content || scene.rawText || scene.narration || '';
  return text ? '<p>' + esc(text) + '</p>' : '<p class="empty-slide-note">Slide này chưa có nội dung đọc được. Hãy nhập lại PPTX hoặc dùng tab Thêm để bổ sung ảnh/văn bản.</p>';
}

function renderSceneMedia(scene) {
  const images = Array.isArray(scene.images) ? scene.images.filter(function(image) { return image && image.dataUrl; }) : [];
  const visual = String(scene.visual || '').trim();
  const imageHtml = images.length ? '<div class="canvas-media-grid">' + images.map(function(image) {
    return '<figure><img src="' + esc(image.dataUrl) + '" alt="' + esc(image.alt || image.name || 'Ảnh từ PowerPoint') + '" /><figcaption>' + esc(image.name || 'Ảnh PPTX') + '</figcaption></figure>';
  }).join('') + '</div>' : '';
  if (!visual) return imageHtml;
  const isPptxSource = visual.indexOf('Nguồn PPTX:') === 0 || visual.indexOf('Nguon PPTX:') === 0;
  if (isPptxSource) {
    return imageHtml + '<p class="pptx-source-note">' + esc(visual) + '<br><small>App đã nhập chữ và ảnh chính từ PowerPoint. Hiệu ứng gốc được chuyển sang hiệu ứng tương đương trong tab Chuyển tiếp.</small></p>';
  }
  return imageHtml + '<div class="canvas-media">' + esc(visual) + '</div>';
}

function renderSceneObjects(scene) {
  const objects = ensureSceneObjects(scene);
  if (!objects.length) return '';
  return '<div class="canvas-objects" aria-label="Đối tượng trên slide">' + objects.map(function(object) {
    const meta = INTERACTION_OBJECTS[object.type] || INTERACTION_OBJECTS.button;
    return '<article class="canvas-object object-' + esc(object.type) + '">' +
      '<span>' + esc(meta.icon) + '</span><div><strong>' + esc(object.label || meta.label) + '</strong><small>' + esc(object.text || meta.text) + '</small></div>' +
    '</article>';
  }).join('') + '</div>';
}

function renderTimeline() {
  const lesson = state.lesson;
  if (!lesson) return '';
  const total = lesson.scenes.reduce(function(sum, scene) { return sum + Number(scene.duration || 0); }, 0) || 1;
  const rows = lesson.scenes.map(function(scene, index) {
    const width = Math.max(8, Math.round((Number(scene.duration || 0) / total) * 100));
    return '<article class="timeline-row" data-select-scene="' + index + '">' +
      '<div><strong>' + String(index + 1).padStart(2, '0') + '. ' + esc(scene.title) + '</strong><small>' + sceneTypeLabel(scene.type) + ' · ' + scene.duration + ' giây</small></div>' +
      '<div class="timeline-track"><span style="width:' + width + '%"></span></div>' +
    '</article>';
  }).join('');
  return '<section class="result-section"><div class="section-heading"><div><h2>Timeline bài giảng</h2><p>Sắp xếp nhịp học, thời lượng từng cảnh và vị trí câu hỏi tương tác trước khi xuất bản.</p></div><strong class="timeline-total">' + totalLessonTime(lesson) + '</strong></div><div class="timeline-list">' + rows + '</div></section>';
}

function renderPreview() {
  const lesson = state.lesson;
  if (!lesson) return '';
  state.previewIndex = Math.max(0, Math.min(state.previewIndex, lesson.scenes.length - 1));
  const scene = lesson.scenes[state.previewIndex];
  const quiz = scene.type === 'quiz' && scene.question ? renderPreviewQuestion(scene.question) : '';
  const objects = renderPreviewObjects(scene);
  return '<section class="result-section preview-stage">' +
    '<div class="preview-shell">' + renderSlideCanvas(scene, state.previewIndex, lesson.scenes.length) + objects + quiz + '</div>' +
    '<div class="preview-controls"><button class="utility-button" type="button" data-preview-step="-1">← Trước</button><span class="pill">Cảnh ' + (state.previewIndex + 1) + '/' + lesson.scenes.length + '</span><button class="utility-button" type="button" data-preview-step="1">Tiếp →</button></div>' +
  '</section>';
}

function renderPreviewObjects(scene) {
  const objects = ensureSceneObjects(scene);
  if (!objects.length) return '';
  return '<section class="preview-objects"><h3>Tương tác trên slide</h3><div class="preview-object-grid">' + objects.map(function(object, index) {
    const meta = INTERACTION_OBJECTS[object.type] || INTERACTION_OBJECTS.button;
    const label = esc(object.label || meta.label);
    const text = esc(object.text || meta.text);
    if (object.type === 'typing') {
      return '<label class="preview-object"><span>' + label + '</span><input data-preview-object="' + index + '" placeholder="' + text + '" /></label>';
    }
    if (object.type === 'checkbox') {
      return '<label class="preview-object inline"><input data-preview-object="' + index + '" type="checkbox" /> <span>' + text + '</span></label>';
    }
    if (object.type === 'radio') {
      return '<label class="preview-object inline"><input data-preview-object="' + index + '" type="radio" name="preview-object-' + esc(scene.id || state.previewIndex) + '" /> <span>' + text + '</span></label>';
    }
    if (object.type === 'slider') {
      return '<label class="preview-object"><span>' + label + '</span><input data-preview-object="' + index + '" type="range" min="1" max="5" value="3" /></label>';
    }
    if (object.type === 'dropdown') {
      return '<label class="preview-object"><span>' + label + '</span><select data-preview-object="' + index + '"><option>Chọn đáp án</option><option>Phương án A</option><option>Phương án B</option><option>Phương án C</option></select></label>';
    }
    if (object.type === 'timer') {
      return '<button class="preview-object action timer-preview" type="button" data-preview-object="' + index + '"><strong>' + label + '</strong><span>' + text + '</span></button>';
    }
    if (['text', 'caption', 'equation', 'separator'].indexOf(object.type) >= 0) {
      return '<article class="preview-object static"><strong>' + label + '</strong><span>' + text + '</span></article>';
    }
    return '<button class="preview-object action" type="button" data-preview-object="' + index + '"><strong>' + label + '</strong><span>' + text + '</span></button>';
  }).join('') + '</div></section>';
}

function renderPreviewQuestion(question) {
  const answered = state.previewAnswer;
  const kind = question.kind || 'single';
  if (kind === 'truefalse') return renderTrueFalsePreview(question, answered);
  if (kind === 'multiple') return renderMultiplePreview(question, answered);
  if (['fill', 'paragraph', 'essay', 'hotspot', 'drawing'].indexOf(kind) >= 0) return renderTextAnswerPreview(question);
  if (kind === 'multiblank' || kind === 'multidropdown') return renderMultiBlankPreview(question);
  if (kind === 'sequence' || kind === 'dragdrop') return renderSequencePreview(question);
  if (kind === 'dropdown') return renderDropdownQuestionPreview(question);
  if (kind === 'rating') return renderRatingPreview(question);
  const choices = (question.choices || []).map(function(choice, index) {
    const classes = ['choice-button'];
    if (answered !== null && index === question.answer) classes.push('is-correct');
    if (answered === index && answered !== question.answer) classes.push('is-wrong');
    return '<button class="' + classes.join(' ') + '" type="button" data-answer-choice="' + index + '">' + esc(choice) + '</button>';
  }).join('');
  const showFeedback = state.plan.interactionConfig.showFeedback;
  const feedback = answered === null || !showFeedback ? '' : '<p class="feedback-line">' + (answered === question.answer ? esc(question.feedback) : 'Chưa đúng. Hãy đọc lại yêu cầu, chú ý nguồn thông tin và tiêu chí sản phẩm.') + '</p>';
  return '<div class="preview-question"><h3>' + esc(question.prompt) + '</h3><div class="choice-grid">' + choices + '</div>' + feedback + '</div>';
}

function renderTrueFalsePreview(question, answered) {
  const choices = ['Đúng', 'Sai'].map(function(choice, index) {
    const classes = ['choice-button'];
    if (answered !== null && index === Number(question.answer)) classes.push('is-correct');
    if (answered === index && index !== Number(question.answer)) classes.push('is-wrong');
    return '<button class="' + classes.join(' ') + '" type="button" data-answer-choice="' + index + '">' + choice + '</button>';
  }).join('');
  return '<div class="preview-question"><h3>' + esc(question.prompt) + '</h3><div class="choice-grid">' + choices + '</div></div>';
}

function renderMultiplePreview(question, answered) {
  const selected = Array.isArray(answered) ? answered : [];
  const choices = (question.choices || []).map(function(choice, index) {
    const checked = selected.indexOf(index) >= 0 ? ' checked' : '';
    return '<label class="choice-button"><input type="checkbox" data-answer-multi="' + index + '"' + checked + ' /> ' + esc(choice) + '</label>';
  }).join('');
  return '<div class="preview-question"><h3>' + esc(question.prompt) + '</h3><div class="choice-grid">' + choices + '</div></div>';
}

function renderTextAnswerPreview(question) {
  return '<div class="preview-question"><h3>' + esc(question.prompt) + '</h3><label class="field"><span>Câu trả lời</span><textarea data-answer-text rows="4" placeholder="' + esc(question.accepted || 'Nhập câu trả lời') + '"></textarea></label></div>';
}

function renderMultiBlankPreview(question) {
  const blanks = Array.isArray(question.blanks) && question.blanks.length ? question.blanks : ['Ô trống 1', 'Ô trống 2'];
  return '<div class="preview-question"><h3>' + esc(question.prompt) + '</h3>' + blanks.map(function(blank, index) {
    return '<label class="field"><span>Ô trống ' + (index + 1) + '</span><input data-answer-text placeholder="' + esc(blank) + '" /></label>';
  }).join('') + '</div>';
}

function renderSequencePreview(question) {
  const items = Array.isArray(question.sequence) && question.sequence.length ? question.sequence : ['Bước 1', 'Bước 2', 'Bước 3'];
  return '<div class="preview-question"><h3>' + esc(question.prompt) + '</h3><ol class="sortable-preview">' + items.map(function(item) {
    return '<li>' + esc(item) + '</li>';
  }).join('') + '</ol><p class="mini-note">Bản xem thử mô phỏng thứ tự; bản nâng cao sẽ hỗ trợ kéo-thả trực tiếp.</p></div>';
}

function renderDropdownQuestionPreview(question) {
  const choices = Array.isArray(question.choices) ? question.choices : [];
  return '<div class="preview-question"><h3>' + esc(question.prompt) + '</h3><label class="field"><span>Chọn đáp án</span><select data-answer-text>' + choices.map(function(choice, index) {
    return '<option value="' + index + '">' + esc(choice) + '</option>';
  }).join('') + '</select></label></div>';
}

function renderRatingPreview(question) {
  return '<div class="preview-question"><h3>' + esc(question.prompt) + '</h3><label class="field"><span>Mức đánh giá</span><input data-answer-text type="range" min="1" max="' + esc(question.ratingMax || 5) + '" value="3" /></label></div>';
}

function renderConfig() {
  const config = state.plan.interactionConfig;
  const preset = AUTHORING_PRESETS[config.preset] || AUTHORING_PRESETS.activepresenter;
  const sourceRows = [
    ['ActivePresenter', 'Timeline, screen recording, HTML5, quiz, variables/events, SCORM/xAPI', 'Timeline cảnh, loại cảnh, quiz, điều hướng khóa, cấu hình SCORM/xAPI, gói ZIP có manifest'],
    ['iSpring Suite', 'Slide-based authoring, quiz, interaction, role-play, video/narration, LMS publishing', 'Slide/cảnh, lời dẫn, quiz, mô phỏng tình huống, player responsive, chuẩn SCORM']
  ].map(function(row) {
    return '<tr><td><strong>' + row[0] + '</strong></td><td>' + row[1] + '</td><td>' + row[2] + '</td></tr>';
  }).join('');
  const configRows = [
    ['Preset đang dùng', config.presetLabel, preset.fit],
    ['Chuẩn xuất bản', config.standard, publishAdvice(config.standard)],
    ['Điểm đạt', config.passingScore + '%', 'Dùng cho quiz và điều kiện hoàn thành.'],
    ['Điều kiện hoàn thành', config.completionRule, 'Quy định khi nào học sinh được tính hoàn thành bài.'],
    ['Điều hướng', config.navigationMode, 'Kiểm soát học sinh đi tự do hay theo trình tự.'],
    ['Số lần làm quiz', config.attemptLimit, 'Giới hạn số lần trả lời để quản lý đánh giá.'],
    ['Xáo trộn đáp án', config.shuffleAnswers ? 'Bật' : 'Tắt', 'Giảm học thuộc vị trí đáp án.'],
    ['Phản hồi tức thì', config.showFeedback ? 'Bật' : 'Tắt', 'Hiện giải thích sau khi học sinh trả lời.'],
    ['Player responsive', config.responsivePlayer ? 'Bật' : 'Tắt', 'Tối ưu cho máy tính, máy tính bảng và điện thoại.']
  ].map(function(row) {
    return '<tr><td><strong>' + row[0] + '</strong></td><td>' + row[1] + '</td><td>' + row[2] + '</td></tr>';
  }).join('');
  const chips = config.equivalent.map(function(item) { return '<span class="pill">' + esc(item) + '</span>'; }).join('');
  return '<section class="result-section">' +
    '<div class="section-heading"><div><h2>Cấu hình tương đương ActivePresenter/iSpring</h2><p>App dùng các nhóm cấu hình phổ biến của công cụ tác giả e-learning để tạo bài chạy trên web, có quiz, tracking và hướng xuất LMS.</p></div><button class="secondary-button" type="button" data-copy-config="1">Sao chép cấu hình</button></div>' +
    '<div class="config-summary"><article class="card accent-blue"><h3>Preset</h3><p>' + esc(config.presetLabel) + '</p><div class="meta-row">' + chips + '</div></article><article class="card accent-green"><h3>Luồng chạy</h3><p>' + esc(config.navigationMode) + ' · ' + esc(config.completionRule) + '</p><div class="meta-row"><span class="pill">' + esc(config.standard) + '</span><span class="pill">Điểm đạt ' + config.passingScore + '%</span></div></article></div>' +
    '<h3>Bảng cấu hình kỹ thuật</h3><table class="matrix-table config-table"><thead><tr><th>Mục</th><th>Giá trị</th><th>Tác dụng</th></tr></thead><tbody>' + configRows + '</tbody></table>' +
    '<h3>Đối chiếu tính năng tham chiếu</h3><table class="matrix-table config-table"><thead><tr><th>Phần mềm</th><th>Nhóm chức năng tham chiếu</th><th>Cấu hình trong app</th></tr></thead><tbody>' + sourceRows + '</tbody></table>' +
    '<p class="notice">Ghi chú: đây là cấu hình tương đương về luồng tác giả và xuất bản, không phải bản sao định dạng nội bộ của ActivePresenter hoặc iSpring.</p>' +
  '</section>';
}

function renderGuide() {
  const config = state.plan.interactionConfig;
  const rows = [
    ['1', 'Chọn cấu hình', 'Ở cột trái, chọn preset ActivePresenter-like, iSpring Suite-like hoặc Lớp học tự học.', 'Preset tự điền chuẩn xuất bản, điểm đạt, điều hướng và phản hồi.'],
    ['2', 'Nhập từ PPTX', 'Trong mục Studio e-learning, chọn file .pptx rồi bấm Tạo bài giảng từ PPTX.', 'App đọc chữ trên từng slide và chuyển thành cảnh e-learning.'],
    ['3', 'Tạo bài giảng thủ công', 'Nếu không có PPTX, nhập thông tin bài học rồi bấm Tạo kế hoạch.', 'App sinh kịch bản cảnh/slide, quiz và lời dẫn.'],
    ['4', 'Soạn cảnh', 'Vào tab Studio, chọn từng cảnh để sửa tiêu đề, nội dung, media, lời dẫn và thời lượng.', 'Mô phỏng slide bên phải cập nhật theo nội dung đã chỉnh.'],
    ['5', 'Thêm đối tượng', 'Trên ribbon THÊM, dùng nhóm Chú thích, Phương tiện, Tương tác và Khác để thêm khung chứa, hình dạng, văn bản, vùng sáng, phương trình, biểu tượng, biểu đồ, bảng, hình ảnh, audio, video, YouTube, web, 3D, nút, checkbox, radio, thanh trượt, danh sách thả xuống, bộ đếm thời gian, đường đi chuột, Zoom-n-Pan và phụ đề.', 'Đối tượng xuất hiện trên canvas và trong bảng Interactions để sửa nhãn, lời nhắc và action.'],
    ['6', 'Thêm câu hỏi', 'Trên ribbon CÂU HỎI, chọn Đúng/Sai, Nhiều lựa chọn, Nhiều đáp án, Điền chỗ trống, Bài luận, Tuần tự, Kéo-Thả, Điểm ảnh, Dropdown, Đánh giá, Ngân hàng câu hỏi hoặc Slide báo cáo.', 'App tạo slide quiz tương ứng và mở bảng chỉnh câu hỏi theo đúng dạng.'],
    ['7', 'Thiết kế giao diện', 'Trên ribbon THIẾT KẾ, chọn chủ đề, màu, font chữ, kiểu nền và kích cỡ slide.', 'Canvas đổi ngay và thiết kế được lưu vào gói xuất bản.'],
    ['8', 'Thiết lập chuyển tiếp', 'Trên ribbon CHUYỂN TIẾP, chọn hiệu ứng, hướng, thời lượng hiệu ứng, thời lượng slide và tùy chọn tự chuyển slide.', 'Slide hiện tại lưu hiệu ứng chuyển và player xuất bản có thể tự chạy theo thời lượng đã đặt.'],
    ['9', 'Cấu hình quiz', 'Với cảnh Quiz, sửa câu hỏi, đáp án, đáp án đúng, nhiều đáp án, chỗ trống, thứ tự, thang đánh giá, điểm và phản hồi.', 'Câu hỏi sẽ chạy được trong tab Xem thử.'],
    ['10', 'Kiểm tra timeline', 'Vào tab Timeline để xem thứ tự cảnh và nhịp thời lượng.', 'Bấm một dòng timeline để quay lại chỉnh cảnh đó.'],
    ['11', 'Chạy tương tác', 'Vào tab Xem thử, dùng nút Trước/Tiếp, nhập/chọn đối tượng tương tác và trả lời câu hỏi.', 'Phản hồi đúng/sai và thao tác tương tác được ghi nhận theo cấu hình.'],
    ['12', 'Rà cấu hình', 'Vào tab Cấu hình để kiểm tra chuẩn xuất bản, điều kiện hoàn thành, điểm đạt và điều hướng.', 'Dùng bảng này trước khi giao bài cho học sinh hoặc đưa lên LMS.'],
    ['13', 'Lưu hoặc xuất', 'Bấm Lưu mẫu để lưu trên trình duyệt, hoặc Xuất gói LMS để lấy file ZIP bài giảng.', 'Gói ZIP chứa player HTML5, dữ liệu bài học, manifest SCORM/xAPI và bản JSON nguồn.']
  ].map(function(row) {
    return '<tr><td><strong>' + row[0] + '</strong></td><td>' + row[1] + '</td><td>' + row[2] + '</td><td>' + row[3] + '</td></tr>';
  }).join('');
  const checklist = [
    'Mỗi cảnh có tiêu đề ngắn, nội dung vừa màn hình và thời lượng hợp lý.',
    'Quiz có đáp án đúng, phản hồi rõ ràng và điểm đạt phù hợp.',
    'Nếu dùng LMS, chọn SCORM 1.2/SCORM 2004/xAPI theo hệ thống của nhà trường.',
    'Nếu nhập PPTX, rà lại từng cảnh vì hiệu ứng, hình ảnh phức tạp và ghi chú thuyết trình chưa được chuyển đầy đủ.',
    'Nếu giao qua link hoặc dùng offline, chọn HTML5 offline.',
    'Kiểm tra tab Xem thử trước khi xuất hoặc in/PDF.'
  ].map(function(item) { return '<li>' + item + '</li>'; }).join('');
  return '<section class="result-section">' +
    '<div class="section-heading"><div><h2>Bảng hướng dẫn sử dụng</h2><p>Quy trình thao tác sau khi đã chọn cấu hình tương tác và muốn chạy thử bài giảng.</p></div><span class="pill">' + esc(config.presetLabel) + '</span></div>' +
    '<table class="matrix-table guide-table"><thead><tr><th>Bước</th><th>Việc cần làm</th><th>Thao tác trong app</th><th>Kết quả mong đợi</th></tr></thead><tbody>' + rows + '</tbody></table>' +
    '<article class="card accent-gold"><h3>Checklist trước khi dùng với học sinh</h3><ul class="plain-list">' + checklist + '</ul></article>' +
  '</section>';
}

function publishAdvice(standard) {
  const advice = {
    'HTML5 offline': 'Chạy trực tiếp bằng trình duyệt, phù hợp dùng nội bộ hoặc gửi file.',
    'SCORM 1.2': 'Phù hợp nhiều LMS phổ biến, theo dõi điểm và trạng thái hoàn thành cơ bản.',
    'SCORM 2004': 'Theo dõi hoàn thành/điểm chi tiết hơn, phù hợp LMS hỗ trợ tốt sequencing.',
    'xAPI': 'Ghi nhận trải nghiệm học tập linh hoạt qua Learning Record Store.'
  };
  return advice[standard] || 'Chọn theo hệ thống triển khai của nhà trường.';
}

function buildConfigText() {
  const config = state.plan.interactionConfig;
  return [
    'Cấu hình e-learning',
    '- Preset: ' + config.presetLabel,
    '- Chuẩn xuất bản: ' + config.standard,
    '- Điểm đạt: ' + config.passingScore + '%',
    '- Điều kiện hoàn thành: ' + config.completionRule,
    '- Điều hướng: ' + config.navigationMode,
    '- Số lần làm quiz: ' + config.attemptLimit,
    '- Xáo trộn đáp án: ' + (config.shuffleAnswers ? 'Bật' : 'Tắt'),
    '- Phản hồi tức thì: ' + (config.showFeedback ? 'Bật' : 'Tắt'),
    '- Player responsive: ' + (config.responsivePlayer ? 'Bật' : 'Tắt')
  ].join('\n');
}

function totalLessonTime(lesson) {
  const seconds = lesson.scenes.reduce(function(sum, scene) { return sum + Number(scene.duration || 0); }, 0);
  const minutes = Math.floor(seconds / 60);
  const rest = seconds % 60;
  return minutes + 'p ' + String(rest).padStart(2, '0') + 's';
}

function selectedCompetencies() {
  return state.plan.domains.flatMap(function(domain) {
    return domain.competencies.map(function(comp) { return { domain: domain, comp: comp }; });
  });
}

function renderMatrix() {
  const compRows = selectedCompetencies().map(function(item) {
    return '<tr><td><strong>' + item.comp.code + '</strong><br>' + item.comp.name + '</td>' +
      '<td>' + item.comp.action + '</td>' +
      '<td>Học sinh thực hiện trong chủ đề "' + esc(state.plan.topic) + '" bằng ' + esc(state.plan.product.toLowerCase()) + '.</td>' +
      '<td>Minh chứng sản phẩm, ghi nguồn, giải thích lựa chọn và tự đánh giá.</td></tr>';
  }).join('');
  const integrationRows = state.plan.integrations.map(function(item) {
    return '<tr><td><strong>' + item.label + '</strong></td><td>' + item.data[0] + '</td><td>' + item.data[1] + '</td><td>' + item.data[2] + '</td></tr>';
  }).join('');
  return '<section class="result-section">' +
    '<h2>Ma trận tích hợp</h2>' +
    '<p>Ma trận kết nối mục tiêu môn học, năng lực số theo TT 02/2025/TT-BGDĐT và các nội dung giáo dục tích hợp.</p>' +
    '<p class="notice">Thông tư 02/2025/TT-BGDĐT ban hành Khung năng lực số cho người học gồm 6 miền năng lực, 24 năng lực thành phần, 4 trình độ và 8 bậc. App dùng bậc gợi ý theo cấp học để giáo viên điều chỉnh theo thực tế.</p>' +
    '<table class="matrix-table"><thead><tr><th>Nội dung</th><th>Mục tiêu</th><th>Hoạt động gợi ý</th><th>Minh chứng</th></tr></thead><tbody>' + compRows + integrationRows + '</tbody></table>' +
    '</section>';
}

function renderPlan() {
  const objectives = state.plan.integrations.map(function(item) { return '<li><strong>' + item.label + ':</strong> ' + item.data[0] + '</li>'; }).join('');
  const nls = state.plan.domains.map(function(item) { return '<li><strong>' + item.title + ':</strong> ' + item.desc + '</li>'; }).join('');
  return '<section class="result-section">' +
    '<h2>Khung kế hoạch bài dạy</h2>' +
    '<div class="grid two">' +
      '<article class="card accent-blue"><h3>Mục tiêu</h3><ul class="plain-list"><li>Học sinh hoàn thành nhiệm vụ về chủ đề "' + esc(state.plan.topic) + '" bằng ' + esc(state.plan.product.toLowerCase()) + '.</li><li>Phát triển năng lực môn ' + esc(state.plan.subject) + ' qua việc ' + state.plan.level.action + '.</li>' + nls + objectives + '</ul></article>' +
      '<article class="card accent-green"><h3>Chuẩn bị và điều chỉnh</h3><ul class="plain-list"><li>Học liệu: nguồn đọc ngắn, hình ảnh, phiếu nhiệm vụ, công cụ trình bày hoặc thiết bị số phù hợp.</li><li>Hòa nhập: ' + esc(state.plan.learnerNeeds || 'Có phương án hỗ trợ đa dạng.') + '</li><li>Lưu ý cấp học: ' + state.plan.level.caution + '</li></ul></article>' +
    '</div>' +
    '<article class="card"><h3>Tiến trình</h3><ol class="step-list"><li><strong>Mở đầu:</strong> nêu tình huống gần với đời sống, khơi gợi câu hỏi học tập và thống nhất sản phẩm.</li><li><strong>Hình thành kiến thức:</strong> học sinh khai thác học liệu, đánh dấu thông tin quan trọng, đối chiếu với mục tiêu NLS đã chọn.</li><li><strong>Luyện tập:</strong> nhóm tạo bản nháp ' + esc(state.plan.product.toLowerCase()) + ', nhận phản hồi theo tiêu chí và cải tiến.</li><li><strong>Vận dụng:</strong> học sinh đề xuất hành động cá nhân/cộng đồng, nêu cách dùng AI hoặc nguồn số có trách nhiệm.</li><li><strong>Đánh giá:</strong> giáo viên dùng rubric, học sinh tự đánh giá và phản hồi đồng đẳng.</li></ol></article>' +
    '</section>';
}

function renderActivities() {
  const nlsCards = state.plan.domains.map(function(domain) {
    return '<article class="card accent-' + domain.color + '"><h3>' + domain.title + '</h3><p>' + domain.competencies[0].action + '; ' + domain.competencies[Math.min(1, domain.competencies.length - 1)].action + '.</p><div class="meta-row"><span class="pill">Miền ' + domain.code + '</span><span class="pill">' + domain.competencies.length + ' năng lực</span></div></article>';
  }).join('');
  const integrationCards = state.plan.integrations.map(function(item) {
    return '<article class="card accent-' + item.color + '"><h3>' + item.label + '</h3><p>' + item.data[1] + '</p><div class="meta-row"><span class="pill">' + state.plan.level.label + '</span><span class="pill">' + state.plan.depth + '</span></div></article>';
  }).join('');
  return '<section class="result-section"><h2>Gợi ý hoạt động</h2><p>Các thẻ dưới đây có thể đưa vào phần mở đầu, luyện tập hoặc vận dụng tùy thời lượng.</p><div class="grid three">' + nlsCards + integrationCards + '</div></section>';
}

function renderAssessment() {
  const integrationCriteria = state.plan.integrations.map(function(item) { return '<li><strong>' + item.label + ':</strong> ' + item.data[2] + '</li>'; }).join('');
  return '<section class="result-section"><h2>Đánh giá và minh chứng</h2><div class="grid two">' +
    '<article class="card accent-violet"><h3>Rubric 4 mức</h3><ul class="plain-list"><li><strong>Chưa đạt:</strong> sản phẩm thiếu thông tin chính, chưa nêu nguồn hoặc chưa tham gia nhiệm vụ.</li><li><strong>Đạt:</strong> hoàn thành yêu cầu cơ bản, có nguồn/hình ảnh phù hợp và trình bày được ý chính.</li><li><strong>Khá:</strong> biết kiểm chứng nguồn, hợp tác tốt, sản phẩm rõ thông điệp và có điều chỉnh theo phản hồi.</li><li><strong>Tốt:</strong> lập luận có căn cứ, dùng công cụ số/AI có trách nhiệm, đề xuất giải pháp hoặc hành động khả thi.</li></ul></article>' +
    '<article class="card accent-gold"><h3>Minh chứng cần thu</h3><ul class="plain-list"><li>Sản phẩm: ' + esc(state.plan.product) + '.</li><li>Bảng kiểm nguồn, ghi chú nhóm, nhật ký prompt nếu có dùng AI.</li><li>Phiếu tự đánh giá: em đã làm gì, học được gì, cần cải thiện gì.</li>' + integrationCriteria + '</ul></article>' +
    '</div></section>';
}

function renderAi() {
  return '<section class="result-section"><h2>Prompt AI</h2><p>Dùng prompt này để tinh chỉnh kế hoạch. Giáo viên cần kiểm tra lại tính chính xác, phù hợp độ tuổi và quy định của nhà trường.</p><pre class="prompt-box">' + esc(buildPrompt()) + '</pre><button class="secondary-button" type="button" data-copy-prompt="1">Sao chép prompt</button></section>';
}

function renderFramework() {
  const cards = TT02.domains.map(function(domain) {
    const comps = domain.competencies.map(function(comp) { return '<li><strong>' + comp.code + ' ' + comp.name + ':</strong> ' + comp.action + '</li>'; }).join('');
    return '<article class="card accent-' + domain.color + '"><h3>' + domain.code + '. ' + domain.title + '</h3><p>' + domain.desc + '</p><ul class="plain-list">' + comps + '</ul></article>';
  }).join('');
  return '<section class="result-section"><h2>Khung NLS theo TT 02/2025</h2><p>Nguồn tham khảo: <a href="' + TT02.source + '" target="_blank" rel="noreferrer">Thông tư 02/2025/TT-BGDĐT</a>. Cấu trúc gồm 6 miền, 24 năng lực thành phần, 4 trình độ và 8 bậc.</p><div class="grid two">' + cards + '</div></section>';
}


function renderSkills() {
  const categories = ['all'].concat(Array.from(new Set(APP_SKILLS_SAFE.map(function(skill) { return skill.category; }))));
  const options = categories.map(function(category) {
    const label = category === 'all' ? 'Tất cả skill' : category;
    return '<option value="' + esc(category) + '">' + esc(label) + '</option>';
  }).join('');
  const cards = APP_SKILLS_SAFE.map(function(skill) {
    const domainNames = (skill.domains || []).map(function(id) { return getDomainName(id); }).filter(Boolean);
    const integrationNames = (skill.integrations || []).map(function(id) { return getIntegrationName(id); }).filter(Boolean);
    return '<article class="card skill-card accent-' + skill.color + '" data-skill-card data-category="' + esc(skill.category) + '">' +
      '<div class="skill-head"><span class="skill-badge">' + esc(skill.badge) + '</span><div><h3>' + esc(skill.title) + '</h3><p>' + esc(skill.role) + '</p></div></div>' +
      '<div class="meta-row"><span class="pill">' + esc(skill.category) + '</span>' + domainNames.slice(0, 3).map(function(name) { return '<span class="pill">' + esc(name) + '</span>'; }).join('') + '</div>' +
      '<p><strong>Dùng khi:</strong> ' + esc(skill.recommendedFor) + '</p>' +
      '<div class="skill-columns"><div><h4>Đầu ra</h4><ul class="compact-list">' + skill.outputs.map(function(item) { return '<li>' + esc(item) + '</li>'; }).join('') + '</ul></div>' +
      '<div><h4>Kiểm tra</h4><ul class="compact-list">' + skill.checks.map(function(item) { return '<li>' + esc(item) + '</li>'; }).join('') + '</ul></div></div>' +
      '<details class="skill-details"><summary>Quy trình và prompt</summary><ol class="step-list">' + skill.workflow.map(function(item) { return '<li>' + esc(item) + '</li>'; }).join('') + '</ol><pre class="skill-prompt">' + esc(buildSkillPrompt(skill)) + '</pre></details>' +
      '<div class="skill-actions"><button class="secondary-button" type="button" data-apply-skill="' + esc(skill.id) + '">Áp dụng skill</button><button class="utility-button" type="button" data-copy-skill="' + esc(skill.id) + '">Sao chép prompt</button></div>' +
      '<div class="meta-row">' + integrationNames.map(function(name) { return '<span class="pill">' + esc(name) + '</span>'; }).join('') + '</div>' +
    '</article>';
  }).join('');
  return '<section class="result-section"><h2>Bộ skill cho app</h2><p>Mỗi skill là một mô-đun chuyên môn để giáo viên áp dụng nhanh vào kế hoạch. Nút áp dụng sẽ tự chọn miền NLS và nội dung tích hợp liên quan.</p>' +
    '<div class="skill-toolbar"><input id="skillSearch" type="search" placeholder="Tìm skill..." /><select id="skillFilter">' + options + '</select></div>' +
    '<div class="grid two" id="skillGrid">' + cards + '</div></section>';
}

function buildSkillPrompt(skill) {
  const plan = state.plan;
  const domainLines = (skill.domains || [])
    .map(function(id) { return '- ' + getDomainName(id); })
    .filter(function(value) { return value; })
    .join('\n');
  const integrationLines = (skill.integrations || [])
    .map(function(id) { return '- ' + getIntegrationName(id); })
    .filter(function(value) { return value; })
    .join('\n');
  const outputLines = skill.outputs.map(function(item) { return '- ' + item; }).join('\n');
  const checkLines = skill.checks.map(function(item) { return '- ' + item; }).join('\n');
  return [
    'Vai trò skill: ' + skill.title,
    'Nhiệm vụ: ' + skill.prompt,
    '',
    'Bối cảnh bài học:',
    '- Cấp/lớp: ' + plan.level.label + ', ' + plan.grade,
    '- Môn/hoạt động: ' + plan.subject,
    '- Chủ đề: ' + plan.topic,
    '- Thời lượng: ' + plan.duration,
    '- Sản phẩm học tập: ' + plan.product,
    '- Mức tích hợp: ' + plan.depth,
    '- Nhu cầu hòa nhập: ' + (plan.learnerNeeds || 'cần phương án hỗ trợ đa dạng'),
    '',
    'Miền NLS nên dùng:',
    domainLines || '- Không bắt buộc',
    '',
    'Nội dung tích hợp liên quan:',
    integrationLines || '- Không bắt buộc',
    '',
    'Đầu ra cần tạo:',
    outputLines,
    '',
    'Ràng buộc an toàn/chất lượng:',
    checkLines
  ].join('\n');
}
function getSkillById(id) {
  return APP_SKILLS_SAFE.find(function(skill) { return skill.id === id; });
}

function getDomainName(id) {
  const domain = TT02.domains.find(function(item) { return item.id === id; });
  return domain ? domain.title : '';
}

function getIntegrationName(id) {
  return INTEGRATIONS[id] ? INTEGRATIONS[id].label : '';
}

function applySkill(skillId) {
  const skill = getSkillById(skillId);
  if (!skill) return;
  Array.from(document.querySelectorAll('input[name="domain"]')).forEach(function(input) {
    input.checked = (skill.domains || []).indexOf(input.value) >= 0;
  });
  Array.from(document.querySelectorAll('input[name="integration"]')).forEach(function(input) {
    input.checked = (skill.integrations || []).indexOf(input.value) >= 0;
  });
  generatePlan();
  state.tab = 'skills';
  Array.from(document.querySelectorAll('.tab')).forEach(function(item) { item.classList.toggle('is-active', item.dataset.tab === 'skills'); });
  renderOutput();
  showToast('Đã áp dụng skill: ' + skill.title + '.');
}

function filterSkills(query, category) {
  const q = stripMarks(query.toLowerCase());
  Array.from(document.querySelectorAll('[data-skill-card]')).forEach(function(card) {
    const okCategory = category === 'all' || card.dataset.category === category;
    const okText = stripMarks(card.textContent.toLowerCase()).indexOf(q) >= 0;
    card.style.display = okCategory && okText ? '' : 'none';
  });
}

function renderLibrary() {
  const options = '<option value="all">Tất cả</option>' + Object.keys(INTEGRATIONS).map(function(key) { return '<option value="' + key + '">' + INTEGRATIONS[key].label + '</option>'; }).join('') + '<option value="ai">AI/NLS</option><option value="data">Dữ liệu/Nguồn</option>';
  const cards = LIBRARY.map(function(item) {
    const label = INTEGRATIONS[item.type] ? INTEGRATIONS[item.type].label : item.type.toUpperCase();
    const color = INTEGRATIONS[item.type] ? INTEGRATIONS[item.type].color : 'blue';
    return '<article class="card accent-' + color + '" data-library-card data-type="' + item.type + '"><h3>' + item.title + '</h3><p>' + item.text + '</p><div class="meta-row"><span class="pill">' + item.level + '</span><span class="pill">' + label + '</span></div></article>';
  }).join('');
  return '<section class="result-section"><h2>Thư viện học liệu</h2><div class="library-tools"><input id="librarySearch" type="search" placeholder="Tìm học liệu..." /><select id="libraryFilter">' + options + '</select></div><div class="grid three" id="libraryGrid">' + cards + '</div></section>';
}

function buildPrompt() {
  const domainLines = state.plan.domains.map(function(domain) {
    return '- ' + domain.title + ': ' + domain.competencies.map(function(comp) { return comp.code + ' ' + comp.name; }).join('; ');
  }).join('\n');
  const integrationLines = state.plan.integrations.map(function(item) { return '- ' + item.label + ': ' + item.data[0]; }).join('\n');
  return [
    'Bạn là trợ lý thiết kế kế hoạch bài dạy theo Chương trình GDPT Việt Nam.',
    '',
    'Hãy tạo kế hoạch bài dạy tích hợp với thông tin sau:',
    '- Văn bản nền: Thông tư 02/2025/TT-BGDĐT về Khung năng lực số cho người học.',
    '- Cấp/lớp: ' + state.plan.level.label + ', ' + state.plan.grade + '.',
    '- Môn/hoạt động: ' + state.plan.subject + '.',
    '- Chủ đề: ' + state.plan.topic + '.',
    '- Thời lượng: ' + state.plan.duration + '.',
    '- Mức tích hợp: ' + state.plan.depth + '.',
    '- Sản phẩm học tập: ' + state.plan.product + '.',
    '- Nhu cầu hòa nhập: ' + (state.plan.learnerNeeds || 'cần phương án hỗ trợ đa dạng') + '.',
    '',
    'Miền NLS cần tích hợp:',
    domainLines || '- Chưa chọn',
    '',
    'Nội dung giáo dục tích hợp:',
    integrationLines || '- Chưa chọn',
    '',
    'Yêu cầu đầu ra: mục tiêu, tiến trình, hoạt động, điều chỉnh hòa nhập, rubric, minh chứng, lưu ý an toàn số, đạo đức AI, bảo vệ dữ liệu cá nhân và không kỳ thị. Nếu thiếu dữ liệu, hãy nêu rõ thông tin giáo viên cần bổ sung.'
  ].join('\n');
}

function updateSceneField(field, value) {
  const scene = currentScene();
  if (!scene) return;
  if (field === 'duration') {
    scene.duration = Math.max(10, Math.min(300, Number(value) || 10));
  } else if (field === 'type') {
    scene.type = value;
    if (value === 'quiz' && !scene.question) scene.question = buildQuestion(state.plan);
  } else {
    scene[field] = value;
  }
  renderOutput();
}

function updateQuestionField(field, value) {
  const scene = currentScene();
  if (!scene) return;
  if (!scene.question) scene.question = buildQuestion(state.plan);
  if (field === 'kind') {
    scene.question = Object.assign(createQuestionByKind(value), {
      prompt: scene.question.prompt || createQuestionByKind(value).prompt,
      feedback: scene.question.feedback || createQuestionByKind(value).feedback
    });
  } else if (field === 'answer') {
    scene.question.answer = Number(value) || 0;
  } else if (field === 'points' || field === 'ratingMax') {
    scene.question[field] = Number(value) || 0;
  } else {
    scene.question[field] = value;
  }
  renderOutput();
}

function updateChoice(index, value) {
  const scene = currentScene();
  if (!scene) return;
  if (!scene.question) scene.question = buildQuestion(state.plan);
  scene.question.choices[index] = value;
  renderOutput();
}

function toggleQuestionAnswer(index, checked) {
  const scene = currentScene();
  if (!scene) return;
  if (!scene.question) scene.question = buildQuestion(state.plan);
  if (!Array.isArray(scene.question.answers)) scene.question.answers = [];
  if (checked && scene.question.answers.indexOf(index) < 0) scene.question.answers.push(index);
  if (!checked) scene.question.answers = scene.question.answers.filter(function(item) { return item !== index; });
  renderOutput();
}

function updateQuestionBlank(index, value) {
  const scene = currentScene();
  if (!scene) return;
  if (!scene.question) scene.question = buildQuestion(state.plan);
  if (!Array.isArray(scene.question.blanks)) scene.question.blanks = [];
  scene.question.blanks[index] = value;
  renderOutput();
}

function updateQuestionSequence(index, value) {
  const scene = currentScene();
  if (!scene) return;
  if (!scene.question) scene.question = buildQuestion(state.plan);
  if (!Array.isArray(scene.question.sequence)) scene.question.sequence = [];
  scene.question.sequence[index] = value;
  renderOutput();
}

function addScene() {
  const nextIndex = state.selectedScene + 1;
  state.lesson.scenes.splice(nextIndex, 0, {
    id: 'scene-' + Date.now(),
    type: 'content',
    title: 'Cảnh mới',
    layout: 'Nội dung ngắn + tương tác',
    content: 'Nhập nội dung học tập hoặc nhiệm vụ cho cảnh này.',
    narration: narrationLine('Dẫn dắt học sinh vào nhiệm vụ của cảnh mới.', state.plan),
    visual: 'Gợi ý hình ảnh, video, âm thanh hoặc tài liệu đính kèm',
    duration: 60
  });
  state.selectedScene = nextIndex;
  renderOutput();
  showToast('Đã thêm slide mới.');
}

function insertSceneType(type) {
  const labels = {
    content: 'Nội dung mới',
    activity: 'Tương tác mới',
    quiz: 'Quiz mới'
  };
  addScene();
  const scene = currentScene();
  if (!scene) return;
  scene.type = type;
  scene.title = labels[type] || 'Slide mới';
  if (type === 'quiz') {
    scene.content = 'Chọn đáp án phù hợp nhất với mục tiêu bài học.';
    scene.visual = 'Thẻ câu hỏi, lựa chọn trả lời và phản hồi';
    scene.question = buildQuestion(state.plan);
  }
  renderOutput();
  showToast('Đã thêm slide ' + sceneTypeLabel(type) + '.');
}

function addQuestionScene(kind) {
  if (['settings', 'submit', 'action', 'info', 'prev', 'next'].indexOf(kind) >= 0) {
    applyQuestionCommand(kind);
    return;
  }
  if (kind === 'bank' || kind === 'random' || kind === 'report') {
    addSpecialQuestionSlide(kind);
    return;
  }
  addScene();
  const scene = currentScene();
  if (!scene) return;
  const question = createQuestionByKind(kind);
  scene.type = 'quiz';
  scene.title = question.typeLabel;
  scene.layout = 'Câu hỏi tương tác';
  scene.content = question.prompt;
  scene.visual = 'Dạng câu hỏi: ' + question.typeLabel;
  scene.narration = narrationLine('Mời học sinh trả lời câu hỏi dạng ' + question.typeLabel.toLowerCase() + '.', state.plan);
  scene.duration = Math.max(45, Number(scene.duration) || 60);
  scene.question = question;
  renderOutput();
  showToast('Đã thêm câu hỏi: ' + question.typeLabel + '.');
}

function addSpecialQuestionSlide(kind) {
  const meta = QUESTION_TYPES[kind] || QUESTION_TYPES.bank;
  addScene();
  const scene = currentScene();
  if (!scene) return;
  scene.type = kind === 'report' ? 'summary' : 'quiz';
  scene.title = meta.label;
  scene.layout = 'Slide đặc biệt';
  scene.content = kind === 'report'
    ? 'Tổng hợp điểm, trạng thái hoàn thành và phản hồi sau bài học.'
    : 'Cấu hình nguồn câu hỏi để app chọn hoặc trộn câu hỏi khi xuất bản.';
  scene.visual = 'Dạng slide đặc biệt: ' + meta.label;
  scene.narration = narrationLine('Thiết lập ' + meta.label.toLowerCase() + ' cho bài học.', state.plan);
  if (kind !== 'report') scene.question = createQuestionByKind('single');
  renderOutput();
  showToast('Đã thêm ' + meta.label + '.');
}

function applyQuestionCommand(kind) {
  const scene = currentScene();
  if (!scene) return;
  if (scene.type !== 'quiz') {
    scene.type = 'quiz';
    scene.question = createQuestionByKind('single');
  }
  if (!scene.question) scene.question = createQuestionByKind('single');
  const commands = {
    settings: ['Cài đặt câu hỏi', 'Trộn đáp án, giới hạn lượt làm và điểm đạt theo cấu hình hiện tại.'],
    submit: ['Sự kiện', 'On Submit: chấm điểm, hiện phản hồi, ghi nhận LMS.'],
    action: ['Hành động nâng cao', 'Nếu đúng: đi tiếp; nếu sai: hiện gợi ý hoặc cho làm lại.'],
    info: ['Thông báo', 'Hiện thông báo trước/sau câu hỏi.'],
    prev: ['Slide câu hỏi trước', 'Thêm điều hướng quay lại câu hỏi trước.'],
    next: ['Slide câu hỏi tiếp theo', 'Thêm điều hướng tới câu hỏi tiếp theo.']
  };
  const command = commands[kind] || commands.settings;
  scene.question.command = command[0];
  scene.question.commandNote = command[1];
  renderOutput();
  showToast('Đã áp dụng: ' + command[0] + '.');
}

function addSceneObject(type) {
  const scene = currentScene();
  if (!scene) return;
  const meta = INTERACTION_OBJECTS[type] || INTERACTION_OBJECTS.button;
  const objects = ensureSceneObjects(scene);
  objects.push({
    id: 'object-' + Date.now() + '-' + objects.length,
    type: type in INTERACTION_OBJECTS ? type : 'button',
    label: meta.label,
    text: meta.text,
    action: meta.action
  });
  if (scene.type === 'content') scene.type = 'activity';
  renderOutput();
  showToast('Đã thêm ' + meta.label + ' vào slide hiện tại.');
}

function updateSceneObject(index, field, value) {
  const scene = currentScene();
  const objects = ensureSceneObjects(scene);
  const object = objects[index];
  if (!object || ['label', 'text', 'action'].indexOf(field) < 0) return;
  object[field] = value;
  renderOutput();
}

function deleteSceneObject(index) {
  const scene = currentScene();
  const objects = ensureSceneObjects(scene);
  if (index < 0 || index >= objects.length) return;
  objects.splice(index, 1);
  renderOutput();
}

function handleRibbonTab(tabName) {
  state.ribbonTab = tabName;
  Array.from(document.querySelectorAll('[data-ribbon-tab]')).forEach(function(button) {
    button.classList.toggle('is-active', button.dataset.ribbonTab === tabName);
  });
  const groupMap = {
    file: 'file',
    slide: 'slide',
    insert: 'insert',
    question: 'question-basic',
    design: 'design-themes',
    transition: 'transition-effects',
    publish: 'publish'
  };
  if (tabName === 'design') {
    highlightRibbonGroup('design-themes');
    showToast('Chọn mẫu, màu, font, nền hoặc kích cỡ slide trong nhóm Thiết kế.');
    return;
  }
  if (tabName === 'config') {
    setActiveTab('config');
    if (history.replaceState) history.replaceState(null, '', '#config');
    renderOutput();
    showToast('Đã mở bảng Cấu hình.');
    return;
  }
  if (tabName === 'guide') {
    setActiveTab('guide');
    if (history.replaceState) history.replaceState(null, '', '#guide');
    renderOutput();
    showToast('Đã mở bảng Hướng dẫn.');
    return;
  }
  if (tabName === 'view') {
    state.previewIndex = state.selectedScene;
    state.previewAnswer = null;
    setActiveTab('preview');
    if (history.replaceState) history.replaceState(null, '', '#preview');
    renderOutput();
    showToast('Đã mở chế độ Xem thử.');
    return;
  }
  if (tabName === 'ai') {
    state.aiPanelOpen = true;
    setActiveTab('studio');
    if (history.replaceState) history.replaceState(null, '', '#studio');
    renderOutput();
    highlightRibbonGroup('ai-tools');
    showToast('Đã mở Trợ lý AI trong Studio.');
    return;
  }
  if (tabName === 'transition') {
    highlightRibbonGroup('transition-effects');
    showToast('Chọn hiệu ứng, hướng chuyển, thời lượng hiệu ứng hoặc tự chuyển slide trong nhóm Chuyển tiếp.');
    return;
  }
  if (tabName === 'animation') {
    const scene = currentScene();
    if (scene) scene.animation = scene.animation || 'Appear';
    const animationSelect = document.querySelector('[data-scene-field="animation"]');
    if (animationSelect) animationSelect.value = scene && scene.animation ? scene.animation : 'Appear';
    highlightRibbonGroup('insert');
    showToast('Đã chọn Hoạt hình: Appear cho nội dung slide.');
    return;
  }
  highlightRibbonGroup(groupMap[tabName] || 'insert');
}

function applyTransitionEffect(effectKey) {
  const scene = currentScene();
  if (!scene) return;
  const item = TRANSITION_EFFECTS[effectKey] || TRANSITION_EFFECTS.none;
  scene.transitionKey = effectKey in TRANSITION_EFFECTS ? effectKey : 'none';
  scene.transition = item.effect;
  scene.transitionEffectDuration = Number(scene.transitionEffectDuration || 0.7);
  scene.transitionDirection = scene.transitionDirection || 'auto';
  if (scene.autoAdvance === undefined) scene.autoAdvance = true;
  renderOutput();
  showToast('Đã chọn chuyển tiếp: ' + item.label + '.');
}

function updateTransitionField(field, value, checked) {
  const scene = currentScene();
  if (!scene) return;
  if (field === 'transition') {
    scene.transition = value || 'None';
    scene.transitionKey = transitionKeyFromEffect(scene.transition);
  } else if (field === 'transitionDirection') {
    scene.transitionDirection = value || 'auto';
  } else if (field === 'transitionEffectDuration') {
    scene.transitionEffectDuration = clampNumber(value, 0, 10, 0.7);
  } else if (field === 'duration') {
    scene.duration = clampNumber(value, 5, 300, scene.duration || 30);
  } else if (field === 'autoAdvance') {
    scene.autoAdvance = Boolean(checked);
  }
  renderOutput();
}

function clampNumber(value, min, max, fallback) {
  const number = Number(value);
  if (!Number.isFinite(number)) return fallback;
  return Math.max(min, Math.min(max, number));
}

function ensureAiPanel() {
  state.aiPanelOpen = true;
  state.ribbonTab = 'ai';
}

function addAiMessage(role, text) {
  state.aiMessages.push({ role: role, text: text });
  if (state.aiMessages.length > 12) state.aiMessages = state.aiMessages.slice(-12);
}

async function performAiTool(toolKey) {
  const tool = AI_TOOLS[toolKey] || AI_TOOLS.assistant;
  ensureAiPanel();
  if (toolKey === 'assistant') {
    addAiMessage('assistant', 'Tôi đã sẵn sàng hỗ trợ bài giảng hiện tại. Bạn có thể yêu cầu: tạo câu hỏi, rút gọn slide, viết phụ đề, dịch sang tiếng Anh hoặc đề xuất hoạt động tương tác.');
  } else if (toolKey === 'quiz') {
    if (!(await addGeminiGeneratedQuestion())) addAiGeneratedQuestion();
  } else if (toolKey === 'caption') {
    if (!(await addGeminiCaption())) addAiCaption();
  } else if (toolKey === 'image' || toolKey === 'editImage') {
    if (!(await addGeminiImageSuggestion(toolKey))) addAiImageSuggestion(toolKey);
  } else if (toolKey === 'voice') {
    if (!(await addGeminiVoiceScript())) addAiVoiceScript();
  } else if (toolKey === 'autoLesson' || toolKey === 'translateText') {
    if (!(await addGeminiTranslation())) addAiTranslation();
  } else if (toolKey === 'usage') {
    addAiMessage('assistant', buildAiUsageSummary());
  } else if (toolKey === 'credit') {
    addAiMessage('assistant', 'Nếu cấu hình GEMINI_API_KEY trên Vercel, lượt dùng sẽ được tính theo tài khoản Google AI Studio/Google Cloud của bạn. App không lưu hoặc hiển thị đầy đủ API key.');
  } else if (toolKey === 'service') {
    await checkGeminiService();
  } else if (toolKey === 'mcp') {
    addAiMessage('assistant', 'Kết nối MCP có thể dùng để gọi kho học liệu, ngân hàng câu hỏi, dịch vụ TTS hoặc LRS. Hiện bản này đã chuẩn bị giao diện, chưa gửi dữ liệu ra ngoài.');
  } else {
    addAiMessage('assistant', tool.hint);
  }
  renderOutput();
  showToast('AI: ' + tool.label + '.');
}

function currentAiContext() {
  const scene = currentScene();
  return [
    'Ngon ngu tra loi: Tieng Viet.',
    'Chu de bai giang: ' + (state.plan ? state.plan.topic : ''),
    'Cap/lop: ' + (state.plan && state.plan.level ? state.plan.level.label : '') + ' - ' + (state.plan ? state.plan.grade : ''),
    'Mon hoc: ' + (state.plan ? state.plan.subject : ''),
    'Slide hien tai: ' + (scene ? scene.title : ''),
    'Noi dung slide: ' + (scene ? scene.content : ''),
    'Loi dan: ' + (scene ? scene.narration : ''),
    'Media/ghi chu: ' + (scene ? scene.visual : '')
  ].join('\n');
}

async function requestGeminiText(prompt, options) {
  try {
    const response = await fetch('/api/gemini', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(Object.assign({
        model: state.geminiModel,
        prompt: prompt
      }, options || {}))
    });
    const data = await response.json().catch(function() { return {}; });
    if (!response.ok || !data.ok) {
      if (data.error === 'GOOGLE_API_KEY_MISSING') {
        addAiMessage('assistant', 'Chua cau hinh Google API key tren server. App se dung AI noi bo tam thoi. Khi deploy Vercel, them bien moi truong GEMINI_API_KEY hoac GOOGLE_AI_API_KEY.');
      } else {
        addAiMessage('assistant', 'Chua goi duoc Google Gemini: ' + (data.message || data.error || 'loi khong xac dinh') + '. App se dung ket qua noi bo.');
      }
      return null;
    }
    addAiMessage('assistant', 'Da nhan ket qua tu Google Gemini (' + data.model + ').');
    return data.text || '';
  } catch (error) {
    addAiMessage('assistant', 'Khong ket noi duoc /api/gemini. App se dung AI noi bo. Chi tiet: ' + error.message);
    return null;
  }
}

async function checkGeminiService() {
  try {
    const response = await fetch('/api/gemini');
    const data = await response.json();
    addAiMessage('assistant', data.configured
      ? 'Google Gemini API da cau hinh tren server. Key: ' + data.key + '. Model mac dinh: ' + data.defaultModel + '.'
      : 'Chua cau hinh Google Gemini API key tren server. Hay them GEMINI_API_KEY hoac GOOGLE_AI_API_KEY trong Vercel Environment Variables.');
  } catch (error) {
    addAiMessage('assistant', 'Chua kiem tra duoc /api/gemini: ' + error.message);
  }
  renderOutput();
}

async function addGeminiGeneratedQuestion() {
  const text = await requestGeminiText([
    'Hay tao 1 cau hoi trac nghiem 4 lua chon tu slide hien tai.',
    'Tra ve dung JSON, khong markdown, theo mau:',
    '{"prompt":"...","choices":["...","...","...","..."],"answer":0,"feedback":"..."}',
    currentAiContext()
  ].join('\n'), { maxOutputTokens: 1200, temperature: 0.3 });
  if (!text) return false;
  const parsed = parseJsonFromText(text);
  if (!parsed || !Array.isArray(parsed.choices)) {
    addAiMessage('assistant', text);
    return true;
  }
  const source = currentScene();
  addQuestionScene('single');
  const scene = currentScene();
  scene.title = 'Câu hỏi Google AI: ' + (source ? source.title : state.plan.topic);
  scene.content = parsed.prompt || scene.title;
  scene.question = {
    kind: 'single',
    prompt: parsed.prompt || scene.content,
    choices: parsed.choices.slice(0, 4),
    answer: Number(parsed.answer) || 0,
    points: 1,
    feedback: parsed.feedback || 'Hãy đối chiếu lại nội dung slide.'
  };
  addAiMessage('assistant', 'Đã tạo slide câu hỏi bằng Google Gemini.');
  return true;
}

async function addGeminiCaption() {
  const text = await requestGeminiText('Viet phu de ngan gon, de doc, toi da 2 cau cho slide nay.\n' + currentAiContext(), { maxOutputTokens: 500, temperature: 0.3 });
  if (!text) return false;
  const scene = currentScene();
  if (!scene) return false;
  ensureSceneObjects(scene).push({
    id: 'gemini-caption-' + Date.now(),
    type: 'caption',
    label: 'Phụ đề Google AI',
    text: text,
    action: 'Hiển thị phụ đề khi phát slide'
  });
  addAiMessage('assistant', 'Đã thêm phụ đề từ Google Gemini vào slide hiện tại.');
  return true;
}

async function addGeminiImageSuggestion(toolKey) {
  const prompt = toolKey === 'editImage'
    ? 'Hay viet goi y chinh sua hinh anh/boc cuc cho slide, gom mau sac, trong tam va mo ta thay the.\n'
    : 'Hay tao prompt hinh anh minh hoa cho slide, phu hop giao duc, an toan, ro boi canh.\n';
  const text = await requestGeminiText(prompt + currentAiContext(), { maxOutputTokens: 700, temperature: 0.6 });
  if (!text) return false;
  const scene = currentScene();
  if (!scene) return false;
  ensureSceneObjects(scene).push({
    id: 'gemini-image-' + Date.now(),
    type: 'image',
    label: toolKey === 'editImage' ? 'Chỉnh ảnh Google AI' : 'Prompt ảnh Google AI',
    text: text,
    action: 'Dùng làm prompt hình ảnh hoặc ghi chú thiết kế'
  });
  addAiMessage('assistant', 'Đã thêm gợi ý hình ảnh từ Google Gemini vào slide.');
  return true;
}

async function addGeminiVoiceScript() {
  const text = await requestGeminiText('Viet kich ban giong doc than thien, cham rai, cho slide nay. Toi da 90 tu.\n' + currentAiContext(), { maxOutputTokens: 700, temperature: 0.4 });
  if (!text) return false;
  const scene = currentScene();
  if (!scene) return false;
  ensureSceneObjects(scene).push({
    id: 'gemini-voice-' + Date.now(),
    type: 'audio',
    label: 'Giọng đọc Google AI',
    text: text,
    action: 'Dùng cho giọng nói đám mây/TTS'
  });
  addAiMessage('assistant', 'Đã tạo kịch bản giọng đọc bằng Google Gemini.');
  return true;
}

async function addGeminiTranslation() {
  const text = await requestGeminiText('Dich slide hien tai sang tieng Anh. Giu cau ngan, dung cho e-learning.\n' + currentAiContext(), { maxOutputTokens: 1200, temperature: 0.2 });
  if (!text) return false;
  addAiMessage('assistant', text);
  return true;
}

function parseJsonFromText(text) {
  try {
    return JSON.parse(text);
  } catch (error) {
    const match = String(text || '').match(/\{[\s\S]*\}/);
    if (!match) return null;
    try { return JSON.parse(match[0]); } catch (innerError) { return null; }
  }
}

function addAiGeneratedQuestion() {
  const source = currentScene();
  const prompt = 'Theo slide "' + (source ? source.title : state.plan.topic) + '", ý nào là quan trọng nhất?';
  addQuestionScene('single');
  const scene = currentScene();
  scene.title = 'Câu hỏi AI: ' + (source ? source.title : state.plan.topic);
  scene.content = prompt;
  scene.question = {
    kind: 'single',
    prompt: prompt,
    choices: [
      source && source.content ? source.content.slice(0, 110) : 'Nêu đúng ý chính của bài học.',
      'Chỉ ghi nhớ hiệu ứng trình chiếu.',
      'Bỏ qua nguồn và minh chứng.',
      'Không cần phản hồi sau hoạt động.'
    ],
    answer: 0,
    points: 1,
    feedback: 'Đúng. Câu trả lời cần bám vào ý chính, nguồn và mục tiêu học tập.'
  };
  addAiMessage('assistant', 'Đã tạo một slide câu hỏi trắc nghiệm từ nội dung slide hiện tại. Bạn có thể chỉnh đáp án và phản hồi trong bảng Properties.');
}

function addAiCaption() {
  const scene = currentScene();
  if (!scene) return;
  const objects = ensureSceneObjects(scene);
  objects.push({
    id: 'ai-caption-' + Date.now(),
    type: 'caption',
    label: 'Phụ đề AI',
    text: scene.narration || scene.content || 'Phụ đề ngắn cho lời dẫn của slide.',
    action: 'Hiển thị phụ đề khi phát slide'
  });
  addAiMessage('assistant', 'Đã thêm phụ đề AI vào slide hiện tại. Nội dung phụ đề lấy từ lời dẫn hoặc phần nội dung chính.');
}

function addAiImageSuggestion(toolKey) {
  const scene = currentScene();
  if (!scene) return;
  const objects = ensureSceneObjects(scene);
  const text = toolKey === 'editImage'
    ? 'Gợi ý chỉnh hình: tăng tương phản, thêm vùng nhấn, mô tả thay thế rõ cho người học.'
    : 'Gợi ý ảnh minh họa: ' + (scene.visual || scene.title || state.plan.topic);
  objects.push({
    id: 'ai-image-' + Date.now(),
    type: 'image',
    label: toolKey === 'editImage' ? 'Gợi ý chỉnh ảnh AI' : 'Gợi ý hình ảnh AI',
    text: text,
    action: 'Dùng làm prompt hình ảnh hoặc ghi chú thiết kế'
  });
  addAiMessage('assistant', 'Đã thêm một thẻ gợi ý hình ảnh vào slide hiện tại. Đây là prompt/ghi chú để giáo viên dùng khi tạo hoặc chỉnh ảnh.');
}

function addAiVoiceScript() {
  const scene = currentScene();
  if (!scene) return;
  const objects = ensureSceneObjects(scene);
  objects.push({
    id: 'ai-voice-' + Date.now(),
    type: 'audio',
    label: 'Kịch bản giọng đọc AI',
    text: scene.narration || ('Giới thiệu ngắn về ' + scene.title + '.'),
    action: 'Dùng cho giọng nói đám mây/TTS'
  });
  addAiMessage('assistant', 'Đã tạo kịch bản giọng đọc từ lời dẫn của slide. Khi có dịch vụ TTS, phần này có thể chuyển thành âm thanh.');
}

function addAiTranslation() {
  const scene = currentScene();
  if (!scene) return;
  const draft = [
    'Bản dịch nháp cho slide:',
    '- Title: ' + simpleTranslateToEnglish(scene.title),
    '- Content: ' + simpleTranslateToEnglish(scene.content),
    '- Narration: ' + simpleTranslateToEnglish(scene.narration || scene.content)
  ].join('\n');
  addAiMessage('assistant', draft);
}

function buildAiUsageSummary() {
  const lesson = state.lesson || { scenes: [] };
  const scenes = lesson.scenes || [];
  const quizCount = scenes.filter(function(scene) { return scene.type === 'quiz'; }).length;
  const objectCount = scenes.reduce(function(sum, scene) { return sum + ensureSceneObjects(scene).length; }, 0);
  return 'Thống kê bài giảng hiện tại: ' + scenes.length + ' slide, ' + quizCount + ' slide câu hỏi, ' + objectCount + ' đối tượng tương tác, thời lượng ' + totalLessonTime(lesson) + '.';
}

async function handleAiPrompt(text) {
  const clean = String(text || '').trim();
  if (!clean) return;
  ensureAiPanel();
  addAiMessage('user', clean);
  const normalized = stripMarks(clean.toLowerCase());
  if (normalized.indexOf('cau hoi') >= 0 || normalized.indexOf('quiz') >= 0) {
    if (!(await addGeminiGeneratedQuestion())) addAiGeneratedQuestion();
  } else if (normalized.indexOf('dich') >= 0 || normalized.indexOf('english') >= 0) {
    if (!(await addGeminiTranslation())) addAiTranslation();
  } else if (normalized.indexOf('phu de') >= 0 || normalized.indexOf('caption') >= 0) {
    if (!(await addGeminiCaption())) addAiCaption();
  } else if (normalized.indexOf('hinh') >= 0 || normalized.indexOf('anh') >= 0) {
    if (!(await addGeminiImageSuggestion('image'))) addAiImageSuggestion('image');
  } else {
    const answer = await requestGeminiText('Tra loi yeu cau sau dua tren bai giang hien tai: ' + clean + '\n' + currentAiContext(), { maxOutputTokens: 1200, temperature: 0.5 });
    addAiMessage('assistant', answer || buildAiLessonAnswer(clean));
  }
  renderOutput();
}

function buildAiLessonAnswer(question) {
  const scene = currentScene();
  return 'Gợi ý trả lời cho yêu cầu "' + question + '": slide hiện tại là "' + (scene ? scene.title : state.plan.topic) + '". Nên giữ mục tiêu học tập rõ, thêm một tương tác kiểm tra nhanh, có phản hồi đúng/sai và rà lại nguồn/hình ảnh trước khi xuất bản.';
}

function simpleTranslateToEnglish(text) {
  const value = String(text || '').trim();
  if (!value) return 'No content yet.';
  return '[Draft EN] ' + value;
}

function applyDesignTheme(themeKey) {
  const theme = DESIGN_THEMES[themeKey] || DESIGN_THEMES.clean;
  const previous = currentDesign();
  state.lesson.design = Object.assign({}, previous, theme, {
    theme: themeKey,
    fontKey: previous.fontKey || 'sans',
    backgroundKey: previous.backgroundKey || 'plain',
    slideSize: previous.slideSize || 'wide',
    ratio: (SLIDE_SIZES[previous.slideSize || 'wide'] || SLIDE_SIZES.wide).ratio
  });
  renderOutput();
  showToast('Đã áp dụng chủ đề: ' + theme.label + '.');
}

function applyDesignOption(kind, key) {
  const design = currentDesign();
  if (kind === 'color') {
    const theme = DESIGN_THEMES[key] || DESIGN_THEMES.clean;
    state.lesson.design = Object.assign({}, design, { accent: theme.accent, theme: design.theme || 'clean' });
    showToast('Đã đổi màu nhấn.');
  }
  if (kind === 'font') {
    const font = DESIGN_FONTS[key] || DESIGN_FONTS.sans;
    state.lesson.design = Object.assign({}, design, { fontKey: key, font: font.font });
    showToast('Đã đổi font chữ: ' + font.label + '.');
  }
  if (kind === 'background') {
    const bg = DESIGN_BACKGROUNDS[key] || DESIGN_BACKGROUNDS.plain;
    state.lesson.design = Object.assign({}, design, { backgroundKey: key, panel: bg.panel });
    showToast('Đã đổi kiểu nền: ' + bg.label + '.');
  }
  if (kind === 'size') {
    const size = SLIDE_SIZES[key] || SLIDE_SIZES.wide;
    state.lesson.design = Object.assign({}, design, { slideSize: key, ratio: size.ratio });
    showToast('Đã đổi kích cỡ slide: ' + size.label + '.');
  }
  renderOutput();
}

function highlightRibbonGroup(groupName) {
  const group = document.querySelector('[data-ribbon-group="' + groupName + '"]');
  if (!group) return;
  group.scrollIntoView({ behavior: 'smooth', inline: 'center', block: 'nearest' });
  group.classList.add('is-highlighted');
  window.setTimeout(function() { group.classList.remove('is-highlighted'); }, 1200);
}

function duplicateScene() {
  const scene = currentScene();
  if (!scene) return;
  const clone = JSON.parse(JSON.stringify(scene));
  clone.id = 'scene-' + Date.now();
  clone.title = scene.title + ' (bản sao)';
  state.lesson.scenes.splice(state.selectedScene + 1, 0, clone);
  state.selectedScene += 1;
  renderOutput();
  showToast('Đã nhân bản slide.');
}

function deleteScene() {
  if (!state.lesson || state.lesson.scenes.length <= 1) {
    showToast('Bài giảng cần ít nhất một cảnh.');
    return;
  }
  state.lesson.scenes.splice(state.selectedScene, 1);
  state.selectedScene = Math.max(0, state.selectedScene - 1);
  state.previewIndex = Math.min(state.previewIndex, state.lesson.scenes.length - 1);
  renderOutput();
  showToast('Đã xóa slide.');
}

function moveScene(direction) {
  const target = state.selectedScene + direction;
  if (!state.lesson || target < 0 || target >= state.lesson.scenes.length) return;
  const scenes = state.lesson.scenes;
  const moved = scenes.splice(state.selectedScene, 1)[0];
  scenes.splice(target, 0, moved);
  state.selectedScene = target;
  renderOutput();
  showToast('Đã di chuyển slide.');
}

function rebuildLesson() {
  state.lesson = createLessonFromPlan(state.plan);
  state.lessonSignature = buildLessonSignature(state.plan);
  state.selectedScene = 0;
  state.previewIndex = 0;
  state.previewAnswer = null;
  renderOutput();
  showToast('Đã tạo lại kịch bản e-learning từ kế hoạch.');
}

function updatePptxStatus(inputEl, statusEl) {
  const sourceInput = inputEl && inputEl.files ? inputEl : pptxInput;
  const sourceStatus = statusEl || pptxStatus;
  const file = sourceInput && sourceInput.files ? sourceInput.files[0] : null;
  if (!sourceStatus) return;
  sourceStatus.textContent = file ? file.name : 'Chưa chọn file';
}

async function importPptxLesson(inputEl, statusEl) {
  const sourceInput = inputEl && inputEl.files ? inputEl : pptxInput;
  const sourceStatus = statusEl || pptxStatus;
  const file = sourceInput && sourceInput.files ? sourceInput.files[0] : null;
  if (!file) {
    showToast('Hãy chọn một file PPTX trước.');
    return;
  }
  if (!/\.pptx$/i.test(file.name)) {
    showToast('App chỉ nhận file .pptx.');
    return;
  }
  if (sourceStatus) sourceStatus.textContent = 'Đang đọc slide...';
  try {
    const slides = await readPptxSlides(file);
    if (!slides.length) {
      if (sourceStatus) sourceStatus.textContent = 'Không tìm thấy chữ trong PPTX';
      showToast('Không tìm thấy nội dung chữ trong file PPTX.');
      return;
    }
    applySlidesToLesson(slides, file.name);
    if (sourceStatus) sourceStatus.textContent = 'Đã nhập ' + slides.length + ' slide';
    showToast('Đã tạo bài giảng từ ' + slides.length + ' slide PPTX.');
  } catch (error) {
    if (sourceStatus) sourceStatus.textContent = 'Chưa đọc được PPTX';
    showToast('Chưa đọc được PPTX: ' + error.message);
  }
}

async function readPptxSlides(file) {
  const bytes = new Uint8Array(await file.arrayBuffer());
  const entries = readZipCentralDirectory(bytes);
  const entryMap = zipEntryMap(entries);
  const slideSize = await readPptxSlideSize(bytes, entryMap);
  const slideEntries = entries
    .filter(function(entry) { return /^ppt\/slides\/slide\d+\.xml$/i.test(entry.name); })
    .sort(function(a, b) { return slideNumber(a.name) - slideNumber(b.name); });
  const slides = [];
  for (let index = 0; index < slideEntries.length; index += 1) {
    const entry = slideEntries[index];
    const xmlBytes = await unzipEntry(bytes, entry);
    const xml = new TextDecoder('utf-8').decode(xmlBytes);
    const texts = extractPptxTexts(xml);
    const cleanTexts = texts.map(cleanSlideText).filter(Boolean);
    const rels = await readPptxRelationships(bytes, entryMap, entry.name);
    const imageIds = extractPptxImageRelIds(xml);
    const images = await readPptxImages(bytes, entryMap, entry.name, rels, imageIds);
    const imageMap = pptxImageMap(images);
    const objects = extractPptxObjects(xml, imageMap, slideSize);
    const transition = extractPptxTransition(xml);
    if (!cleanTexts.length && !images.length && !objects.length) continue;
    slides.push({
      number: slideNumber(entry.name),
      title: cleanTexts[0] || ('Slide ' + slideNumber(entry.name)),
      bullets: cleanTexts.slice(1),
      rawText: cleanTexts.join('\n'),
      images: images,
      objects: objects,
      size: slideSize,
      transition: transition
    });
  }
  return slides;
}

function zipEntryMap(entries) {
  const map = {};
  entries.forEach(function(entry) {
    map[String(entry.name || '').toLowerCase()] = entry;
  });
  return map;
}

async function readPptxRelationships(bytes, entryMap, slidePath) {
  const fileName = slidePath.split('/').pop();
  const relPath = slidePath.replace(/\/[^/]+$/, '/_rels/' + fileName + '.rels').toLowerCase();
  const entry = entryMap[relPath];
  if (!entry) return {};
  const xmlBytes = await unzipEntry(bytes, entry);
  const xml = new TextDecoder('utf-8').decode(xmlBytes);
  const doc = new DOMParser().parseFromString(xml, 'application/xml');
  const rels = {};
  Array.from(doc.getElementsByTagName('Relationship')).forEach(function(node) {
    const id = node.getAttribute('Id');
    const target = node.getAttribute('Target');
    if (id && target) rels[id] = target;
  });
  return rels;
}

async function readPptxSlideSize(bytes, entryMap) {
  const entry = entryMap['ppt/presentation.xml'];
  if (!entry) return { width: 12192000, height: 6858000 };
  const xmlBytes = await unzipEntry(bytes, entry);
  const xml = new TextDecoder('utf-8').decode(xmlBytes);
  const doc = new DOMParser().parseFromString(xml, 'application/xml');
  const size = findFirstByLocalName(doc, 'sldSz');
  return {
    width: Number(size && size.getAttribute('cx')) || 12192000,
    height: Number(size && size.getAttribute('cy')) || 6858000
  };
}

function extractPptxImageRelIds(xml) {
  const doc = new DOMParser().parseFromString(xml, 'application/xml');
  const nodes = Array.from(doc.getElementsByTagName('a:blip')).concat(Array.from(doc.getElementsByTagName('blip')));
  const seen = {};
  return nodes.map(function(node) {
    return node.getAttribute('r:embed') || node.getAttribute('embed') || node.getAttribute('r:link') || node.getAttribute('link') || '';
  }).filter(function(id) {
    if (!id || seen[id]) return false;
    seen[id] = true;
    return true;
  });
}

async function readPptxImages(bytes, entryMap, slidePath, rels, imageIds) {
  const images = [];
  for (let index = 0; index < imageIds.length && images.length < 24; index += 1) {
    const relId = imageIds[index];
    const target = rels[relId];
    if (!target || /^https?:\/\//i.test(target)) continue;
    const imagePath = resolveZipPath(slidePath, target);
    const entry = entryMap[imagePath.toLowerCase()];
    if (!entry) continue;
    const data = await unzipEntry(bytes, entry);
    if (data.length > 5000000) continue;
    const name = imagePath.split('/').pop() || ('image-' + (images.length + 1));
    const mime = mimeFromPath(name);
    if (mime.indexOf('image/') !== 0) continue;
    images.push({
      relId: relId,
      name: name,
      mime: mime,
      dataUrl: 'data:' + mime + ';base64,' + bytesToBase64(data),
      alt: 'Ảnh từ PowerPoint'
    });
  }
  return images;
}

function pptxImageMap(images) {
  const map = {};
  images.forEach(function(image) {
    if (image.relId) map[image.relId] = image;
  });
  return map;
}

function extractPptxObjects(xml, imageMap, slideSize) {
  const doc = new DOMParser().parseFromString(xml, 'application/xml');
  const spTree = findFirstByLocalName(doc, 'spTree');
  const animations = extractPptxAnimations(doc);
  if (!spTree) return [];
  const objects = [];
  Array.from(spTree.children || []).forEach(function(node) {
    const kind = pptxLocalName(node);
    if (kind !== 'pic' && kind !== 'sp') return;
    const rect = pptxRect(node, slideSize);
    if (!rect) return;
    const shapeId = pptxShapeId(node);
    const animation = animations[shapeId] || null;
    if (kind === 'pic') {
      const relId = pptxImageRelId(node);
      const image = imageMap[relId];
      if (!image) return;
      objects.push(Object.assign({
        type: 'image',
        shapeId: shapeId,
        relId: relId,
        src: image.dataUrl,
        alt: image.alt || image.name || 'Ảnh từ PowerPoint',
        name: image.name || 'Ảnh PPTX'
      }, rect, { animation: animation }));
      return;
    }
    const text = extractTextFromNode(node);
    if (!text) return;
    objects.push(Object.assign({
      type: 'text',
      shapeId: shapeId,
      text: text,
      style: pptxTextStyle(node)
    }, rect, { animation: animation }));
  });
  return objects;
}

function pptxRect(node, slideSize) {
  const xfrm = findFirstByLocalName(node, 'xfrm');
  const off = xfrm && findFirstByLocalName(xfrm, 'off');
  const ext = xfrm && findFirstByLocalName(xfrm, 'ext');
  if (!off || !ext) return null;
  const width = Number(slideSize.width) || 12192000;
  const height = Number(slideSize.height) || 6858000;
  return {
    left: (Number(off.getAttribute('x')) || 0) / width * 100,
    top: (Number(off.getAttribute('y')) || 0) / height * 100,
    width: (Number(ext.getAttribute('cx')) || 0) / width * 100,
    height: (Number(ext.getAttribute('cy')) || 0) / height * 100
  };
}

function pptxShapeId(node) {
  const cNvPr = findFirstByLocalName(node, 'cNvPr');
  return cNvPr ? String(cNvPr.getAttribute('id') || '') : '';
}

function pptxImageRelId(node) {
  const blip = findFirstByLocalName(node, 'blip');
  return blip ? (blip.getAttribute('r:embed') || blip.getAttribute('embed') || blip.getAttribute('r:link') || blip.getAttribute('link') || '') : '';
}

function extractTextFromNode(node) {
  return Array.from(node.getElementsByTagName('a:t')).map(function(item) {
    return item.textContent || '';
  }).join('\n').replace(/\n{3,}/g, '\n\n').trim();
}

function pptxTextStyle(node) {
  const rPr = findFirstByLocalName(node, 'rPr') || findFirstByLocalName(node, 'defRPr');
  const srgb = rPr && findFirstByLocalName(rPr, 'srgbClr');
  const size = Number(rPr && rPr.getAttribute('sz')) || 0;
  return {
    fontSize: size ? Math.max(8, Math.min(72, size / 100)) : 24,
    color: srgb && srgb.getAttribute('val') ? '#' + srgb.getAttribute('val') : '#111111',
    bold: rPr && rPr.getAttribute('b') === '1',
    italic: rPr && rPr.getAttribute('i') === '1'
  };
}

function extractPptxAnimations(doc) {
  const targets = Array.from(doc.getElementsByTagName('p:spTgt')).concat(Array.from(doc.getElementsByTagName('spTgt')));
  const map = {};
  targets.forEach(function(node, index) {
    const id = String(node.getAttribute('spid') || '');
    if (!id || map[id]) return;
    map[id] = {
      type: detectPptxAnimation(node),
      order: index,
      delay: Math.min(index * 0.28, 3.5),
      duration: 0.65
    };
  });
  return map;
}

function detectPptxAnimation(node) {
  let cursor = node;
  while (cursor) {
    const name = pptxLocalName(cursor);
    if (name === 'animScale') return 'zoom';
    if (name === 'animMotion') return 'fly';
    if (name === 'animRot') return 'spin';
    if (name === 'animEffect') {
      const filter = String(cursor.getAttribute('filter') || '').toLowerCase();
      if (filter.indexOf('wipe') >= 0) return 'wipe';
      if (filter.indexOf('zoom') >= 0) return 'zoom';
      if (filter.indexOf('fly') >= 0 || filter.indexOf('crawl') >= 0) return 'fly';
    }
    cursor = cursor.parentNode;
  }
  return 'fade';
}

function resolveZipPath(fromPath, target) {
  if (!target) return '';
  if (target.charAt(0) === '/') return target.replace(/^\/+/, '');
  const parts = fromPath.split('/');
  parts.pop();
  target.split('/').forEach(function(part) {
    if (!part || part === '.') return;
    if (part === '..') parts.pop();
    else parts.push(part);
  });
  return parts.join('/');
}

function mimeFromPath(path) {
  const ext = String(path || '').split('.').pop().toLowerCase();
  if (ext === 'jpg' || ext === 'jpeg') return 'image/jpeg';
  if (ext === 'png') return 'image/png';
  if (ext === 'gif') return 'image/gif';
  if (ext === 'webp') return 'image/webp';
  if (ext === 'svg') return 'image/svg+xml';
  if (ext === 'bmp') return 'image/bmp';
  return 'application/octet-stream';
}

function bytesToBase64(bytes) {
  let binary = '';
  const chunkSize = 0x8000;
  for (let index = 0; index < bytes.length; index += chunkSize) {
    const chunk = bytes.subarray(index, index + chunkSize);
    binary += String.fromCharCode.apply(null, chunk);
  }
  return btoa(binary);
}

function readZipCentralDirectory(bytes) {
  const view = new DataView(bytes.buffer, bytes.byteOffset, bytes.byteLength);
  let eocd = -1;
  for (let offset = bytes.length - 22; offset >= Math.max(0, bytes.length - 66000); offset -= 1) {
    if (view.getUint32(offset, true) === 0x06054b50) {
      eocd = offset;
      break;
    }
  }
  if (eocd < 0) throw new Error('file không có cấu trúc PPTX hợp lệ');
  const totalEntries = view.getUint16(eocd + 10, true);
  let cursor = view.getUint32(eocd + 16, true);
  const decoder = new TextDecoder('utf-8');
  const entries = [];
  for (let index = 0; index < totalEntries; index += 1) {
    if (view.getUint32(cursor, true) !== 0x02014b50) break;
    const method = view.getUint16(cursor + 10, true);
    const compressedSize = view.getUint32(cursor + 20, true);
    const uncompressedSize = view.getUint32(cursor + 24, true);
    const nameLength = view.getUint16(cursor + 28, true);
    const extraLength = view.getUint16(cursor + 30, true);
    const commentLength = view.getUint16(cursor + 32, true);
    const localOffset = view.getUint32(cursor + 42, true);
    const name = decoder.decode(bytes.slice(cursor + 46, cursor + 46 + nameLength));
    entries.push({ name: name, method: method, compressedSize: compressedSize, uncompressedSize: uncompressedSize, localOffset: localOffset });
    cursor += 46 + nameLength + extraLength + commentLength;
  }
  return entries;
}

async function unzipEntry(bytes, entry) {
  const view = new DataView(bytes.buffer, bytes.byteOffset, bytes.byteLength);
  const local = entry.localOffset;
  if (view.getUint32(local, true) !== 0x04034b50) throw new Error('mục PPTX bị lỗi');
  const nameLength = view.getUint16(local + 26, true);
  const extraLength = view.getUint16(local + 28, true);
  const dataStart = local + 30 + nameLength + extraLength;
  const compressed = bytes.slice(dataStart, dataStart + entry.compressedSize);
  if (entry.method === 0) return compressed;
  if (entry.method === 8) return inflateZipDeflate(compressed);
  throw new Error('PPTX dùng kiểu nén chưa hỗ trợ: ' + entry.method);
}

async function inflateZipDeflate(compressed) {
  if (!('DecompressionStream' in window)) {
    throw new Error('trình duyệt chưa hỗ trợ giải nén PPTX trực tiếp');
  }
  const formats = ['deflate-raw', 'deflate'];
  let lastError = null;
  for (let index = 0; index < formats.length; index += 1) {
    try {
      const stream = new Blob([compressed]).stream().pipeThrough(new DecompressionStream(formats[index]));
      return new Uint8Array(await new Response(stream).arrayBuffer());
    } catch (error) {
      lastError = error;
    }
  }
  throw lastError || new Error('không giải nén được slide');
}

function extractPptxTexts(xml) {
  const doc = new DOMParser().parseFromString(xml, 'application/xml');
  const nodes = Array.from(doc.getElementsByTagName('a:t'));
  return nodes.map(function(node) { return node.textContent || ''; });
}

function extractPptxTransition(xml) {
  const doc = new DOMParser().parseFromString(xml, 'application/xml');
  const transition = doc.getElementsByTagName('p:transition')[0] || doc.getElementsByTagName('transition')[0];
  if (!transition) return null;
  const child = Array.from(transition.children || []).find(function(node) {
    const name = pptxLocalName(node);
    return name && name !== 'sndAc' && name !== 'extLst';
  });
  const name = child ? pptxLocalName(child) : '';
  const map = {
    fade: 'fade',
    push: 'push',
    wipe: 'wipe',
    cover: 'cover',
    pull: 'uncover',
    uncover: 'uncover',
    split: 'split',
    randomBar: 'bars',
    randomBars: 'bars',
    blinds: 'bars',
    checker: 'bars',
    circle: 'reveal',
    diamond: 'reveal',
    dissolve: 'fade'
  };
  const key = map[name] || 'fade';
  return {
    key: key,
    effect: TRANSITION_EFFECTS[key] ? TRANSITION_EFFECTS[key].effect : 'Fade',
    direction: transition.getAttribute('dir') || (child && child.getAttribute('dir')) || 'auto',
    duration: transition.getAttribute('spd') === 'slow' ? 1.1 : (transition.getAttribute('spd') === 'fast' ? 0.45 : 0.7)
  };
}

function pptxLocalName(node) {
  return String(node.localName || node.nodeName || '').replace(/^.*:/, '');
}

function findFirstByLocalName(root, name) {
  return Array.from(root.getElementsByTagName('*')).find(function(node) {
    return pptxLocalName(node) === name;
  }) || null;
}

function normalizeTransitionDirection(value) {
  const dir = String(value || '').toLowerCase();
  if (dir === 'l' || dir === 'left') return 'left';
  if (dir === 'r' || dir === 'right') return 'right';
  if (dir === 'u' || dir === 'up') return 'up';
  if (dir === 'd' || dir === 'down') return 'down';
  if (dir === 'in' || dir === 'out' || dir === 'center') return 'center';
  return 'auto';
}

function cleanSlideText(text) {
  return String(text || '').replace(/\s+/g, ' ').trim();
}

function slideNumber(name) {
  const match = String(name).match(/slide(\d+)\.xml$/i);
  return match ? Number(match[1]) : 0;
}

function applySlidesToLesson(slides, filename) {
  if (!state.plan) generatePlan();
  const titleFromFile = filename.replace(/\.pptx$/i, '').replace(/[-_]+/g, ' ').trim();
  if (slides[0] && slides[0].title) topicInput.value = slides[0].title.slice(0, 120);
  slideCountSelect.value = nearestSlideCount(slides.length);
  includeQuizInput.checked = true;
  includeTranscriptInput.checked = true;
  generatePlan();
  const scenes = slides.map(function(slide, index) {
    const isFirst = index === 0;
    const isLast = index === slides.length - 1;
    const text = slide.rawText || slide.title || ('Slide ' + slide.number);
    const content = slide.bullets.length ? slide.bullets.join(' ') : text;
    return {
      id: 'pptx-scene-' + slide.number,
      type: isFirst ? 'cover' : (isLast ? 'summary' : 'content'),
      title: slide.title || ('Slide ' + slide.number),
      layout: 'Nhập từ PowerPoint',
      content: content.slice(0, 520),
      bullets: slide.bullets.slice(0, 12),
      rawText: text,
      images: slide.images || [],
      pptxObjects: slide.objects || [],
      pptxSize: slide.size || null,
      narration: narrationLine('Trình bày nội dung slide ' + slide.number + ': ' + text.slice(0, 220), state.plan),
      visual: 'Nguồn PPTX: ' + filename + ' - slide ' + slide.number,
      transition: slide.transition ? slide.transition.effect : (index ? 'Fade' : 'None'),
      transitionKey: slide.transition ? slide.transition.key : (index ? 'fade' : 'none'),
      transitionDirection: slide.transition ? normalizeTransitionDirection(slide.transition.direction) : 'auto',
      transitionEffectDuration: slide.transition ? slide.transition.duration : 0.7,
      autoAdvance: true,
      duration: Math.max(45, Math.min(120, 25 + Math.ceil(text.length / 8)))
    };
  });
  if (state.plan.includeQuiz && scenes.length > 2) {
    scenes.splice(Math.min(scenes.length - 1, 3), 0, {
      id: 'pptx-quiz-' + Date.now(),
      type: 'quiz',
      title: 'Kiểm tra nhanh từ PowerPoint',
      layout: 'Câu hỏi trắc nghiệm + phản hồi',
      content: 'Chọn ý chính phù hợp nhất với bài trình chiếu vừa nhập.',
      narration: narrationLine('Mời học sinh kiểm tra nhanh sau khi xem các slide đầu.', state.plan),
      visual: 'Quiz tự sinh từ nội dung PPTX',
      duration: 55,
      question: buildPptxQuestion(slides)
    });
  }
  state.lesson = {
    title: topicInput.value || titleFromFile || state.plan.topic,
    mode: 'Bài giảng nhập từ PPTX',
    style: state.plan.narrationStyle,
    includeTranscript: state.plan.includeTranscript,
    interactionConfig: state.plan.interactionConfig,
    source: { type: 'pptx', filename: filename, slideCount: slides.length },
    scenes: scenes
  };
  state.lessonSignature = buildLessonSignature(state.plan) + '|pptx|' + filename + '|' + slides.length;
  state.selectedScene = 0;
  state.previewIndex = 0;
  state.previewAnswer = null;
  setActiveTab('studio');
  if (history.replaceState) history.replaceState(null, '', '#studio');
  renderOutput();
}

function nearestSlideCount(count) {
  const options = ['5', '7', '9', '12'];
  return options.reduce(function(best, item) {
    return Math.abs(Number(item) - count) < Math.abs(Number(best) - count) ? item : best;
  }, options[0]);
}

function buildPptxQuestion(slides) {
  const firstUseful = slides.find(function(slide) { return slide.bullets.length; }) || slides[0];
  const answer = firstUseful ? (firstUseful.bullets[0] || firstUseful.title) : 'Nêu được ý chính của bài trình chiếu.';
  return {
    prompt: 'Theo bài PowerPoint vừa nhập, ý nào cần được giữ lại khi chuyển thành bài e-learning?',
    choices: [
      'Chỉ giữ hiệu ứng chuyển slide, bỏ nội dung chính.',
      answer,
      'Chỉ đọc nguyên văn toàn bộ slide mà không có tương tác.',
      'Bỏ phần kiểm tra nhanh và phản hồi học sinh.'
    ],
    answer: 1,
    feedback: 'Đúng. Khi chuyển PPTX sang e-learning cần giữ ý chính, thêm lời dẫn, tương tác và phản hồi học tập.'
  };
}

function bindOutputEvents() {
  const pptxInputMain = document.getElementById('pptxInputMain');
  const importPptxButtonMain = document.getElementById('importPptxButtonMain');
  const pptxStatusMain = document.getElementById('pptxStatusMain');
  if (pptxInputMain) pptxInputMain.addEventListener('change', function() { updatePptxStatus(pptxInputMain, pptxStatusMain); });
  if (importPptxButtonMain) importPptxButtonMain.addEventListener('click', function() { importPptxLesson(pptxInputMain, pptxStatusMain); });

  Array.from(document.querySelectorAll('[data-ribbon-tab]')).forEach(function(button) {
    button.addEventListener('click', function() { handleRibbonTab(button.dataset.ribbonTab); });
  });

  Array.from(document.querySelectorAll('[data-focus-pptx]')).forEach(function(button) {
    button.addEventListener('click', function() {
      const box = document.querySelector('.pptx-import-banner');
      const input = document.getElementById('pptxInputMain') || pptxInput;
      if (box) {
        box.scrollIntoView({ behavior: 'smooth', block: 'start' });
        box.classList.add('is-highlighted');
        window.setTimeout(function() { box.classList.remove('is-highlighted'); }, 1400);
      }
      if (input) input.focus();
    });
  });

  Array.from(document.querySelectorAll('[data-select-scene]')).forEach(function(button) {
    button.addEventListener('click', function() {
      state.selectedScene = Number(button.dataset.selectScene) || 0;
      setActiveTab('studio');
      if (history.replaceState) history.replaceState(null, '', '#studio');
      renderOutput();
    });
  });

  Array.from(document.querySelectorAll('[data-scene-field]')).forEach(function(input) {
    input.addEventListener('change', function() { updateSceneField(input.dataset.sceneField, input.value); });
  });

  Array.from(document.querySelectorAll('[data-question-field]')).forEach(function(input) {
    input.addEventListener('change', function() { updateQuestionField(input.dataset.questionField, input.value); });
  });

  Array.from(document.querySelectorAll('[data-choice-index]')).forEach(function(input) {
    input.addEventListener('change', function() { updateChoice(Number(input.dataset.choiceIndex), input.value); });
  });

  Array.from(document.querySelectorAll('[data-answer-toggle]')).forEach(function(input) {
    input.addEventListener('change', function() { toggleQuestionAnswer(Number(input.dataset.answerToggle), input.checked); });
  });

  Array.from(document.querySelectorAll('[data-blank-index]')).forEach(function(input) {
    input.addEventListener('change', function() { updateQuestionBlank(Number(input.dataset.blankIndex), input.value); });
  });

  Array.from(document.querySelectorAll('[data-sequence-index]')).forEach(function(input) {
    input.addEventListener('change', function() { updateQuestionSequence(Number(input.dataset.sequenceIndex), input.value); });
  });

  Array.from(document.querySelectorAll('[data-add-scene]')).forEach(function(button) {
    button.addEventListener('click', addScene);
  });

  const copyConfigButton = document.querySelector('[data-copy-config]');
  if (copyConfigButton) copyConfigButton.addEventListener('click', function() { writeClipboard(buildConfigText()); });

  Array.from(document.querySelectorAll('[data-duplicate-scene]')).forEach(function(button) {
    button.addEventListener('click', duplicateScene);
  });

  Array.from(document.querySelectorAll('[data-delete-scene]')).forEach(function(button) {
    button.addEventListener('click', deleteScene);
  });

  Array.from(document.querySelectorAll('[data-rebuild-lesson]')).forEach(function(button) {
    button.addEventListener('click', rebuildLesson);
  });

  Array.from(document.querySelectorAll('[data-insert-scene-type]')).forEach(function(button) {
    button.addEventListener('click', function() { insertSceneType(button.dataset.insertSceneType); });
  });

  Array.from(document.querySelectorAll('[data-insert-question]')).forEach(function(button) {
    button.addEventListener('click', function() { addQuestionScene(button.dataset.insertQuestion); });
  });

  Array.from(document.querySelectorAll('[data-apply-design]')).forEach(function(button) {
    button.addEventListener('click', function() { applyDesignTheme(button.dataset.applyDesign); });
  });

  Array.from(document.querySelectorAll('[data-design-color]')).forEach(function(button) {
    button.addEventListener('click', function() { applyDesignOption('color', button.dataset.designColor); });
  });

  Array.from(document.querySelectorAll('[data-design-font]')).forEach(function(button) {
    button.addEventListener('click', function() { applyDesignOption('font', button.dataset.designFont); });
  });

  Array.from(document.querySelectorAll('[data-design-background]')).forEach(function(button) {
    button.addEventListener('click', function() { applyDesignOption('background', button.dataset.designBackground); });
  });

  Array.from(document.querySelectorAll('[data-design-size]')).forEach(function(button) {
    button.addEventListener('click', function() { applyDesignOption('size', button.dataset.designSize); });
  });

  Array.from(document.querySelectorAll('[data-design-select]')).forEach(function(select) {
    select.addEventListener('change', function() {
      if (select.dataset.designSelect === 'theme') applyDesignTheme(select.value);
      if (select.dataset.designSelect === 'size') applyDesignOption('size', select.value);
    });
  });

  Array.from(document.querySelectorAll('[data-transition-effect]')).forEach(function(button) {
    button.addEventListener('click', function() { applyTransitionEffect(button.dataset.transitionEffect); });
  });

  Array.from(document.querySelectorAll('[data-transition-field]')).forEach(function(input) {
    input.addEventListener('change', function() {
      updateTransitionField(input.dataset.transitionField, input.value, input.checked);
    });
  });

  Array.from(document.querySelectorAll('[data-ai-tool]')).forEach(function(button) {
    button.addEventListener('click', function() { performAiTool(button.dataset.aiTool); });
  });

  Array.from(document.querySelectorAll('[data-ai-quick]')).forEach(function(button) {
    button.addEventListener('click', function() {
      const action = button.dataset.aiQuick === 'ask' ? 'assistant' : button.dataset.aiQuick;
      performAiTool(action);
    });
  });

  const aiClose = document.querySelector('[data-ai-close]');
  if (aiClose) aiClose.addEventListener('click', function() {
    state.aiPanelOpen = false;
    renderOutput();
  });

  const aiInput = document.getElementById('aiAssistantInput');
  const aiSend = document.querySelector('[data-ai-send]');
  if (aiSend && aiInput) aiSend.addEventListener('click', function() { handleAiPrompt(aiInput.value); });
  if (aiInput) aiInput.addEventListener('keydown', function(event) {
    if (event.key === 'Enter') handleAiPrompt(aiInput.value);
  });
  const geminiModelSelect = document.querySelector('[data-gemini-model]');
  if (geminiModelSelect) geminiModelSelect.addEventListener('change', function() {
    state.geminiModel = geminiModelSelect.value;
    addAiMessage('assistant', 'Đã chọn model Google: ' + geminiModelSelect.value + '.');
    renderOutput();
  });

  Array.from(document.querySelectorAll('[data-insert-object]')).forEach(function(button) {
    button.addEventListener('click', function() { addSceneObject(button.dataset.insertObject); });
  });

  Array.from(document.querySelectorAll('[data-object-field]')).forEach(function(input) {
    input.addEventListener('change', function() {
      updateSceneObject(Number(input.dataset.objectIndex), input.dataset.objectField, input.value);
    });
  });

  Array.from(document.querySelectorAll('[data-delete-object]')).forEach(function(button) {
    button.addEventListener('click', function() { deleteSceneObject(Number(button.dataset.deleteObject)); });
  });

  const openPreviewButton = document.querySelector('[data-open-preview]');
  if (openPreviewButton) openPreviewButton.addEventListener('click', function() {
    state.previewIndex = state.selectedScene;
    state.previewAnswer = null;
    setActiveTab('preview');
    if (history.replaceState) history.replaceState(null, '', '#preview');
    renderOutput();
  });

  const ribbonExportButton = document.getElementById('ribbonExportButton');
  if (ribbonExportButton) ribbonExportButton.addEventListener('click', exportPackage);

  Array.from(document.querySelectorAll('[data-move-scene]')).forEach(function(button) {
    button.addEventListener('click', function() { moveScene(Number(button.dataset.moveScene)); });
  });

  Array.from(document.querySelectorAll('[data-preview-step]')).forEach(function(button) {
    button.addEventListener('click', function() {
      const next = state.previewIndex + Number(button.dataset.previewStep);
      state.previewIndex = Math.max(0, Math.min(next, state.lesson.scenes.length - 1));
      state.previewAnswer = null;
      renderOutput();
    });
  });

  Array.from(document.querySelectorAll('[data-answer-choice]')).forEach(function(button) {
    button.addEventListener('click', function() {
      state.previewAnswer = Number(button.dataset.answerChoice);
      renderOutput();
    });
  });

  Array.from(document.querySelectorAll('[data-answer-multi]')).forEach(function(input) {
    input.addEventListener('change', function() {
      const current = Array.isArray(state.previewAnswer) ? state.previewAnswer.slice() : [];
      const value = Number(input.dataset.answerMulti);
      state.previewAnswer = input.checked
        ? current.concat(current.indexOf(value) < 0 ? [value] : [])
        : current.filter(function(item) { return item !== value; });
      renderOutput();
    });
  });

  Array.from(document.querySelectorAll('[data-answer-text]')).forEach(function(input) {
    input.addEventListener('change', function() { showToast('Đã ghi nhận câu trả lời.'); });
  });

  Array.from(document.querySelectorAll('[data-preview-object]')).forEach(function(control) {
    control.addEventListener('click', function() {
      const scene = state.lesson && state.lesson.scenes ? state.lesson.scenes[state.previewIndex] : null;
      const object = scene && ensureSceneObjects(scene)[Number(control.dataset.previewObject)];
      if (object && control.tagName === 'BUTTON') showToast('Đã chạy tương tác: ' + (object.action || object.label));
    });
    control.addEventListener('change', function() {
      const scene = state.lesson && state.lesson.scenes ? state.lesson.scenes[state.previewIndex] : null;
      const object = scene && ensureSceneObjects(scene)[Number(control.dataset.previewObject)];
      if (object) showToast('Đã ghi nhận: ' + (object.label || object.text));
    });
  });

  const copyPrompt = document.querySelector('[data-copy-prompt]');
  if (copyPrompt) copyPrompt.addEventListener('click', function() { writeClipboard(buildPrompt()); });
  const search = document.getElementById('librarySearch');
  const filter = document.getElementById('libraryFilter');
  if (search && filter) {
    const run = function() { filterLibrary(search.value, filter.value); };
    search.addEventListener('input', run);
    filter.addEventListener('change', run);
  }

  Array.from(document.querySelectorAll('[data-apply-skill]')).forEach(function(button) {
    button.addEventListener('click', function() { applySkill(button.dataset.applySkill); });
  });

  Array.from(document.querySelectorAll('[data-copy-skill]')).forEach(function(button) {
    button.addEventListener('click', function() {
      const skill = getSkillById(button.dataset.copySkill);
      if (skill) writeClipboard(buildSkillPrompt(skill));
    });
  });

  const skillSearch = document.getElementById('skillSearch');
  const skillFilter = document.getElementById('skillFilter');
  if (skillSearch && skillFilter) {
    const runSkillFilter = function() { filterSkills(skillSearch.value, skillFilter.value); };
    skillSearch.addEventListener('input', runSkillFilter);
    skillFilter.addEventListener('change', runSkillFilter);
  }
}

function filterLibrary(query, type) {
  const q = stripMarks(query.toLowerCase());
  Array.from(document.querySelectorAll('[data-library-card]')).forEach(function(card) {
    const okType = type === 'all' || card.dataset.type === type;
    const okText = stripMarks(card.textContent.toLowerCase()).indexOf(q) >= 0;
    card.style.display = okType && okText ? '' : 'none';
  });
}

function toggleAll(name) {
  const inputs = Array.from(document.querySelectorAll('input[name="' + name + '"]'));
  const shouldCheck = inputs.some(function(input) { return !input.checked; });
  inputs.forEach(function(input) { input.checked = shouldCheck; });
  generatePlan();
}

function resetForm() {
  levelSelect.value = 'thcs';
  syncLevelFields();
  topicInput.value = 'Bảo tồn di sản địa phương trong môi trường số';
  durationSelect.value = '45 phút';
  productSelect.value = 'Poster số';
  learnerNeedsInput.value = 'Có học sinh cần văn bản ngắn gọn, hình ảnh minh họa, nhiệm vụ chia bước và thêm thời gian hoàn thành sản phẩm.';
  lessonModeSelect.value = 'Micro-learning tương tác';
  slideCountSelect.value = '7';
  narrationStyleSelect.value = 'Thân thiện';
  includeQuizInput.checked = true;
  includeTranscriptInput.checked = true;
  authoringPresetSelect.value = 'activepresenter';
  publishStandardSelect.value = 'SCORM 2004';
  passingScoreSelect.value = '80';
  completionRuleSelect.value = 'Đạt điểm quiz và xem 80% số cảnh';
  navigationModeSelect.value = 'Khóa cảnh đến khi hoàn thành';
  attemptLimitSelect.value = '2';
  shuffleAnswersInput.checked = true;
  showFeedbackInput.checked = true;
  responsivePlayerInput.checked = true;
  document.querySelector('input[name="depth"][value="Lồng ghép"]').checked = true;
  Array.from(document.querySelectorAll('input[name="domain"]')).forEach(function(input) { input.checked = ['data', 'communication', 'content', 'ai'].indexOf(input.value) >= 0; });
  Array.from(document.querySelectorAll('input[name="integration"]')).forEach(function(input) { input.checked = ['heritage', 'inclusion'].indexOf(input.value) >= 0; });
  generatePlan();
  showToast('Đã làm mới biểu mẫu.');
}

function saveTemplate() {
  const saved = {
    level: levelSelect.value,
    grade: gradeSelect.value,
    subject: subjectSelect.value,
    topic: topicInput.value,
    duration: durationSelect.value,
    product: productSelect.value,
    learnerNeeds: learnerNeedsInput.value,
    lessonMode: lessonModeSelect.value,
    slideCount: slideCountSelect.value,
    narrationStyle: narrationStyleSelect.value,
    includeQuiz: includeQuizInput.checked,
    includeTranscript: includeTranscriptInput.checked,
    authoringPreset: authoringPresetSelect.value,
    publishStandard: publishStandardSelect.value,
    passingScore: passingScoreSelect.value,
    completionRule: completionRuleSelect.value,
    navigationMode: navigationModeSelect.value,
    attemptLimit: attemptLimitSelect.value,
    shuffleAnswers: shuffleAnswersInput.checked,
    showFeedback: showFeedbackInput.checked,
    responsivePlayer: responsivePlayerInput.checked,
    lesson: state.lesson,
    depth: currentDepth(),
    domains: checkedValues('domain'),
    integrations: checkedValues('integration')
  };
  localStorage.setItem('nlsPlannerTemplate', JSON.stringify(saved));
  showToast('Đã lưu mẫu trên trình duyệt này.');
}

function loadTemplate() {
  const raw = localStorage.getItem('nlsPlannerTemplate');
  if (!raw) { showToast('Chưa có mẫu đã lưu.'); return; }
  try {
    const saved = JSON.parse(raw);
    levelSelect.value = saved.level || 'thcs';
    syncLevelFields();
    gradeSelect.value = saved.grade || gradeSelect.value;
    subjectSelect.value = saved.subject || subjectSelect.value;
    topicInput.value = saved.topic || topicInput.value;
    durationSelect.value = saved.duration || durationSelect.value;
    productSelect.value = saved.product || productSelect.value;
    learnerNeedsInput.value = saved.learnerNeeds || learnerNeedsInput.value;
    lessonModeSelect.value = saved.lessonMode || lessonModeSelect.value;
    slideCountSelect.value = saved.slideCount || slideCountSelect.value;
    narrationStyleSelect.value = saved.narrationStyle || narrationStyleSelect.value;
    includeQuizInput.checked = saved.includeQuiz !== false;
    includeTranscriptInput.checked = saved.includeTranscript !== false;
    authoringPresetSelect.value = saved.authoringPreset || authoringPresetSelect.value;
    publishStandardSelect.value = saved.publishStandard || publishStandardSelect.value;
    passingScoreSelect.value = saved.passingScore || passingScoreSelect.value;
    completionRuleSelect.value = saved.completionRule || completionRuleSelect.value;
    navigationModeSelect.value = saved.navigationMode || navigationModeSelect.value;
    attemptLimitSelect.value = saved.attemptLimit || attemptLimitSelect.value;
    shuffleAnswersInput.checked = saved.shuffleAnswers !== false;
    showFeedbackInput.checked = saved.showFeedback !== false;
    responsivePlayerInput.checked = saved.responsivePlayer !== false;
    const depthInput = document.querySelector('input[name="depth"][value="' + (saved.depth || 'Lồng ghép') + '"]');
    if (depthInput) depthInput.checked = true;
    Array.from(document.querySelectorAll('input[name="domain"]')).forEach(function(input) { input.checked = (saved.domains || []).indexOf(input.value) >= 0; });
    Array.from(document.querySelectorAll('input[name="integration"]')).forEach(function(input) { input.checked = (saved.integrations || []).indexOf(input.value) >= 0; });
    generatePlan();
    if (saved.lesson && Array.isArray(saved.lesson.scenes)) {
      state.lesson = saved.lesson;
      state.lessonSignature = buildLessonSignature(state.plan);
      state.selectedScene = 0;
      state.previewIndex = 0;
      state.previewAnswer = null;
      renderOutput();
    }
    showToast('Đã tải mẫu.');
  } catch (error) {
    showToast('Mẫu lưu không đọc được.');
  }
}

function exportPackage() {
  if (!state.plan || !state.lesson) {
    showToast('Chưa có bài giảng để xuất.');
    return;
  }
  const standard = state.plan.interactionConfig.standard || 'HTML5 offline';
  const payload = buildExportPayload(standard);
  const files = buildPackageFiles(payload);
  const blob = createZip(files);
  const filename = sanitizeFilename(payload.lesson.title || payload.plan.topic || 'bai-giang-nls') + '-' + packageSuffix(standard) + '.zip';
  downloadBlob(blob, filename);
  showToast('Đã xuất gói ' + standard + '.');
}

function buildExportPayload(standard) {
  return {
    exportedAt: new Date().toISOString(),
    app: 'NLS E-Learning Studio',
    packageStandard: standard,
    packageId: 'nls-' + Date.now().toString(36),
    activityId: 'https://nls-elearning.local/activity/' + sanitizeFilename(state.lesson.title || state.plan.topic || 'course'),
    plan: JSON.parse(JSON.stringify(state.plan)),
    lesson: JSON.parse(JSON.stringify(state.lesson))
  };
}

function buildPackageFiles(payload) {
  const standard = payload.packageStandard;
  const files = [
    { path: 'index.html', content: buildCourseIndexHtml(payload) },
    { path: 'player.css', content: buildCoursePlayerCss() },
    { path: 'course-data.js', content: 'window.NLS_COURSE_DATA = ' + safeJson(payload) + ';\n' },
    { path: 'player.js', content: buildCoursePlayerJs(standard) },
    { path: 'nls-export.json', content: JSON.stringify(payload, null, 2) }
  ];
  if (standard === 'SCORM 1.2') {
    files.unshift({ path: 'imsmanifest.xml', content: buildScorm12Manifest(payload) });
  } else if (standard === 'SCORM 2004') {
    files.unshift({ path: 'imsmanifest.xml', content: buildScorm2004Manifest(payload) });
  } else if (standard === 'xAPI') {
    files.unshift({ path: 'tincan.xml', content: buildTinCanXml(payload) });
  }
  return files;
}

function buildCourseIndexHtml(payload) {
  const title = escXml(payload.lesson.title || payload.plan.topic || 'NLS E-Learning Course');
  const css = buildCoursePlayerCss();
  const data = 'window.NLS_COURSE_DATA = ' + safeJson(payload) + ';\n';
  const player = buildCoursePlayerJs(payload.packageStandard);
  return [
    '<!doctype html>',
    '<html lang="vi">',
    '<head>',
    '<meta charset="utf-8" />',
    '<meta name="viewport" content="width=device-width, initial-scale=1" />',
    '<title>' + title + '</title>',
    '<style>',
    css,
    '</style>',
    '</head>',
    '<body>',
    '<main id="courseApp" class="course-app" aria-live="polite"></main>',
    '<script>',
    data,
    '</script>',
    '<script>',
    player,
    '</script>',
    '</body>',
    '</html>'
  ].join('\n');
}

function buildCoursePlayerCss() {
  return [
    ':root{color-scheme:light;--ink:#17212f;--muted:#607085;--line:#d8e1e9;--blue:#255c99;--teal:#0f766e;--green:#287855;--red:#ad3943;--gold:#946200;font-family:Arial,Helvetica,sans-serif}',
    '*{box-sizing:border-box}body{margin:0;background:#f5f8fb;color:var(--ink)}button{font:inherit;cursor:pointer}.course-app{min-height:100vh;display:grid;grid-template-rows:auto 1fr auto}',
    '.course-header{display:flex;justify-content:space-between;gap:16px;align-items:flex-start;padding:18px 22px;background:#fff;border-bottom:1px solid var(--line)}.course-header h1{margin:0 0 6px;font-size:1.35rem;line-height:1.25}.course-header p{margin:0;color:var(--muted);line-height:1.45}.badge{display:inline-flex;align-items:center;min-height:30px;border:1px solid var(--line);border-radius:6px;padding:0 10px;background:#eef6f5;color:var(--teal);font-weight:800;white-space:nowrap}',
    '.stage{display:grid;grid-template-columns:minmax(210px,280px) minmax(0,1fr);gap:18px;padding:18px}.toc{display:grid;gap:8px;align-content:start}.toc button{border:1px solid var(--line);background:#fff;border-radius:8px;padding:10px;text-align:left;color:var(--ink)}.toc button[aria-current=true]{border-color:var(--teal);box-shadow:0 0 0 3px rgba(15,118,110,.14)}.toc strong{display:block}.toc small{color:var(--muted)}',
    '.slide{min-height:520px;background:#fff;border:1px solid var(--line);border-radius:8px;padding:28px;display:grid;align-content:start;gap:16px}.slide-top{display:flex;justify-content:space-between;color:var(--muted);font-weight:800}.slide h2{margin:0;font-size:clamp(1.6rem,4vw,3rem);line-height:1.12}.slide p{font-size:1.05rem;line-height:1.65;margin:0}.slide-content{display:grid;gap:8px;font-size:1.04rem;line-height:1.55}.slide-content ul{margin:0;padding-left:1.25rem;display:grid;gap:6px}.media{border:1px dashed #b8c6d2;background:#f7fafc;border-radius:8px;padding:14px;color:var(--muted);line-height:1.5}.media-note{font-size:.86rem}.slide-media-grid{display:grid;grid-template-columns:repeat(auto-fit,minmax(220px,1fr));gap:12px}.slide-media-grid figure{margin:0;border:1px solid var(--line);border-radius:8px;overflow:hidden;background:#fff}.slide-media-grid img{display:block;width:100%;max-height:340px;object-fit:contain;background:#fff}.slide-media-grid figcaption{padding:7px 10px;color:var(--muted);font-size:.8rem;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.script{font-size:.95rem;color:#475569;background:#f8fafc;border-left:4px solid var(--blue);padding:12px}',
    '.pptx-course-slide{padding:0;overflow:hidden;align-content:stretch;background:#fff}.pptx-replica{position:relative;width:100%;aspect-ratio:16/9;background:#fff;overflow:hidden}.pptx-object{position:absolute;box-sizing:border-box}.pptx-image img{display:block;width:100%;height:100%;object-fit:contain}.pptx-text{display:flex;align-items:center;white-space:pre-line;overflow:hidden;padding:.3% .5%;line-height:1.16;font-family:Cambria,"Times New Roman",serif}.pptx-anim{animation-duration:var(--pptx-duration,.65s);animation-delay:var(--pptx-delay,0s);animation-fill-mode:both;animation-timing-function:ease}.pptx-anim-fade{animation-name:pptxFadeIn}.pptx-anim-fly{animation-name:pptxFlyIn}.pptx-anim-zoom{animation-name:pptxZoomIn}.pptx-anim-spin{animation-name:pptxSpinIn}.pptx-anim-wipe{animation-name:pptxWipeIn}@keyframes pptxFadeIn{from{opacity:0}to{opacity:1}}@keyframes pptxFlyIn{from{opacity:0;transform:translateY(18px)}to{opacity:1;transform:translateY(0)}}@keyframes pptxZoomIn{from{opacity:0;transform:scale(.78)}to{opacity:1;transform:scale(1)}}@keyframes pptxSpinIn{from{opacity:0;transform:rotate(-12deg) scale(.9)}to{opacity:1;transform:rotate(0) scale(1)}}@keyframes pptxWipeIn{from{clip-path:inset(0 100% 0 0)}to{clip-path:inset(0 0 0 0)}}',
    '.slide.designed{background:var(--course-slide-bg,#fff);color:var(--course-slide-ink,var(--ink));font-family:var(--course-slide-font,Arial,Helvetica,sans-serif);aspect-ratio:var(--course-slide-ratio,16 / 9);border-top:5px solid var(--course-slide-accent,var(--blue));animation-duration:var(--course-transition-duration,.7s);animation-timing-function:ease;animation-fill-mode:both}.slide.designed h2,.slide.designed p{color:var(--course-slide-ink,var(--ink))}.slide.designed .media,.slide.designed .object-control{background:var(--course-slide-panel,#f7fafc)}',
    '.fx-fade{animation-name:courseFade}.fx-push{animation-name:coursePush}.fx-wipe{animation-name:courseWipe}.fx-cover{animation-name:courseCover}.fx-uncover{animation-name:courseUncover}.fx-reveal{animation-name:courseReveal}.fx-split{animation-name:courseSplit}.fx-bars{animation-name:courseBars}@keyframes courseFade{from{opacity:0}to{opacity:1}}@keyframes coursePush{from{opacity:.4;transform:translateX(32px)}to{opacity:1;transform:translateX(0)}}@keyframes courseWipe{from{clip-path:inset(0 100% 0 0)}to{clip-path:inset(0 0 0 0)}}@keyframes courseCover{from{transform:translateY(24px);opacity:.7}to{transform:none;opacity:1}}@keyframes courseUncover{from{clip-path:circle(8% at 50% 50%)}to{clip-path:circle(80% at 50% 50%)}}@keyframes courseReveal{from{filter:blur(8px);opacity:.2}to{filter:blur(0);opacity:1}}@keyframes courseSplit{from{clip-path:inset(48% 0 48% 0)}to{clip-path:inset(0 0 0 0)}}@keyframes courseBars{from{opacity:.2;transform:scaleX(.92)}to{opacity:1;transform:scaleX(1)}}',
    '.object-grid{display:grid;grid-template-columns:repeat(auto-fit,minmax(190px,1fr));gap:10px}.object-control{border:1px solid var(--line);border-radius:8px;background:#f8fafc;padding:12px;color:var(--ink);text-align:left}.object-control strong,.object-control span{display:block}.object-control input{width:100%;margin-top:8px}.object-control.inline{display:flex;align-items:center;gap:8px}.object-control.inline input{width:auto;margin:0}.object-control.action{cursor:pointer}',
    '.quiz{display:grid;gap:10px;margin-top:6px}.quiz button{border:1px solid var(--line);background:#fff;border-radius:8px;padding:12px;text-align:left}.quiz button.correct{border-color:var(--green);background:#eef8f2}.quiz button.wrong{border-color:var(--red);background:#fff1f2}.feedback{padding:12px;border-radius:8px;background:#eef6f5;color:#0f4f49}',
    '.course-footer{display:flex;justify-content:space-between;gap:12px;align-items:center;padding:14px 22px;background:#fff;border-top:1px solid var(--line)}.controls{display:flex;gap:10px}.controls button{min-height:40px;border-radius:6px;border:1px solid var(--line);background:#fff;color:var(--blue);font-weight:800;padding:0 14px}.controls .primary{background:var(--blue);border-color:var(--blue);color:#fff}.progress{height:10px;border-radius:999px;background:#e5edf4;overflow:hidden;min-width:180px}.progress span{display:block;height:100%;background:var(--teal)}',
    '@media(max-width:820px){.course-header,.course-footer{display:grid}.stage{grid-template-columns:1fr}.toc{grid-template-columns:repeat(auto-fit,minmax(130px,1fr))}.slide{min-height:420px;padding:20px}}'
  ].join('\n');
}

function buildCoursePlayerJs(standard) {
  return `(function() {
  var course = window.NLS_COURSE_DATA || {};
  var lesson = course.lesson || { scenes: [] };
  var plan = course.plan || {};
  var config = lesson.interactionConfig || plan.interactionConfig || {};
  var scenes = Array.isArray(lesson.scenes) ? lesson.scenes : [];
  var standard = ${JSON.stringify(standard)};
  var app = document.getElementById('courseApp');
  var index = 0;
  var visited = {};
  var answers = {};
  var completed = false;
  var advanceTimer = null;
  var runtime = createRuntime();
  runtime.start();
  window.addEventListener('beforeunload', function() { runtime.finish(); });
  render();

  function render() {
    if (!app) return;
    if (advanceTimer) window.clearTimeout(advanceTimer);
    if (!scenes.length) {
      app.innerHTML = '<section class="slide"><h1>Chưa có nội dung bài học</h1></section>';
      return;
    }
    index = Math.max(0, Math.min(index, scenes.length - 1));
    var scene = scenes[index] || {};
    visited[scene.id || String(index)] = true;
    runtime.progress(snapshot(false));
    app.innerHTML = headerHtml() + '<section class="stage">' + tocHtml() + slideHtml(scene) + '</section>' + footerHtml();
    bind();
    scheduleAutoAdvance(scene);
  }

  function headerHtml() {
    return '<header class="course-header"><div><h1>' + h(lesson.title || plan.topic || 'Bài giảng NLS') + '</h1><p>' + h((plan.level && plan.level.label ? plan.level.label + ' - ' : '') + (plan.grade || '') + ' - ' + (plan.subject || '') + ' - ' + (plan.duration || '')) + '</p></div><span class="badge">' + h(standard) + '</span></header>';
  }

  function tocHtml() {
    return '<nav class="toc" aria-label="Mục lục">' + scenes.map(function(scene, sceneIndex) {
      return '<button type="button" data-go="' + sceneIndex + '" aria-current="' + (sceneIndex === index ? 'true' : 'false') + '"><strong>' + (sceneIndex + 1) + '. ' + h(scene.title || 'Cảnh') + '</strong><small>' + h(scene.type || 'scene') + ' - ' + h(scene.duration || 0) + 's</small></button>';
    }).join('') + '</nav>';
  }

  function slideHtml(scene) {
    var quiz = scene.type === 'quiz' && scene.question ? quizHtml(scene) : '';
    var objects = objectHtml(scene);
    var script = lesson.includeTranscript && scene.narration ? '<p class="script">' + h(scene.narration) + '</p>' : '';
    var content = contentHtml(scene);
    var media = mediaHtml(scene);
    var design = lesson.design || {};
    var style = '--course-slide-bg:' + (design.bg || '#ffffff') + ';--course-slide-ink:' + (design.ink || '#17212f') + ';--course-slide-panel:' + (design.panel || '#f7fafc') + ';--course-slide-accent:' + (design.accent || '#255c99') + ';--course-slide-font:' + (design.font || 'Arial,Helvetica,sans-serif') + ';--course-slide-ratio:' + (design.ratio || '16 / 9') + ';--course-transition-duration:' + Number(scene.transitionEffectDuration || .7) + 's';
    if (Array.isArray(scene.pptxObjects) && scene.pptxObjects.length) {
      return '<article class="slide designed pptx-course-slide ' + transitionClass(scene.transition || scene.transitionKey) + '" style="' + h(style) + '">' + pptxReplicaHtml(scene) + quiz + script + '</article>';
    }
    return '<article class="slide designed ' + transitionClass(scene.transition || scene.transitionKey) + '" style="' + h(style) + '"><div class="slide-top"><span>' + h(scene.type || 'scene') + '</span><span>' + (index + 1) + '/' + scenes.length + '</span></div><h2>' + h(scene.title || '') + '</h2>' + content + media + objects + quiz + script + '</article>';
  }

  function pptxReplicaHtml(scene) {
    var items = Array.isArray(scene.pptxObjects) ? scene.pptxObjects : [];
    return '<div class="pptx-replica" aria-label="Slide PowerPoint gốc">' + items.map(function(object, objectIndex) {
      var style = pptxObjectStyle(object);
      var animation = pptxAnimationClass(object.animation);
      if (object.type === 'image') {
        return '<div class="pptx-object pptx-image ' + animation + '" style="' + h(style) + '"><img src="' + h(object.src || '') + '" alt="' + h(object.alt || object.name || 'Ảnh từ PowerPoint') + '" /></div>';
      }
      return '<div class="pptx-object pptx-text ' + animation + '" style="' + h(style + pptxTextStyle(object.style || {})) + '">' + h(object.text || '') + '</div>';
    }).join('') + '</div>';
  }

  function pptxObjectStyle(object) {
    var animation = object.animation || {};
    return 'left:' + n(object.left, 0) + '%;top:' + n(object.top, 0) + '%;width:' + n(object.width, 10) + '%;height:' + n(object.height, 10) + '%;--pptx-delay:' + Number(animation.delay || 0) + 's;--pptx-duration:' + Number(animation.duration || .65) + 's;';
  }

  function pptxTextStyle(style) {
    var parts = [];
    if (style.fontSize) parts.push('font-size:' + Math.max(8, Math.min(72, Number(style.fontSize) || 24)) + 'px');
    if (style.color) parts.push('color:' + style.color);
    if (style.bold) parts.push('font-weight:700');
    if (style.italic) parts.push('font-style:italic');
    return parts.length ? parts.join(';') + ';' : '';
  }

  function pptxAnimationClass(animation) {
    if (!animation) return '';
    var type = String(animation.type || 'fade').toLowerCase();
    if (type === 'zoom') return 'pptx-anim pptx-anim-zoom';
    if (type === 'fly') return 'pptx-anim pptx-anim-fly';
    if (type === 'spin') return 'pptx-anim pptx-anim-spin';
    if (type === 'wipe') return 'pptx-anim pptx-anim-wipe';
    return 'pptx-anim pptx-anim-fade';
  }

  function n(value, fallback) {
    var number = Number(value);
    if (!isFinite(number)) number = fallback;
    return Math.max(-20, Math.min(120, number));
  }

  function contentHtml(scene) {
    var bullets = Array.isArray(scene.bullets) ? scene.bullets.filter(Boolean) : [];
    if (bullets.length) {
      var intro = scene.content && bullets.join(' ').indexOf(scene.content) < 0 ? '<p>' + h(scene.content) + '</p>' : '';
      return '<div class="slide-content">' + intro + '<ul>' + bullets.map(function(item) { return '<li>' + h(item) + '</li>'; }).join('') + '</ul></div>';
    }
    return '<p>' + h(scene.content || scene.rawText || '') + '</p>';
  }

  function mediaHtml(scene) {
    var images = Array.isArray(scene.images) ? scene.images.filter(function(image) { return image && image.dataUrl; }) : [];
    var visual = String(scene.visual || '').trim();
    var html = images.length ? '<div class="slide-media-grid">' + images.map(function(image) {
      return '<figure><img src="' + h(image.dataUrl) + '" alt="' + h(image.alt || image.name || 'Ảnh từ PowerPoint') + '" /><figcaption>' + h(image.name || 'Ảnh PPTX') + '</figcaption></figure>';
    }).join('') + '</div>' : '';
    if (!visual) return html;
    var isPptxSource = visual.indexOf('Nguồn PPTX:') === 0 || visual.indexOf('Nguon PPTX:') === 0;
    return html + '<div class="media' + (isPptxSource ? ' media-note' : '') + '">' + h(visual) + '</div>';
  }

  function transitionClass(value) {
    var key = String(value || 'none').toLowerCase();
    if (key === 'fade' || key === 'mờ dần') return 'fx-fade';
    if (key === 'push' || key === 'đẩy vào') return 'fx-push';
    if (key === 'wipe' || key === 'quét') return 'fx-wipe';
    if (key === 'cover' || key === 'che phủ') return 'fx-cover';
    if (key === 'uncover' || key === 'mở ra') return 'fx-uncover';
    if (key === 'reveal' || key === 'lộ ra') return 'fx-reveal';
    if (key === 'split' || key === 'phân chia') return 'fx-split';
    if (key === 'random bars' || key === 'bars' || key === 'thanh ngẫu nhiên') return 'fx-bars';
    return '';
  }

  function scheduleAutoAdvance(scene) {
    if (!scene || scene.autoAdvance === false || index >= scenes.length - 1) return;
    var seconds = Math.max(5, Number(scene.duration || 0));
    advanceTimer = window.setTimeout(function() {
      index = Math.min(scenes.length - 1, index + 1);
      render();
    }, seconds * 1000);
  }

  function objectHtml(scene) {
    var objects = Array.isArray(scene.objects) ? scene.objects : [];
    if (!objects.length) return '';
    return '<section class="object-grid">' + objects.map(function(object, objectIndex) {
      var label = h(object.label || object.type || 'Tương tác');
      var text = h(object.text || '');
      if (object.type === 'typing') return '<label class="object-control"><strong>' + label + '</strong><input data-object="' + objectIndex + '" placeholder="' + text + '" /></label>';
      if (object.type === 'checkbox') return '<label class="object-control inline"><input data-object="' + objectIndex + '" type="checkbox" /> <span>' + text + '</span></label>';
      if (object.type === 'radio') return '<label class="object-control inline"><input data-object="' + objectIndex + '" type="radio" name="object-' + h(scene.id || index) + '" /> <span>' + text + '</span></label>';
      if (object.type === 'slider') return '<label class="object-control"><strong>' + label + '</strong><input data-object="' + objectIndex + '" type="range" min="1" max="5" value="3" /></label>';
      if (object.type === 'dropdown') return '<label class="object-control"><strong>' + label + '</strong><select data-object="' + objectIndex + '"><option>Chọn đáp án</option><option>Phương án A</option><option>Phương án B</option><option>Phương án C</option></select></label>';
      if (object.type === 'text' || object.type === 'caption' || object.type === 'equation' || object.type === 'separator') return '<article class="object-control"><strong>' + label + '</strong><span>' + text + '</span></article>';
      return '<button class="object-control action" type="button" data-object="' + objectIndex + '"><strong>' + label + '</strong><span>' + text + '</span></button>';
    }).join('') + '</section>';
  }

  function quizHtml(scene) {
    var question = scene.question;
    var sceneId = scene.id || String(index);
    var selected = answers[sceneId];
    var choices = Array.isArray(question.choices) ? question.choices : [];
    return '<section class="quiz"><h3>' + h(question.prompt || 'Câu hỏi') + '</h3>' + choices.map(function(choice, choiceIndex) {
      var classes = [];
      if (selected !== undefined && choiceIndex === Number(question.answer)) classes.push('correct');
      if (selected === choiceIndex && choiceIndex !== Number(question.answer)) classes.push('wrong');
      return '<button class="' + classes.join(' ') + '" type="button" data-answer="' + choiceIndex + '">' + h(choice) + '</button>';
    }).join('') + feedbackHtml(question, selected) + '</section>';
  }

  function feedbackHtml(question, selected) {
    if (selected === undefined || !config.showFeedback) return '';
    var correct = selected === Number(question.answer);
    return '<p class="feedback">' + h(correct ? (question.feedback || 'Đúng.') : 'Chưa đúng. Hãy xem lại yêu cầu và thử điều chỉnh câu trả lời.') + '</p>';
  }

  function footerHtml() {
    var percent = Math.round(progressRatio() * 100);
    var nextText = index === scenes.length - 1 ? 'Hoàn thành' : 'Tiếp';
    return '<footer class="course-footer"><div><strong>Tiến độ ' + percent + '%</strong><div class="progress" aria-hidden="true"><span style="width:' + percent + '%"></span></div></div><div class="controls"><button type="button" data-prev>Trước</button><button class="primary" type="button" data-next>' + nextText + '</button></div></footer>';
  }

  function bind() {
    Array.from(document.querySelectorAll('[data-go]')).forEach(function(button) {
      button.addEventListener('click', function() { index = Number(button.dataset.go) || 0; render(); });
    });
    var prev = document.querySelector('[data-prev]');
    if (prev) prev.addEventListener('click', function() { index = Math.max(0, index - 1); render(); });
    var next = document.querySelector('[data-next]');
    if (next) next.addEventListener('click', function() {
      if (index >= scenes.length - 1) completeCourse();
      else { index += 1; render(); }
    });
    Array.from(document.querySelectorAll('[data-answer]')).forEach(function(button) {
      button.addEventListener('click', function() {
        var scene = scenes[index] || {};
        var question = scene.question || {};
        var choice = Number(button.dataset.answer);
        answers[scene.id || String(index)] = choice;
        runtime.interaction(scene, choice, choice === Number(question.answer));
        render();
      });
    });
    Array.from(document.querySelectorAll('[data-object]')).forEach(function(control) {
      control.addEventListener('click', function() {
        var scene = scenes[index] || {};
        var objects = Array.isArray(scene.objects) ? scene.objects : [];
        var object = objects[Number(control.dataset.object)];
        if (object && control.tagName === 'BUTTON') runtime.interaction(scene, object.id || object.type || 'object', true);
      });
      control.addEventListener('change', function() {
        var scene = scenes[index] || {};
        var objects = Array.isArray(scene.objects) ? scene.objects : [];
        var object = objects[Number(control.dataset.object)];
        if (object) runtime.interaction(scene, object.id || object.type || 'object', true);
      });
    });
  }

  function completeCourse() {
    completed = true;
    runtime.progress(snapshot(true));
    runtime.finish();
    render();
  }

  function snapshot(forceComplete) {
    var score = scorePercent();
    var progress = progressRatio();
    var passed = score >= (Number(config.passingScore) || 0);
    var complete = forceComplete || completionMet(progress, passed);
    return { index: index, progress: progress, score: score, passed: passed, complete: complete, visited: visited, answers: answers };
  }

  function completionMet(progress, passed) {
    var rule = String(config.completionRule || '');
    if (rule.indexOf('quiz') >= 0 || rule.indexOf('điểm') >= 0) return progress >= 0.8 && passed;
    if (rule.indexOf('tất cả') >= 0) return progress >= 1;
    return progress >= 0.8;
  }

  function progressRatio() {
    var total = Math.max(1, scenes.length);
    return Math.min(1, Object.keys(visited).length / total);
  }

  function scorePercent() {
    var quizScenes = scenes.filter(function(scene) { return scene.type === 'quiz' && scene.question; });
    if (!quizScenes.length) return Math.round(progressRatio() * 100);
    var correct = quizScenes.filter(function(scene, sceneIndex) {
      var selected = answers[scene.id || String(sceneIndex)];
      return selected === Number(scene.question.answer);
    }).length;
    return Math.round((correct / quizScenes.length) * 100);
  }

  function createRuntime() {
    if (standard === 'SCORM 1.2') return scorm12Runtime();
    if (standard === 'SCORM 2004') return scorm2004Runtime();
    if (standard === 'xAPI') return xapiRuntime();
    return nullRuntime();
  }

  function scorm12Runtime() {
    var api = findApi('API');
    return {
      start: function() { call(api, 'LMSInitialize', ''); call(api, 'LMSSetValue', 'cmi.core.lesson_status', 'incomplete'); call(api, 'LMSCommit', ''); },
      progress: function(data) {
        call(api, 'LMSSetValue', 'cmi.core.lesson_location', String(data.index + 1));
        call(api, 'LMSSetValue', 'cmi.core.score.raw', String(data.score));
        call(api, 'LMSSetValue', 'cmi.core.score.min', '0');
        call(api, 'LMSSetValue', 'cmi.core.score.max', '100');
        call(api, 'LMSSetValue', 'cmi.suspend_data', JSON.stringify({ visited: data.visited, answers: data.answers }).slice(0, 4000));
        call(api, 'LMSSetValue', 'cmi.core.lesson_status', data.complete ? (data.passed ? 'passed' : 'failed') : 'incomplete');
        call(api, 'LMSCommit', '');
      },
      interaction: function() {},
      finish: function() { call(api, 'LMSCommit', ''); call(api, 'LMSFinish', ''); }
    };
  }

  function scorm2004Runtime() {
    var api = findApi('API_1484_11');
    return {
      start: function() { call(api, 'Initialize', ''); call(api, 'SetValue', 'cmi.completion_status', 'incomplete'); call(api, 'Commit', ''); },
      progress: function(data) {
        call(api, 'SetValue', 'cmi.location', String(data.index + 1));
        call(api, 'SetValue', 'cmi.score.raw', String(data.score));
        call(api, 'SetValue', 'cmi.score.min', '0');
        call(api, 'SetValue', 'cmi.score.max', '100');
        call(api, 'SetValue', 'cmi.score.scaled', String(Math.max(0, Math.min(1, data.score / 100))));
        call(api, 'SetValue', 'cmi.progress_measure', String(Math.max(0, Math.min(1, data.progress))));
        call(api, 'SetValue', 'cmi.suspend_data', JSON.stringify({ visited: data.visited, answers: data.answers }).slice(0, 64000));
        call(api, 'SetValue', 'cmi.completion_status', data.complete ? 'completed' : 'incomplete');
        call(api, 'SetValue', 'cmi.success_status', data.complete ? (data.passed ? 'passed' : 'failed') : 'unknown');
        call(api, 'Commit', '');
      },
      interaction: function() {},
      finish: function() { call(api, 'Commit', ''); call(api, 'Terminate', ''); }
    };
  }

  function xapiRuntime() {
    var params = new URLSearchParams(window.location.search);
    var endpoint = params.get('endpoint') || params.get('xAPIEndpoint') || '';
    var auth = params.get('auth') || params.get('authorization') || '';
    var actor = parseActor(params.get('actor'));
    var activityId = params.get('activity_id') || course.activityId || window.location.href.split('?')[0];
    return {
      start: function() { sendStatement('http://adlnet.gov/expapi/verbs/initialized', 'initialized', activityId, {}); },
      progress: function(data) {
        if (data.complete) sendStatement(data.passed ? 'http://adlnet.gov/expapi/verbs/passed' : 'http://adlnet.gov/expapi/verbs/failed', data.passed ? 'passed' : 'failed', activityId, { result: { score: { raw: data.score, min: 0, max: 100, scaled: data.score / 100 }, completion: true, success: data.passed } });
        else sendStatement('http://adlnet.gov/expapi/verbs/progressed', 'progressed', activityId, { result: { extensions: { 'https://nls-elearning.local/extensions/progress': data.progress } } });
      },
      interaction: function(scene, choice, correct) {
        sendStatement(correct ? 'http://adlnet.gov/expapi/verbs/answered' : 'http://adlnet.gov/expapi/verbs/answered', 'answered', activityId + '/' + encodeURIComponent(scene.id || scene.title || 'interaction'), { result: { response: String(choice), success: !!correct } });
      },
      finish: function() { sendStatement('http://adlnet.gov/expapi/verbs/terminated', 'terminated', activityId, {}); }
    };
    function sendStatement(verbId, verbText, objectId, extra) {
      var statement = Object.assign({
        actor: actor,
        verb: { id: verbId, display: { 'en-US': verbText } },
        object: { id: objectId, definition: { name: { vi: lesson.title || plan.topic || 'NLS course' } } },
        timestamp: new Date().toISOString()
      }, extra || {});
      if (!endpoint) {
        try { localStorage.setItem('nls-xapi-last-statement', JSON.stringify(statement)); } catch (error) {}
        return;
      }
      fetch(endpoint.replace(/\\/?$/, '/') + 'statements', { method: 'POST', headers: { 'Content-Type': 'application/json', 'X-Experience-API-Version': '1.0.3', 'Authorization': auth }, body: JSON.stringify(statement), keepalive: true }).catch(function() {});
    }
  }

  function nullRuntime() {
    return { start: function() {}, progress: function() {}, interaction: function() {}, finish: function() {} };
  }

  function parseActor(raw) {
    if (raw) {
      try { return JSON.parse(raw); } catch (error) {}
    }
    return { name: 'Learner', mbox: 'mailto:learner@example.invalid' };
  }

  function findApi(name) {
    var win = window;
    for (var i = 0; i < 8 && win; i += 1) {
      if (win[name]) return win[name];
      if (win.parent === win) break;
      win = win.parent;
    }
    if (window.opener && window.opener[name]) return window.opener[name];
    return null;
  }

  function call(api, method) {
    if (!api || typeof api[method] !== 'function') return '';
    var args = Array.prototype.slice.call(arguments, 2);
    try { return api[method].apply(api, args); } catch (error) { return ''; }
  }

  function h(value) {
    return String(value == null ? '' : value).replace(/[&<>"']/g, function(char) {
      return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#039;' }[char];
    });
  }
})();`;
}

function buildScorm12Manifest(payload) {
  const title = escXml(payload.lesson.title || payload.plan.topic || 'NLS E-Learning Course');
  const mastery = Number(payload.plan.interactionConfig.passingScore) || 70;
  return [
    '<?xml version="1.0" encoding="UTF-8"?>',
    '<manifest identifier="' + escXml(payload.packageId) + '" version="1.0" xmlns="http://www.imsproject.org/xsd/imscp_rootv1p1p2" xmlns:adlcp="http://www.adlnet.org/xsd/adlcp_rootv1p2" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:schemaLocation="http://www.imsproject.org/xsd/imscp_rootv1p1p2 imscp_rootv1p1p2.xsd http://www.adlnet.org/xsd/adlcp_rootv1p2 adlcp_rootv1p2.xsd">',
    '<metadata><schema>ADL SCORM</schema><schemaversion>1.2</schemaversion></metadata>',
    '<organizations default="ORG-1"><organization identifier="ORG-1"><title>' + title + '</title><item identifier="ITEM-1" identifierref="RES-1"><title>' + title + '</title><adlcp:masteryscore>' + mastery + '</adlcp:masteryscore></item></organization></organizations>',
    '<resources><resource identifier="RES-1" type="webcontent" adlcp:scormtype="sco" href="index.html">' + resourceFileXml() + '</resource></resources>',
    '</manifest>'
  ].join('\n');
}

function buildScorm2004Manifest(payload) {
  const title = escXml(payload.lesson.title || payload.plan.topic || 'NLS E-Learning Course');
  return [
    '<?xml version="1.0" encoding="UTF-8"?>',
    '<manifest identifier="' + escXml(payload.packageId) + '" version="1.0" xmlns="http://www.imsglobal.org/xsd/imscp_v1p1" xmlns:adlcp="http://www.adlnet.org/xsd/adlcp_v1p3" xmlns:imsss="http://www.imsglobal.org/xsd/imsss" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:schemaLocation="http://www.imsglobal.org/xsd/imscp_v1p1 imscp_v1p1.xsd http://www.adlnet.org/xsd/adlcp_v1p3 adlcp_v1p3.xsd http://www.imsglobal.org/xsd/imsss imsss_v1p0.xsd">',
    '<metadata><schema>ADL SCORM</schema><schemaversion>2004 4th Edition</schemaversion></metadata>',
    '<organizations default="ORG-1"><organization identifier="ORG-1"><title>' + title + '</title><item identifier="ITEM-1" identifierref="RES-1"><title>' + title + '</title><imsss:sequencing><imsss:controlMode choice="true" flow="true"/></imsss:sequencing></item></organization></organizations>',
    '<resources><resource identifier="RES-1" type="webcontent" adlcp:scormType="sco" href="index.html">' + resourceFileXml() + '</resource></resources>',
    '</manifest>'
  ].join('\n');
}

function buildTinCanXml(payload) {
  const title = escXml(payload.lesson.title || payload.plan.topic || 'NLS E-Learning Course');
  const description = escXml(payload.plan.subject + ' - ' + payload.plan.grade + ' - ' + payload.plan.duration);
  return [
    '<?xml version="1.0" encoding="UTF-8"?>',
    '<tincan xmlns="http://projecttincan.com/tincan.xsd">',
    '<activities>',
    '<activity id="' + escXml(payload.activityId) + '" type="http://adlnet.gov/expapi/activities/course">',
    '<name lang="vi">' + title + '</name>',
    '<description lang="vi">' + description + '</description>',
    '<launch lang="vi">index.html</launch>',
    '</activity>',
    '</activities>',
    '</tincan>'
  ].join('\n');
}

function resourceFileXml() {
  return ['index.html', 'player.css', 'course-data.js', 'player.js', 'nls-export.json'].map(function(path) {
    return '<file href="' + path + '" />';
  }).join('');
}

function createZip(entries) {
  const parts = [];
  const central = [];
  let offset = 0;
  entries.forEach(function(entry) {
    const nameBytes = utf8Bytes(entry.path);
    const data = entry.data ? entry.data : utf8Bytes(entry.content || '');
    const crc = crc32(data);
    const timeDate = dosTimeDate(new Date());
    const local = new Uint8Array(30 + nameBytes.length);
    const localView = new DataView(local.buffer);
    localView.setUint32(0, 0x04034b50, true);
    localView.setUint16(4, 20, true);
    localView.setUint16(6, 0x0800, true);
    localView.setUint16(8, 0, true);
    localView.setUint16(10, timeDate.time, true);
    localView.setUint16(12, timeDate.date, true);
    localView.setUint32(14, crc, true);
    localView.setUint32(18, data.length, true);
    localView.setUint32(22, data.length, true);
    localView.setUint16(26, nameBytes.length, true);
    local.set(nameBytes, 30);
    parts.push(local, data);

    const dir = new Uint8Array(46 + nameBytes.length);
    const dirView = new DataView(dir.buffer);
    dirView.setUint32(0, 0x02014b50, true);
    dirView.setUint16(4, 20, true);
    dirView.setUint16(6, 20, true);
    dirView.setUint16(8, 0x0800, true);
    dirView.setUint16(10, 0, true);
    dirView.setUint16(12, timeDate.time, true);
    dirView.setUint16(14, timeDate.date, true);
    dirView.setUint32(16, crc, true);
    dirView.setUint32(20, data.length, true);
    dirView.setUint32(24, data.length, true);
    dirView.setUint16(28, nameBytes.length, true);
    dirView.setUint32(42, offset, true);
    dir.set(nameBytes, 46);
    central.push(dir);
    offset += local.length + data.length;
  });
  const centralSize = central.reduce(function(sum, item) { return sum + item.length; }, 0);
  const end = new Uint8Array(22);
  const endView = new DataView(end.buffer);
  endView.setUint32(0, 0x06054b50, true);
  endView.setUint16(8, entries.length, true);
  endView.setUint16(10, entries.length, true);
  endView.setUint32(12, centralSize, true);
  endView.setUint32(16, offset, true);
  return new Blob(parts.concat(central, [end]), { type: 'application/zip' });
}

function utf8Bytes(value) {
  return new TextEncoder().encode(String(value));
}

let CRC_TABLE = null;
function crc32(bytes) {
  if (!CRC_TABLE) {
    CRC_TABLE = new Uint32Array(256);
    for (let i = 0; i < 256; i += 1) {
      let c = i;
      for (let k = 0; k < 8; k += 1) c = c & 1 ? 0xedb88320 ^ (c >>> 1) : c >>> 1;
      CRC_TABLE[i] = c >>> 0;
    }
  }
  let crc = 0xffffffff;
  for (let i = 0; i < bytes.length; i += 1) crc = CRC_TABLE[(crc ^ bytes[i]) & 0xff] ^ (crc >>> 8);
  return (crc ^ 0xffffffff) >>> 0;
}

function dosTimeDate(date) {
  const year = Math.max(1980, date.getFullYear());
  return {
    time: (date.getHours() << 11) | (date.getMinutes() << 5) | Math.floor(date.getSeconds() / 2),
    date: ((year - 1980) << 9) | ((date.getMonth() + 1) << 5) | date.getDate()
  };
}

function downloadBlob(blob, filename) {
  const url = URL.createObjectURL(blob);
  const link = document.createElement('a');
  link.href = url;
  link.download = filename;
  document.body.appendChild(link);
  link.click();
  link.remove();
  URL.revokeObjectURL(url);
}

function safeJson(value) {
  return JSON.stringify(value).replace(/</g, '\\u003c').replace(/\u2028/g, '\\u2028').replace(/\u2029/g, '\\u2029');
}

function sanitizeFilename(value) {
  return String(value || 'bai-giang-nls')
    .toLowerCase()
    .replace(/đ/g, 'd')
    .replace(/Đ/g, 'd')
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '')
    .slice(0, 70) || 'bai-giang-nls';
}

function packageSuffix(standard) {
  return {
    'SCORM 1.2': 'scorm12',
    'SCORM 2004': 'scorm2004',
    xAPI: 'xapi',
    'HTML5 offline': 'html5'
  }[standard] || 'html5';
}

function escXml(value) {
  return String(value == null ? '' : value).replace(/[<>&"']/g, function(char) {
    return { '<': '&lt;', '>': '&gt;', '&': '&amp;', '"': '&quot;', "'": '&apos;' }[char];
  });
}

function copyVisibleText() { writeClipboard(output.innerText.trim()); }

async function writeClipboard(text) {
  try {
    await navigator.clipboard.writeText(text);
    showToast('Đã sao chép.');
  } catch (error) {
    showToast('Trình duyệt chưa cho phép sao chép tự động.');
  }
}

function showToast(message) {
  const toast = document.getElementById('toast');
  toast.textContent = message;
  toast.classList.add('show');
  window.clearTimeout(showToast.timer);
  showToast.timer = window.setTimeout(function() { toast.classList.remove('show'); }, 2200);
}

function stripMarks(value) { return value.normalize('NFD').replace(/[̀-ͯ]/g, ''); }
function esc(value) {
  return String(value).replaceAll('&', '&amp;').replaceAll('<', '&lt;').replaceAll('>', '&gt;').replaceAll('"', '&quot;').replaceAll("'", '&#039;');
}

init();

