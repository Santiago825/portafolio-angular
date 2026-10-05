import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

export interface TabLink {
  readonly label: string;
  /** Ruta absoluta, p. ej. '/about/education' */
  readonly path: string;
}

/** Navegación por pestañas basada en rutas hijas (pills). En móvil hace scroll horizontal si no caben. */
@Component({
  selector: 'app-tabs',
  imports: [RouterLink, RouterLinkActive],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <nav [attr.aria-label]="label()" class="-mx-5 overflow-x-auto px-5 pb-1 sm:mx-0 sm:px-0">
      <ul class="flex w-max gap-2 sm:w-auto sm:flex-wrap">
        @for (tab of tabs(); track tab.path) {
          <li>
            <a
              [routerLink]="tab.path"
              routerLinkActive="!border-brand-500 !bg-brand-500 !text-white dark:!border-brand-400 dark:!bg-brand-400 dark:!text-ink-950"
              ariaCurrentWhenActive="page"
              class="inline-flex min-h-11 items-center whitespace-nowrap rounded-full border border-ink-300 px-5 text-sm font-semibold text-ink-700 transition-colors hover:border-brand-500 hover:text-brand-600 dark:border-ink-600 dark:text-ink-200 dark:hover:border-brand-300 dark:hover:text-brand-300"
            >
              {{ tab.label }}
            </a>
          </li>
        }
      </ul>
    </nav>
  `,
})
export class Tabs {
  readonly tabs = input.required<readonly TabLink[]>();
  readonly label = input('Sections');
}
