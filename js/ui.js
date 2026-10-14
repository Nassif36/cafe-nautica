/**
 * Utilidades de UI compartidas: tarjetas de producto, botón flotante de WhatsApp,
 * navegación, menú mobile y animaciones de scroll-reveal.
 */
import { SITE_CONFIG, buildWhatsAppUrl } from './config.js';
import { AVAILABILITY_LABEL, CATEGORY, formatLength, formatSpec, formatPrice } from './data.js';

export function productCardHTML(product, options = {}) {
  const { featured = false } = options;
  const img = product.images[0];
  const isAccessory = product.category === CATEGORY.ACCESSORY;
  const specs = isAccessory
    ? ''
    : `<ul class="product-card__specs">
        <li><span class="spec-label">Eslora</span><span class="spec-value">${formatLength(product.lengthM)}</span></li>
        <li><span class="spec-label">HP máx.</span><span class="spec-value">${formatSpec(product.maxHP)}</span></li>
        <li><span class="spec-label">Pasajeros</span><span class="spec-value">${formatSpec(product.maxPassengers)}</span></li>
      </ul>`;
  return `
  <article class="product-card${featured ? ' product-card--featured' : ''}" data-id="${product.id}">
    <a class="product-card__media" href="producto.html?slug=${product.slug}" aria-label="Ver ${product.model}">
      <img src="${img}" alt="${product.model} — ${product.shipyard || SITE_CONFIG.businessName}" loading="lazy" width="1200" height="900" />
      <span class="badge badge--availability">${AVAILABILITY_LABEL[product.availability]}</span>
    </a>
    <div class="product-card__body">
      <p class="product-card__eyebrow">${product.shipyard || 'Accesorio'}</p>
      <h3 class="product-card__title"><a href="producto.html?slug=${product.slug}">${product.model}</a></h3>
      ${specs}
      <div class="product-card__footer">
        <span class="product-card__price">${formatPrice(product.price)}</span>
        <a class="btn btn--ghost btn--small" href="producto.html?slug=${product.slug}">Ver ficha</a>
      </div>
    </div>
  </article>`;
}


export function initWhatsAppFloat() {
  const btn = document.querySelector('[data-whatsapp-float]');
  if (!btn) return;
  btn.href = buildWhatsAppUrl();
}

export function hydrateWhatsAppLinks() {
  document.querySelectorAll('[data-whatsapp]').forEach((el) => {
    const customMsg = el.getAttribute('data-whatsapp-msg');
    el.href = buildWhatsAppUrl(customMsg || undefined);
  });
}

export function initMobileNav() {
  const toggle = document.querySelector('[data-nav-toggle]');
  const nav = document.querySelector('[data-nav-menu]');
  if (!toggle || !nav) return;

  const closeNav = () => {
    nav.classList.remove('is-open');
    toggle.setAttribute('aria-expanded', 'false');
    toggle.setAttribute('aria-label', 'Abrir menú');
    document.body.classList.remove('nav-open');
  };
  const openNav = () => {
    nav.classList.add('is-open');
    toggle.setAttribute('aria-expanded', 'true');
    toggle.setAttribute('aria-label', 'Cerrar menú');
    document.body.classList.add('nav-open');
  };

  toggle.addEventListener('click', () => {
    if (nav.classList.contains('is-open')) closeNav();
    else openNav();
  });
  nav.querySelectorAll('a').forEach((link) => link.addEventListener('click', closeNav));
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && nav.classList.contains('is-open')) closeNav();
  });
  // Si la ventana vuelve a tamaño desktop con el menú abierto, lo reseteamos.
  window.addEventListener('resize', () => {
    if (window.innerWidth > 900 && nav.classList.contains('is-open')) closeNav();
  });
}

export function initHeaderScroll() {
  const header = document.querySelector('[data-site-header]');
  if (!header) return;
  const onScroll = () => header.classList.toggle('is-scrolled', window.scrollY > 12);
  onScroll();
  window.addEventListener('scroll', onScroll, { passive: true });
}

export function initScrollReveal() {
  const items = document.querySelectorAll('[data-reveal]');
  if (!items.length) return;
  if (!('IntersectionObserver' in window)) {
    items.forEach((el) => el.classList.add('is-visible'));
    return;
  }
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.15, rootMargin: '0px 0px -60px 0px' }
  );
  items.forEach((el) => observer.observe(el));
}

export function setFooterYear() {
  const el = document.querySelector('[data-year]');
  if (el) el.textContent = new Date().getFullYear();
}

export function initCommon() {
  initWhatsAppFloat();
  hydrateWhatsAppLinks();
  initMobileNav();
  initHeaderScroll();
  initScrollReveal();
  setFooterYear();
}
