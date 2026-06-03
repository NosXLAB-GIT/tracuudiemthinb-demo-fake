# 🎓 HỆ THỐNG TRA CỨU ĐIỂM THI VÀO LỚP 10 THPT - NINH BÌNH (2026-2027) 🎓

Chào anh em! Đây là project tra cứu điểm thi giả lập dành cho kỳ thi tuyển sinh lớp 10 tại tỉnh Ninh Bình. Dự án được thiết kế với giao diện mang đậm phong cách truyền thống của các cổng thông tin giáo dục chính thức nhưng vẫn đảm bảo trải nghiệm mượt mà. 🚀

## ✨ Tính năng nổi bật
- **Tra cứu SBD chính xác**: Kết nối dữ liệu từ danh sách hàng chục thí sinh.
- **Mã xác nhận (Captcha)**: Hệ thống tự động làm mới mã captcha sau mỗi lượt tra cứu thành công để đảm bảo tính bảo mật[cite: 2].
- **Giao diện trực quan**: Bảng điểm được thiết kế có viền rõ ràng, hiển thị đầy đủ các môn: Toán, Ngữ văn, Tiếng Anh và Môn chuyên[cite: 1, 2].
- **Logic tự động**: Tự động sinh điểm ngẫu nhiên cho thí sinh nếu dữ liệu điểm đang để trống[cite: 1].

## 📂 Cấu trúc dự án
1.  **index.html**: Giao diện chính của trang tra cứu. Chứa mã nguồn HTML/CSS và logic xử lý hiển thị điểm[cite: 2].
2.  **data.js**: "Trái tim" của hệ thống, nơi lưu trữ toàn bộ Object dữ liệu thí sinh và hàm khởi tạo điểm[cite: 1].

## 🛠️ Hướng dẫn cài đặt & Sử dụng
1.  **Bước 1**: Tải cả 2 file `index.html` và `data.js` về máy.
2.  **Bước 2**: Đảm bảo 2 file này nằm **chung một thư mục**.
3.  **Bước 3**: Mở file `index.html` bằng trình duyệt (Chrome, Edge, Brave...).
4.  **Bước 4**: Nhập Số báo danh (Ví dụ: `010390`), nhập mã xác nhận và ấn **Tra cứu** để xem kết quả rực rỡ[cite: 2].

## 📝 Cấu trúc dữ liệu (data.js)
Mỗi thí sinh được quản lý theo cấu trúc bản ghi như sau[cite: 1]:
```javascript
"SBD": {
  hoTen: "HỌ VÀ TÊN",
  gioiTinh: "Nam" | "Nữ",
  ngaySinh: "DD/MM/YYYY",
  truong: "Tên trường THCS",
  diem: {
    toan: 8.5,
    nguVan: 7.0,
    tiengAnh: 6.5,
    monChuyen: 9.0 // Hoặc null nếu không thi chuyên
  }
}
