import { createAction, props } from '@ngrx/store';
import { MessagePacket } from '@app/core/models/message-packet';

export const loadPacketMessages = createAction(
  '[Packet Message] Load Packet Messages',
  props<{ sessionId: number }>()
);

export const loadPacketMessagesSuccess = createAction(
  '[Packet Message] Load Packet Messages Success',
  props<{ sessionId: number; payload: Array<MessagePacket> }>()
);

export const loadPacketMessagesFailure = createAction(
  '[Packet Message] Load Packet Messages Failure',
  props<{ sessionId: number; error: any }>()
);
