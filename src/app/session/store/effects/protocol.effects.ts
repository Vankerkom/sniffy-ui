import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, concatMap } from 'rxjs/operators';
import { EMPTY, of } from 'rxjs';

import * as ProtocolActions from '../actions/protocol.actions';
import { ProtocolService } from '@app/session/services/protocol.service';



@Injectable()
export class ProtocolEffects {

  loadProtocols$ = createEffect(() => {
    return this.actions$.pipe(

      ofType(ProtocolActions.loadProtocols),
      concatMap(() => this.protocolService.getAll().pipe(
          map(payload => ProtocolActions.loadProtocolsSuccess({ payload })),
          catchError(error => of(ProtocolActions.loadProtocolsFailure({ error }))))
      )
    );
  });



  constructor(
    private actions$: Actions,
    private readonly protocolService: ProtocolService,
    ) {}

}
