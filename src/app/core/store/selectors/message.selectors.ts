import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromMessage from '../reducers/message.reducer';

export const selectMessageState = createFeatureSelector<fromMessage.State>(
  fromMessage.messageFeatureKey
);
