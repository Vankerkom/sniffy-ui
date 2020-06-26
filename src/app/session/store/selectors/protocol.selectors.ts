import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromProtocol from '../reducers/protocol.reducer';

export const selectProtocolState = createFeatureSelector<fromProtocol.State>(
  fromProtocol.protocolFeatureKey
);

export const selectLoaded = createSelector(
  selectProtocolState,
  (state) => state.loaded
);

export const { selectAll } = fromProtocol.adapter.getSelectors(
  selectProtocolState
);
