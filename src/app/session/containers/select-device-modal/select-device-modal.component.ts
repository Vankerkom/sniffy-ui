import { Component, OnInit, Inject } from '@angular/core';
import {
  MAT_DIALOG_DATA,
  MatDialog,
  MatDialogRef,
} from '@angular/material/dialog';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Device, Protocol } from '@app/session/models';
import {
  DevicesSelectors,
  ProtocolsSelectors,
} from '@app/session/store/selectors';
import { DeviceActions, ProtocolActions } from '@app/session/store/actions';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { StartSniffingRequest } from '@app/core/models';

@Component({
  selector: 'app-select-device-modal',
  templateUrl: './select-device-modal.component.html',
  styleUrls: ['./select-device-modal.component.scss'],
})
export class SelectDeviceModalComponent implements OnInit {
  loadedDevices$: Observable<boolean>;
  loadedProtocols$: Observable<boolean>;

  devices$: Observable<Array<Device>>;
  protocols$: Observable<Array<Protocol>>;

  selectDeviceForm: FormGroup;

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    private readonly store: Store<any>,
    private readonly fb: FormBuilder,
    private readonly dialogRef: MatDialogRef<SelectDeviceModalComponent>
  ) {
    this.selectDeviceForm = this.fb.group({
      device: this.fb.control(null, [Validators.required]),
      protocol: this.fb.control(null, [Validators.required]),
    });
  }

  displayFnDevices(device: Device): string {
    return (device && device.description) || (device && device.name)  || '';
  }

  displayFnProtocols(protocol: Protocol): string {
    return (protocol && protocol.name) || '';
  }

  ngOnInit(): void {
    this.store.dispatch(DeviceActions.loadDevices());

    this.loadedDevices$ = this.store.pipe(
      select(DevicesSelectors.selectLoaded)
    );
    this.loadedProtocols$ = this.store.pipe(
      select(ProtocolsSelectors.selectLoaded)
    );
    this.devices$ = this.store.pipe(select(DevicesSelectors.selectAll));
    this.protocols$ = this.store.pipe(select(ProtocolsSelectors.selectAll));
  }

  onSubmit(): void {
    if (this.selectDeviceForm.valid) {
      this.dialogRef.close({
        interfaceName: this.selectDeviceForm.value.device.name,
        protocolId: this.selectDeviceForm.value.protocol.id,
      } as StartSniffingRequest);
    }
  }
}
