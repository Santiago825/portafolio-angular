import { ChangeDetectionStrategy, Component, input } from '@angular/core';

/** Cabecera común de página: mismo tamaño de título y misma separación en todas las rutas. */
@Component({
  selector: 'app-page-header',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <header class="mb-8 max-w-prose space-y-4">
      <h1 class="text-4xl font-bold sm:text-5xl">{{ title() }}</h1>
      <div class="text-lg text-ink-600 dark:text-ink-300"><ng-content /></div>
    </header>
  `,
})
export class PageHeader {
  readonly title = input.required<string>();
}
