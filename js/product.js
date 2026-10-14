import { getProductBySlug, getProductsByCategory, formatLength, formatSpec, formatPrice, AVAILABILITY_LABEL, CATEGORY } from './data.js';
import { productCardHTML, initCommon } from './ui.js';
import { SITE_CONFIG } from './config.js';

function getSlug() {
  return new URLSearchParams(window.location.search).get('slug');
}

function renderGallery(product) {
  const main = document.querySelector('[data-gallery-main]');
  const thumbs = document.querySelector('[data-gallery-thumbs]');
  function setActive(src, index) {
    main.src = src;
    main.alt = `${product.model} — foto ${index + 1}`;
    thumbs.querySelectorAll('button').forEach((b, i) => b.classList.toggle('is-active', i === index));
  }
  thumbs.innerHTML = product.images
    .map((src, i) => `<button type="button" data-index="${i}"><img src="${src}" alt="Miniatura ${i + 1} de ${product.model}" loading="lazy" /></button>`)
    .join('');
  thumbs.addEventListener('click', (e) => {
    const btn = e.target.closest('button');
    if (!btn) return;
    const i = Number(btn.dataset.index);
    setActive(product.images[i], i);
  });
  setActive(product.images[0], 0);
}

function render() {
  const slug = getSlug();
  const product = getProductBySlug(slug);
  const root = document.querySelector('[data-product-root]');
  const notFound = document.querySelector('[data-product-not-found]');

  if (!product) {
    root.hidden = true;
    notFound.hidden = false;
    return;
  }

  document.title = `${product.model} — ${product.shipyard || 'Trucker Tigre'} | Trucker Tigre`;
  const metaDesc = document.querySelector('meta[name="description"]');
  if (metaDesc) metaDesc.setAttribute('content', product.shortDescription);

  document.querySelector('[data-breadcrumb-name]').textContent = product.model;
  document.querySelector('[data-product-brand]').textContent = product.shipyard || 'Accesorio';
  document.querySelector('[data-product-title]').textContent = product.model;
  document.querySelector('[data-product-desc]').textContent = product.description;
  document.querySelector('[data-product-availability]').textContent = AVAILABILITY_LABEL[product.availability];

  const specsBlock = document.querySelector('[data-product-specs]');
  if (product.category === CATEGORY.ACCESSORY) {
    specsBlock.hidden = true;
  } else {
    specsBlock.hidden = false;
    document.querySelector('[data-product-length]').textContent = formatLength(product.lengthM);
    document.querySelector('[data-product-hp]').textContent = formatSpec(product.maxHP);
    document.querySelector('[data-product-passengers]').textContent = formatSpec(product.maxPassengers);
  }
  document.querySelector('[data-product-price]').textContent = formatPrice(product.price);
  document.querySelector('[data-product-highlights]').innerHTML = product.highlights.map((h) => `<li>${h}</li>`).join('');

  const waMsg = `Hola, quiero más información sobre la ${product.model} (${product.shipyard || 'accesorio'}).`;
  document.querySelectorAll('[data-product-whatsapp]').forEach((el) => el.setAttribute('data-whatsapp-msg', waMsg));
  document.querySelectorAll('[data-product-visit]').forEach((el) =>
    el.setAttribute('data-whatsapp-msg', `Hola, quiero coordinar una visita para ver la ${product.model}.`)
  );
  document.querySelectorAll('[data-product-info]').forEach((el) =>
    el.setAttribute('data-whatsapp-msg', `Hola, quiero solicitar información detallada sobre la ${product.model}.`)
  );

  renderGallery(product);

  // Related products (same category, excluding current)
  const related = getProductsByCategory(product.category).filter((p) => p.id !== product.id).slice(0, 3);
  const relatedGrid = document.querySelector('[data-related-grid]');
  const relatedSection = document.querySelector('[data-related-section]');
  if (related.length) {
    relatedGrid.innerHTML = related.map((p) => productCardHTML(p)).join('');
  } else {
    relatedSection.hidden = true;
  }

  // Product structured data
  const ld = document.createElement('script');
  ld.type = 'application/ld+json';
  ld.textContent = JSON.stringify({
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: product.model,
    brand: product.shipyard || undefined,
    description: product.description,
    image: product.images.map((i) => window.location.origin + '/' + i),
    offers: {
      '@type': 'Offer',
      priceCurrency: 'USD',
      price: product.price || undefined,
      availability: 'https://schema.org/InStock',
    },
  });
  document.head.appendChild(ld);
}

document.addEventListener('DOMContentLoaded', () => {
  render();
  initCommon();
});
