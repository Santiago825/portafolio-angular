import { provideHttpClient, withFetch } from '@angular/common/http';
import { ApplicationConfig, provideBrowserGlobalErrorListeners } from '@angular/core';
import { provideRouter, withInMemoryScrolling } from '@angular/router';

import { routes } from './app.routes';
import { CONTACT_CONFIG } from './core/config/contact.config';
import { CONTACT_SETTINGS } from './core/config/contact.settings';

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    // Cada navegación vuelve arriba (el original dejaba el scroll donde estaba).
    provideRouter(routes, withInMemoryScrolling({ scrollPositionRestoration: 'top' })),
    // Necesario para Formspree; `withFetch` usa la API fetch nativa.
    provideHttpClient(withFetch()),
    { provide: CONTACT_CONFIG, useValue: CONTACT_SETTINGS },
  ],
};
