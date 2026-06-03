// ============================================================
// FILE DỮ LIỆU THÍ SINH - KỲ THI TUYỂN SINH LỚP 10 THPT
// Sở Giáo dục và Đào tạo Ninh Bình - Năm học 2026-2027
// ============================================================
// Cấu trúc mỗi bản ghi:
// "SBD": {
//   hoTen: "HỌ VÀ TÊN",
//   gioiTinh: "Nam" | "Nữ",
//   ngaySinh: "DD/MM/YYYY",
//   truong: "Tên trường THCS",
//   diem: {
//     toan: 8.5,          // hoặc null nếu chưa có
//     nguVan: 7.0,
//     tiengAnh: 6.5,
//     monChuyen: null,    // chỉ dành cho trường chuyên
//     // Gắn dấu (*) nếu là điểm sau phúc khảo, ví dụ: toan: "8.5*"
//   }
// }
// Nếu chưa có điểm, để diem: null

const duLieu = {
  // ===== PHÒNG THI 17 =====
  "010370": {
    hoTen: "TẠ THỊ QUỲNH TRANG",
    gioiTinh: "Nữ",
    ngaySinh: "07/02/2011",
    truong: "THCS Ninh Phúc",
    diem: null
  },
  "010371": {
    hoTen: "TRẦN HUYỀN TRANG",
    gioiTinh: "Nữ",
    ngaySinh: "30/07/2011",
    truong: "THCS Gia Thủy",
    diem: null
  },
  "010372": {
    hoTen: "VŨ PHẠM HUYÊN TRANG",
    gioiTinh: "Nữ",
    ngaySinh: "11/02/2011",
    truong: "THCS Ninh Phong",
    diem: null
  },
  "010373": {
    hoTen: "VŨ THU TRANG",
    gioiTinh: "Nữ",
    ngaySinh: "05/03/2011",
    truong: "THCS Lê Hồng Phong",
    diem: null
  },
  "010374": {
    hoTen: "NGUYỄN HOÀNG THANH TÚ",
    gioiTinh: "Nữ",
    ngaySinh: "29/04/2011",
    truong: "THCS Đinh Tiên Hoàng - Ninh Mỹ",
    diem: null
  },
  "010375": {
    hoTen: "NGUYỄN THU UYÊN",
    gioiTinh: "Nữ",
    ngaySinh: "31/12/2011",
    truong: "THCS Lý Tự Trọng",
    diem: null
  },
  "010376": {
    hoTen: "TRẦN TỐ UYÊN",
    gioiTinh: "Nữ",
    ngaySinh: "14/03/2011",
    truong: "THCS Trương Hán Siêu",
    diem: null
  },
  "010377": {
    hoTen: "LÊ THANH VÂN",
    gioiTinh: "Nữ",
    ngaySinh: "04/09/2011",
    truong: "THCS Lý Tự Trọng",
    diem: null
  },
  "010378": {
    hoTen: "NGUYỄN THỊ THÙY VÂN",
    gioiTinh: "Nữ",
    ngaySinh: "20/01/2011",
    truong: "THCS Đinh Tiên Hoàng - Ninh Mỹ",
    diem: null
  },
  "010379": {
    hoTen: "DƯƠNG HÀ TƯỜNG VY",
    gioiTinh: "Nữ",
    ngaySinh: "12/05/2011",
    truong: "THCS Gia Phong",
    diem: null
  },
  "010380": {
    hoTen: "ĐOÀN THỊ TƯỜNG VY",
    gioiTinh: "Nữ",
    ngaySinh: "07/10/2011",
    truong: "THCS Lý Tự Trọng",
    diem: null
  },
  "010381": {
    hoTen: "ĐINH BÙI NGỌC XUÂN",
    gioiTinh: "Nữ",
    ngaySinh: "08/06/2011",
    truong: "THCS Ninh Sơn",
    diem: null
  },
  "010382": {
    hoTen: "NGUYỄN HẢI YẾN",
    gioiTinh: "Nữ",
    ngaySinh: "27/07/2011",
    truong: "THCS Trương Hán Siêu",
    diem: null
  },

  // ===== PHÒNG THI 18 =====
  "010383": {
    hoTen: "TRẦN THUẬN AN",
    gioiTinh: "Nam",
    ngaySinh: "16/06/2011",
    truong: "THCS Trần Huy Liệu",
    diem: null
  },
  "010384": {
    hoTen: "ĐINH VŨ HÙNG ANH",
    gioiTinh: "Nam",
    ngaySinh: "30/04/2011",
    truong: "THCS Trương Hán Siêu",
    diem: null
  },
  "010385": {
    hoTen: "TỐNG ĐỨC ANH",
    gioiTinh: "Nam",
    ngaySinh: "05/07/2011",
    truong: "THCS Lai Thành",
    diem: null
  },
  "010386": {
    hoTen: "TRẦN HÀ ANH",
    gioiTinh: "Nữ",
    ngaySinh: "21/03/2011",
    truong: "THCS Lê Quý Đôn",
    diem: null
  },
  "010387": {
    hoTen: "TRẦN NGUYÊN ANH",
    gioiTinh: "Nam",
    ngaySinh: "11/09/2011",
    truong: "THCS Yên Đồng",
    diem: null
  },
  "010388": {
    hoTen: "VŨ VIỆT ANH",
    gioiTinh: "Nam",
    ngaySinh: "16/04/2011",
    truong: "THCS Trương Hán Siêu",
    diem: null
  },
  "010389": {
    hoTen: "ĐINH LÊ XUÂN BÁCH",
    gioiTinh: "Nam",
    ngaySinh: "19/10/2011",
    truong: "THCS Lê Hồng Phong",
    diem: null
  },
  "010390": {
    hoTen: "NGUYỄN HUY BÁCH",
    gioiTinh: "Nam",
    ngaySinh: "11/04/2011",
    truong: "THCS Lê Hồng Phong",
    diem: null
  },
  "010391": {
    hoTen: "ĐOÀN CHÍ BẢO",
    gioiTinh: "Nam",
    ngaySinh: "16/01/2011",
    truong: "THCS Ninh Bình - Bạc Liêu",
    diem: null
  },
  "010392": {
    hoTen: "BÙI NGUYỄN CÔNG",
    gioiTinh: "Nam",
    ngaySinh: "03/10/2011",
    truong: "THCS Ninh Nhất",
    diem: null
  },
  "010393": {
    hoTen: "NGUYỄN THÀNH CÔNG",
    gioiTinh: "Nam",
    ngaySinh: "20/06/2011",
    truong: "THCS Gia Tân",
    diem: null
  },
  "010394": {
    hoTen: "NGUYỄN TRÍ DŨNG",
    gioiTinh: "Nam",
    ngaySinh: "29/08/2011",
    truong: "THCS Lê Hồng Phong",
    diem: null
  },
  "010395": {
    hoTen: "VŨ TRỌNG TRÍ DŨNG",
    gioiTinh: "Nam",
    ngaySinh: "12/02/2011",
    truong: "THCS Lý Tự Trọng",
    diem: null
  },
  "010396": {
    hoTen: "NGUYỄN ĐỨC DUY",
    gioiTinh: "Nam",
    ngaySinh: "01/03/2011",
    truong: "THCS Khánh Lợi",
    diem: null
  },
  "010397": {
    hoTen: "NGUYỄN NHÂN ĐẠO",
    gioiTinh: "Nam",
    ngaySinh: "14/02/2011",
    truong: "THCS Ninh An",
    diem: null
  },
  "010398": {
    hoTen: "LƯU DANH ĐẠT",
    gioiTinh: "Nam",
    ngaySinh: "21/07/2011",
    truong: "THCS Liên Sơn",
    diem: null
  },

  "010399": {
    hoTen: "PHẠM NHẬT MINH",
    gioiTinh: "Nam",
    ngaySinh: "08/07/2011",
    truong: "THCS Trương Hán Siêu",
    diem: null
  }

};

function taoDiem() {
    for (const sbd in duLieu) {
        if (duLieu[sbd].diem === null) {
            duLieu[sbd].diem = {
                toan: +(Math.random() * 4 + 6).toFixed(2),
                nguVan: +(Math.random() * 4 + 6).toFixed(2),
                tiengAnh: +(Math.random() * 4 + 6).toFixed(2),
                // Sửa từ null thành một con số ngẫu nhiên (ví dụ từ 5 đến 10)
                monChuyen: +(Math.random() * 5 + 5).toFixed(2) 
            };
        }
    }
}
// Chạy khởi tạo dữ liệu điểm
taoDiem();

// Xuất dữ liệu ra phạm vi toàn cục (để file html đọc được)
window.duLieu = duLieu;