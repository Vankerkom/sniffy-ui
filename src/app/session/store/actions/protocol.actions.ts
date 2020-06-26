import { createAction, props } from '@ngrx/store';
import { Protocol } from '@app/session/models';

export const loadProtocols = createAction(
  '[Protocol] Load Protocols'
);

export const loadProtocolsSuccess = createAction(
  '[Protocol] Load Protocols Success',
  props<{ payload: Array<Protocol> }>()
);

export const loadProtocolsFailure = createAction(
  '[Protocol] Load Protocols Failure',
  props<{ error: any }>()
);
