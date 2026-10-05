import { ContactConfig } from './contact.config';

/**
 * ╔══════════════════════════════════════════════════════════════════════╗
 * ║  AQUÍ CONECTAS EL FORMULARIO. Reemplaza los valores "YOUR_..." y     ║
 * ║  listo: el resto de la app no necesita cambios.                      ║
 * ╚══════════════════════════════════════════════════════════════════════╝
 *
 * Opción A · EmailJS  (https://dashboard.emailjs.com)
 *   - Tu plantilla debe usar las variables {{nombre}}, {{email}} y {{mensaje}}
 *     (las mismas que usaba el portafolio en React, así que tu plantilla actual sirve).
 *   - Panel de EmailJS → Security: restringe el uso a tu dominio.
 *
 * Opción B · Formspree  (https://formspree.io)
 *   - Crea un formulario y pega su endpoint.
 */
export const CONTACT_SETTINGS: ContactConfig = {
  provider: 'emailjs',
  serviceId: 'service_guevdjk', // Tu Service ID real de EmailJS
  templateId: 'template_ahul407', // Tu Template ID real de EmailJS
  publicKey: 'anSqGq1fuvJMDckWQ'
};

// export const CONTACT_SETTINGS: ContactConfig = {
//   provider: 'formspree',
//   endpoint: 'https://formspree.io/f/YOUR_FORM_ID',
// };
