import { ChangeDetectionStrategy, Component } from '@angular/core';
import { SKILL_GROUPS } from '../../../data/skills.data';

@Component({
  selector: 'app-skills',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <div class="space-y-10">
      @for (group of groups; track group.title) {
        <section [attr.aria-labelledby]="'skills-' + $index">
          <h2 [id]="'skills-' + $index" class="mb-4 text-2xl font-bold">{{ group.title }}</h2>
          <ul class="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
            @for (skill of group.skills; track skill.name) {
              <!-- Apilado en móvil (2 columnas estrechas), en fila desde sm -->
              <li class="surface flex min-w-0 flex-col items-center gap-3 p-4 text-center sm:flex-row sm:gap-4 sm:text-left">
                <span class="logo-tile">
                  <img
                    [src]="skill.image"
                    alt=""
                    [attr.width]="skill.width"
                    [attr.height]="skill.height"
                    loading="lazy"
                    decoding="async"
                    class="max-h-full w-auto max-w-full object-contain"
                  />
                </span>
                <span class="font-semibold text-ink-900 dark:text-white">{{ skill.name }}</span>
              </li>
            }
          </ul>
        </section>
      }
    </div>
  `,
})
export class Skills {
  protected readonly groups = SKILL_GROUPS;
}
