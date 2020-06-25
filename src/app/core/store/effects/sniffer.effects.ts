import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';

import { switchMap, catchError, map } from 'rxjs/operators';
import { of } from 'rxjs';

import * as SnifferActions from '../actions/sniffer.actions';
import { SnifferService } from '@app/core/services/sniffer.service';

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

  loadSnifferStateOnBoot$ = createEffect(() => of(SnifferActions.loadState()));

  constructor(
    private actions$: Actions,
    private readonly snifferService: SnifferService
  ) {}
}
