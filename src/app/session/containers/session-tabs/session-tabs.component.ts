import { Component, Input } from '@angular/core';
import { Store, select } from '@ngrx/store';
import * as SessionTabSelectors from '@app/session/store/selectors/session-tab.selectors';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-session-tabs',
  templateUrl: './session-tabs.component.html',
  styleUrls: ['./session-tabs.component.scss'],
})
export class SessionTabsComponent {
  @Input() sessionId: number;

  packetTabEnabled$: Observable<boolean>;
  messageTabEnabled$: Observable<boolean>;

  constructor(private store: Store<any>) {}

  ngOnInit(): void {
    this.packetTabEnabled$ = this.store.pipe(
      select(SessionTabSelectors.selectPacketTabEnabled)
    );

    this.messageTabEnabled$ = this.store.pipe(
      select(SessionTabSelectors.selectMessageTabEnabled)
    );
  }
}
