import {createReducer, on} from '@ngrx/store';
import {createEntityAdapter, EntityState} from '@ngrx/entity';

import * as PacketActions from '../actions/packet.actions';
import {Packet} from '@app/core/models';

export const packetFeatureKey = 'packets';

export const adapter = createEntityAdapter<Packet>({
  selectId: packet => packet.id,
  sortComparer: false,
});

export interface State extends EntityState<Packet> {
  loadedSessions: number[];
}

export const initialState: State = adapter.getInitialState({
  loadedSessions: []
});

export const reducer = createReducer(
  initialState,

  on(PacketActions.loadPackets, (state, action) => state),
  on(PacketActions.loadPacketsSuccess,
    (state, {sessionId, payload}) => adapter.upsertMany(payload, Object.assign({}, state, {
      loadedSessions: [...state.loadedSessions, sessionId]
    }))
  ),
  on(PacketActions.loadPacketsFailure, (state, action) => state),
  on(PacketActions.packetReceived, (state, {payload}) => adapter.upsertOne(payload, state))
);
