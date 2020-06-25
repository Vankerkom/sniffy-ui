import { Component, ChangeDetectionStrategy, Input } from '@angular/core';

@Component({
  selector: 'app-session-tab-nav',
  templateUrl: './session-tab-nav.component.html',
  styleUrls: ['./session-tab-nav.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SessionTabNavComponent {

  @Input() links: Array<any>;

}
