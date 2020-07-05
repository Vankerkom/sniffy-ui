import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer,
} from '@ngrx/store';

import { environment } from '@environments/environment';
import * as fromRouter from '@ngrx/router-store';
import * as fromWebSocket from './web-socket.reducer';
import * as fromSession from './session.reducer';
import * as fromSniffer from './sniffer.reducer';

export interface State {
  router: fromRouter.RouterReducerState<any>;
  [fromWebSocket.webSocketFeatureKey]: fromWebSocket.State;
  [fromSession.sessionFeatureKey]: fromSession.State;
  [fromSniffer.snifferFeatureKey]: fromSniffer.State;
}

export const reducers: ActionReducerMap<State> = {
  router: fromRouter.routerReducer,
  [fromWebSocket.webSocketFeatureKey]: fromWebSocket.reducer,
  [fromSession.sessionFeatureKey]: fromSession.reducer,
  [fromSniffer.snifferFeatureKey]: fromSniffer.reducer,
};

export const metaReducers: MetaReducer<State>[] = !environment.production
  ? []
  : [];
