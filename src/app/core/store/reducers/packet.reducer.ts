import { Action, createReducer, on } from '@ngrx/store';
import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';

import * as PacketActions from '../actions/packet.actions';
import { Packet } from '@app/core/models';

export const packetFeatureKey = 'packets';

export const adapter: EntityAdapter<Packet> = createEntityAdapter<
  Packet
>({
  selectId: (packet) => packet.id,
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

  on(PacketActions.loadPackets, (state, action) => state),
  on(
    PacketActions.loadPacketsSuccess,
    (state, { sessionId, payload }) => ({
      ...adapter.upsertMany(payload, state),
      loadedSessions: [...state.loadedSessions, sessionId],
    })
  ),
  on(PacketActions.loadPacketsFailure, (state, action) => state),
  on(PacketActions.packetReceived, (state, { payload }) =>
    adapter.upsertOne(payload, state)
  )
);
