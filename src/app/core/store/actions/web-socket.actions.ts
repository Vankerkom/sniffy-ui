import { createAction, props, union } from '@ngrx/store';

export const connect = createAction('[WebSocket Effect] Connect');

export const disconnect = createAction(
  '[WebSocket Effect] Disconnect',
  props<{ retry: boolean, error?: any }>()
);

export const connected = createAction('[WebSocket] Connected');
export const disconnected = createAction('[WebSocket] Disconnected');

export const unknownMessageReceived = createAction(
  '[WebSocket] Unknown Message Received',
  props<{ id: number, payload: any | null }>()
);


const all = union({
  connect,
  disconnect,
  connected,
  disconnected,
  unknownMessageReceived,
});

export type WebSocketActionsUnion = typeof all;


