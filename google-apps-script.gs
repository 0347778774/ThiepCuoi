/**
 * Backend Google Sheet cho thiệp cưới online.
 * Cách dùng: xem phần HƯỚNG DẪN ở cuối file.
 */
const SHEET_NAME = "RSVP";
const HEADERS = ["Thời gian", "Họ tên", "Khách của", "Tham dự", "Số người", "Lời chúc", "Hiển thị"];

function getSheet_() {
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  let sh = ss.getSheetByName(SHEET_NAME);
  if (!sh) {
    sh = ss.insertSheet(SHEET_NAME);
    sh.appendRow(HEADERS);
    sh.setFrozenRows(1);
  }
  return sh;
}

// Chặn chèn công thức (=, +, -, @) và giới hạn độ dài
function clean_(v, max) {
  v = String(v || "").trim().slice(0, max);
  return /^[=+\-@]/.test(v) ? "'" + v : v;
}

function json_(obj) {
  return ContentService.createTextOutput(JSON.stringify(obj)).setMimeType(ContentService.MimeType.JSON);
}

// Khách gửi form xác nhận / lời chúc
function doPost(e) {
  const p = e.parameter || {};
  if (!p.name) return json_({ ok: false });
  const lock = LockService.getScriptLock();
  lock.waitLock(10000);
  try {
    const attendText = { yes: "Có", maybe: "Sẽ cố gắng", no: "Không" }[p.attend] || p.attend;
    getSheet_().appendRow([
      new Date(), clean_(p.name, 100), clean_(p.side, 20), clean_(attendText, 20),
      clean_(p.guests, 5), clean_(p.wish, 1000), true,
    ]);
  } finally {
    lock.releaseLock();
  }
  return json_({ ok: true });
}

// Trang thiệp lấy danh sách lời chúc (chỉ trả tên + lời chúc + ngày)
function doGet() {
  const rows = getSheet_().getDataRange().getValues().slice(1);
  const wishes = rows
    .filter((r) => r[5] && r[6] !== false && String(r[6]).toUpperCase() !== "FALSE")
    .map((r) => ({
      name: String(r[1]).replace(/^'/, ""),
      wish: String(r[5]).replace(/^'/, ""),
      time: Utilities.formatDate(new Date(r[0]), "Asia/Ho_Chi_Minh", "dd/MM/yyyy"),
    }));
  return json_({ wishes });
}

/* ============================ HƯỚNG DẪN ============================
1. Tạo một Google Sheet mới (vd: "Thiệp cưới - RSVP").
2. Menu Tiện ích mở rộng (Extensions) > Apps Script.
3. Xoá code mặc định, dán toàn bộ file này vào, bấm Lưu.
4. Bấm Triển khai (Deploy) > Tùy chọn triển khai mới (New deployment)
   - Loại: Ứng dụng web (Web app)
   - Thực thi dưới dạng (Execute as): Tôi (Me)
   - Người có quyền truy cập (Who has access): Bất kỳ ai (Anyone)
   Bấm Triển khai, cấp quyền cho tài khoản Google của bạn.
5. Copy "URL ứng dụng web" (dạng https://script.google.com/macros/s/.../exec)
   và dán vào CONFIG.sheetUrl trong script.js.

- Ẩn lời chúc không phù hợp: sửa cột "Hiển thị" của dòng đó thành FALSE.
- Nếu sửa code Apps Script: Deploy > Manage deployments > Edit > Version: New version
  (giữ nguyên URL cũ).
==================================================================== */
