import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, concatMap } from 'rxjs/operators';

import * as PacketMessageActions from '../actions/packet.actions';
import { MessagePacketService } from '@app/core/services/message-packet.service';

@Injectable()
export class PacketEffects {
  loadPacketMessages$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(PacketMessageActions.loadPackets),
      concatMap((action) =>
        this.messagePacketService.loadMessage(action.sessionId).pipe(
          map((payload) =>
            PacketMessageActions.loadPacketsSuccess({
              sessionId: action.sessionId,
              payload,
            })
          ),
          catchError((error) =>
            of(
              PacketMessageActions.loadPacketsFailure({
                sessionId: action.sessionId,
                error,
              })
            )
          )
        )
      )
    );
  });

  constructor(
    private actions$: Actions,
    private readonly messagePacketService: MessagePacketService
  ) {}
}
