import { PRODUCTS, SHIPYARDS } from './data.js';
import { productCardHTML, initCommon } from './ui.js';

function getParams() {
  return new URLSearchParams(window.location.search);
}

const ACCESSORY_FILTER_VALUE = '__accesorios__';

const state = {
  shipyard: getParams().get('astillero') || 'all',
};

function renderFilters() {
  const shipyardEl = document.querySelector('[data-filter-shipyard]');
  const options = ['all', ...SHIPYARDS, ACCESSORY_FILTER_VALUE];
  shipyardEl.innerHTML = options
    .map((value) => {
      let label = value;
      if (value === 'all') label = 'Todos';
      else if (value === ACCESSORY_FILTER_VALUE) label = 'Accesorios';
      return `<label class="filter-option">
        <input type="radio" name="shipyard" value="${value}" ${state.shipyard === value ? 'checked' : ''} />
        ${label}
      </label>`;
    })
    .join('');
}

function filterProducts() {
  return PRODUCTS.filter((p) => {
    if (state.shipyard === 'all') return true;
    if (state.shipyard === ACCESSORY_FILTER_VALUE) return !p.shipyard;
    return p.shipyard === state.shipyard;
  });
}

function render() {
  const grid = document.querySelector('[data-catalog-grid]');
  const count = document.querySelector('[data-catalog-count]');
  const results = filterProducts();
  count.textContent = `${results.length} resultado${results.length === 1 ? '' : 's'}`;
  grid.innerHTML = results.length
    ? results.map((p) => productCardHTML(p)).join('')
    : '<div class="empty-state">No encontramos embarcaciones con ese astillero. Consultanos por WhatsApp, seguro podemos ayudarte.</div>';
}

function attachFilterEvents() {
  document.querySelector('[data-filters]').addEventListener('change', (e) => {
    if (e.target.name === 'shipyard') {
      state.shipyard = e.target.value;
      render();
    }
  });
}

document.addEventListener('DOMContentLoaded', () => {
  renderFilters();
  attachFilterEvents();
  render();
  initCommon();
});
