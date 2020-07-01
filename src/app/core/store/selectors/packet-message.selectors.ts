import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromPacketMessage from '../reducers/packet-message.reducer';

export const selectPacketMessageState = createFeatureSelector<fromPacketMessage.State>(
  fromPacketMessage.packetMessageFeatureKey
);
