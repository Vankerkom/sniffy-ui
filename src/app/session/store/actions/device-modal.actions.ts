import { createAction, props } from '@ngrx/store';
import { StartSniffingRequest } from '@app/core/models';

export const showSelectDeviceModal = createAction(
  '[Session Page] Show Select Devices'
);

export const selectDeviceConfirmed = createAction(
  '[Device Modal] Select Devices Confirmed',
  props<{ payload: StartSniffingRequest }>()
);

export const selectDeviceDismissed = createAction(
  '[Device Modal] Select Device Dismissed'
);
