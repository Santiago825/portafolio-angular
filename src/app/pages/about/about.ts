import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PROFILE } from '../../data/profile.data';
import { PageHeader } from '../../shared/page-header/page-header';
import { TabLink, Tabs } from '../../shared/tabs/tabs';

@Component({
  selector: 'app-about',
  imports: [RouterOutlet, PageHeader, Tabs],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <div class="page">
      <app-page-header title="About me">
        <p>{{ bio }}</p>
      </app-page-header>

      <app-tabs label="About sections" [tabs]="tabs" />

      <div class="mt-8">
        <router-outlet />
      </div>
    </div>
  `,
})
export class About {
  protected readonly bio = PROFILE.bio;
  protected readonly tabs: readonly TabLink[] = [
    { label: 'Experience', path: '/about/experience' },
    { label: 'Education', path: '/about/education' },
    { label: 'Certifications', path: '/about/certifications' },
    { label: 'Complementary education', path: '/about/complementary' },
  ];
}
