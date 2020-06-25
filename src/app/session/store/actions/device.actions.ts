import { createAction, props } from '@ngrx/store';
import { Device } from '@app/session/models';

export const loadDevices = createAction(
  '[Device] Load Devices'
);

export const loadDevicesSuccess = createAction(
  '[Device] Load Devices Success',
  props<{ payload: Array<Device> }>()
);

export const loadDevice = createAction(
  '[Device] Load Device Success',
  props<{ payload: Device }>()
);


export const loadDevicesFailure = createAction(
  '[Device] Load Devices Failure',
  props<{ error: any }>()
);
