/* =====================================================================
   CẤU HÌNH THIỆP CƯỚI — chỉ cần sửa phần này
   ===================================================================== */
const CONFIG = {
  groomName: "Nguyễn Đức Trưởng",
  brideName: "Phạm Hồng Nhung",
  groomShort: "Đức Trưởng",
  brideShort: "Hồng Nhung",
  groomRole: "Chú rể · Trưởng nam",
  brideRole: "Cô dâu · Út nữ",
  groomBio: "Một lập trình viên trầm tính, thích những điều giản dị và yêu em hơn cả code.",
  brideBio: "Cô nàng kế toán dịu dàng, hay cười, cân đối được mọi con số, trừ một khoản: thương anh không tính toán.",

  groomFather: "Nguyễn Đức Phương",
  groomMother: "Trần Ngọc Huyền",
  groomAddress: "Xóm Gò, Tổ dân phố Trúc Ổ, Phường Bồng Lai, Tp. Bắc Ninh",
  brideFather: "Phạm Tiến Thiện",
  brideMother: "Nguyễn Thị Lượng",
  brideAddress: "Tổ dân phố Thổ Hà, Phường Vân Hà, Tp. Bắc Ninh",

  // Ngày cưới (dùng cho đếm ngược & lịch) — giờ Việt Nam
  weddingDate: "2026-11-29T00:00:00+07:00",

  // Thiệp riêng cho từng bên: thêm &nha=trai hoặc &nha=gai vào link (mặc định: nhà trai).
  // Mỗi bên có danh sách sự kiện (địa chỉ, bản đồ) và hộp mừng cưới (QR) riêng.
  // time để trống "" nếu chưa có giờ cụ thể; mapQuery để trống = không hiện bản đồ.

  // ----- Sự kiện NHÀ TRAI (?nha=trai) -----
  events: [
    {
      title: "Tiệc Cưới", host: "Trân trọng kính mời",
      time: "15:00", date: "2026-11-28",
      lunar: "Tức ngày 20 tháng 10 năm Bính Ngọ",
      place: "Nhà văn hoá Tổ dân phố Trúc Ổ",
      address: "Trúc Ổ, Phường Bồng Lai, Thành phố Bắc Ninh",
      mapQuery: "21.1171153,106.1407952",   // Nhà văn hóa thôn Trúc Ổ
    },
    {
      title: "Lễ Thành Hôn", host: "Tại tư gia nhà trai",
      time: "", date: "2026-11-29",
      lunar: "Tức ngày 21 tháng 10 năm Bính Ngọ",
      place: "Tư gia nhà trai",
      address: "Xóm Gò, Tổ dân phố Trúc Ổ, Phường Bồng Lai, Thành phố Bắc Ninh",
      mapQuery: "",   // để trống = không hiện bản đồ & nút Chỉ đường
    },
  ],

  // ----- Sự kiện NHÀ GÁI (?nha=gai) — TODO: điền giờ, địa điểm, toạ độ bản đồ -----
  brideEvents: [
    {
      title: "Tiệc Cưới", host: "Trân trọng kính mời",
      time: "15:00", date: "2026-11-28",
      lunar: "Tức ngày 20 tháng 10 năm Bính Ngọ",
      place: "Tư gia nhà gái",
      address: "Tổ dân phố Thổ Hà, Phường Vân Hà, Thành phố Bắc Ninh",
      mapQuery: "",
    },
    {
      title: "Lễ Vu Quy", host: "Tại tư gia nhà gái",
      time: "", date: "2026-11-29",
      lunar: "Tức ngày 21 tháng 10 năm Bính Ngọ",
      place: "Tư gia nhà gái",
      address: "Tổ dân phố Thổ Hà, Phường Vân Hà, Thành phố Bắc Ninh",
      mapQuery: "",
    },
  ],

  story: [
    { date: "2019", title: "Lần đầu gặp gỡ", text: "Một ngày bình thường, hai con người bình thường vô tình gặp nhau — và mọi thứ bắt đầu từ đó." },
    { date: "2020", title: "Chính thức hẹn hò", text: "Những buổi cà phê, những chuyến đi nhỏ và hàng trăm tin nhắn chúc ngủ ngon." },
    { date: "2025", title: "Lời cầu hôn", text: "Anh hỏi “Làm vợ anh nhé?” và em đã gật đầu trong nước mắt hạnh phúc." },
    { date: "29.11.2026", title: "Về chung một nhà", text: "Chúng mình chính thức trở thành vợ chồng. Cảm ơn vì bạn đã ở đây chứng kiến!" },
  ],

  // Ảnh: đặt file vào thư mục images/ rồi ghi đường dẫn. Để trống => dùng ảnh minh hoạ.
  images: {
    hero: "images/hero.jpg",
    groom: "images/groom.jpg",
    bride: "images/co-dau.jpg",
    thanks: "images/thanks.jpg",
    story: ["images/album/hd07338.jpg", "images/album/hd07927.jpg", "images/album/sun01131.jpg", "images/album/hd07953.jpg"],
    // Ảnh trong thư mục images/album/ sẽ tự dùng bản nhỏ ở images/album/thumb/ cho lưới ảnh
    gallery: [
      "images/album/hd07338.jpg",
      "images/album/hd07431.jpg",
      "images/album/hd07520.jpg",
      "images/album/hd07611.jpg",
      "images/album/hd07646.jpg",
      "images/album/hd07723.jpg",
      "images/album/hd07746.jpg",
      "images/album/hd07777.jpg",
      "images/album/hd07792.jpg",
      "images/album/hd07823.jpg",
      "images/album/hd07927.jpg",
      "images/album/hd07953.jpg",
      "images/album/hd07982.jpg",
      "images/album/sun01005.jpg",
      "images/album/sun01057.jpg",
      "images/album/sun01131.jpg",
      "images/album/sun01190.jpg",
      "images/album/sun01262.jpg",
      "images/co-dau-full.jpg",
      "images/groom-full.jpg",
    ],
  },


  music: "music/nhac-cuoi.mp3",

  // side: "trai" chỉ hiện ở thiệp nhà trai, "gai" chỉ hiện ở thiệp nhà gái
  gifts: [
    { side: "trai", title: "Mừng cưới chú rể", bank: "Vietcombank", account: "0301000393415", owner: "NGUYEN DUC TRUONG", qr: "images/qr-chu-re.png" },
    { side: "gai", title: "Mừng cưới cô dâu", bank: "Techcombank", account: "19036434603019", owner: "PHAM HONG NHUNG", qr: "images/qr-co-dau.png" },
  ],

  // (Tuỳ chọn) URL Google Apps Script để lưu RSVP/lời chúc vào Google Sheet
  sheetUrl: "",

  // Tự động mở phong bì sau bao nhiêu mili-giây (0 = tắt, khách phải bấm "Mở thiệp")
  autoOpenDelay: 0,

  // Tự động cuộn chậm từ đầu đến cuối thiệp sau khi mở.
  // Khách chạm/cuộn/bấm => tạm dừng, sau resumeAfter ms không thao tác sẽ cuộn tiếp.
  // loop: tới cuối nghỉ bottomPause ms, lướt mượt về đầu, nghỉ topPause ms rồi cuộn lại
  autoScroll: { enabled: true, speed: 45, startDelay: 2000, resumeAfter: 5000, loop: true, bottomPause: 3000, topPause: 2500 }, // speed: px/giây
};

/* =====================================================================
   TIỆN ÍCH
   ===================================================================== */
const $ = (s, el = document) => el.querySelector(s);
const pad = (n) => String(n).padStart(2, "0");
const esc = (s) => String(s).replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
const WEEKDAYS = ["Chủ nhật", "Thứ hai", "Thứ ba", "Thứ tư", "Thứ năm", "Thứ sáu", "Thứ bảy"];
const wDate = new Date(CONFIG.weddingDate);

// Ảnh minh hoạ (SVG) khi chưa có ảnh thật
const PALETTES = [["#e8c4c0", "#b8975a"], ["#f4ece0", "#8e2c3a"], ["#d9c08f", "#e8a5ad"], ["#c9a9a6", "#6b1e2a"], ["#efe2d0", "#b8975a"]];
function placeholder(label, w = 800, h = 1000, i = 0) {
  const [a, b] = PALETTES[i % PALETTES.length];
  const svg = `<svg xmlns='http://www.w3.org/2000/svg' width='${w}' height='${h}' viewBox='0 0 ${w} ${h}'>
    <defs><linearGradient id='g' x1='0' y1='0' x2='1' y2='1'><stop offset='0' stop-color='${a}'/><stop offset='1' stop-color='${b}'/></linearGradient></defs>
    <rect width='100%' height='100%' fill='url(#g)'/>
    ${label ? `<text x='50%' y='48%' text-anchor='middle' font-family='serif' font-size='${Math.min(w, h) / 6}' fill='rgba(255,255,255,.75)'>囍</text>` : ""}
    <text x='50%' y='60%' text-anchor='middle' font-family='sans-serif' font-size='${Math.min(w, h) / 22}' fill='rgba(255,255,255,.85)'>${label}</text></svg>`;
  return "data:image/svg+xml;charset=utf-8," + encodeURIComponent(svg).replace(/'/g, "%27");
}
const img = (src, label, w, h, i) => src || placeholder(label, w, h, i);

function toast(msg) {
  const t = $("#toast");
  t.textContent = msg;
  t.classList.add("show");
  clearTimeout(toast._t);
  toast._t = setTimeout(() => t.classList.remove("show"), 2200);
}

/* =====================================================================
   ĐỔ DỮ LIỆU
   ===================================================================== */
// Thiệp nhà gái: tên cô dâu đứng trước
// Viết hoa chữ cái đầu mỗi từ: "bạn nhung" => "Bạn Nhung" (giữ nguyên các chữ khác)
const titleCase = (s) => String(s).replace(/(^|\s)(\S)/g, (m, sp, ch) => sp + ch.toLocaleUpperCase("vi"));

const brideFirst = () => document.body.dataset.side === "gai";
const coupleNames = (sep = "&") => brideFirst()
  ? `${CONFIG.brideShort} ${sep} ${CONFIG.groomShort}`
  : `${CONFIG.groomShort} ${sep} ${CONFIG.brideShort}`;

// Đổi chỗ 2 phần tử trong trang
function swapNodes(a, b) {
  if (!a || !b) return;
  const t = document.createElement("i");
  a.replaceWith(t); b.replaceWith(a); t.replaceWith(b);
}

// Thiệp nhà gái: đưa cô dâu / nhà gái lên trước (tên, ảnh, thông tin gia đình)
function applySideOrder() {
  if (!brideFirst()) return;
  swapNodes($('.hero-names [data-bind="groomShort"]'), $('.hero-names [data-bind="brideShort"]'));
  const fam = document.querySelectorAll(".families > .family");
  swapNodes(fam[0], fam[1]);
  const ppl = document.querySelectorAll(".couple > .person");
  swapNodes(ppl[0], ppl[1]);
}

function bindText() {
  document.title = `${coupleNames("♥")} — Thiệp cưới`;
  const data = {
    ...CONFIG,
    shortNames: coupleNames(),
    dateDots: `${pad(wDate.getDate())} . ${pad(wDate.getMonth() + 1)} . ${wDate.getFullYear()}`,
  };
  document.querySelectorAll("[data-bind]").forEach((el) => {
    const v = data[el.dataset.bind];
    if (typeof v === "string") el.textContent = v;
  });

  // Tên khách mời từ URL: ?to=Anh%20Nam
  const guest = titleCase((new URLSearchParams(location.search).get("to") || "").trim().replace(/\s+/g, " ").slice(0, 60));
  if (guest) {
    $("#guestName").textContent = guest;
    $("#guestInvite").textContent = guest;
    document.querySelectorAll("[data-guest]").forEach((el) => (el.textContent = guest));
    document.querySelectorAll("[data-guest-box]").forEach((el) => (el.hidden = false));
    document.title = `Kính mời ${guest} — ${coupleNames("♥")}`;
    const nameInput = $("#rsvpForm [name=name]");
    if (nameInput) nameInput.value = guest;
  }
}

function renderImages() {
  const im = CONFIG.images;
  $("#heroPhoto").style.backgroundImage = `url("${img(im.hero, "", 1600, 1000, 3)}")`;
  $("#groomPhoto").style.backgroundImage = `url("${img(im.groom, "Chú rể", 440, 560, 0)}")`;
  $("#bridePhoto").style.backgroundImage = `url("${img(im.bride, "Cô dâu", 440, 560, 2)}")`;
  $(".thanks").style.backgroundImage = `url("${img(im.thanks, "", 1600, 1000, 1)}")`;
}

function renderCalendar() {
  const y = wDate.getFullYear(), m = wDate.getMonth(), day = wDate.getDate();
  const first = new Date(y, m, 1).getDay();           // 0 = CN
  const offset = (first + 6) % 7;                      // bắt đầu từ Thứ 2
  const days = new Date(y, m + 1, 0).getDate();
  let html = `<h4>Tháng ${m + 1} / ${y}</h4><div class="cal-grid">`;
  ["T2", "T3", "T4", "T5", "T6", "T7", "CN"].forEach((d) => (html += `<div class="dow">${d}</div>`));
  for (let i = 0; i < offset; i++) html += "<div></div>";
  const marked = new Set([day, ...CONFIG.events.map((e) => new Date(e.date + "T00:00:00+07:00"))
    .filter((d) => d.getFullYear() === y && d.getMonth() === m).map((d) => d.getDate())]);
  for (let d = 1; d <= days; d++) html += `<div class="d${d === day ? " hl" : marked.has(d) ? " mark" : ""}">${d}</div>`; // ngày cưới: tô đỏ; ngày sự kiện khác: viền đỏ
  $("#calendar").innerHTML = html + "</div>";
}

function renderStory() {
  $("#timeline").innerHTML = CONFIG.story.map((s, i) => `
    <div class="tl-item reveal">
      <div class="tl-img" style="background-image:url('${img(CONFIG.images.story[i], s.title, 800, 500, i)}')"></div>
      <div class="tl-date">${esc(s.date)}</div>
      <h4>${esc(s.title)}</h4>
      <p>${esc(s.text)}</p>
    </div>`).join("");
}

function gcalLink(ev) {
  const f = (d) => d.toISOString().replace(/[-:]|\.\d{3}/g, "");
  let dates;
  if (ev.time) {
    const start = new Date(`${ev.date}T${ev.time}:00+07:00`);
    dates = `${f(start)}/${f(new Date(start.getTime() + 3 * 3600 * 1000))}`;
  } else {
    const d = ev.date.replace(/-/g, "");
    const next = new Date(ev.date + "T00:00:00Z"); next.setUTCDate(next.getUTCDate() + 1);
    dates = `${d}/${next.toISOString().slice(0, 10).replace(/-/g, "")}`;
  }
  const p = new URLSearchParams({
    action: "TEMPLATE",
    text: `${ev.title} ${coupleNames()}`,
    dates,
    location: `${ev.place}, ${ev.address}`,
  });
  return "https://calendar.google.com/calendar/render?" + p;
}

function renderEvents() {
  $("#eventGrid").innerHTML = CONFIG.events.map((ev) => {
    const d = new Date(ev.date + "T00:00:00+07:00");
    const q = ev.mapQuery ? encodeURIComponent(ev.mapQuery) : "";
    return `
    <article class="event-card reveal">
      <div class="event-head"><div class="hy">囍</div><h3>${esc(ev.title)}</h3><p>${esc(ev.host)}</p></div>
      <div class="event-body">
        ${ev.time ? `<div class="event-time">${esc(ev.time.replace(":", "h"))}</div>` : ""}
        <div class="event-day">${WEEKDAYS[d.getDay()]}, ${pad(d.getDate())}/${pad(d.getMonth() + 1)}/${d.getFullYear()}</div>
        <div class="event-lunar">(${esc(ev.lunar)})</div>
        <div class="event-place">${esc(ev.place)}</div>
        <div class="event-addr">${esc(ev.address)}</div>
        ${q ? `<iframe class="event-map" loading="lazy" src="https://maps.google.com/maps?q=${q}&z=15&output=embed" title="Bản đồ ${esc(ev.title)}"></iframe>` : ""}
        <div class="event-actions">
          ${q ? `<a class="btn btn-outline" target="_blank" rel="noopener" href="https://www.google.com/maps/search/?api=1&query=${q}">Chỉ đường</a>` : ""}
          <a class="btn btn-outline" target="_blank" rel="noopener" href="${gcalLink(ev)}">Thêm vào lịch</a>
        </div>
      </div>
    </article>`;
  }).join("");
}

/* ---------- Album + Lightbox ---------- */
let galleryList = [];
let lbIndex = 0;
// Album vuốt ngang: nút ‹ ›, số thứ tự ảnh, tự chuyển ảnh khi album đang hiện trên màn hình
function initCarousel() {
  const g = $("#gallery");
  const items = () => [...g.children];
  const current = () => {
    const mid = g.scrollLeft + g.clientWidth / 2;
    let best = 0, dist = Infinity;
    items().forEach((el, i) => {
      const d = Math.abs(el.offsetLeft + el.offsetWidth / 2 - mid);
      if (d < dist) { dist = d; best = i; }
    });
    return best;
  };
  const go = (i) => {
    const list = items(); if (!list.length) return;
    const el = list[(i + list.length) % list.length];
    g.scrollTo({ left: el.offsetLeft - (g.clientWidth - el.offsetWidth) / 2, behavior: "smooth" });
  };
  const update = () => { $("#gCount").textContent = `${current() + 1} / ${items().length}`; };
  $("#gPrev").onclick = () => { pause(); go(current() - 1); };
  $("#gNext").onclick = () => { pause(); go(current() + 1); };
  g.addEventListener("scroll", () => requestAnimationFrame(update), { passive: true });
  update();

  // Máy tính: giữ chuột và kéo để vuốt album
  let drag = null, moved = false;
  g.addEventListener("pointerdown", (e) => {
    if (e.pointerType !== "mouse" || e.button !== 0) return;
    e.preventDefault();          // không bôi đen chữ / không kéo ảnh ra ngoài
    drag = { x: e.clientX, left: g.scrollLeft, start: current() };
    moved = false;
    g.classList.add("dragging");
  });
  addEventListener("pointermove", (e) => {
    if (!drag) return;
    const dx = e.clientX - drag.x;
    if (Math.abs(dx) > 5) moved = true;
    g.scrollLeft = drag.left - dx;
  });
  addEventListener("pointerup", (e) => {
    if (!drag) return;
    const dx = e.clientX - drag.x, start = drag.start;
    drag = null;
    // kéo đủ xa thì sang ảnh kế bên theo hướng kéo, ngắn quá thì về ảnh gần nhất
    let target = current();
    if (dx < -40) target = Math.max(start + 1, target);
    else if (dx > 40) target = Math.min(start - 1, target);
    go(target);
    setTimeout(() => g.classList.remove("dragging"), 450);
  });
  g.addEventListener("dragstart", (e) => e.preventDefault());
  // vừa kéo xong thì không mở ảnh phóng to
  g.addEventListener("click", (e) => { if (moved) { e.stopPropagation(); moved = false; } }, true);

  let visible = false, pausedUntil = 0;
  const pause = () => { pausedUntil = Date.now() + 8000; };
  new IntersectionObserver(([e]) => { visible = e.isIntersecting; }, { threshold: 0.4 }).observe(g);
  ["pointerdown", "touchstart", "wheel"].forEach((ev) => g.addEventListener(ev, pause, { passive: true }));
  setInterval(() => {
    if (visible && Date.now() > pausedUntil && !document.hidden && !$("#lightbox").classList.contains("show")) go(current() + 1);
  }, 3500);
}

function renderGallery() {
  const ratios = [[800, 1000], [800, 600], [800, 1100], [800, 800], [800, 560]];
  galleryList = CONFIG.images.gallery.map((src, i) => {
    const [w, h] = ratios[i % ratios.length];
    return img(src, `Ảnh cưới ${i + 1}`, w, h, i);
  });
  $("#gallery").innerHTML = galleryList.map((s, i) =>
    `<div class="g-item" data-i="${i}"><img draggable="false" src="${s.replace("/album/", "/album/thumb/")}" alt="Ảnh cưới ${i + 1}" loading="lazy"></div>`).join("");
  $("#gallery").addEventListener("click", (e) => {
    const item = e.target.closest(".g-item");
    if (item) openLightbox(+item.dataset.i);
  });
}
function openLightbox(i) {
  lbIndex = (i + galleryList.length) % galleryList.length;
  $("#lbImg").src = galleryList[lbIndex];
  $("#lightbox").classList.add("show");
}
function closeLightbox() { $("#lightbox").classList.remove("show"); }
function initLightbox() {
  $("#lbClose").onclick = closeLightbox;
  $("#lbPrev").onclick = () => openLightbox(lbIndex - 1);
  $("#lbNext").onclick = () => openLightbox(lbIndex + 1);
  $("#lightbox").addEventListener("click", (e) => { if (e.target.id === "lightbox") closeLightbox(); });
  document.addEventListener("keydown", (e) => {
    if (!$("#lightbox").classList.contains("show")) return;
    if (e.key === "Escape") closeLightbox();
    if (e.key === "ArrowLeft") openLightbox(lbIndex - 1);
    if (e.key === "ArrowRight") openLightbox(lbIndex + 1);
  });
  // vuốt trên điện thoại
  let x0 = null;
  $("#lightbox").addEventListener("touchstart", (e) => (x0 = e.touches[0].clientX), { passive: true });
  $("#lightbox").addEventListener("touchend", (e) => {
    if (x0 === null) return;
    const dx = e.changedTouches[0].clientX - x0;
    if (Math.abs(dx) > 50) openLightbox(lbIndex + (dx < 0 ? 1 : -1));
    x0 = null;
  });
}

/* ---------- Mừng cưới ---------- */
// Tải ảnh về máy. Ưu tiên ảnh nhúng sẵn trong qr-data.js (tải được cả khi mở file trên máy),
// nếu không có thì tải qua mạng; trình duyệt chặn thì mở ảnh ở tab mới để khách tự lưu.
async function downloadFile(url, name) {
  const save = (href, newTab) => {
    const a = document.createElement("a");
    a.href = href; a.download = name;
    if (newTab) { a.target = "_blank"; a.rel = "noopener"; }
    document.body.appendChild(a); a.click(); a.remove();
  };
  const embedded = (window.QR_DOWNLOADS || {})[url];
  if (embedded) {
    save(embedded);
    toast("Đã tải mã QR ♥");
    return;
  }
  try {
    const res = await fetch(url);
    if (!res.ok) throw new Error();
    const href = URL.createObjectURL(await res.blob());
    save(href);
    setTimeout(() => URL.revokeObjectURL(href), 2000);
  } catch {
    save(url, true);
  }
  toast("Đang tải mã QR ♥");
}

function renderGifts() {
  $("#giftGrid").innerHTML = CONFIG.gifts.map((g, i) => {
    // Nếu chưa có ảnh QR, tự tạo QR VietQR từ số tài khoản (cần mạng)
    const qr = g.qr || `https://img.vietqr.io/image/${encodeURIComponent(g.bank)}-${g.account}-compact.png?accountName=${encodeURIComponent(g.owner)}`;
    return `
    <div class="gift-card reveal">
      <h4>${esc(g.title)}</h4>
      <img class="gift-qr" src="${qr}" alt="QR ${esc(g.bank)}" onerror="this.src='${placeholder("Mã QR", 400, 400, i)}'">
      <p>${esc(g.bank)}</p>
      <div class="acc">${esc(g.account)}</div>
      <p>${esc(g.owner)}</p>
      <div class="gift-actions">
        <button class="btn btn-outline" data-copy="${esc(g.account)}">Sao chép số tài khoản</button>
        <button class="btn btn-outline" data-download="${esc(qr)}" data-name="QR-mung-cuoi-${g.side === "gai" ? "co-dau" : "chu-re"}.png">Tải mã QR</button>
      </div>
      <p class="gift-tip">Trên điện thoại có thể nhấn giữ vào mã QR để lưu ảnh</p>
    </div>`;
  }).join("");
  $("#giftGrid").addEventListener("click", async (e) => {
    const d = e.target.closest("[data-download]");
    if (d) return downloadFile(d.dataset.download, d.dataset.name);
    const b = e.target.closest("[data-copy]");
    if (!b) return;
    try { await navigator.clipboard.writeText(b.dataset.copy); toast("Đã sao chép số tài khoản ♥"); }
    catch { toast(b.dataset.copy); }
  });
}

/* =====================================================================
   ĐẾM NGƯỢC
   ===================================================================== */
function startCountdown() {
  const tick = () => {
    let diff = Math.max(0, wDate - Date.now()) / 1000;
    $("#cdD").textContent = Math.floor(diff / 86400);
    $("#cdH").textContent = pad(Math.floor((diff % 86400) / 3600));
    $("#cdM").textContent = pad(Math.floor((diff % 3600) / 60));
    $("#cdS").textContent = pad(Math.floor(diff % 60));
  };
  tick();
  setInterval(tick, 1000);
}

/* =====================================================================
   RSVP & LỜI CHÚC
   ===================================================================== */
// Khi có CONFIG.sheetUrl: lời chúc & RSVP lưu vào Google Sheet (mọi người cùng thấy).
// Khi để trống: chỉ lưu trong trình duyệt hiện tại (dùng để thử nghiệm).
const WISH_KEY = "thiepcuoi_wishes";
let wishes = [];

function loadLocal() {
  try { return JSON.parse(localStorage.getItem(WISH_KEY)) || []; } catch { return []; }
}
function saveLocal(list) {
  try { localStorage.setItem(WISH_KEY, JSON.stringify(list)); } catch { /* bỏ qua */ }
}

async function fetchWishes() {
  if (!CONFIG.sheetUrl) { wishes = loadLocal(); return renderWishes(); }
  try {
    const res = await fetch(CONFIG.sheetUrl + "?t=" + Date.now());
    const data = await res.json();
    if (Array.isArray(data.wishes)) wishes = data.wishes;
  } catch { /* lỗi mạng: giữ danh sách hiện tại */ }
  renderWishes();
}

function renderWishes() {
  $("#wishList").innerHTML = wishes.length
    ? wishes.slice().reverse().map((w) =>
        `<div class="wish"><strong>${esc(w.name)}</strong><small>${esc(w.time)}</small><p>${esc(w.wish)}</p></div>`).join("")
    : `<p class="wish-empty">Hãy là người đầu tiên gửi lời chúc đến cô dâu chú rể ♥</p>`;
}

function initRSVP() {
  fetchWishes();
  $("#rsvpForm").addEventListener("submit", async (e) => {
    e.preventDefault();
    const fd = Object.fromEntries(new FormData(e.target));
    const msg = $("#rsvpMsg");
    const btn = e.target.querySelector("button");
    btn.disabled = true;
    msg.textContent = "Đang gửi...";

    const wish = (fd.wish || "").trim();
    const entry = { name: fd.name, wish, time: new Date().toLocaleDateString("vi-VN") };

    if (CONFIG.sheetUrl) {
      try {
        await fetch(CONFIG.sheetUrl, { method: "POST", mode: "no-cors", body: new URLSearchParams(fd) });
      } catch {
        msg.textContent = "Gửi chưa thành công, bạn kiểm tra mạng và thử lại nhé.";
        btn.disabled = false;
        return;
      }
      if (wish) { wishes.push(entry); renderWishes(); }
      setTimeout(fetchWishes, 3000); // đồng bộ lại với Sheet
    } else if (wish) {
      wishes = loadLocal(); wishes.push(entry); saveLocal(wishes); renderWishes();
    }

    msg.textContent = fd.attend === "no"
      ? "Cảm ơn bạn đã phản hồi. Hẹn gặp bạn dịp khác nhé ♥"
      : "Cảm ơn bạn! Rất mong được gặp bạn trong ngày vui ♥";
    toast("Đã gửi xác nhận ♥");
    burstHearts();
    e.target.reset();
    btn.disabled = false;
  });
}

/* =====================================================================
   HIỆU ỨNG
   ===================================================================== */
function spawnPetal() {
  const p = document.createElement("div");
  p.className = "petal";
  const size = 8 + Math.random() * 10;
  p.style.left = Math.random() * 100 + "vw";
  p.style.width = size + "px";
  p.style.height = size * 0.85 + "px";
  p.style.setProperty("--dx", (Math.random() * 200 - 100) + "px");
  p.style.setProperty("--rot", (Math.random() * 720 - 360) + "deg");
  p.style.animationDuration = 7 + Math.random() * 6 + "s";
  $("#petals").appendChild(p);
  p.addEventListener("animationend", () => p.remove());
}
function startPetals() {
  for (let i = 0; i < 8; i++) setTimeout(spawnPetal, i * 300);
  setInterval(() => { if (!document.hidden) spawnPetal(); }, 900);
}
function burstHearts(x = "50%", y = "60%") {
  for (let i = 0; i < 18; i++) {
    const h = document.createElement("div");
    h.textContent = ["♥", "✦", "♥", "❀"][i % 4];
    Object.assign(h.style, {
      position: "fixed", left: x, top: y, zIndex: 250, pointerEvents: "none",
      color: ["#8e2c3a", "#e8a5ad", "#b8975a"][i % 3], fontSize: 14 + Math.random() * 18 + "px",
      transition: "transform 1.2s ease-out, opacity 1.2s ease-out",
    });
    document.body.appendChild(h);
    requestAnimationFrame(() => {
      const a = Math.random() * Math.PI * 2, r = 80 + Math.random() * 160;
      h.style.transform = `translate(${Math.cos(a) * r}px, ${Math.sin(a) * r - 80}px) scale(1.3)`;
      h.style.opacity = 0;
    });
    setTimeout(() => h.remove(), 1300);
  }
}

function initReveal() {
  const io = new IntersectionObserver((entries) => {
    entries.forEach((en) => {
      if (en.isIntersecting) { en.target.classList.add("visible"); io.unobserve(en.target); }
    });
  }, { threshold: 0.12 });
  document.querySelectorAll(".reveal").forEach((el) => io.observe(el));

  const nav = $("#bottomNav");
  addEventListener("scroll", () => nav.classList.toggle("show", scrollY > innerHeight * 0.6), { passive: true });
}

/* =====================================================================
   NHẠC & MỞ THIỆP
   ===================================================================== */
function initMusic() {
  const audio = $("#bgMusic"), btn = $("#musicBtn");
  if (!CONFIG.music) return null;
  audio.src = CONFIG.music;
  btn.hidden = false;
  const sync = () => { btn.classList.toggle("playing", !audio.paused); btn.classList.toggle("muted", audio.paused); };
  btn.onclick = () => (audio.paused ? audio.play() : audio.pause());
  audio.addEventListener("play", sync);
  audio.addEventListener("pause", sync);
  audio.addEventListener("error", () => (btn.hidden = true));
  return audio;
}

function initAutoScroll() {
  const cfg = CONFIG.autoScroll || {};
  if (!cfg.enabled) return;
  const speed = cfg.speed || 45;
  const ease = (x) => (x < .5 ? 4 * x * x * x : 1 - Math.pow(-2 * x + 2, 3) / 2); // chậm - nhanh - chậm
  // mode: down (cuộn xuống) → bottom (nghỉ ở cuối) → up (lướt về đầu) → top (nghỉ ở đầu) → down ...
  let pos = scrollY, last = 0, pausedUntil = 0, mode = "down", waitUntil = 0, back = null;
  const pause = () => { pausedUntil = performance.now() + (cfg.resumeAfter ?? 5000); };
  ["wheel", "touchstart", "keydown", "mousedown"].forEach((ev) => addEventListener(ev, pause, { passive: true }));
  const go = (y) => window.scrollTo({ top: y, behavior: "instant" });

  const step = (t) => {
    const dt = last ? Math.min(t - last, 100) : 0;
    last = t;
    const tag = document.activeElement ? document.activeElement.tagName : "";
    const busy = t < pausedUntil || $("#lightbox").classList.contains("show") || /INPUT|TEXTAREA|SELECT/.test(tag);
    const max = document.documentElement.scrollHeight - innerHeight;

    if (busy) {
      pos = scrollY;          // khách đang xem: đứng yên, lát nữa cuộn tiếp xuống từ chỗ khách dừng
      mode = "down";
    } else if (mode === "down") {
      pos = Math.min(max, pos + speed * dt / 1000);
      go(pos);
      if (pos >= max - 1) {
        if (!cfg.loop) return;                         // không lặp: dừng hẳn ở cuối
        mode = "bottom"; waitUntil = t + (cfg.bottomPause ?? 3000);
      }
    } else if (mode === "bottom" && t >= waitUntil) {
      const from = scrollY;
      const dur = cfg.backDuration ?? Math.min(6000, Math.max(2500, from / 2.5));
      mode = "up"; back = { from, start: t, dur };
    } else if (mode === "up") {
      const k = Math.min(1, (t - back.start) / back.dur);
      pos = back.from * (1 - ease(k));
      go(pos);
      if (k >= 1) { pos = 0; mode = "top"; waitUntil = t + (cfg.topPause ?? 2500); }
    } else if (mode === "top" && t >= waitUntil) {
      mode = "down";
    }
    requestAnimationFrame(step);
  };
  requestAnimationFrame(step);
}

function initCover(audio) {
  const open = () => {
    const env = $("#envelope");
    if (env.classList.contains("open")) return;
    env.classList.add("open");
    $("#cover").classList.add("opening");
    setTimeout(() => {                         // tim & lấp lánh bung ra từ con dấu
      const r = $(".env-seal").getBoundingClientRect();
      burstHearts(r.left + r.width / 2 + "px", r.top + r.height / 2 + "px");
    }, 120);
    if (audio) {
      // Trình duyệt chặn tự phát nhạc khi chưa có thao tác => phát ở lần chạm/cuộn đầu tiên
      audio.play().catch(() => {
        // chỉ các sự kiện này được trình duyệt tính là "thao tác người dùng"
        const EVENTS = ["pointerdown", "touchend", "click", "keydown"];
        const resume = () => audio.play()
          .then(() => EVENTS.forEach((ev) => removeEventListener(ev, resume)))
          .catch(() => {});
        EVENTS.forEach((ev) => addEventListener(ev, resume, { passive: true }));
      });
    }
    // Trình tự: nắp mở → tấm thiệp nhô lên lộ tên & ngày → dừng cho khách đọc → vào nội dung thiệp
    setTimeout(() => env.classList.add("letter-out"), 500);
    setTimeout(() => {
      $("#cover").classList.add("hide");
      document.body.classList.remove("locked");
      $(".hero-content").classList.add("visible");
      setTimeout(startPetals, 700);   // hoa rơi sau khi chuyển cảnh xong cho mượt
      setTimeout(initAutoScroll, (CONFIG.autoScroll || {}).startDelay ?? 2000);
    }, 2800);
  };
  $("#openBtn").onclick = open;
  $("#envelope").onclick = open;
  if (CONFIG.autoOpenDelay > 0) setTimeout(open, CONFIG.autoOpenDelay);
}

/* =====================================================================
   KHỞI CHẠY
   ===================================================================== */
if ("scrollRestoration" in history) history.scrollRestoration = "manual";
// "17h30", "17:30", "1730", "17h" => "17:30" (sai định dạng => "")
function parseGio(s) {
  const m = String(s || "").trim().match(/^(\d{1,2})\s*(?:h|g|giờ|:|\.)?\s*(\d{2})?\s*(?:p|phút)?$/i);
  if (!m) return "";
  const h = +m[1], mi = +(m[2] || 0);
  return h < 24 && mi < 60 ? pad(h) + ":" + pad(mi) : "";
}

document.addEventListener("DOMContentLoaded", () => {
  if (location.hash) history.replaceState(null, "", location.pathname + location.search);
  // Chọn bên nhà trai / nhà gái theo link (?nha=gai). Mặc định: nhà trai.
  const side = /^g/i.test(new URLSearchParams(location.search).get("nha") || "") ? "gai" : "trai";
  document.body.dataset.side = side;
  if (side === "gai") CONFIG.events = CONFIG.brideEvents;
  CONFIG.gifts = CONFIG.gifts.filter((g) => !g.side || g.side === side);
  // Đổi giờ tiệc theo link (?gio=17h30) — dùng cho khách được mời giờ khác
  const gio = parseGio(new URLSearchParams(location.search).get("gio"));
  if (gio) {
    const party = CONFIG.events.find((e) => /tiệc/i.test(e.title)) || CONFIG.events[0];
    if (party) party.time = gio;
  }
  window.scrollTo({ top: 0, behavior: "instant" });
  applySideOrder();
  bindText();
  renderImages();
  renderCalendar();
  renderStory();
  renderEvents();
  renderGallery();
  initCarousel();
  renderGifts();
  startCountdown();
  initRSVP();
  initLightbox();
  initReveal();
  initCover(initMusic());
});
