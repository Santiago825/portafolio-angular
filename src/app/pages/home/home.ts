import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { remixDownload2Line, remixMailSendLine } from '@ng-icons/remixicon';
import { PROFILE } from '../../data/profile.data';

@Component({
  selector: 'app-home',
  imports: [RouterLink, NgIcon],
  providers: [provideIcons({ remixDownload2Line, remixMailSendLine })],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './home.html',
})
export class Home {
  protected readonly profile = PROFILE;
}
