import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';

import { map, switchMap, catchError, filter, delay } from 'rxjs/operators';
import { of } from 'rxjs';

import * as WebSocketActions from '../actions/web-socket.actions';
import { WebSocketEventsService } from '@app/core/services/web-socket-events.service';

@Injectable()
export class WebSocketEffects {

  connected$ = createEffect(
    () => this.webSocketEventsService.opened$.pipe(
      map(_ => WebSocketActions.connected()),
    )
  );

  disconnected$ = createEffect(() => this.actions$.pipe(
    ofType(WebSocketActions.disconnect),
    map(_ => WebSocketActions.disconnected())
  ));

  connectionClosed$ = createEffect(
    () => this.webSocketEventsService.closed$.pipe(
      map(_ => WebSocketActions.disconnect({ retry: true })),
    )
  );

  reconnect$ = createEffect(
    () => this.actions$.pipe(
      ofType(WebSocketActions.disconnect),
      filter(action => action.retry),
      switchMap(_ => of(WebSocketActions.connect()).pipe(delay(5000)))
    )
  );

  /*connectOnLogin$ = createEffect(
    () => this.authService.loggedIn$.pipe(
      distinctUntilChanged(),
      map(loggedIn => loggedIn
        ? WebSocketActions.connect()
        : WebSocketActions.disconnect({ retry: false })
      )
    )
  );*/

  connectAndReceive$ = createEffect(
    () => this.actions$.pipe(
      ofType(WebSocketActions.connect),
      switchMap(_ => this.webSocketEventsService.connect().pipe(
        map(message => this.webSocketEventsService.mapMessage(message)),
        catchError(error => of(WebSocketActions.disconnect({ retry: true, error })))
      ))
    )
  );

  constructor(
    private readonly actions$: Actions,
    private readonly webSocketEventsService: WebSocketEventsService,
  ) { }

}
