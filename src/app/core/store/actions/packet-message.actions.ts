import { createAction, props } from '@ngrx/store';
import { Packet } from '@app/core/models/packet';

export const loadPacketMessages = createAction(
  '[Packet Message] Load Packet Messages',
  props<{ sessionId: number }>()
);

export const loadPacketMessagesSuccess = createAction(
  '[Packet Message] Load Packet Messages Success',
  props<{ sessionId: number; payload: Array<Packet> }>()
);

export const messagePacketReceived = createAction(
  '[Packet Message] Message Packet Received',
  props<{ payload: Packet }>()
);


export const loadPacketMessagesFailure = createAction(
  '[Packet Message] Load Packet Messages Failure',
  props<{ sessionId: number; error: any }>()
);
