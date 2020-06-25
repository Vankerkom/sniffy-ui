import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, concatMap, switchMap } from 'rxjs/operators';
import { EMPTY, of } from 'rxjs';

import * as DeviceActions from '../actions/device.actions';
import { DevicesService } from '@app/session/services/devices.service';
import { SnifferActions } from '@app/core/store/actions';
import { MatDialog } from '@angular/material/dialog';
import { SelectDeviceModalComponent } from '@app/session/containers/select-device-modal/select-device-modal.component';
import { DeviceModalActions } from '../actions';
import { SelectDeviceDialogResults } from '@app/session/models';

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

  showDeviceSelectDialog$ = createEffect(() =>
    this.actions$.pipe(
      ofType(SnifferActions.start),
      switchMap(() =>
        this.matDialog
          .open<SelectDeviceModalComponent, any, SelectDeviceDialogResults>(
            SelectDeviceModalComponent
          )
          .afterClosed()
          .pipe(
            map((payload) =>
              payload
                ? DeviceModalActions.selectDeviceConfirmed({ payload })
                : DeviceModalActions.selectDeviceDismissed()
            )
          )
      )
    )
  );

  constructor(
    private readonly actions$: Actions,
    private readonly devicesService: DevicesService,
    private readonly matDialog: MatDialog
  ) {}
}
