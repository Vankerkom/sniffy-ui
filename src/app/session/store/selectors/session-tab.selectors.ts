import { createSelector } from '@ngrx/store';
import * as ProtocolSelectors from './protocol.selectors';

export const selectPacketTabEnabled = createSelector(
  ProtocolSelectors.selectSessionProtocol,
  protocol => (protocol && protocol.packetViewEnabled) || false,
);

export const selectMessageTabEnabled = createSelector(
  ProtocolSelectors.selectSessionProtocol,
  protocol => (protocol && protocol.messageViewEnabled) || false,
);
