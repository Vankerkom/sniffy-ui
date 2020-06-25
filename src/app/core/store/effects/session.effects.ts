import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, concatMap } from 'rxjs/operators';
import { of } from 'rxjs';

import * as SessionActions from '../actions/session.actions';
import { SessionsService } from '@app/core/services/sessions.service';

@Injectable()
export class SessionEffects {
  loadSessions$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(SessionActions.loadSessions),
      concatMap(() =>
        this.sessionService.loadSessions().pipe(
          map((payload) => SessionActions.loadSessionsSuccess({ payload })),
          catchError((error) =>
            of(SessionActions.loadSessionsFailure({ error }))
          )
        )
      )
    );
  });

  constructor(
    private actions$: Actions,
    private readonly sessionService: SessionsService
  ) {}
}
