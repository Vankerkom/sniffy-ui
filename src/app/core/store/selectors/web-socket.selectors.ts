import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromWebSocket from '../reducers/web-socket.reducer';

export const selectWebSocketState = createFeatureSelector<fromWebSocket.State>(
  fromWebSocket.webSocketFeatureKey
);

export const selectConnected = createSelector(
  selectWebSocketState,
  state => state.connected
);
