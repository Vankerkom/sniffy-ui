import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromProtocol from '../reducers/protocol.reducer';
import * as SessionSelectors from '@app/core/store/selectors/session.selectors';

export const selectProtocolState = createFeatureSelector<fromProtocol.State>(
  fromProtocol.protocolFeatureKey
);

export const selectLoaded = createSelector(
  selectProtocolState,
  (state) => state.loaded
);

export const { selectAll, selectEntities } = fromProtocol.adapter.getSelectors(
  selectProtocolState
);

export const selectSessionProtocol = createSelector(
  SessionSelectors.selectSelectedSessionProtocolId,
  selectEntities,
  (protocolId, entities) => protocolId && entities[protocolId]
);
