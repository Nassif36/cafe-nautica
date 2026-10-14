/**
 * Configuración general del sitio.
 * Reemplazar estos valores por los datos reales del negocio.
 */
export const SITE_CONFIG = {
  businessName: 'Trucker Tigre',
  legalArea: 'Tigre Centro, Buenos Aires, Argentina',
  // Placeholder: reemplazar por el número real en formato internacional sin "+" ni espacios.
  whatsappNumber: '5491100000000',
  whatsappDefaultMessage: 'Hola, quiero más información sobre las embarcaciones.',
  // Placeholder: reemplazar por el email real de contacto.
  email: 'contacto@tudominio.com.ar',
  // Placeholder: dirección exacta del showroom.
  address: 'Tigre Centro, Buenos Aires, Argentina (dirección exacta a confirmar)',
  instagram: '#',
  mapsUrl: 'https://maps.google.com/?q=Tigre+Centro,+Buenos+Aires',
};

export function buildWhatsAppUrl(message) {
  const text = encodeURIComponent(message || SITE_CONFIG.whatsappDefaultMessage);
  return `https://wa.me/${SITE_CONFIG.whatsappNumber}?text=${text}`;
}
