import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';

import * as fromRoot from '@core/store/reducers';
import { SnifferActions } from '@core/store/actions';
import * as SnifferSelectors from '@app/core/store/selectors/sniffer.selectors';
import { Session } from '@app/core/models';
import { SessionSelectors } from '@app/core/store/selectors';
import { ProtocolActions } from '@app/session/store/actions';

@Component({
  selector: 'app-session-shell',
  templateUrl: './session-shell.component.html',
  styleUrls: ['./session-shell.component.scss'],
})
export class SessionShellComponent implements OnInit {

  readonly snifferActive$: Observable<boolean>  = this.store.pipe(select(SnifferSelectors.selectActive));
  readonly sessions$: Observable<Session[]> = this.store.pipe(select(SessionSelectors.selectAll));

  constructor(private readonly store: Store<fromRoot.State>) {}

  ngOnInit(): void {
    this.store.dispatch(ProtocolActions.loadProtocols());
  }

  start(): void {
    this.store.dispatch(SnifferActions.start());
  }

  stop(): void {
    this.store.dispatch(SnifferActions.stop());
  }
}
