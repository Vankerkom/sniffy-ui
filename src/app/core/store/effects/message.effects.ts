import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, concatMap } from 'rxjs/operators';
import { EMPTY, of } from 'rxjs';

import * as MessageActions from '../actions/message.actions';



@Injectable()
export class MessageEffects {

  loadMessages$ = createEffect(() => {
    return this.actions$.pipe( 

      ofType(MessageActions.loadMessages),
      concatMap(() =>
        /** An EMPTY observable only emits completion. Replace with your own observable API request */
        EMPTY.pipe(
          map(data => MessageActions.loadMessagesSuccess({ data })),
          catchError(error => of(MessageActions.loadMessagesFailure({ error }))))
      )
    );
  });



  constructor(private actions$: Actions) {}

}
