import { Component, ChangeDetectionStrategy, Input } from '@angular/core';
import { Session } from '@app/core/models';

@Component({
  selector: 'app-session-tab-nav',
  templateUrl: './session-tab-nav.component.html',
  styleUrls: ['./session-tab-nav.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SessionTabNavComponent {

  @Input() sessions: Array<Session>;

}
