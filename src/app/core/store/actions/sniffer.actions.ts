import { createAction, props } from '@ngrx/store';
import { SnifferStateChangedEvent } from '@app/core/events';

export const loadState = createAction('[Sniffer Effect] Load Sniffer State');

export const loadStateSuccess = createAction(
  '[WebSocket Event] Load Sniffer State Success',
  props<{ payload: SnifferStateChangedEvent }>()
);

export const loadStateFailure = createAction(
  '[WebSocket Event] Load Sniffer State Failure',
  props<{ error: any }>()
);

export const start = createAction('[Action Bar] Start Sniffing');

export const startFailure = createAction(
  '[Action Bar] Start Sniffing Failure',
  props<{ error: any }>()
);

export const stop = createAction('[Action Bar] Stop Sniffing');

export const stopSuccess = createAction('[Action Bar] Stop Sniffing Success');

export const stopFailure = createAction(
  '[Action Bar] Stop Sniffing Failure',
  props<{ error: any }>()
);

export const pause = createAction('[Action Bar] Pause Sniffing');

export const pauseFailure = createAction(
  '[Action Bar] Pause Sniffing Failure',
  props<{ error: any }>()
);

export const reset = createAction('[Action Bar] Reset Sniffing');
