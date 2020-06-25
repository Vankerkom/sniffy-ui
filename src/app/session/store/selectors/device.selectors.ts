import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromDevice from '../reducers/device.reducer';

export const selectDeviceState = createFeatureSelector<fromDevice.State>(
  fromDevice.deviceFeatureKey
);

export const { selectAll } = fromDevice.adapter.getSelectors(
  selectDeviceState
);
