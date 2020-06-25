import { createAction, props } from '@ngrx/store';
import { Session } from '@app/core/models';

export const loadSessions = createAction(
  '[Session] Load Sessions'
);

export const loadSessionsSuccess = createAction(
  '[Session] Load Sessions Success',
props<{ payload: Array<Session> }>()
);

export const createSessionSuccess = createAction(
  '[Session] Create Session Success',
props<{ payload: Session }>()
);

export const updateSessionSuccess = createAction(
  '[Session] Update Session Success',
props<{ payload: Session }>()
);

export const deleteSessionSuccess = createAction(
  '[Session] Delete Session Success',
props<{ sessionId: number }>()
);

export const loadSessionsFailure = createAction(
  '[Session] Load Sessions Failure',
  props<{ error: any }>()
);
