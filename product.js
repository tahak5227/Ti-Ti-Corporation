const pid = new URLSearchParams(location.search).get("id");
function render() {
  applyStatic();
  const p = PRODUCTS.find((x) => x.id === pid);
  if (!p) {
    $("#detail").innerHTML = `<p>${t("notFound")}</p>`;
    return;
  }
  document.title = `${L(p.name)} | TI-TI Corporation`;
  const imgs = p.images || [];
  const slides = imgs.length
    ? imgs
        .map(
          (s, i) =>
            `<div class="carousel-item ${i ? "" : "active"}"><img src="${esc(s)}" class="d-block w-100" alt="${esc(L(p.name))} ${i + 1}"></div>`,
        )
        .join("")
    : `<div class="carousel-item active"><div class="ph big">${t("noImg")}</div></div>`;
  const nav =
    imgs.length > 1
      ? `
    <div class="carousel-indicators">${imgs.map((_, i) => `<button type="button" data-bs-target="#gallery" data-bs-slide-to="${i}" class="${i ? "" : "active"}" aria-label="Image ${i + 1}"></button>`).join("")}</div>
    <button class="carousel-control-prev" type="button" data-bs-target="#gallery" data-bs-slide="prev"><span class="carousel-control-prev-icon"></span></button>
    <button class="carousel-control-next" type="button" data-bs-target="#gallery" data-bs-slide="next"><span class="carousel-control-next-icon"></span></button>`
      : "";
  const specs = (p.specs || []).length
    ? `<h2 class="h4 mt-4">${t("specsTitle")}</h2>
    <div class="table-responsive"><table class="table table-striped specs"><tbody>
    ${p.specs.map((r) => `<tr><th scope="row">${esc(L(r[0]))}</th><td>${esc(L(r[1]))}</td></tr>`).join("")}</tbody></table></div>`
    : "";
  $("#detail").innerHTML = `<div class="row g-4">
    <div class="col-md-6"><div id="gallery" class="carousel slide gallery" data-bs-ride="false"><div class="carousel-inner">${slides}</div>${nav}</div></div>
    <div class="col-md-6"><span class="tag">${esc(L(CATEGORIES[p.category]))}</span>
      <h1 class="h2">${esc(L(p.name))}</h1><p>${esc(L(p.description))}</p>
      <div class="price-box"><h2 class="h5">${t("priceTitle")}</h2><p class="small mb-2">${t("priceText")}</p>
      <div class="d-grid gap-2">${CONTACTS.map((c) => personRow(c, p.name.en)).join("")}</div></div></div>
    <div class="col-12">${specs}</div></div>`;
}
initLang(render);
