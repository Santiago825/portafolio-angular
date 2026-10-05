import { InjectionToken } from '@angular/core';

/** Servicios de envío soportados. Elige UNO en `contact.settings.ts`. */
export interface EmailJsConfig {
  provider: 'emailjs',
  serviceId: 'service_guevdjk', // Tu Service ID real de EmailJS
  templateId: 'template_ahul407', // Tu Template ID real de EmailJS
  publicKey: 'anSqGq1fuvJMDckWQ'
}

export interface FormspreeConfig {
  readonly provider: 'formspree';
  /** Ej.: https://formspree.io/f/xxxxxxxx */
  readonly endpoint: string;
}

export interface NoContactConfig {
  readonly provider: 'none';
}

export type ContactConfig = EmailJsConfig | FormspreeConfig | NoContactConfig;

export const CONTACT_CONFIG = new InjectionToken<ContactConfig>('CONTACT_CONFIG');
