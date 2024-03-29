import {createFeatureSelector, createSelector} from '@ngrx/store';

import * as fromPacketMessage from '../reducers/packet.reducer';
import * as sessionSelectors from './session.selectors';

export const selectPacketMessageState = createFeatureSelector<fromPacketMessage.State>(fromPacketMessage.packetFeatureKey);

export const {
  selectAll,
  selectEntities,
} = fromPacketMessage.adapter.getSelectors(selectPacketMessageState);

export const selectAllForActiveSession = createSelector(
  selectAll,
  sessionSelectors.selectSelectedSessionId,
  (entities, sessionId) => entities.filter((entity) => sessionId && entity.sessionId === +sessionId)
);

export const selectSelectedMessage = createSelector(
  selectEntities,
  sessionSelectors.selectSelectedMessageId,
  (entities, selectedMessageId) => (selectedMessageId && entities[selectedMessageId]) ?? null
);

export const selectSelectedMessageArrayBuffer = createSelector(
  selectSelectedMessage,
  (message) => message
    ? Uint8Array.from(atob(message.payload), (c) => c.charCodeAt(0)).buffer
    : new ArrayBuffer(0)
);
