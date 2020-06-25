import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromSniffer from '../reducers/sniffer.reducer';

export const selectSnifferState = createFeatureSelector<fromSniffer.State>(
  fromSniffer.snifferFeatureKey
);

export const selectLoaded = createSelector(
  selectSnifferState,
  state => state.loaded,
);
