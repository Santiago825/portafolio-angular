import { ChangeDetectionStrategy, Component, input, output } from '@angular/core';
import { RouterLink } from '@angular/router';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { remixCloseLine, remixMenuLine } from '@ng-icons/remixicon';
import { ThemeToggle } from '../theme-toggle/theme-toggle';

@Component({
  selector: 'app-topbar',
  imports: [RouterLink, NgIcon, ThemeToggle],
  providers: [provideIcons({ remixCloseLine, remixMenuLine })],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <header
      class="fixed inset-x-0 top-0 z-40 h-topbar border-b border-ink-200 bg-white/85 backdrop-blur dark:border-ink-700 dark:bg-ink-900/85"
    >
      <div class="flex h-full items-center justify-between gap-4 px-4 sm:px-6">
        <div class="flex items-center gap-3">
          <!-- Solo móvil: abre/cierra el menú lateral -->
          <button
            type="button"
            class="icon-btn -ml-2 lg:hidden"
            aria-controls="site-menu"
            [attr.aria-expanded]="menuOpen()"
            [attr.aria-label]="menuOpen() ? 'Close menu' : 'Open menu'"
            (click)="menuToggle.emit()"
          >
            <ng-icon [name]="menuOpen() ? 'remixCloseLine' : 'remixMenuLine'" />
          </button>

          <a
            routerLink="/"
            aria-label="Home"
            class="hidden font-display text-3xl font-black leading-none text-ink-900 lg:block dark:text-white"
            >JS</a
          >
          <span class="hidden h-6 w-px bg-ink-300 lg:block dark:bg-ink-600" aria-hidden="true"></span>
          <p class="font-display text-xl font-semibold text-ink-900 dark:text-white">Web Developer</p>
        </div>

        <app-theme-toggle />
      </div>
    </header>
  `,
})
export class Topbar {
  readonly menuOpen = input(false);
  readonly menuToggle = output<void>();
}
