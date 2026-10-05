import { ChangeDetectionStrategy, Component } from '@angular/core';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { remixExternalLinkLine, remixGithubFill } from '@ng-icons/remixicon';
import { PROJECTS } from '../../../data/projects.data';

/**
 * Tarjetas de proyecto. A diferencia del original, título, tecnologías y enlaces están siempre
 * visibles: antes solo aparecían con :hover, lo que los dejaba inaccesibles en móvil/táctil.
 */
@Component({
  selector: 'app-projects',
  imports: [NgIcon],
  providers: [provideIcons({ remixExternalLinkLine, remixGithubFill })],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <ul class="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      @for (project of projects; track project.title) {
        <li class="surface flex flex-col overflow-hidden">
          <img
            [src]="project.image"
            [alt]="'Screenshot of ' + project.title"
            [attr.width]="project.imageSize.width"
            [attr.height]="project.imageSize.height"
            loading="lazy"
            decoding="async"
            class="aspect-[2/1] w-full border-b border-ink-200 object-cover object-top dark:border-ink-700"
          />
          <div class="flex flex-1 flex-col gap-4 p-5">
            <div class="space-y-1">
              <h2 class="text-lg font-semibold">{{ project.title }}</h2>
              <p class="text-sm text-ink-600 dark:text-ink-300">{{ project.description }}</p>
            </div>

            <ul class="flex flex-wrap gap-2" aria-label="Technologies">
              @for (tech of project.stack; track tech) {
                <li class="chip">{{ tech }}</li>
              }
            </ul>

            <div class="mt-auto flex flex-wrap gap-x-5 gap-y-2 pt-1 text-sm">
              @if (project.demoUrl) {
                <a class="link inline-flex items-center gap-1.5" [href]="project.demoUrl" target="_blank" rel="noopener noreferrer">
                  <ng-icon name="remixExternalLinkLine" aria-hidden="true" />
                  Live demo
                  <span class="sr-only">of {{ project.title }} (opens in a new tab)</span>
                </a>
              }
              @for (repo of project.repos; track repo.url) {
                <a class="link inline-flex items-center gap-1.5" [href]="repo.url" target="_blank" rel="noopener noreferrer">
                  <ng-icon name="remixGithubFill" aria-hidden="true" />
                  {{ repo.label }}
                  <span class="sr-only">for {{ project.title }} (opens in a new tab)</span>
                </a>
              }
            </div>
          </div>
        </li>
      }
    </ul>
  `,
})
export class Projects {
  protected readonly projects = PROJECTS;
}
