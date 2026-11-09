const UI = {
  en: {
    navContact: "Contact us",
    heroTitle: "Parts for the pump, the pipe and the tank.",
    heroText:
      "Petrol pump spare parts, UPP pipe and tank fittings, fuel meters and pastes. Call or WhatsApp us for details.",
    viewItems: "View items",
    productsTitle: "Our items",
    searchPh: "Search items",
    all: "All",
    empty: "No items match. Try another word or call us.",
    contactTitle: "Contact us",
    contactIntro: "Call or message us for prices and technical details.",
    addressLabel: "Address",
    address: "6-Muslim Street, Nicholson Road, Qila Gujjar Singh, Lahore-54000",
    openMap: "Open in Maps",
    call: "Call",
    wa: "WhatsApp",
    noImg: "Photo coming soon",
    waMsg: "Hi, I want details about",
    viewDetails: "View details",
    back: "Back to items",
    priceTitle: "Contact for price",
    priceText: "Prices are shared on call. Choose who to contact.",
    specsTitle: "Details",
    notFound: "This item was not found.",
    dealsIn: "Deals in",
  },
  ur: {
    navContact: "رابطہ کریں",
    heroTitle: "پمپ، پائپ اور ٹینک کے پرزے۔",
    heroText:
      "پیٹرول پمپ اسپیئر پارٹس، یو پی پی پائپ اور ٹینک فٹنگ، فیول میٹر اور پیسٹ۔ تفصیل کے لیے کال یا واٹس ایپ کریں۔",
    viewItems: "آئٹمز دیکھیں",
    productsTitle: "ہمارے آئٹمز",
    searchPh: "آئٹم تلاش کریں",
    all: "سب",
    empty: "کوئی آئٹم نہیں ملا۔ کوئی اور لفظ آزمائیں یا ہمیں کال کریں۔",
    contactTitle: "رابطہ کریں",
    contactIntro: "قیمت اور تکنیکی تفصیل کے لیے کال یا پیغام کریں۔",
    addressLabel: "پتہ",
    address: "6-مسلم اسٹریٹ، نکلسن روڈ، قلعہ گجر سنگھ، لاہور-54000",
    openMap: "نقشے میں کھولیں",
    call: "کال",
    wa: "واٹس ایپ",
    noImg: "تصویر جلد آ رہی ہے",
    waMsg: "السلام علیکم، مجھے اس کی تفصیل چاہیے:",
    viewDetails: "تفصیل دیکھیں",
    back: "آئٹمز پر واپس",
    priceTitle: "قیمت کے لیے رابطہ کریں",
    priceText: "قیمت کال پر بتائی جاتی ہے۔ رابطہ کرنے کے لیے نام چنیں۔",
    specsTitle: "تفصیلات",
    notFound: "یہ آئٹم نہیں ملا۔",
    dealsIn: "ہم یہ فراہم کرتے ہیں",
  },
};
let lang = "en";
try {
  lang = localStorage.getItem("lang") || "en";
} catch (e) {}
const $ = (s) => document.querySelector(s);
const t = (k) => UI[lang][k];
const L = (x) => (typeof x === "string" ? x : x[lang] || x.en);
const esc = (s) =>
  String(s).replace(
    /[&<>"]/g,
    (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" })[c],
  );

function personRow(c, itemName) {
  const msg = itemName
    ? "?text=" + encodeURIComponent(`${t("waMsg")} ${itemName}`)
    : "";
  return `<div class="person"><div class="n">${esc(L(c.name))}</div>
    <div class="text-muted small mb-2" dir="ltr">${c.phone}</div>
    <div class="actions"><a class="btn btn-call" href="tel:+${c.wa}">${t("call")}</a>
    <a class="btn btn-wa" href="https://wa.me/${c.wa}${msg}" target="_blank" rel="noopener">${t("wa")}</a></div></div>`;
}
function applyStatic() {
  document
    .querySelectorAll("[data-i18n]")
    .forEach((e) => (e.textContent = t(e.dataset.i18n)));
  document
    .querySelectorAll("[data-i18n-ph]")
    .forEach((e) => (e.placeholder = t(e.dataset.i18nPh)));
  $("#langBtn").textContent = lang === "en" ? "اردو" : "English";
  document.documentElement.lang = lang;
  document.documentElement.dir = lang === "ur" ? "rtl" : "ltr";
}
function initLang(render) {
  $("#langBtn").onclick = () => {
    lang = lang === "en" ? "ur" : "en";
    try {
      localStorage.setItem("lang", lang);
    } catch (e) {}
    render();
  };
  render();
}
