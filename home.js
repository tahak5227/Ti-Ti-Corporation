let cat = "all";
function renderChips() {
  const keys = ["all", ...Object.keys(CATEGORIES)];
  $("#chips").innerHTML = keys
    .map(
      (k) =>
        `<button type="button" class="chip ${k === cat ? "active" : ""}" data-cat="${k}">${k === "all" ? t("all") : L(CATEGORIES[k])}</button>`,
    )
    .join("");
}
function renderGrid() {
  const q = $("#search").value.trim().toLowerCase();
  const list = PRODUCTS.filter(
    (p) =>
      (cat === "all" || p.category === cat) &&
      (!q ||
        (p.name.en + p.name.ur + p.description.en + p.description.ur)
          .toLowerCase()
          .includes(q)),
  );
  $("#grid").innerHTML = list
    .map(
      (
        p,
      ) => `<div class="col"><a class="item" href="product.html?id=${encodeURIComponent(p.id)}">
    ${p.images && p.images[0] ? `<img src="${esc(p.images[0])}" alt="${esc(L(p.name))}" loading="lazy">` : `<div class="ph">${t("noImg")}</div>`}
    <div class="body"><span class="tag">${esc(L(CATEGORIES[p.category]))}</span><h3>${esc(L(p.name))}</h3>
    <p>${esc(L(p.description))}</p><span class="more">${t("viewDetails")}</span></div></a></div>`,
    )
    .join("");
  $("#empty").classList.toggle("d-none", list.length > 0);
}
function render() {
  applyStatic();
  $("#heroList").innerHTML = Object.values(CATEGORIES)
    .map((c) => `<li>${esc(L(c))}</li>`)
    .join("");
  $("#people").innerHTML = CONTACTS.map(
    (c) => `<div class="col">${personRow(c)}</div>`,
  ).join("");
  renderChips();
  renderGrid();
}
$("#search").oninput = renderGrid;
$("#chips").onclick = (e) => {
  const b = e.target.closest("[data-cat]");
  if (!b) return;
  cat = b.dataset.cat;
  renderChips();
  renderGrid();
};
initLang(render);
