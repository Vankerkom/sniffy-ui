import { createSelector } from '@ngrx/store';
import * as ProtocolSelectors from './protocol.selectors';

export const selectPacketTabEnabled = createSelector(
  ProtocolSelectors.selectSessionProtocol,
  protocol => protocol.packetViewEnabled,
);

export const selectMessageTabEnabled = createSelector(
  ProtocolSelectors.selectSessionProtocol,
  protocol => protocol.messageViewEnabled,
);
