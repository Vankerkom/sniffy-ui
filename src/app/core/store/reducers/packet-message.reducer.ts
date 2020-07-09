import { Action, createReducer, on } from '@ngrx/store';
import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';

import * as PacketMessageActions from '../actions/packet-message.actions';
import { Packet } from '@app/core/models';

export const packetMessageFeatureKey = 'messagePacket';

export const adapter: EntityAdapter<Packet> = createEntityAdapter<
  Packet
>({
  selectId: (messagePacket) => messagePacket.id,
  sortComparer: false,
});

export interface State extends EntityState<Packet> {
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
  on(PacketMessageActions.loadPacketMessagesFailure, (state, action) => state),
  on(PacketMessageActions.messagePacketReceived, (state, { payload }) =>
    adapter.upsertOne(payload, state)
  )
);
