import { createAction, props } from '@ngrx/store';

export const showSelectDeviceModal = createAction(
  '[Session Page] Show Select Devices'
);

export const selectDeviceConfirmed = createAction(
  '[Device Modal] Select Devices Confirmed',
  props<{ payload: any }>()
);

export const selectDeviceDismissed = createAction(
  '[Device Modal] Select Device Dismissed'
);
