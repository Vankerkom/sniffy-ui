import { Action, createReducer, on } from '@ngrx/store';
import * as ProtocolActions from '../actions/protocol.actions';
import { Protocol } from '@app/session/models';
import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';

export const protocolFeatureKey = 'protocol';

export const adapter: EntityAdapter<Protocol> = createEntityAdapter<Protocol>({
  selectId: (protocol) => protocol.id,
  sortComparer: false,
});

export interface State extends EntityState<Protocol> {
  loaded: boolean;
}

export const initialState: State = adapter.getInitialState({
  loaded: false,
});

export const reducer = createReducer(
  initialState,

  on(ProtocolActions.loadProtocols, (state) => state),
  on(ProtocolActions.loadProtocolsSuccess, (state, { payload }) => ({
    ...adapter.upsertMany(payload, state),
    loaded: true,
  })),
  on(ProtocolActions.loadProtocolsFailure, (state, action) => state)
);
