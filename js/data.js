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
  TRACKER: 'tracker',
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

export const SHIPYARDS = ['San Ignacio', 'Guadalupe', 'Khaffir', 'Nauticor'];

export const TRACKER_SIZES = ['4.70', '5.05', '5.30', '6.00', '6.30', '6.40', '6.70'];

/**
 * @typedef Product
 * @property {string} id
 * @property {string} slug
 * @property {'tracker'|'boat'|'accessory'} category
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
    category: CATEGORY.TRACKER,
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
    category: CATEGORY.TRACKER,
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
    category: CATEGORY.TRACKER,
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
    id: 'guadalupe-tracker-470',
    slug: 'guadalupe-tracker-470',
    category: CATEGORY.TRACKER,
    shipyard: 'Guadalupe',
    model: 'Tracker 4.70',
    lengthM: 4.7,
    maxHP: null,
    maxPassengers: null,
    availability: AVAILABILITY.PROGRAMADA,
    price: null,
    images: [
      'images/guadalupe-tracker-470-4.jpg',
      'images/guadalupe-tracker-470-1.jpg',
      'images/guadalupe-tracker-470-2.jpg',
      'images/guadalupe-tracker-470-3.jpg',
    ],
    shortDescription: 'Tracker 4.70 del astillero Guadalupe, ágil y versátil para el Delta.',
    description:
      'Tracker 4.70, fabricada por el astillero Guadalupe bajo nuestra supervisión directa de calidad. Un tamaño compacto y manejable, ideal para el uso diario en el Delta. Motorización, equipamiento y capacidad a confirmar según configuración.',
    highlights: ['Astillero Guadalupe', 'Control de calidad propio', 'Nueva de fábrica'],
  },
  {
    id: 'guadalupe-tracker-670',
    slug: 'guadalupe-tracker-670',
    category: CATEGORY.TRACKER,
    shipyard: 'Guadalupe',
    model: 'Tracker 6.70',
    lengthM: 6.7,
    maxHP: null,
    maxPassengers: null,
    availability: AVAILABILITY.PROGRAMADA,
    price: null,
    images: [
      'images/guadalupe-tracker-670-2.jpg',
      'images/guadalupe-tracker-670-3.jpg',
      'images/guadalupe-tracker-670-1.jpg',
    ],
    shortDescription: 'Tracker 6.70 del astillero Guadalupe, más espacio a bordo.',
    description:
      'Tracker 6.70, fabricada por el astillero Guadalupe, pensada para quienes buscan mayor espacio y autonomía a bordo. Fabricación y entrega coordinadas directamente con el astillero.',
    highlights: ['Astillero Guadalupe', 'Mayor espacio a bordo', 'Inspección final incluida'],
  },
  {
    id: 'khaffir-tracker-530',
    slug: 'khaffir-tracker-530',
    category: CATEGORY.TRACKER,
    shipyard: 'Khaffir',
    model: 'Tracker 5.30',
    lengthM: 5.3,
    maxHP: null,
    maxPassengers: null,
    availability: AVAILABILITY.PROGRAMADA,
    price: null,
    images: [
      'images/khaffir-tracker-530-2.jpg',
      'images/khaffir-tracker-530-1.jpg',
      'images/khaffir-tracker-530-3.jpg',
    ],
    shortDescription: 'Tracker 5.30 del astillero Khaffir, equilibrio y maniobrabilidad.',
    description:
      'Tracker 5.30, fabricada por el astillero Khaffir con seguimiento directo de nuestro equipo durante todo el proceso de construcción. Entrega programada sujeta a planificación de fabricación.',
    highlights: ['Astillero Khaffir', 'Fabricación supervisada', 'Control de calidad propio'],
  },
  {
    id: 'khaffir-tracker-640',
    slug: 'khaffir-tracker-640',
    category: CATEGORY.TRACKER,
    shipyard: 'Khaffir',
    model: 'Tracker 6.40',
    lengthM: 6.4,
    maxHP: null,
    maxPassengers: null,
    availability: AVAILABILITY.PROGRAMADA,
    price: null,
    images: [
      'images/khaffir-tracker-640-2.jpg',
      'images/khaffir-tracker-640-3.jpg',
      'images/khaffir-tracker-640-4.jpg',
      'images/khaffir-tracker-640-1.jpg',
    ],
    shortDescription: 'Tracker 6.40 del astillero Khaffir, más espacio a bordo.',
    description:
      'Tracker 6.40, fabricada por el astillero Khaffir, ideal para quienes buscan más espacio a bordo. Fabricación y entrega coordinadas directamente con el astillero.',
    highlights: ['Astillero Khaffir', 'Mayor espacio a bordo', 'Control de calidad en fábrica'],
  },
  {
    id: 'nauticor-columbia-630',
    slug: 'nauticor-columbia-630',
    category: CATEGORY.TRACKER,
    shipyard: 'Nauticor',
    model: 'Columbia 6.30 Open',
    lengthM: 6.3,
    maxHP: null,
    maxPassengers: null,
    availability: AVAILABILITY.PROGRAMADA,
    price: null,
    images: [
      'images/nauticor-columbia-630-1.jpg',
      'images/nauticor-columbia-630-4.jpg',
      'images/nauticor-columbia-630-2.jpg',
      'images/nauticor-columbia-630-3.jpg',
      'images/nauticor-columbia-630-5.jpg',
    ],
    shortDescription: 'Columbia 6.30 Open del astillero Nauticor, terminaciones premium.',
    description:
      'Columbia 6.30 Open, fabricada por el astillero Nauticor, con terminaciones premium y seguimiento directo de nuestro equipo durante todo el proceso de construcción. Entrega programada sujeta a planificación de fabricación.',
    highlights: ['Astillero Nauticor', 'Terminaciones premium', 'Inspección final incluida'],
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
    images: ['images/placeholder-gray.jpg'],
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
    images: [
      'images/accesorio-trailer-6.jpg',
      'images/accesorio-trailer-7.jpg',
      'images/accesorio-trailer-8.jpg',
      'images/accesorio-trailer-9.jpg',
      'images/accesorio-trailer-2.jpg',
      'images/accesorio-trailer-3.jpg',
      'images/accesorio-trailer-4.jpg',
      'images/accesorio-trailer-5.jpg',
      'images/accesorio-trailer-1.jpg',
    ],
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

export function getTrackerBySize(size) {
  return PRODUCTS.find((p) => p.category === CATEGORY.TRACKER && p.lengthM === parseFloat(size));
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
