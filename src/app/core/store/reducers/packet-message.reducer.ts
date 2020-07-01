import { Action, createReducer, on } from '@ngrx/store';
import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';

import * as PacketMessageActions from '../actions/packet-message.actions';
import { MessagePacket } from '@app/core/models';

export const packetMessageFeatureKey = 'messagePacket';

export function sortByDate(a: MessagePacket, b: MessagePacket): number {
  return a.timestamp.getTime() - b.timestamp.getTime();
}

export const adapter: EntityAdapter<MessagePacket> = createEntityAdapter<
  MessagePacket
>({
  selectId: (messagePacket) => messagePacket.id,
  sortComparer: sortByDate,
});

export interface State extends EntityState<MessagePacket> {
  loadedSessions: Array<number>;
}

export const initialState = adapter.getInitialState({
  loadedSessions: [],
});

export const reducer = createReducer(
  initialState,

  on(PacketMessageActions.loadPacketMessages, (state, action) => state),
  on(
    PacketMessageActions.loadPacketMessagesSuccess,
    (state, { sessionId, payload }) => ({
      ...adapter.upsertMany(payload, state),
      loadedSessions: [...state.loadedSessions, sessionId],
    })
  ),
  on(PacketMessageActions.loadPacketMessagesFailure, (state, action) => state)
);
