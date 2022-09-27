import {createAction, props} from '@ngrx/store';
import {Message} from '@app/core/models';

export const loadMessages = createAction(
  '[Session Page] Load Messages'
);

export const loadMessagesSuccess = createAction(
  '[Message API] Load Messagess Success',
  props<{ data: Message[] }>()
);

export const loadMessagesFailure = createAction(
  '[Message API] Load Messages Failure',
  props<{ error: Error }>()
);

export const messageReceived = createAction(
  '[WebSocket Event] Message Received',
  props<{ payload: Message }>()
);
