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
  (entities, sessionId) =>
    entities.filter((entity) => entity.sessionId === +sessionId)
);

export const selectSelectedMessage = createSelector(
  selectEntities,
  sessionSelectors.selectSelectedMessageId,
  (entitites, selectedMessageId) =>
    selectedMessageId && entitites[selectedMessageId]
);

export const selectSelectedMessageArrayBuffer = createSelector(
  selectSelectedMessage,
  (message) =>
    message
      ? Uint8Array.from(atob(message.payload), (c) => c.charCodeAt(0)).buffer
      : new ArrayBuffer(0)
);
