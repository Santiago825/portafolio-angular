import { ChangeDetectionStrategy, Component } from '@angular/core';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { remixExternalLinkLine } from '@ng-icons/remixicon';
import { COMPLEMENTARY } from '../../../data/certificates.data';

@Component({
  selector: 'app-complementary',
  imports: [NgIcon],
  providers: [provideIcons({ remixExternalLinkLine })],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <div class="space-y-10">
      @for (group of groups; track group.year) {
        <section [attr.aria-labelledby]="'year-' + group.year">
          <h2 [id]="'year-' + group.year" class="mb-4 text-2xl font-bold">{{ group.year }}</h2>
          <ul class="surface divide-y divide-ink-200 dark:divide-ink-700">
            @for (item of group.items; track item.url) {
              <li class="flex items-center justify-between gap-4 p-5">
                <div>
                  <p class="max-w-prose font-semibold text-ink-900 dark:text-white">{{ item.title }}</p>
                  <p class="text-sm text-ink-500 dark:text-ink-300">{{ item.place }}</p>
                </div>
                <a
                  class="btn-secondary shrink-0"
                  [href]="item.url"
                  target="_blank"
                  rel="noopener noreferrer"
                  [attr.aria-label]="'View ' + item.title + ' (opens in a new tab)'"
                >
                  <ng-icon name="remixExternalLinkLine" class="text-lg" aria-hidden="true" />
                  <span class="hidden sm:inline">View</span>
                </a>
              </li>
            }
          </ul>
        </section>
      }
    </div>
  `,
})
export class Complementary {
  protected readonly groups = COMPLEMENTARY;
}
