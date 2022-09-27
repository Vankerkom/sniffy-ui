import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromSession from '../reducers/session.reducer';
import { selectRouteParam } from './router.selectors';

export const selectSessionState = createFeatureSelector<fromSession.State>(
  fromSession.sessionFeatureKey
);

export const { selectAll, selectEntities } = fromSession.adapter.getSelectors(
  selectSessionState
);

export const selectSelectedSessionId = selectRouteParam('sessionId');

export const selectLoaded = createSelector(
  selectSessionState,
  (state) => state.loaded
);

export const selectSelectedSession = createSelector(
  selectEntities,
  selectSelectedSessionId,
  (entities, selectedSessionId) => (selectedSessionId && entities[selectedSessionId]) || null
);

export const selectSelectedMessageId = createSelector(
  selectSelectedSession,
  (session) => session?.selectedMessageId ?? null
);

export const selectSelectedSessionProtocolId = createSelector(
  selectSelectedSession,
  session => session && session.protocolId
);
