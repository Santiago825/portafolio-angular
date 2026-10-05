import { ChangeDetectionStrategy, Component } from '@angular/core';
import { EXPERIENCE } from '../../../data/experience.data';

@Component({
  selector: 'app-experience',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <div class="space-y-4">
      @for (job of jobs; track job.role + job.period) {
        <article class="surface p-5 sm:p-6">
          <header class="flex items-center gap-4">
            <div class="logo-tile">
              <img
                [src]="job.logo"
                [alt]="job.logoAlt"
                loading="lazy"
                decoding="async"
                class="max-h-full w-auto max-w-full object-contain"
              />
            </div>
            <div>
              <h2 class="text-lg font-semibold">{{ job.role }}</h2>
              <p>{{ job.company }}</p>
              <p class="text-sm text-ink-500 dark:text-ink-300">{{ job.period }}</p>
            </div>
          </header>

          <ul class="mt-5 list-disc space-y-3 pl-5 marker:text-brand-500 dark:marker:text-brand-300">
            @for (item of job.highlights; track item) {
              <li class="max-w-prose pl-1">{{ item }}</li>
            }
          </ul>
        </article>
      }
    </div>
  `,
})
export class Experience {
  protected readonly jobs = EXPERIENCE;
}
