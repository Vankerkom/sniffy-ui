import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, concatMap } from 'rxjs/operators';
import { EMPTY, of } from 'rxjs';

import * as DeviceActions from '../actions/device.actions';
import { DevicesService } from '@app/session/services/devices.service';

@Injectable()
export class DeviceEffects {
  loadDevices$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(DeviceActions.loadDevices),
      concatMap(() =>
        this.devicesService.getAll().pipe(
          map((payload) => DeviceActions.loadDevicesSuccess({ payload })),
          catchError((error) => of(DeviceActions.loadDevicesFailure({ error })))
        )
      )
    );
  });

  constructor(
    private readonly actions$: Actions,
    private readonly devicesService: DevicesService
  ) {}
}
