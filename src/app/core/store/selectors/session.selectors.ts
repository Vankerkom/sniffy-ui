import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromSession from '../reducers/session.reducer';

export const selectSessionState = createFeatureSelector<fromSession.State>(
  fromSession.sessionFeatureKey
);
