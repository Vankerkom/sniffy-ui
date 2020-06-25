import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer
} from '@ngrx/store';

import * as fromWebSocket from './web-socket.reducer';

import { environment } from '@environments/environment';


export interface State {
  webSocket: fromWebSocket.State,
}

export const reducers: ActionReducerMap<State> = {
  webSocket: fromWebSocket.reducer,
};


export const metaReducers: MetaReducer<State>[] = !environment.production ? [] : [];
