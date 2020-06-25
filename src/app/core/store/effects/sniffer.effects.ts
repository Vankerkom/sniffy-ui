import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';

import {
  switchMap,
  catchError,
  map,
  withLatestFrom,
  filter,
  exhaustMap,
} from 'rxjs/operators';
import { of } from 'rxjs';

import * as SnifferSelectors from '../selectors/sniffer.selectors';
import * as SnifferActions from '../actions/sniffer.actions';
import * as WebSocketActions from '../actions/web-socket.actions';
import { SnifferService } from '@app/core/services/sniffer.service';
import { select, Store } from '@ngrx/store';

@Injectable()
export class SnifferEffects {
  loadSnifferState$ = createEffect(() =>
    this.actions$.pipe(
      ofType(SnifferActions.loadState),
      switchMap(() =>
        this.snifferService.getState().pipe(
          map((payload) => SnifferActions.loadStateSuccess({ payload })),
          catchError((error) => of(SnifferActions.loadStateFailure({ error })))
        )
      )
    )
  );

  loadSnifferStateOnBoot$ = createEffect(() =>
    this.actions$.pipe(
      ofType(WebSocketActions.connected),
      withLatestFrom(this.store.pipe(select(SnifferSelectors.selectLoaded))),
      filter((_, loaded) => !loaded),
      map((_) => SnifferActions.loadState())
    )
  );

  startSniffing$ = createEffect(() => this.actions$.pipe(
    ofType(SnifferActions.start),
    exhaustMap(() => this.snifferService.start().pipe(
      map(payload => SnifferActions.loadStateSuccess({ payload })),
      catchError(error => of(SnifferActions.startFailure({ error }))),
    )),
  ));

  stopSniffing$ = createEffect(() => this.actions$.pipe(
    ofType(SnifferActions.stop),
    exhaustMap(() => this.snifferService.stop().pipe(
      map(_ => SnifferActions.stopSuccess()),
      catchError(error => of(SnifferActions.stopFailure({ error }))),
    )),
  ));

  constructor(
    private store: Store<any>,
    private actions$: Actions,
    private readonly snifferService: SnifferService
  ) {}
}
