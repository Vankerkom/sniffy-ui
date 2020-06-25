import { Action, createReducer, on } from '@ngrx/store';
import { EntityAdapter, createEntityAdapter, EntityState } from '@ngrx/entity';

import * as DeviceActions from '../actions/device.actions';
import { Device } from '@app/session/models';

export const deviceFeatureKey = 'device';

export const adapter: EntityAdapter<Device> = createEntityAdapter<Device>({
  selectId: (device) => device.name,
  sortComparer: false,
});

export interface State extends EntityState<Device> {
  loaded: boolean;
}

export const initialState: State = adapter.getInitialState({
  loaded: false,
});

export const reducer = createReducer(
  initialState,

  on(DeviceActions.loadDevices, (state) => state),
  on(DeviceActions.loadDevicesSuccess, (state, { payload }) => ({
    ...adapter.upsertMany(payload, state),
    loaded: true,
  })),
  on(DeviceActions.loadDevice, (state, { payload }) =>
    adapter.upsertOne(payload, state)
  ),
  on(DeviceActions.loadDevicesFailure, (state, action) => state)
);
