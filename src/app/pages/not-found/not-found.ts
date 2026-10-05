import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-not-found',
  imports: [RouterLink],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <div class="page">
      <h1 class="text-4xl font-bold sm:text-5xl">Page not found</h1>
      <p class="mt-4 max-w-prose text-lg text-ink-600 dark:text-ink-300">
        The page you are looking for doesn’t exist or has moved.
      </p>
      <a routerLink="/" class="btn-primary mt-8">Back to home</a>
    </div>
  `,
})
export class NotFound {}
