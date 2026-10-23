import { PRODUCTS, CATEGORY, TRACKER_SIZES, getTrackerBySize, formatLength, formatSpec, formatPrice, AVAILABILITY_LABEL } from './data.js';
import { productCardHTML, initCommon } from './ui.js';

function renderFeaturedTrackers() {
  const el = document.querySelector('[data-featured-trackers]');
  if (!el) return;
  const trackers = PRODUCTS.filter((p) => p.category === CATEGORY.TRACKER);
  el.innerHTML = trackers.map((p) => productCardHTML(p, { featured: true })).join('');
}

function renderAccessories() {
  const el = document.querySelector('[data-accessories]');
  if (!el) return;
  const accessories = PRODUCTS.filter((p) => p.category === CATEGORY.ACCESSORY);
  el.innerHTML = accessories.map((p) => productCardHTML(p)).join('');
}

function renderSizeExplorer() {
  const tabsEl = document.querySelector('[data-size-tabs]');
  const panelEl = document.querySelector('[data-size-panel]');
  if (!tabsEl || !panelEl) return;

  tabsEl.innerHTML = TRACKER_SIZES.map(
    (size, i) => `<button class="size-tab${i === 0 ? ' is-active' : ''}" data-size="${size}" aria-pressed="${i === 0}">${size} m</button>`
  ).join('');

  function renderPanel(size) {
    const product = getTrackerBySize(size);
    if (!product) {
      panelEl.innerHTML = `<p class="empty-state">Modelo ${size} m — información a confirmar.</p>`;
      return;
    }
    panelEl.innerHTML = `
      <div class="size-explorer__media">
        <img src="${product.images[0]}" alt="${product.model}" loading="lazy" />
      </div>
      <div class="size-explorer__info">
        <p class="product-card__eyebrow">${product.shipyard}</p>
        <h3>${product.model}</h3>
        <p class="desc">${product.shortDescription}</p>
        <div class="size-explorer__specs">
          <div><span class="spec-label">Eslora</span><br/><span class="spec-value">${formatLength(product.lengthM)}</span></div>
          <div><span class="spec-label">HP máximo</span><br/><span class="spec-value">${formatSpec(product.maxHP)}</span></div>
          <div><span class="spec-label">Pasajeros máx.</span><br/><span class="spec-value">${formatSpec(product.maxPassengers)}</span></div>
          <div><span class="spec-label">Modalidad</span><br/><span class="spec-value">${AVAILABILITY_LABEL[product.availability]}</span></div>
        </div>
        <div style="display:flex; gap:12px; flex-wrap:wrap;">
          <a class="btn btn--primary" href="producto.html?slug=${product.slug}">Ver ficha completa</a>
          <a class="btn btn--outline" data-whatsapp data-whatsapp-msg="Hola, quiero más información sobre la ${product.model}." href="#">Consultar por WhatsApp</a>
        </div>
      </div>`;
    // re-hydrate whatsapp link just added
    const link = panelEl.querySelector('[data-whatsapp]');
    if (link) import('./ui.js').then((m) => m.hydrateWhatsAppLinks());
  }

  tabsEl.addEventListener('click', (e) => {
    const btn = e.target.closest('[data-size]');
    if (!btn) return;
    tabsEl.querySelectorAll('.size-tab').forEach((t) => {
      t.classList.remove('is-active');
      t.setAttribute('aria-pressed', 'false');
    });
    btn.classList.add('is-active');
    btn.setAttribute('aria-pressed', 'true');
    renderPanel(btn.dataset.size);
  });

  renderPanel(TRACKER_SIZES[0]);
}

document.addEventListener('DOMContentLoaded', () => {
  renderFeaturedTrackers();
  renderAccessories();
  renderSizeExplorer();
  initCommon();
});
