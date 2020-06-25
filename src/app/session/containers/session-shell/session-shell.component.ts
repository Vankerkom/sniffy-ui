import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';

import * as fromRoot from '@core/store/reducers';
import { SnifferActions } from '@core/store/actions';
import * as SnifferSelectors from '@app/core/store/selectors/sniffer.selectors';
import { Session } from '@app/core/models';
import { SessionSelectors } from '@app/core/store/selectors';

@Component({
  selector: 'app-session-shell',
  templateUrl: './session-shell.component.html',
  styleUrls: ['./session-shell.component.scss'],
})
export class SessionShellComponent implements OnInit {

  snifferActive$: Observable<boolean>;
  sessions$: Observable<Array<Session>>;

  constructor(private readonly store: Store<fromRoot.State>) {}

  ngOnInit(): void {
    this.snifferActive$ = this.store.pipe(select(SnifferSelectors.selectActive));
    this.sessions$ = this.store.pipe(select(SessionSelectors.selectAll));
  }

  start(): void {
    this.store.dispatch(SnifferActions.start());
  }

  stop(): void {
    this.store.dispatch(SnifferActions.stop());
  }
}
