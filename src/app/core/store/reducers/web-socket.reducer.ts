import { Action, createReducer, on } from '@ngrx/store';

import * as WebSocketActions from '../actions/web-socket.actions';

export const webSocketFeatureKey = 'webSocket';

export interface State {
  connected: boolean;
}

export const initialState: State = {
  connected: false,
};

export const reducer = createReducer(
  initialState,

  on(WebSocketActions.connected, (state) => ({ ...state, connected: true })),
  on(WebSocketActions.connect, (state) => ({ ...state, retry: true })),
  on(WebSocketActions.disconnect, (state, _) => ({
    ...state,
    connected: false,
  }))
);
