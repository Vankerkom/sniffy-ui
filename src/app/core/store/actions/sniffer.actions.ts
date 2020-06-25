import { createAction, props } from '@ngrx/store';
import { SnifferStateChangedEvent } from '@app/core/events';

export const setActive = createAction(
  '[WebSocket Event] Sniffer State Changed Event',
  props<{ payload: SnifferStateChangedEvent }>()
);
