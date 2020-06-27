import { Action, createReducer, on } from '@ngrx/store';
import { createEntityAdapter, EntityAdapter, EntityState } from '@ngrx/entity';
import { Session } from '@app/core/models';

import * as SessionActions from '../actions/session.actions';
import { state } from '@angular/animations';

export const sessionFeatureKey = 'session';

export const adapter: EntityAdapter<Session> = createEntityAdapter<Session>({
  selectId: (session) => session.id,
  sortComparer: false,
});

export interface State extends EntityState<Session> {
  loading: boolean;
  loaded: boolean;
}

export const initialState: State = adapter.getInitialState({
  loading: false,
  loaded: false,
});

export const reducer = createReducer(
  initialState,

  on(SessionActions.loadSessions, (state) => ({ ...state, loading: true })),
  on(SessionActions.loadSessionsSuccess, (state, { payload: channels }) => ({
    ...adapter.addMany(channels, state),
    loaded: true,
  })),
  on(SessionActions.loadSession, SessionActions.sessionCreateSuccess, (state, { payload }) =>
    adapter.upsertOne(payload, state)
  ),
  on(SessionActions.loadSessionsFailure, (state, _) => ({
    ...state,
    loading: false,
  }))
);
