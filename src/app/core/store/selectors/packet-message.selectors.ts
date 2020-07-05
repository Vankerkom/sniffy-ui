import { createFeatureSelector, createSelector } from '@ngrx/store';

import * as fromPacketMessage from '../reducers/packet-message.reducer';
import * as sessionSelectors from './session.selectors';

export const selectPacketMessageState = createFeatureSelector<
  fromPacketMessage.State
>(fromPacketMessage.packetMessageFeatureKey);

export const {
  selectAll,
  selectEntities,
} = fromPacketMessage.adapter.getSelectors(selectPacketMessageState);

export const selectAllForActiveSession = createSelector(
  selectAll,
  sessionSelectors.selectSelectedSessionId,
  (entities, sessionId) => entities.filter(entity => entity.sessionId === +sessionId)
);
