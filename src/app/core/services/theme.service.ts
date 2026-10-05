import { DOCUMENT } from '@angular/common';
import { Injectable, computed, effect, inject, signal } from '@angular/core';

export type Theme = 'light' | 'dark';

/** Misma clave que lee el script inline de index.html. Si la cambias, cámbiala allí también. */
const STORAGE_KEY = 'theme';
const THEME_COLOR: Record<Theme, string> = { light: '#f3f4f7', dark: '#252830' };

/**
 * Gestiona el modo claro/oscuro con la estrategia `class` de Tailwind.
 *
 * - Sin parpadeo: el script de index.html ya puso la clase `dark` antes del primer pintado;
 *   este servicio solo la mantiene sincronizada a partir de ahí.
 * - Prioridad: preferencia explícita del usuario (localStorage) > preferencia del sistema.
 * - Mientras el usuario no elija nada, sigue en vivo los cambios del sistema operativo.
 * - Sincroniza entre pestañas mediante el evento `storage`.
 */
@Injectable({ providedIn: 'root' })
export class ThemeService {
  private readonly document = inject(DOCUMENT);
  private readonly window = this.document.defaultView;
  private readonly systemQuery = this.window?.matchMedia('(prefers-color-scheme: dark)');

  /** Elección explícita del usuario; `null` = "seguir al sistema". */
  private readonly userChoice = signal<Theme | null>(this.readStoredTheme());
  private readonly systemPrefersDark = signal(this.systemQuery?.matches ?? false);

  readonly theme = computed<Theme>(
    () => this.userChoice() ?? (this.systemPrefersDark() ? 'dark' : 'light'),
  );
  readonly isDark = computed(() => this.theme() === 'dark');

  constructor() {
    // Reflejar el tema en el DOM cada vez que cambie la señal.
    effect(() => this.applyToDocument(this.theme()));

    // Seguir al sistema operativo en vivo.
    this.systemQuery?.addEventListener('change', (event) =>
      this.systemPrefersDark.set(event.matches),
    );

    // Sincronizar entre pestañas del mismo navegador.
    this.window?.addEventListener('storage', (event) => {
      if (event.key === STORAGE_KEY) {
        this.userChoice.set(this.parseTheme(event.newValue));
      }
    });
  }

  toggle(): void {
    this.set(this.isDark() ? 'light' : 'dark');
  }

  set(theme: Theme): void {
    this.userChoice.set(theme);
    try {
      this.window?.localStorage.setItem(STORAGE_KEY, theme);
    } catch {
      /* Almacenamiento no disponible: el cambio sigue funcionando durante la sesión. */
    }
  }

  /** Olvida la preferencia guardada y vuelve a seguir al sistema. */
  useSystemTheme(): void {
    this.userChoice.set(null);
    try {
      this.window?.localStorage.removeItem(STORAGE_KEY);
    } catch {
      /* noop */
    }
  }

  private applyToDocument(theme: Theme): void {
    const root = this.document.documentElement;
    root.classList.toggle('dark', theme === 'dark');
    root.style.colorScheme = theme;
    this.document
      .querySelector('meta[name="theme-color"]')
      ?.setAttribute('content', THEME_COLOR[theme]);
  }

  private readStoredTheme(): Theme | null {
    try {
      return this.parseTheme(this.document.defaultView?.localStorage.getItem(STORAGE_KEY) ?? null);
    } catch {
      return null;
    }
  }

  private parseTheme(value: string | null): Theme | null {
    return value === 'light' || value === 'dark' ? value : null;
  }
}
