import { createAction, props } from '@ngrx/store';
import { Session } from '@app/core/models';

export const loadSessions = createAction('[Session] Load Sessions');

export const loadSession = createAction(
  '[Session] Load Session',
  props<{ payload: Session }>()
);

export const loadSessionsSuccess = createAction(
  '[Session] Load Sessions Success',
  props<{ payload: Array<Session> }>()
);

export const sessionCreateSuccess = createAction(
  '[Session] Create Session Success',
  props<{ payload: Session }>()
);

export const sessionUpdateSuccess = createAction(
  '[Session] Update Session Success',
  props<{ payload: Session }>()
);

export const sessionDeleteSuccess = createAction(
  '[Session] Delete Session Success',
  props<{ sessionId: number }>()
);

export const loadSessionsFailure = createAction(
  '[Session] Load Sessions Failure',
  props<{ error: any }>()
);
