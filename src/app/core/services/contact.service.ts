import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { firstValueFrom } from 'rxjs';
import { CONTACT_CONFIG } from '../config/contact.config';

export interface ContactMessage {
  readonly name: string;
  readonly email: string;
  readonly message: string;
}

/** El servicio de envío no está configurado todavía (siguen los valores "YOUR_..."). */
export class ContactNotConfiguredError extends Error {
  constructor() {
    super('Contact form is not configured. Edit src/app/core/config/contact.settings.ts');
    this.name = 'ContactNotConfiguredError';
  }
}

/**
 * Envía el mensaje del formulario al proveedor configurado (EmailJS o Formspree).
 * Devuelve una promesa que se rechaza si el envío falla: el componente decide qué mostrar.
 */
@Injectable({ providedIn: 'root' })
export class ContactService {
  private readonly config = inject(CONTACT_CONFIG);
  private readonly http = inject(HttpClient);

  /** `false` mientras queden valores de ejemplo: permite avisar en desarrollo. */
  get isConfigured(): boolean {
    const c = this.config;
    switch (c.provider) {
      case 'emailjs':
        return ![c.serviceId, c.templateId, c.publicKey].some((v) => !v || v.startsWith('YOUR_'));
      case 'formspree':
        return !!c.endpoint && !c.endpoint.includes('YOUR_');
      default:
        return false;
    }
  }

  async send(payload: ContactMessage): Promise<void> {
    if (!this.isConfigured) {
      throw new ContactNotConfiguredError();
    }
    const c = this.config;
    if (c.provider === 'emailjs') {
      // Import dinámico: el SDK de EmailJS solo se descarga cuando se envía el primer mensaje.
      const { default: emailjs } = await import('@emailjs/browser');
      await emailjs.send(
        c.serviceId,
        c.templateId,
        {
          // Nombres de variable idénticos a los de la plantilla del portafolio original.
          nombre: payload.name,
          email: payload.email,
          mensaje: payload.message,
          reply_to: payload.email,
        },
        { publicKey: c.publicKey },
      );
      return;
    }
    if (c.provider === 'formspree') {
      await firstValueFrom(
        this.http.post(c.endpoint, payload, { headers: { Accept: 'application/json' } }),
      );
    }
  }
}
