import { createAction, props } from '@ngrx/store';
import { Message } from '@angular/compiler/src/i18n/i18n_ast';

export const loadMessages = createAction(
  '[Session Page] Load Messages'
);

export const loadMessagesSuccess = createAction(
  '[Message API] Load Messages Success',
  props<{ data: Array<Message> }>()
);

export const loadMessagesFailure = createAction(
  '[Message API] Load Messages Failure',
  props<{ error: any }>()
);

export const messageReceived = createAction(
  '[WebSocket Event] Message Received',
  props<{ payload: Message }>()
);
