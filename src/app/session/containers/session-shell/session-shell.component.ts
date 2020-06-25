import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';

import * as fromRoot from '@core/store/reducers';
import { SnifferActions } from '@core/store/actions';
import * as SnifferSelectors from '@app/core/store/selectors/sniffer.selectors';

@Component({
  selector: 'app-session-shell',
  templateUrl: './session-shell.component.html',
  styleUrls: ['./session-shell.component.scss'],
})
export class SessionShellComponent implements OnInit {

  snifferActive$: Observable<boolean>;

  readonly navLinks = [
    { path: '/sessions', label: 'Sessions' },
    { path: '/sessions/1', label: 'Session 1' },
    { path: '/sessions/2', label: 'Session 2' },
    { path: '/sessions/3', label: 'Session 3' },
  ];

  constructor(private readonly store: Store<fromRoot.State>) {}

  ngOnInit(): void {
    this.snifferActive$ = this.store.pipe(select(SnifferSelectors.selectActive));
  }

  start(): void {
    this.store.dispatch(SnifferActions.start());
  }

  stop(): void {
    this.store.dispatch(SnifferActions.stop());
  }
}
