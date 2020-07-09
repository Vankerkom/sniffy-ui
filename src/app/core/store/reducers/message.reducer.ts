import { Action, createReducer, on } from '@ngrx/store';
import { EntityAdapter, EntityState, createEntityAdapter } from '@ngrx/entity';

import * as MessageActions from '../actions/message.actions';
import { Message } from '@app/core/models';

export const messageFeatureKey = 'message';

export const adapter: EntityAdapter<Message> = createEntityAdapter<
  Message
>({
  selectId: (message) => message.id,
  sortComparer: false,
});

export interface State extends EntityState<Message> {
  loadedSessions: Array<number>;
}

export const initialState: State = adapter.getInitialState({
  loadedSessions: [],
});


export const reducer = createReducer(
  initialState,

  on(MessageActions.loadMessages, state => state),
  on(MessageActions.loadMessagesSuccess, (state, action) => state),
  on(MessageActions.loadMessagesFailure, (state, action) => state),

);

