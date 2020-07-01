import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, concatMap } from 'rxjs/operators';
import { EMPTY, of } from 'rxjs';

import * as PacketMessageActions from '../actions/packet-message.actions';
import { MessagePacketService } from '@app/core/services/message-packet.service';

@Injectable()
export class PacketMessageEffects {
  loadPacketMessages$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(PacketMessageActions.loadPacketMessages),
      concatMap((action) =>
        this.messagePacketService.loadMessage(action.sessionId).pipe(
          map((payload) =>
            PacketMessageActions.loadPacketMessagesSuccess({
              sessionId: action.sessionId,
              payload,
            })
          ),
          catchError((error) =>
            of(
              PacketMessageActions.loadPacketMessagesFailure({
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
