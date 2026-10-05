import { ChangeDetectionStrategy, Component } from '@angular/core';
import { EDUCATION } from '../../../data/education.data';

@Component({
  selector: 'app-education',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <ol class="space-y-4">
      @for (entry of entries; track entry.title) {
        <li class="surface flex items-center gap-4 p-5">
          <div class="logo-tile">
            <img
              [src]="entry.logo"
              [alt]="entry.logoAlt"
              loading="lazy"
              decoding="async"
              class="max-h-full w-auto max-w-full object-contain"
            />
          </div>
          <div>
            <h2 class="text-lg font-semibold">{{ entry.title }}</h2>
            <p>{{ entry.institution }}</p>
            <p class="text-sm text-ink-500 dark:text-ink-300">{{ entry.year }}, {{ entry.place }}</p>
          </div>
        </li>
      }
    </ol>
  `,
})
export class Education {
  protected readonly entries = EDUCATION;
}
