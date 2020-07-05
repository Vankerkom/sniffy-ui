import { createAction, props } from '@ngrx/store';

export const selectMessagePacket = createAction(
  '[Session Page] Select Message Packet',
  props<{ sessionId: number, messageId: string }>()
);
