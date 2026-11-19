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
    groom: "images/chu-re.jpg",
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
      // ảnh ghép (khổ ngang/vuông): ghi thêm ratio = rộng / cao để khung hiển thị đúng, không bị cắt
      { src: "images/album/collage-1.jpg", ratio: 1.429 },
      { src: "images/album/collage-2.jpg", ratio: 0.985 },
      { src: "images/album/collage-3.jpg", ratio: 1.429 },
      { src: "images/album/collage-4.jpg", ratio: 1.177 },
      { src: "images/album/collage-5.jpg", ratio: 0.667 },
      { src: "images/album/collage-6.jpg", ratio: 0.747 },
      "images/co-dau-full.jpg",
      "images/chu-re-full.jpg",
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
  // Pháo hoa: khi mở thiệp và khi cuộn tới lời cảm ơn (duration: số mili-giây bắn)
  // onLoop: bắn lại khi thiệp tự cuộn vòng về đầu; ambient: thỉnh thoảng bắn 1 quả khi đang xem nội dung
  heartRate: 0.35,   // tỉ lệ trái tim trong hiệu ứng rơi (0 = chỉ cánh hoa)

  fireworks: { onOpen: true, onThanks: true, onLoop: true, duration: 4500, ambient: true, ambientEvery: [2500, 5000] },

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
// Album slide 3D: kéo/vuốt (chuột & cảm ứng), nút ‹ ›, chấm tròn, tự chuyển ảnh
function initCarousel() {
  const box = $("#cf"), stage = $("#gallery");
  const items = [...stage.children], n = items.length;
  if (!n) return;
  let pos = 0;                                   // vị trí hiện tại (có thể lẻ khi đang kéo)
  const spacing = () => items[0].offsetWidth * 0.62;

  // dựng chấm tròn
  $("#gDots").innerHTML = items.map((_, i) => `<button aria-label="Ảnh ${i + 1}" data-dot="${i}"></button>`).join("");
  const dots = [...$("#gDots").children];

  function layout() {
    const cw = items[0].offsetWidth;
    items.forEach((el, k) => {
      let d = k - pos;
      d = ((d % n) + n + n / 2) % n - n / 2;    // vòng tròn: lấy khoảng cách ngắn nhất
      const a = Math.abs(d), s = Math.sign(d);
      const x = a < 1 ? d * cw * 0.62 : s * (cw * 0.62 + (a - 1) * cw * 0.34);
      const rot = -s * Math.min(a, 1) * 38;
      const scale = 1 - Math.min(a, 3) * 0.12;
      // mỗi ảnh tự có phối cảnh riêng (perspective trong transform) → không cắt nhau, không nháy
      el.style.transform = `translateX(${x}px) perspective(900px) rotateY(${rot}deg) scale(${scale})`;
      el.style.opacity = a > 3.2 ? 0 : String(1 - Math.min(a, 3) * 0.26);
      el.style.zIndex = String(100 - Math.round(a * 10));
      el.style.pointerEvents = a > 3.2 ? "none" : "";
      el.classList.toggle("active", a < 0.5);
    });
    const cur = ((Math.round(pos) % n) + n) % n;
    dots.forEach((b, i) => b.classList.toggle("on", i === cur));
    $("#gCount").textContent = `${cur + 1} / ${n}`;
  }
  const go = (i) => { pos = Math.round(i); layout(); };
  const cur = () => Math.round(pos);

  $("#gPrev").onclick = () => { pause(); go(cur() - 1); };
  $("#gNext").onclick = () => { pause(); go(cur() + 1); };
  $("#gDots").onclick = (e) => {
    const b = e.target.closest("[data-dot]"); if (!b) return;
    pause();
    const t = +b.dataset.dot, c = ((cur() % n) + n) % n;
    let d = t - c; if (d > n / 2) d -= n; if (d < -n / 2) d += n;
    go(cur() + d);
  };

  // kéo / vuốt
  let drag = null;
  box.addEventListener("pointerdown", (e) => {
    if (e.button !== 0 || e.target.closest(".g-nav")) return;
    drag = { x: e.clientX, y: e.clientY, start: pos, moved: false, t: performance.now() };
    pause();
  });
  addEventListener("pointermove", (e) => {
    if (!drag) return;
    const dx = e.clientX - drag.x;
    if (!drag.moved && Math.abs(dx) > 6 && Math.abs(dx) > Math.abs(e.clientY - drag.y)) { drag.moved = true; box.classList.add("dragging"); }
    if (drag.moved) {
      pos = drag.start - dx / spacing();
      if (!drag.raf) drag.raf = requestAnimationFrame(() => { if (drag) drag.raf = 0; layout(); });   // tối đa 1 lần / khung hình
    }
  });
  const end = (e) => {
    if (!drag) return;
    const d = drag; drag = null;
    box.classList.remove("dragging");
    if (d.moved) {
      const dx = e.clientX - d.x, fast = Math.abs(dx) / (performance.now() - d.t) > 0.4;
      // vuốt nhanh hoặc đủ xa thì sang ảnh kế bên
      go(fast || Math.abs(dx) > 40 ? (dx < 0 ? Math.max(Math.ceil(pos), d.start + 1) : Math.min(Math.floor(pos), d.start - 1)) : pos);
      return;
    }
    // bấm (không kéo): ảnh giữa → phóng to, ảnh bên → chuyển tới ảnh đó
    const it = e.target.closest && e.target.closest(".g-item");
    if (!it) return;
    const k = +it.dataset.i, c = ((cur() % n) + n) % n;
    if (k === c) openLightbox(k);
    else { let dd = k - c; if (dd > n / 2) dd -= n; if (dd < -n / 2) dd += n; go(cur() + dd); }
  };
  addEventListener("pointerup", end);
  addEventListener("pointercancel", () => { if (drag) { drag = null; box.classList.remove("dragging"); go(pos); } });
  box.addEventListener("dragstart", (e) => e.preventDefault());

  // tự chuyển ảnh khi album đang hiện trên màn hình
  let visible = false, pausedUntil = 0;
  function pause() { pausedUntil = Date.now() + 8000; }
  new IntersectionObserver(([e]) => { visible = e.isIntersecting; }, { threshold: 0.4 }).observe(box);
  setInterval(() => {
    if (visible && !drag && Date.now() > pausedUntil && !document.hidden && !$("#lightbox").classList.contains("show")) go(cur() + 1);
  }, 3500);

  addEventListener("resize", layout);
  layout();
}

function renderGallery() {
  const ratios = [[800, 1000], [800, 600], [800, 1100], [800, 800], [800, 560]];
  // mỗi ảnh có thể là "đường-dẫn" hoặc { src, ratio } (ratio = rộng / cao, mặc định 2/3)
  const entries = CONFIG.images.gallery.map((g) => (typeof g === "string" ? { src: g } : g));
  galleryList = entries.map((g, i) => {
    const [w, h] = ratios[i % ratios.length];
    return img(g.src, `Ảnh cưới ${i + 1}`, w, h, i);
  });
  $("#gallery").innerHTML = galleryList.map((s, i) => {
    const thumb = s.replace("/album/", "/album/thumb/");
    const fit = entries[i].ratio && Math.abs(entries[i].ratio - 2 / 3) > 0.05;   // ảnh không phải khổ dọc 2:3
    return `<div class="g-item${fit ? " fit" : ""}" data-i="${i}">`
      + `<img class="main" draggable="false" src="${thumb}" alt="Ảnh cưới ${i + 1}" decoding="async"></div>`;   // tải sẵn ảnh nhỏ để vuốt không bị chớp
  }).join("");
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
// Tải ảnh mã QR về máy.
// - Máy tính: tải file thẳng về.
// - Điện thoại (Safari, Chrome): mở bảng chia sẻ của máy → chọn "Lưu ảnh".
// - Trình duyệt trong Zalo / Messenger / Facebook (không cho tải file): hiện ảnh to để khách nhấn giữ → Lưu ảnh.
const IN_APP = /Zalo|FBAN|FBAV|FB_IAB|Messenger|Instagram|Line\/|MicroMessenger|TikTok/i.test(navigator.userAgent);
const IS_MOBILE = /Android|iPhone|iPad|iPod/i.test(navigator.userAgent) || (navigator.maxTouchPoints > 1 && /Mac/.test(navigator.platform));

function dataUrlToFile(dataUrl, name) {
  const [head, b64] = dataUrl.split(",");
  const mime = (head.match(/data:([^;]+)/) || [])[1] || "image/png";
  const bin = atob(b64), bytes = new Uint8Array(bin.length);
  for (let i = 0; i < bin.length; i++) bytes[i] = bin.charCodeAt(i);
  return new File([bytes], name, { type: mime });
}

function showSaveViewer(src) {
  let v = $("#qrSave");
  if (!v) {
    v = document.createElement("div");
    v.id = "qrSave"; v.className = "qr-save";
    v.innerHTML = `<button class="gm-close" aria-label="Đóng">×</button><img alt="Mã QR mừng cưới"><p>Nhấn giữ vào ảnh rồi chọn <b>“Lưu ảnh”</b> / <b>“Tải ảnh xuống”</b></p>`;
    document.body.appendChild(v);
    v.addEventListener("click", (e) => { if (e.target === v || e.target.closest(".gm-close")) v.classList.remove("show"); });
  }
  v.querySelector("img").src = src;
  v.classList.add("show");
}

async function downloadFile(url, name) {
  const embedded = (window.QR_DOWNLOADS || {})[url];
  const src = embedded || new URL(url, location.href).href;

  // 1) điện thoại có hỗ trợ chia sẻ file (Safari iOS, Chrome Android): mở bảng "Lưu ảnh"
  if (IS_MOBILE && embedded && navigator.canShare) {
    try {
      const file = dataUrlToFile(embedded, name);
      if (navigator.canShare({ files: [file] })) {
        await navigator.share({ files: [file], title: "Mã QR mừng cưới" });
        return;
      }
    } catch (err) {
      if (err && err.name === "AbortError") return;   // khách tự đóng bảng chia sẻ
    }
  }
  // 2) trình duyệt trong app hoặc điện thoại không chia sẻ được: hiện ảnh để nhấn giữ lưu
  if (IN_APP || IS_MOBILE) { showSaveViewer(src); return; }

  // 3) máy tính: tải file về
  const a = document.createElement("a");
  a.download = name;
  if (embedded) a.href = embedded;
  else {
    try {
      const res = await fetch(url);
      if (!res.ok) throw new Error();
      a.href = URL.createObjectURL(await res.blob());
      setTimeout(() => URL.revokeObjectURL(a.href), 2000);
    } catch { a.href = url; a.target = "_blank"; }
  }
  document.body.appendChild(a); a.click(); a.remove();
  toast("Đã tải mã QR ♥");
}

// Hộp quà mừng: bấm vào hộp → nắp bật lên → mở popup mã QR
function initGiftBox() {
  const wrap = $("#giftOpen"), modal = $("#giftModal");
  const close = () => {
    modal.hidden = true;
    document.body.classList.remove("modal-open");
    wrap.classList.remove("opened");
  };
  wrap.addEventListener("click", () => {
    if (wrap.classList.contains("opened")) return;
    wrap.classList.add("opened");
    const r = wrap.getBoundingClientRect();
    burstHearts(r.left + r.width / 2 + "px", r.top + r.height * 0.4 + "px");
    setTimeout(() => {
      modal.hidden = false;
      document.body.classList.add("modal-open");
    }, 550);
  });
  $("#giftClose").onclick = close;
  modal.addEventListener("click", (e) => { if (e.target === modal) close(); });
  document.addEventListener("keydown", (e) => { if (e.key === "Escape" && !modal.hidden) close(); });
}

function renderGifts() {
  $("#giftGrid").innerHTML = CONFIG.gifts.map((g, i) => {
    // Nếu chưa có ảnh QR, tự tạo QR VietQR từ số tài khoản (cần mạng)
    const qr = g.qr || `https://img.vietqr.io/image/${encodeURIComponent(g.bank)}-${g.account}-compact.png?accountName=${encodeURIComponent(g.owner)}`;
    return `
    <div class="gift-card">
      <h4>${esc(g.title)}</h4>
      <img class="gift-qr" src="${qr}" alt="QR ${esc(g.bank)}" onerror="this.src='${placeholder("Mã QR", 400, 400, i)}'">
      <p>${esc(g.bank)}</p>
      <div class="acc">${esc(g.account)}</div>
      <p>${esc(g.owner)}</p>
      <div class="gift-actions">
        <button class="btn btn-outline" data-copy="${esc(g.account)}">Sao chép số tài khoản</button>
        <button class="btn btn-outline" data-download="${esc(qr)}" data-name="QR-mung-cuoi-${g.side === "gai" ? "co-dau" : "chu-re"}.png">Tải mã QR</button>
      </div>
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
  const leaf = Math.random() < (CONFIG.heartRate ?? 0.35);   // khoảng 1/3 là trái tim
  p.className = leaf ? "petal heart" : "petal";
  const size = leaf ? 12 + Math.random() * 10 : 8 + Math.random() * 10;
  p.style.left = Math.random() * 100 + "vw";
  p.style.width = size + "px";
  p.style.height = (leaf ? size * 0.9 : size * 0.85) + "px";
  p.style.setProperty("--dx", (Math.random() * 200 - 100) + "px");
  p.style.setProperty("--rot", (Math.random() * 720 - 360) + "deg");
  p.style.animationDuration = (leaf ? 9 : 7) + Math.random() * 6 + "s";   // tim rơi chậm hơn
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

/* =====================================================================
   PHÁO HOA (canvas) — bắn khi mở thiệp và khi cuộn tới lời cảm ơn
   ===================================================================== */
const Fireworks = (() => {
  // bảng màu rực rỡ: vàng kim, đỏ, cam, hồng, tím, xanh ngọc, xanh lá, trắng
  const COLORS = ["#ffd700", "#ff3b5c", "#ff8c1a", "#ff4dd2", "#b44dff", "#3d8bff", "#00e5ff", "#7cff4d", "#fff3b0", "#ffffff"];
  const GRAVITY = 0.05, MAX_SPARKS = 1300;
  let cv, ctx, W, H, rockets = [], sparks = [], flashes = [], until = 0, nextLaunch = 0, looping = false;
  const rand = (a, b) => a + Math.random() * (b - a);
  const pick = (arr) => arr[(Math.random() * arr.length) | 0];

  function setup() {
    cv = document.createElement("canvas");
    cv.className = "fireworks";
    document.body.appendChild(cv);
    ctx = cv.getContext("2d");
    resize();
    addEventListener("resize", resize);
  }
  function resize() {
    const dpr = Math.min(devicePixelRatio || 1, 2);
    W = innerWidth; H = innerHeight;
    cv.width = W * dpr; cv.height = H * dpr;
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
  }
  function launch() {
    const ty = H * rand(0.12, 0.42);                 // độ cao nổ
    rockets.push({ x: W * rand(0.15, 0.85), y: H + 10, vx: rand(-0.8, 0.8), vy: -Math.sqrt(2 * 0.12 * (H - ty)), color: pick(COLORS) });
  }
  // ---- Các kiểu pháo hoa: mỗi hàm trả về danh sách hướng bay (độ dài ~1) ----
  const TAU = Math.PI * 2;
  const SHAPES = {
    // cúc tròn nhiều tầng, tia dài ngắn khác nhau
    peony: (n) => Array.from({ length: n }, (_, i) => { const t = i / n * TAU, s = rand(0.45, 1); return [Math.cos(t) * s, Math.sin(t) * s]; }),
    // vòng tròn đều
    ring: (n) => Array.from({ length: n }, (_, i) => { const t = i / n * TAU; return [Math.cos(t), Math.sin(t)]; }),
    // trái tim
    heart: (n) => Array.from({ length: n }, (_, i) => {
      const t = i / n * TAU;
      return [16 * Math.sin(t) ** 3 / 17, -(13 * Math.cos(t) - 5 * Math.cos(2 * t) - 2 * Math.cos(3 * t) - Math.cos(4 * t)) / 17];
    }),
    // ngôi sao 5 cánh (đi dọc theo đường viền sao)
    star: (n) => {
      const pts = [];
      for (let k = 0; k < 10; k++) {
        const a = -Math.PI / 2 + k * Math.PI / 5, r = k % 2 ? 0.42 : 1;
        pts.push([Math.cos(a) * r, Math.sin(a) * r]);
      }
      return Array.from({ length: n }, (_, i) => {
        const f = i / n * 10, k = f | 0, u = f - k, A = pts[k], B = pts[(k + 1) % 10];
        return [A[0] + (B[0] - A[0]) * u, A[1] + (B[1] - A[1]) * u];
      });
    },
    // bông hoa 5 cánh + nhụy
    flower: (n) => {
      const out = Array.from({ length: n }, (_, i) => {
        const t = i / n * TAU, r = 0.3 + 0.7 * Math.abs(Math.cos(2.5 * t));
        return [Math.cos(t) * r, Math.sin(t) * r];
      });
      for (let i = 0; i < 14; i++) { const t = i / 14 * TAU; out.push([Math.cos(t) * 0.18, Math.sin(t) * 0.18, "core"]); }
      return out;
    },
    // vòng đôi hai màu
    double: (n) => Array.from({ length: n }, (_, i) => { const t = i / n * TAU * 2, s = i % 2 ? 1 : 0.55; return [Math.cos(t) * s, Math.sin(t) * s, i % 2 ? "" : "core"]; }),
  };
  const SHAPE_WEIGHTS = [["peony", 3], ["ring", 2], ["heart", 2], ["star", 2], ["flower", 2], ["double", 2]];
  function pickShape() {
    let r = Math.random() * SHAPE_WEIGHTS.reduce((a, [, w]) => a + w, 0);
    for (const [k, w] of SHAPE_WEIGHTS) if ((r -= w) < 0) return k;
    return "peony";
  }

  function explode(r) {
    const shape = pickShape();
    const n = shape === "peony" ? (rand(90, 120) | 0) : 90;
    const power = rand(4, 6) * (shape === "peony" ? 1 : 0.9);
    const rainbow = Math.random() < 0.3;               // 30%: mỗi tia một màu (cầu vồng)
    const c1 = pick(COLORS), c2 = pick(COLORS), core = pick(COLORS);
    const dirs = SHAPES[shape](n);
    dirs.forEach(([dx, dy, tag], i) => {
      if (sparks.length >= MAX_SPARKS) return;
      const color = tag === "core" ? core : rainbow ? COLORS[i % COLORS.length] : (i % 3 ? c1 : c2);
      sparks.push({
        x: r.x, y: r.y, vx: dx * power, vy: dy * power, life: 1,
        decay: rand(0.010, 0.016), color, size: rand(1.8, 2.8),
        twinkle: Math.random() < 0.35,                 // tia lấp lánh
        crackle: Math.random() < 0.12,                 // tia nổ lách tách khi sắp tắt
      });
    });
    // chớp sáng ở tâm vụ nổ
    flashes.push({ x: r.x, y: r.y, life: 1, color: c1 });
  }
  function frame(now) {
    // làm mờ khung trước để tạo vệt sáng
    ctx.globalCompositeOperation = "destination-out";
    ctx.fillStyle = "rgba(0,0,0,0.25)";
    ctx.fillRect(0, 0, W, H);
    ctx.globalCompositeOperation = "lighter";

    if (now < until && now > nextLaunch) { launch(); nextLaunch = now + rand(280, 650); }

    rockets = rockets.filter((r) => {
      r.vy += 0.12; r.x += r.vx; r.y += r.vy;
      ctx.fillStyle = r.color;
      ctx.beginPath(); ctx.arc(r.x, r.y, 2.2, 0, TAU); ctx.fill();
      ctx.globalAlpha = 0.5;                              // đuôi lửa
      ctx.beginPath(); ctx.arc(r.x - r.vx, r.y - r.vy * 1.5, 1.5, 0, TAU); ctx.fill();
      ctx.globalAlpha = 1;
      if (r.vy >= -0.5) { explode(r); return false; }
      return true;
    });
    flashes = flashes.filter((f) => {
      f.life -= 0.08;
      if (f.life <= 0) return false;
      const g = ctx.createRadialGradient(f.x, f.y, 0, f.x, f.y, 60);
      g.addColorStop(0, "rgba(255,255,255," + 0.55 * f.life + ")");
      g.addColorStop(1, "rgba(255,255,255,0)");
      ctx.fillStyle = g; ctx.fillRect(f.x - 60, f.y - 60, 120, 120);
      return true;
    });
    const born = [];
    sparks = sparks.filter((s) => {
      s.vx *= 0.985; s.vy = s.vy * 0.985 + GRAVITY;
      s.x += s.vx; s.y += s.vy; s.life -= s.decay;
      if (s.crackle && s.life < 0.35) {                 // nổ lách tách thành vài tia nhỏ
        s.crackle = false;
        for (let k = 0; k < 4; k++) born.push({ x: s.x, y: s.y, vx: rand(-1.4, 1.4), vy: rand(-1.4, 1.4), life: 0.6, decay: 0.04, color: "#fff6d0", size: 1.2 });
      }
      if (s.life <= 0) return false;
      const a = s.twinkle ? s.life * (0.4 + 0.6 * Math.random()) : s.life;
      ctx.fillStyle = s.color;
      ctx.globalAlpha = a * 0.22;                         // quầng sáng
      ctx.beginPath(); ctx.arc(s.x, s.y, s.size * 2.6, 0, TAU); ctx.fill();
      ctx.globalAlpha = a;                                // lõi sáng
      ctx.beginPath(); ctx.arc(s.x, s.y, s.size, 0, TAU); ctx.fill();
      return true;
    });
    if (born.length) sparks.push(...born.slice(0, MAX_SPARKS - sparks.length));
    ctx.globalAlpha = 1;

    if (now < until || rockets.length || sparks.length || flashes.length) requestAnimationFrame(frame);
    else { ctx.clearRect(0, 0, W, H); looping = false; }
  }
  return {
    start(ms = 4000) {
      if (!cv) setup();
      until = Math.max(until, performance.now() + ms);
      if (!looping) { looping = true; requestAnimationFrame(frame); }
    },
    // bắn lẻ 1 quả (dùng cho pháo hoa thưa trong lúc xem nội dung)
    one() {
      if (!cv) setup();
      launch();
      if (!looping) { looping = true; requestAnimationFrame(frame); }
    },
  };
})();

// Pháo hoa thưa: mỗi 4–8 giây bắn 1 quả trong lúc khách xem nội dung thiệp
function startAmbientFireworks() {
  const cfg = CONFIG.fireworks || {};
  if (!cfg.ambient) return;
  const [min, max] = cfg.ambientEvery || [2500, 5000];
  const tick = () => {
    if (!document.hidden && !$("#lightbox").classList.contains("show")) Fireworks.one();
    setTimeout(tick, min + Math.random() * (max - min));
  };
  setTimeout(tick, (cfg.duration || 4500) + 2000);   // bắt đầu sau đợt pháo hoa mở thiệp
}

// Bắn pháo hoa mỗi lần cuộn tới phần "Thank you"
function initThanksFireworks() {
  if (!(CONFIG.fireworks || {}).onThanks) return;
  new IntersectionObserver(([e]) => {
    if (e.isIntersecting) Fireworks.start(CONFIG.fireworks.duration || 4000);
  }, { threshold: 0.5 }).observe($(".thanks"));
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
    const busy = t < pausedUntil || $("#lightbox").classList.contains("show") || document.body.classList.contains("modal-open") || /INPUT|TEXTAREA|SELECT/.test(tag);
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
      if (k >= 1) {
        pos = 0; mode = "top"; waitUntil = t + (cfg.topPause ?? 2500);
        if ((CONFIG.fireworks || {}).onLoop) Fireworks.start(CONFIG.fireworks.duration || 4500);   // vòng lại: bắn pháo hoa như lúc mở
      }
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
      if ((CONFIG.fireworks || {}).onOpen) setTimeout(() => Fireworks.start(CONFIG.fireworks.duration || 4500), 300);
      startAmbientFireworks();
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
  initThanksFireworks();
  renderGifts();
  startCountdown();
  initRSVP();
  initLightbox();
  initGiftBox();
  initReveal();
  initCover(initMusic());
});
