import {Component, Input} from '@angular/core';
import {Store, select} from '@ngrx/store';
import * as SessionTabSelectors from '@app/session/store/selectors/session-tab.selectors';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-session-tabs',
  templateUrl: './session-tabs.component.html',
  styleUrls: ['./session-tabs.component.scss'],
})
export class SessionTabsComponent {

  @Input() sessionId!: number;

  readonly packetTabEnabled$: Observable<boolean> = this.store.pipe(select(SessionTabSelectors.selectPacketTabEnabled));
  readonly messageTabEnabled$: Observable<boolean> = this.store.pipe(select(SessionTabSelectors.selectMessageTabEnabled));

  constructor(private store: Store<any>) {
  }

}
