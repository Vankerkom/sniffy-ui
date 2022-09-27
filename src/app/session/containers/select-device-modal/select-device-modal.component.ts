import {Component, OnInit, Inject} from '@angular/core';
import {
  MAT_DIALOG_DATA,
  MatDialog,
  MatDialogRef,
} from '@angular/material/dialog';
import {Store, select} from '@ngrx/store';
import {Observable} from 'rxjs';
import {Device, Protocol} from '@app/session/models';
import {
  DevicesSelectors,
  ProtocolsSelectors,
} from '@app/session/store/selectors';
import {DeviceActions, ProtocolActions} from '@app/session/store/actions';
import {UntypedFormBuilder, UntypedFormGroup, Validators} from '@angular/forms';
import {StartSniffingRequest} from '@app/core/models';

@Component({
  selector: 'app-select-device-modal',
  templateUrl: './select-device-modal.component.html',
  styleUrls: ['./select-device-modal.component.scss'],
})
export class SelectDeviceModalComponent implements OnInit {

  readonly loadedDevices$: Observable<boolean> = this.store.select(DevicesSelectors.selectLoaded);
  readonly loadedProtocols$: Observable<boolean> = this.store.select(ProtocolsSelectors.selectLoaded);
  readonly devices$: Observable<Device[]> = this.store.select(DevicesSelectors.selectAll);
  readonly protocols$: Observable<Protocol[]> = this.store.select(ProtocolsSelectors.selectAll);

  selectDeviceForm: UntypedFormGroup;

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    private readonly store: Store<any>,
    private readonly fb: UntypedFormBuilder,
    private readonly dialogRef: MatDialogRef<SelectDeviceModalComponent>
  ) {
    this.selectDeviceForm = this.fb.group({
      device: this.fb.control(null, [Validators.required]),
      protocol: this.fb.control(null, [Validators.required]),
    });
  }

  displayFnDevices(device: Device): string {
    return (device && device.description) || (device && device.name) || '';
  }

  displayFnProtocols(protocol: Protocol): string {
    return (protocol && protocol.name) || '';
  }

  ngOnInit(): void {
    this.store.dispatch(DeviceActions.loadDevices());
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
