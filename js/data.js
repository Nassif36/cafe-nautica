/**
 * Catálogo de productos — ESTRUCTURA DE DATOS REUTILIZABLE.
 *
 * IMPORTANTE: Todos los datos técnicos (HP máximo, capacidad de pasajeros,
 * precios, stock, astillero asignado a cada medida) son EJEMPLOS / PLACEHOLDER
 * porque no fueron provistos. Reemplazar por la información real antes de publicar.
 * Donde el dato es "null" la UI debe mostrar "Consultar" en vez de inventar un valor.
 *
 * Para agregar un nuevo modelo, agregar un objeto al array PRODUCTS siguiendo
 * esta misma forma. No hace falta tocar el HTML ni el resto del JS.
 */

export const CATEGORY = {
  TRUCKER: 'trucker',
  BOAT: 'boat',
  ACCESSORY: 'accessory',
};

export const AVAILABILITY = {
  PREVENTA: 'preventa',
  PROGRAMADA: 'entrega-programada',
  INMEDIATA: 'entrega-inmediata',
};

export const AVAILABILITY_LABEL = {
  [AVAILABILITY.PREVENTA]: 'Preventa',
  [AVAILABILITY.PROGRAMADA]: 'Entrega programada',
  [AVAILABILITY.INMEDIATA]: 'Entrega inmediata',
};

export const SHIPYARDS = ['San Ignacio'];

export const TRUCKER_SIZES = ['4.70', '5.05', '6.00'];

/**
 * @typedef Product
 * @property {string} id
 * @property {string} slug
 * @property {'trucker'|'boat'|'accessory'} category
 * @property {string} shipyard
 * @property {string} model
 * @property {number|null} lengthM
 * @property {number|null} maxHP
 * @property {number|null} maxPassengers
 * @property {string} availability
 * @property {number|null} price
 * @property {string[]} images
 * @property {string} shortDescription
 * @property {string} description
 * @property {string[]} highlights
 */

export const PRODUCTS = [
  {
    id: 'san-ignacio-islena-470',
    slug: 'san-ignacio-islena-470',
    category: CATEGORY.TRUCKER,
    shipyard: 'San Ignacio',
    model: 'Isleña 4.70',
    lengthM: 4.7,
    maxHP: null,
    maxPassengers: null,
    availability: AVAILABILITY.PROGRAMADA,
    price: null,
    images: ['images/san-ignacio-islena-470-1.jpg', 'images/san-ignacio-islena-470-2.jpg'],
    shortDescription: '',
    description:
      'Isleña 4.70, fabricada por el astillero San Ignacio bajo nuestra supervisión directa de calidad. Un tamaño ágil y manejable, pensado para el uso diario en el Delta. Motorización, equipamiento y capacidad a confirmar según configuración.',
    highlights: ['Astillero San Ignacio', 'Control de calidad propio', 'Nueva de fábrica'],
  },
  {
    id: 'san-ignacio-ubajay-505',
    slug: 'san-ignacio-ubajay-505',
    category: CATEGORY.TRUCKER,
    shipyard: 'San Ignacio',
    model: 'Ubajay 5.05',
    lengthM: 5.05,
    maxHP: null,
    maxPassengers: null,
    availability: AVAILABILITY.PROGRAMADA,
    price: null,
    images: ['images/san-ignacio-ubajay-505-1.jpg'],
    shortDescription: 'Equilibrio entre tamaño y maniobrabilidad, astillero San Ignacio.',
    description:
      'Ubajay 5.05, fabricada por el astillero San Ignacio con seguimiento directo de nuestro equipo durante todo el proceso de construcción. Entrega programada sujeta a planificación de fabricación.',
    highlights: ['Astillero San Ignacio', 'Fabricación supervisada', 'Inspección final incluida'],
  },
  {
    id: 'san-ignacio-vikingo-600',
    slug: 'san-ignacio-vikingo-600',
    category: CATEGORY.TRUCKER,
    shipyard: 'San Ignacio',
    model: 'Vikingo 6.00',
    lengthM: 6.0,
    maxHP: null,
    maxPassengers: null,
    availability: AVAILABILITY.PROGRAMADA,
    price: null,
    images: [
      'images/san-ignacio-vikingo-600-1.jpg',
      'images/san-ignacio-vikingo-600-2.jpg',
      'images/san-ignacio-vikingo-600-3.jpg',
    ],
    shortDescription: '',
    description:
      'Vikingo 6.00, fabricada por el astillero San Ignacio, ideal para quienes buscan más espacio a bordo. Fabricación y entrega coordinadas directamente con el astillero.',
    highlights: ['Astillero San Ignacio', 'Mayor espacio a bordo', 'Control de calidad en fábrica'],
  },
  {
    id: 'accesorio-consola',
    slug: 'consolas',
    category: CATEGORY.ACCESSORY,
    shipyard: null,
    model: 'Consolas',
    lengthM: null,
    maxHP: null,
    maxPassengers: null,
    availability: AVAILABILITY.INMEDIATA,
    price: null,
    images: ['images/consolas-1.jpeg', 'images/consolas-2.jpeg', 'images/consolas-3.jpeg'],
    shortDescription: 'Consolas para equipar o renovar tu embarcación.',
    description: 'Consolas disponibles para distintos modelos de embarcación. Consultanos por compatibilidad y terminaciones.',
    highlights: ['Distintas terminaciones', 'Instalación a coordinar'],
  },
  {
    id: 'accesorio-butacon',
    slug: 'butacones',
    category: CATEGORY.ACCESSORY,
    shipyard: null,
    model: 'Butacones',
    lengthM: null,
    maxHP: null,
    maxPassengers: null,
    availability: AVAILABILITY.INMEDIATA,
    price: null,
    images: ['images/accesorio-butacon.jpg'],
    shortDescription: 'Butacones náuticos para mayor confort a bordo.',
    description: 'Butacones náuticos disponibles en distintas configuraciones. Consultanos por modelo y compatibilidad con tu embarcación.',
    highlights: ['Confort a bordo', 'Varias configuraciones'],
  },
  {
    id: 'accesorio-trailer',
    slug: 'trailers',
    category: CATEGORY.ACCESSORY,
    shipyard: null,
    model: 'Trailers',
    lengthM: null,
    maxHP: null,
    maxPassengers: null,
    availability: AVAILABILITY.INMEDIATA,
    price: null,
    images: ['images/accesorio-trailer.jpg'],
    shortDescription: 'Trailers para traslado y guardado de tu embarcación.',
    description: 'Trailers disponibles según medida de embarcación. Consultanos por capacidad de carga y compatibilidad.',
    highlights: ['Según medida de embarcación', 'Consultar capacidad de carga'],
  },
];

export function getProductBySlug(slug) {
  return PRODUCTS.find((p) => p.slug === slug) || null;
}

export function getProductsByCategory(category) {
  return PRODUCTS.filter((p) => p.category === category);
}

export function getTruckerBySize(size) {
  return PRODUCTS.find((p) => p.category === CATEGORY.TRUCKER && p.lengthM === parseFloat(size));
}

export function formatLength(lengthM) {
  return lengthM ? `${lengthM.toFixed(2)} m` : 'Consultar';
}

export function formatSpec(value, unit) {
  return value === null || value === undefined ? 'Consultar' : `${value}${unit ? ' ' + unit : ''}`;
}

export function formatPrice(price) {
  if (price === null || price === undefined) return 'Consultar precio';
  return new Intl.NumberFormat('es-AR', { style: 'currency', currency: 'USD', maximumFractionDigits: 0 }).format(price);
}
