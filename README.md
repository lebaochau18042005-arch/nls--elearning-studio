# NLS E-Learning Studio

Đây là web app tạo bài giảng e-learning chạy trực tiếp bằng trình duyệt. App ưu tiên chế độ `Studio tương tác` để sản xuất bài giảng độc lập; phần lập kế hoạch bài dạy tích hợp NLS được giữ ở chế độ `Trợ lý bài dạy`.

## Nội dung chính

- Khung năng lực số cho người học theo Thông tư 02/2025/TT-BGDĐT.
- Tích hợp AI trong thiết kế kế hoạch bài dạy.
- Giáo dục di sản, giáo dục hòa nhập, giáo dục dân số và phòng chống ma túy.
- Sinh ma trận tích hợp, kế hoạch bài dạy, hoạt động, rubric đánh giá, prompt AI.
- Tạo kịch bản e-learning từ kế hoạch: mở đầu, mục tiêu, nội dung, hoạt động, quiz, thực hành, tổng kết.
- Nhập file PowerPoint `.pptx` để chuyển chữ trên từng slide thành các cảnh e-learning có lời dẫn, timeline và quiz kiểm tra nhanh.
- Soạn từng cảnh/slide trong workspace kiểu công cụ tác giả: ribbon, Slides pane, Canvas, Properties, Events/Actions, Variables và Timeline nhiều track.
- Thêm đối tượng vào slide theo tab `THÊM`: khung chứa, hình dạng, chú thích văn bản, vùng sáng, phương trình, biểu tượng, hiệu ứng cử chỉ, biểu đồ, bảng, hình ảnh, chụp màn hình, audio, video, YouTube, web, mô hình 3D, nhập chuột, gõ phím, nhập chữ, kéo thả, tô vẽ, nút, checkbox, radio, thanh trượt, danh sách thả xuống, bộ đếm thời gian, đường đi chuột, Zoom-n-Pan và phụ đề; có thể xem thử và xuất cùng gói bài giảng.
- Tạo câu hỏi theo tab `CÂU HỎI`: Đúng/Sai, Nhiều lựa chọn, Nhiều đáp án, Điền chỗ trống, Điền nhiều chỗ trống, Điền đoạn văn, Bài luận, Tuần tự, Kéo-Thả, Điểm ảnh, Dropdown, nhiều Dropdown, Tô vẽ, Đánh giá, Ngân hàng câu hỏi, Slide ngẫu nhiên, Slide báo cáo, cài đặt và sự kiện câu hỏi.
- Thiết kế giao diện theo tab `THIẾT KẾ`: chọn chủ đề/mẫu, màu nhấn, font chữ, kiểu nền và kích cỡ slide; thiết kế được áp dụng trong canvas, xem thử và gói xuất bản.
- Thiết lập chuyển tiếp theo tab `CHUYỂN TIẾP`: Không có, Cắt, Mờ dần, Đẩy vào, Quét, Che phủ, Mở ra, Lộ ra, Phân chia, Thanh ngẫu nhiên; chỉnh hướng hiệu ứng, thời lượng hiệu ứng, thời lượng slide và tự chuyển slide trong player xuất bản.
- Trợ lý AI trong Studio: mở tab `AI` để tạo câu hỏi từ slide, tạo phụ đề, gợi ý hình ảnh, kịch bản giọng đọc, bản dịch nháp và hỏi nhanh về bài giảng. Bản hiện tại chạy mô phỏng nội bộ, chưa gửi dữ liệu ra dịch vụ ngoài.
- Tích hợp Google Gemini qua API route `/api/gemini`: khi deploy Vercel, đặt biến môi trường `GEMINI_API_KEY` hoặc `GOOGLE_AI_API_KEY`; frontend không chứa API key. Nếu chưa có key, app tự dùng AI nội bộ dự phòng.
- Xem timeline bài giảng, chạy thử như người học, lưu mẫu trên trình duyệt, sao chép nội dung, xuất gói ZIP HTML5/SCORM 1.2/SCORM 2004/xAPI và in/PDF.

## Cách dùng

Mở file `index.html` bằng trình duyệt, hoặc chạy `chay-app-web.cmd` để mở app tại localhost.

Hai chế độ chính:

- `Studio tương tác`: giao diện tác giả toàn màn hình để nhập PPTX, tạo slide/cảnh, thêm quiz, chỉnh timeline, xem thử và xuất gói LMS.
- `Trợ lý bài dạy`: tạo kế hoạch, ma trận NLS, hoạt động, rubric, học liệu và prompt AI để làm nguồn nội dung cho bài giảng.

Các tab chính:

- `Tác giả`: chỉnh từng cảnh/slide theo workflow ActivePresenter-like: ribbon thao tác nhanh, danh sách slide, canvas 16:9, bảng thuộc tính, event-action, biến runtime và timeline nhiều track.
- `Studio`: có khu nhập `.pptx`; chọn file rồi bấm `Tạo bài giảng từ PPTX` để sinh các cảnh từ slide PowerPoint.
- `Timeline`: xem nhịp bài giảng và thời lượng từng cảnh.
- `Xem thử`: chạy thử bài học và kiểm tra câu hỏi tương tác.
- `Cấu hình`: rà preset tương đương ActivePresenter/iSpring, chuẩn xuất bản, điểm đạt, điều kiện hoàn thành, điều hướng và player.
- `Hướng dẫn`: bảng thao tác từng bước để chạy tương tác, kiểm tra quiz, lưu mẫu và xuất gói bài giảng.

Nút `Xuất gói LMS` tạo file ZIP theo chuẩn đang chọn:

- `HTML5 offline`: player HTML5 độc lập, mở bằng `index.html`.
- `SCORM 1.2`: có `imsmanifest.xml`, SCO launch, runtime `LMSInitialize/LMSSetValue/LMSCommit/LMSFinish`.
- `SCORM 2004`: có `imsmanifest.xml`, SCO launch, runtime `Initialize/SetValue/Commit/Terminate`.
- `xAPI`: có `tincan.xml`, launch `index.html`, runtime gửi statement tới LRS khi môi trường launch cung cấp `endpoint`, `auth`, `actor`, `activity_id`.

Lưu ý nhập PPTX: app đọc nội dung chữ trong slide trực tiếp trên trình duyệt. Hiệu ứng phức tạp, hình ảnh, âm thanh, video và ghi chú thuyết trình chưa được chuyển đầy đủ; giáo viên nên rà lại từng cảnh trong Studio trước khi xuất gói.

Nguồn tham khảo chính: https://thuvienphapluat.vn/van-ban/Giao-duc/Thong-tu-02-2025-TT-BGDDT-quy-dinh-Khung-nang-luc-so-cho-nguoi-hoc-625668.aspx

## Bộ skill trong app

App có thêm tab `Skills` với 10 skill: Kiến trúc sư NLS TT 02, Huấn luyện viên AI có trách nhiệm, Chuyên gia giáo dục di sản, Cố vấn giáo dục hòa nhập, Nhà thiết kế giáo dục dân số, Cố vấn phòng chống ma túy, Huấn luyện viên kiểm chứng nguồn, Chuyên gia rubric và minh chứng, Đạo diễn dự án trải nghiệm, Biên tập viên kế hoạch bài dạy.

Mỗi skill có thể áp dụng nhanh để chọn miền NLS/nội dung tích hợp liên quan và sao chép prompt riêng.

## Chạy độc lập

- Mở nhanh trên máy tính: bấm đúp `chay-app-web.cmd`. File này sẽ mở app tại localhost để hỗ trợ cài app/offline. Nếu máy chưa có Node.js, app sẽ tự mở trực tiếp bằng `index.html`.
- Mở trực tiếp không cần cài gì: bấm đúp `mo-truc-tiep.cmd` hoặc mở `index.html` bằng trình duyệt.
- Đưa lên web: upload toàn bộ thư mục lên hosting tĩnh như Vercel/Netlify/GitHub Pages. Khi chạy trên HTTPS, trình duyệt có thể hiện nút `Cài app` và lưu cache để dùng offline.
- Deploy Vercel có Google Gemini: import repo GitHub vào Vercel, thêm Environment Variable `GEMINI_API_KEY` hoặc `GOOGLE_AI_API_KEY`, sau đó redeploy. Không đưa API key vào `app.js`, `index.html` hoặc GitHub.
- Dùng trên máy tính bảng/điện thoại: mở đường link web, chọn `Thêm vào màn hình chính` hoặc `Cài đặt ứng dụng` nếu trình duyệt hỗ trợ.

Các file hỗ trợ chạy độc lập: `manifest.webmanifest`, `service-worker.js`, `pwa.js`, `local-server.js`, `assets/app-icon.svg`, `chay-app-web.cmd`, `mo-truc-tiep.cmd`.
