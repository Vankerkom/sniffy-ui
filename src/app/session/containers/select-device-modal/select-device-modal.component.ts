import { Component, OnInit, Inject } from '@angular/core';
import {
  MAT_DIALOG_DATA,
  MatDialog,
  MatDialogRef,
} from '@angular/material/dialog';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Device } from '@app/session/models';
import { DevicesSelectors } from '@app/session/store/selectors';
import { DeviceActions } from '@app/session/store/actions';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { StartSniffingRequest } from '@app/core/models';

@Component({
  selector: 'app-select-device-modal',
  templateUrl: './select-device-modal.component.html',
  styleUrls: ['./select-device-modal.component.scss'],
})
export class SelectDeviceModalComponent implements OnInit {
  loaded$: Observable<boolean>;
  devices$: Observable<Array<Device>>;

  selectDeviceForm: FormGroup;

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    private readonly store: Store<any>,
    private readonly fb: FormBuilder,
    private readonly dialogRef: MatDialogRef<SelectDeviceModalComponent>
  ) {
    this.selectDeviceForm = this.fb.group({
      device: this.fb.control(null, [Validators.required]),
    });
  }

  displayFn(device: Device): string {
    return (device && device.name) || '';
  }

  ngOnInit(): void {
    this.store.dispatch(DeviceActions.loadDevices());
    this.loaded$ = this.store.pipe(select(DevicesSelectors.selectLoaded));
    this.devices$ = this.store.pipe(select(DevicesSelectors.selectAll));
  }

  onSubmit(): void {
    if (this.selectDeviceForm.valid) {
      this.dialogRef.close({
        interfaceName: this.selectDeviceForm.value.device.name,
        protocolId: 0, // TODO
      } as StartSniffingRequest);
    }
  }
}
