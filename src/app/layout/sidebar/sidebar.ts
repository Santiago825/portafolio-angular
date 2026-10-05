import { ChangeDetectionStrategy, Component, input, output } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { NgIcon, provideIcons } from '@ng-icons/core';
import {
  remixBook2Line,
  remixGithubFill,
  remixHome3Line,
  remixLinkedinBoxFill,
  remixMailSendLine,
  remixShieldUserLine,
  remixWhatsappFill,
} from '@ng-icons/remixicon';
import { PROFILE } from '../../data/profile.data';

interface NavItem {
  readonly label: string;
  readonly path: string;
  readonly icon: string;
  readonly exact?: boolean;
}

@Component({
  selector: 'app-sidebar',
  imports: [RouterLink, RouterLinkActive, NgIcon],
  providers: [
    provideIcons({
      remixBook2Line,
      remixGithubFill,
      remixHome3Line,
      remixLinkedinBoxFill,
      remixMailSendLine,
      remixShieldUserLine,
      remixWhatsappFill,
    }),
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './sidebar.html',
})
export class Sidebar {
  /** Estado del cajón en móvil. En `lg` el menú siempre está visible. */
  readonly open = input(false);
  readonly closed = output<void>();

  protected readonly socials = PROFILE.socials;
  protected readonly nav: readonly NavItem[] = [
    { label: 'Home', path: '/', icon: 'remixHome3Line', exact: true },
    { label: 'About', path: '/about', icon: 'remixShieldUserLine' },
    { label: 'Portfolio', path: '/portfolio', icon: 'remixBook2Line' },
    { label: 'Contact me', path: '/contact', icon: 'remixMailSendLine' },
  ];
}
