import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PageHeader } from '../../shared/page-header/page-header';
import { TabLink, Tabs } from '../../shared/tabs/tabs';

@Component({
  selector: 'app-portfolio',
  imports: [RouterOutlet, PageHeader, Tabs],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <div class="page">
      <app-page-header title="Portfolio">
        <p>Things I have built, and the tools I build them with.</p>
      </app-page-header>

      <app-tabs label="Portfolio sections" [tabs]="tabs" />

      <div class="mt-8">
        <router-outlet />
      </div>
    </div>
  `,
})
export class Portfolio {
  protected readonly tabs: readonly TabLink[] = [
    { label: 'Projects', path: '/portfolio/projects' },
    { label: 'Skills', path: '/portfolio/skills' },
  ];
}
