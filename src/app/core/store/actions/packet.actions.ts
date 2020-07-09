import { createAction, props } from '@ngrx/store';
import { Packet } from '@app/core/models/packet';

export const loadPackets = createAction(
  '[Session Page] Load Packets',
  props<{ sessionId: number }>()
);

export const loadPacketsSuccess = createAction(
  '[Packets API] Load Packets Success',
  props<{ sessionId: number; payload: Array<Packet> }>()
);

export const loadPacketsFailure = createAction(
  '[Packets API] Load Packets Failure',
  props<{ sessionId: number; error: any }>()
);

export const packetReceived = createAction(
  '[WebSocket Event] Message Packet Received',
  props<{ payload: Packet }>()
);
