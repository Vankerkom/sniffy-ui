import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer
} from '@ngrx/store';

import * as fromWebSocket from './web-socket.reducer';

import { environment } from '@environments/environment';
import * as fromSession from './session.reducer';
import * as fromSniffer from './sniffer.reducer';


export interface State {
  [fromWebSocket.webSocketFeatureKey]: fromWebSocket.State,
  [fromSession.sessionFeatureKey]: fromSession.State;
  [fromSniffer.snifferFeatureKey]: fromSniffer.State;
}

export const reducers: ActionReducerMap<State> = {
  [fromWebSocket.webSocketFeatureKey]: fromWebSocket.reducer,
  [fromSession.sessionFeatureKey]: fromSession.reducer,
  [fromSniffer.snifferFeatureKey]: fromSniffer.reducer,
};


export const metaReducers: MetaReducer<State>[] = !environment.production ? [] : [];
