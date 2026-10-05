import { DOCUMENT } from '@angular/common';
import { ChangeDetectionStrategy, Component, effect, inject, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Sidebar } from './layout/sidebar/sidebar';
import { Topbar } from './layout/topbar/topbar';
// Importarlo aquí garantiza que ThemeService se instancie al arrancar (aplica el tema y escucha al sistema).
import { ThemeService } from './core/services/theme.service';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Topbar, Sidebar],
  templateUrl: './app.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: { '(document:keydown.escape)': 'closeMenu()' },
})
export class App {
  private readonly document = inject(DOCUMENT);
  protected readonly menuOpen = signal(false);

  constructor() {
    inject(ThemeService);

    // Con el menú móvil abierto, bloquea el scroll del fondo (solo por debajo de `lg`).
    effect(() =>
      this.document.body.classList.toggle('max-lg:overflow-hidden', this.menuOpen()),
    );
  }

  protected toggleMenu(): void {
    this.menuOpen.update((open) => !open);
  }

  protected closeMenu(): void {
    this.menuOpen.set(false);
  }
}
