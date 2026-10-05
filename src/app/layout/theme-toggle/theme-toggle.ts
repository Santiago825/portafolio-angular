import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { remixMoonLine, remixSunLine } from '@ng-icons/remixicon';
import { ThemeService } from '../../core/services/theme.service';

/**
 * Interruptor claro/oscuro accesible (role="switch").
 *
 * La posición del "thumb" depende SOLO de la clase `dark` en <html> (variantes `dark:` de Tailwind),
 * no del estado de Angular: por eso se pinta bien desde el primer frame, antes de que Angular arranque.
 */
@Component({
  selector: 'app-theme-toggle',
  imports: [NgIcon],
  providers: [provideIcons({ remixMoonLine, remixSunLine })],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <button
      type="button"
      role="switch"
      aria-label="Dark mode"
      [attr.aria-checked]="theme.isDark()"
      (click)="theme.toggle()"
      class="relative inline-flex h-9 w-16 shrink-0 items-center rounded-full border border-ink-300 bg-ink-100 transition-colors dark:border-ink-600 dark:bg-ink-800"
    >
      <span
        class="pointer-events-none absolute left-[3px] top-[3px] grid size-7 place-items-center rounded-full bg-white text-base text-brand-600 shadow-sm transition-transform duration-200 dark:translate-x-7 dark:bg-brand-400 dark:text-ink-950"
      >
        <ng-icon [name]="theme.isDark() ? 'remixMoonLine' : 'remixSunLine'" />
      </span>
    </button>
  `,
})
export class ThemeToggle {
  protected readonly theme = inject(ThemeService);
}
