window.APP_SKILLS = [
  {
    id: 'nls-tt02-architect',
    title: 'Kiến trúc sư NLS TT 02',
    badge: 'NLS',
    color: 'blue',
    category: 'NLS TT 02',
    role: 'Chuyển yêu cầu bài học thành mục tiêu, hoạt động và minh chứng theo Khung năng lực số cho người học.',
    recommendedFor: 'Khi cần gắn 6 miền NLS, 24 năng lực thành phần hoặc bậc năng lực vào kế hoạch bài dạy.',
    domains: ['data', 'communication', 'content', 'safety', 'problem', 'ai'],
    integrations: [],
    outputs: ['Ma trận NLS theo mục tiêu bài học', 'Bậc NLS gợi ý theo cấp học', 'Minh chứng quan sát được', 'Cảnh báo an toàn số'],
    workflow: [
      'Xác định cấp học, môn học, chủ đề, sản phẩm và thời lượng.',
      'Chọn 2-4 miền NLS trọng tâm thay vì dàn trải toàn bộ nếu bài học ngắn.',
      'Gắn mỗi miền với một hành động học sinh làm được trong giờ học.',
      'Viết minh chứng đánh giá bằng sản phẩm, lời giải thích, nguồn tham khảo hoặc nhật ký học tập.'
    ],
    checks: ['Không gán bậc NLS cứng theo lớp khi chưa có hướng dẫn của đơn vị.', 'Mỗi năng lực thành phần phải có hoạt động và minh chứng đi kèm.', 'Ưu tiên dữ liệu, an toàn, sáng tạo nội dung số và AI khi bài học có sản phẩm số.'],
    prompt: 'Thiết kế ma trận NLS theo TT 02/2025 cho bài học. Chỉ chọn các miền/năng lực thật sự có hoạt động và minh chứng. Nêu bậc gợi ý, hoạt động, sản phẩm, tiêu chí đánh giá và lưu ý an toàn số.'
  },
  {
    id: 'responsible-ai-coach',
    title: 'Huấn luyện viên AI có trách nhiệm',
    badge: 'AI',
    color: 'violet',
    category: 'AI',
    role: 'Tạo prompt, quy tắc dùng AI, nhật ký kiểm chứng và cảnh báo đạo đức AI cho giáo viên/học sinh.',
    recommendedFor: 'Khi bài học có dùng ChatGPT, GenAI, tìm kiếm AI, tạo ảnh, tạo slide hoặc phân tích dữ liệu bằng AI.',
    domains: ['ai', 'data', 'safety'],
    integrations: ['inclusion'],
    outputs: ['Prompt an toàn', 'Nhật ký prompt', 'Bảng kiểm chứng kết quả AI', 'Lưu ý dữ liệu cá nhân và thiên kiến'],
    workflow: [
      'Xác định AI chỉ hỗ trợ phần nào của nhiệm vụ, không thay thế tư duy của học sinh.',
      'Viết prompt rõ vai trò, bối cảnh, đầu ra và tiêu chí kiểm chứng.',
      'Yêu cầu học sinh đối chiếu kết quả AI với ít nhất một nguồn tin cậy.',
      'Ghi lại điểm AI làm tốt, điểm cần sửa và quyết định cuối cùng của học sinh.'
    ],
    checks: ['Không nhập thông tin cá nhân, hình ảnh riêng tư hoặc dữ liệu nhạy cảm của học sinh.', 'Không dùng AI để tạo nội dung kỳ thị, gây hại hoặc hướng dẫn hành vi nguy hiểm.', 'Luôn yêu cầu nêu giới hạn, nguồn đối chiếu và phần học sinh tự chỉnh sửa.'],
    prompt: 'Tạo bộ hướng dẫn dùng AI có trách nhiệm cho bài học: prompt mẫu, việc học sinh được phép dùng AI, việc không được làm, bảng kiểm chứng nguồn, nhật ký prompt và tiêu chí đánh giá đóng góp thật của học sinh.'
  },
  {
    id: 'heritage-integrator',
    title: 'Chuyên gia giáo dục di sản',
    badge: 'DS',
    color: 'gold',
    category: 'Tích hợp',
    role: 'Lồng ghép di sản vật thể, phi vật thể, ký ức địa phương và trách nhiệm bảo tồn vào bài học.',
    recommendedFor: 'Khi chủ đề liên quan lịch sử, địa lí, văn hóa, nghệ thuật, địa phương học, du lịch hoặc truyền thông cộng đồng.',
    domains: ['data', 'content', 'ai'],
    integrations: ['heritage'],
    outputs: ['Hồ sơ di sản', 'Bản đồ/infographic di sản', 'Thông điệp bảo tồn', 'Quy tắc bản quyền và tôn trọng chủ thể văn hóa'],
    workflow: [
      'Chọn một di sản hoặc câu chuyện địa phương gần với bài học.',
      'Cho học sinh khai thác nguồn có kiểm chứng: người kể, tư liệu địa phương, trang chính thống hoặc bảo tàng.',
      'Tạo sản phẩm số giới thiệu giá trị di sản và một hành động bảo tồn.',
      'Yêu cầu ghi nguồn ảnh/tư liệu và tránh thương mại hóa, bóp méo hoặc định kiến văn hóa.'
    ],
    checks: ['Nội dung di sản phải có nguồn rõ ràng.', 'Không dùng hình ảnh/âm thanh không rõ quyền sử dụng.', 'Sản phẩm cần thể hiện thái độ tôn trọng cộng đồng sở hữu di sản.'],
    prompt: 'Lồng ghép giáo dục di sản vào bài học. Hãy đề xuất học liệu, hoạt động, sản phẩm số, câu hỏi thảo luận, tiêu chí đánh giá và lưu ý bản quyền/tôn trọng chủ thể văn hóa.'
  },
  {
    id: 'inclusive-udl-adapter',
    title: 'Cố vấn giáo dục hòa nhập',
    badge: 'HN',
    color: 'green',
    category: 'Tích hợp',
    role: 'Điều chỉnh kế hoạch theo thiết kế phổ quát, nhiều cách tham gia và nhiều cách thể hiện kết quả.',
    recommendedFor: 'Khi lớp có học sinh cần hỗ trợ đọc hiểu, chú ý, vận động, giao tiếp, tốc độ học tập hoặc ngôn ngữ.',
    domains: ['communication', 'safety', 'problem'],
    integrations: ['inclusion'],
    outputs: ['Nhiệm vụ nhiều mức', 'Hỗ trợ bằng hình ảnh/mẫu câu', 'Vai trò nhóm công bằng', 'Checklist tiếp cận sản phẩm'],
    workflow: [
      'Xác định rào cản: chữ quá dài, thao tác khó, thời gian ngắn, vai trò nhóm chưa công bằng.',
      'Tạo ba mức nhiệm vụ: cốt lõi, mở rộng, sáng tạo.',
      'Cho phép học sinh thể hiện bằng nói, viết, hình ảnh, sơ đồ, sản phẩm số hoặc trình bày nhóm.',
      'Bổ sung hỗ trợ: mẫu câu, từ khóa, hình ảnh, thời gian, bạn đồng hành và tiêu chí rõ.'
    ],
    checks: ['Không gán nhãn học sinh; chỉ mô tả nhu cầu và hỗ trợ.', 'Tất cả học sinh có vai trò có ý nghĩa trong sản phẩm chung.', 'Rubric đánh giá mục tiêu cốt lõi, không phạt học sinh vì cách thể hiện khác biệt.'],
    prompt: 'Điều chỉnh kế hoạch bài học theo giáo dục hòa nhập và thiết kế phổ quát. Hãy tạo nhiệm vụ ba mức, hỗ trợ cụ thể, phương án tham gia bình đẳng và rubric không kỳ thị.'
  },
  {
    id: 'population-data-designer',
    title: 'Nhà thiết kế giáo dục dân số',
    badge: 'DSO',
    color: 'violet',
    category: 'Tích hợp',
    role: 'Gắn dân số, gia đình, bình đẳng giới, sức khỏe và phát triển bền vững vào bài học qua dữ liệu/tình huống.',
    recommendedFor: 'Khi bài học có biểu đồ, số liệu, địa lí dân cư, công dân, sức khỏe, gia đình, lao động, di cư hoặc môi trường.',
    domains: ['data', 'communication', 'safety'],
    integrations: ['population'],
    outputs: ['Tình huống dân số phù hợp độ tuổi', 'Bảng đọc dữ liệu', 'Câu hỏi nguyên nhân - hệ quả', 'Thông điệp hành động có trách nhiệm'],
    workflow: [
      'Chọn một vấn đề dân số phù hợp độ tuổi và môn học.',
      'Dùng dữ liệu đơn giản hoặc tình huống đời sống để học sinh phân tích.',
      'Dẫn học sinh nhận ra quyền, trách nhiệm, bình đẳng và lựa chọn an toàn.',
      'Kết thúc bằng thông điệp hoặc giải pháp nhỏ có thể thực hiện.'
    ],
    checks: ['Không hỏi thông tin riêng tư về gia đình/cơ thể của học sinh.', 'Tránh định kiến giới, vùng miền, hoàn cảnh gia đình.', 'Dữ liệu cần có nguồn hoặc được ghi là dữ liệu giả định để học tập.'],
    prompt: 'Tích hợp giáo dục dân số vào bài học bằng dữ liệu hoặc tình huống phù hợp độ tuổi. Hãy tạo câu hỏi, hoạt động nhóm, sản phẩm, tiêu chí đánh giá và cảnh báo tránh định kiến/rieng tư.'
  },
  {
    id: 'drug-prevention-safe-lesson',
    title: 'Cố vấn phòng chống ma túy',
    badge: 'MT',
    color: 'red',
    category: 'Tích hợp',
    role: 'Thiết kế nội dung phòng ngừa ma túy theo hướng an toàn, không mô tả chi tiết hành vi gây hại.',
    recommendedFor: 'Khi cần lồng ghép kỹ năng từ chối, nhận diện nguy cơ, an toàn số, pháp luật và kênh hỗ trợ.',
    domains: ['safety', 'communication', 'data'],
    integrations: ['drug'],
    outputs: ['Tình huống phòng ngừa', 'Kịch bản từ chối', 'Sơ đồ người tin cậy', 'Thông điệp truyền thông không kỳ thị'],
    workflow: [
      'Chọn tình huống nguy cơ phù hợp cấp học, không mô tả cách sử dụng chất gây hại.',
      'Dạy quy trình: nhận diện nguy cơ, từ chối, rời khỏi, báo người tin cậy.',
      'Cho học sinh luyện câu nói, vai trò và kênh hỗ trợ an toàn.',
      'Tạo sản phẩm truyền thông nhấn mạnh bảo vệ, hỗ trợ và không kỳ thị.'
    ],
    checks: ['Không nêu cách tìm, dùng, che giấu hoặc mua bán chất cấm.', 'Không gây tò mò bằng chi tiết nguy hiểm.', 'Có kênh hỗ trợ: gia đình, giáo viên, y tế học đường, cơ quan chức năng khi cần.'],
    prompt: 'Thiết kế hoạt động phòng chống ma túy an toàn cho bài học. Chỉ tập trung nhận diện nguy cơ, kỹ năng từ chối, tìm hỗ trợ, truyền thông không kỳ thị và tiêu chí đánh giá hành vi an toàn.'
  },
  {
    id: 'source-verification-coach',
    title: 'Huấn luyện viên kiểm chứng nguồn',
    badge: 'SRC',
    color: 'teal',
    category: 'NLS TT 02',
    role: 'Tạo quy trình kiểm tra nguồn, dữ liệu, ảnh, nội dung AI và trích dẫn trong sản phẩm học tập.',
    recommendedFor: 'Khi học sinh tìm thông tin trên mạng, dùng ảnh/video, dùng AI hoặc trình bày số liệu.',
    domains: ['data', 'content', 'ai'],
    integrations: ['heritage', 'population'],
    outputs: ['Bảng kiểm nguồn', 'Mẫu ghi trích dẫn', 'Câu hỏi kiểm chứng', 'Minh chứng chỉnh sửa sau kiểm chứng'],
    workflow: [
      'Yêu cầu học sinh ghi nguồn ngay khi thu thập thông tin.',
      'Đối chiếu tối thiểu hai nguồn khi thông tin quan trọng hoặc dễ gây tranh cãi.',
      'Kiểm tra tác giả, thời điểm, mục đích, bằng chứng và quyền sử dụng.',
      'Ghi lại điều đã sửa sau khi kiểm chứng.'
    ],
    checks: ['Không chấp nhận nguồn không rõ xuất xứ cho dữ liệu quan trọng.', 'Ảnh/âm thanh cần ghi nguồn và quyền dùng.', 'Kết quả AI chỉ là gợi ý, không xem là nguồn cuối cùng.'],
    prompt: 'Tạo bảng kiểm chứng nguồn cho bài học. Bao gồm câu hỏi kiểm tra tác giả, thời điểm, mục đích, bằng chứng, quyền sử dụng, đối chiếu AI và cách học sinh ghi minh chứng.'
  },
  {
    id: 'rubric-evidence-builder',
    title: 'Chuyên gia rubric và minh chứng',
    badge: 'RB',
    color: 'gold',
    category: 'Đánh giá',
    role: 'Biến mục tiêu bài học và các nội dung tích hợp thành rubric 4 mức, bảng kiểm và minh chứng quan sát được.',
    recommendedFor: 'Khi cần đánh giá sản phẩm số, hoạt động nhóm, năng lực số, giáo dục tích hợp hoặc dự án.',
    domains: ['problem', 'communication', 'content'],
    integrations: ['heritage', 'inclusion', 'population', 'drug'],
    outputs: ['Rubric 4 mức', 'Bảng kiểm quan sát', 'Phiếu tự đánh giá', 'Gợi ý phản hồi đồng đẳng'],
    workflow: [
      'Chọn 3-5 tiêu chí quan trọng nhất: kiến thức, NLS, tích hợp, hợp tác, sản phẩm.',
      'Viết mức đạt bằng hành vi quan sát được, tránh mô tả mơ hồ.',
      'Gắn mỗi tiêu chí với minh chứng cụ thể: sản phẩm, lời giải thích, nguồn, nhật ký, phản hồi.',
      'Tạo câu tự đánh giá ngắn để học sinh tự nhận ra tiến bộ.'
    ],
    checks: ['Rubric không quá dài so với thời lượng bài học.', 'Có tiêu chí cho quá trình, không chỉ sản phẩm cuối.', 'Tiêu chí hòa nhập không phạt học sinh vì cần hỗ trợ.'],
    prompt: 'Tạo rubric 4 mức và bộ minh chứng cho bài học. Tiêu chí phải quan sát được, phù hợp cấp học, có tự đánh giá, phản hồi đồng đẳng và minh chứng cho NLS/nội dung tích hợp.'
  },
  {
    id: 'project-learning-designer',
    title: 'Đạo diễn dự án trải nghiệm',
    badge: 'DA',
    color: 'green',
    category: 'Thiết kế học tập',
    role: 'Chuyển bài học thành chuỗi nhiệm vụ dự án/trải nghiệm có sản phẩm, vai trò nhóm và lịch trình rõ.',
    recommendedFor: 'Khi thời lượng từ 2 tiết trở lên hoặc cần sản phẩm truyền thông, điều tra nhỏ, triển lãm, bản đồ, video.',
    domains: ['communication', 'content', 'problem', 'ai'],
    integrations: ['heritage', 'population', 'inclusion'],
    outputs: ['Chuỗi nhiệm vụ dự án', 'Vai trò nhóm', 'Mốc tiến độ', 'Sản phẩm công bố và phản hồi'],
    workflow: [
      'Xác định vấn đề thật hoặc câu hỏi lớn của dự án.',
      'Chia dự án thành khảo sát nguồn, thiết kế sản phẩm, phản hồi, hoàn thiện và công bố.',
      'Phân vai: trưởng nhóm, kiểm chứng nguồn, thiết kế, thuyết trình, theo dõi hòa nhập.',
      'Dùng rubric và nhật ký tiến độ để đánh giá cả quá trình.'
    ],
    checks: ['Dự án phải vừa sức với thời lượng và cấp học.', 'Vai trò nhóm không cố định theo năng lực, cần xoay vòng hoặc hỗ trợ.', 'Sản phẩm công bố phải bảo vệ dữ liệu cá nhân và quyền hình ảnh.'],
    prompt: 'Biến bài học thành dự án/trải nghiệm. Hãy tạo câu hỏi lớn, nhiệm vụ theo giai đoạn, vai trò nhóm, học liệu, sản phẩm, rubric, lịch trình và lưu ý an toàn số.'
  },
  {
    id: 'lesson-editor-exporter',
    title: 'Biên tập viên kế hoạch bài dạy',
    badge: 'EDIT',
    color: 'blue',
    category: 'Biên tập',
    role: 'Rà soát kế hoạch cuối cùng để mạch lạc, đúng cấu trúc, rõ mục tiêu, hoạt động, đánh giá và lưu ý triển khai.',
    recommendedFor: 'Khi giáo viên đã có bản nháp và muốn biến thành văn bản hoàn chỉnh để in, nộp tổ chuyên môn hoặc chia sẻ.',
    domains: ['problem', 'content'],
    integrations: [],
    outputs: ['Bản kế hoạch gọn', 'Danh sách điểm cần bổ sung', 'Ngôn ngữ sư phạm rõ ràng', 'Mục in/PDF sạch'],
    workflow: [
      'Kiểm tra tính thống nhất giữa mục tiêu, hoạt động, sản phẩm và đánh giá.',
      'Rút gọn câu dài, bỏ phần trùng lặp, làm rõ vai trò giáo viên/học sinh.',
      'Đưa lưu ý an toàn, hòa nhập, AI và dữ liệu cá nhân vào đúng vị trí.',
      'Tạo bản cuối cùng có thể in hoặc xuất PDF.'
    ],
    checks: ['Không thêm yêu cầu vượt quá thời lượng.', 'Không để mục tiêu không có hoạt động đánh giá.', 'Không dùng thuật ngữ mơ hồ nếu có thể viết thành hành động cụ thể.'],
    prompt: 'Rà soát và biên tập kế hoạch bài dạy. Hãy sửa cho mạch lạc, đủ mục tiêu-hoạt động-đánh giá, không trùng lặp, có lưu ý an toàn số/AI/hòa nhập và chỉ ra điểm cần bổ sung.'
  }
];
