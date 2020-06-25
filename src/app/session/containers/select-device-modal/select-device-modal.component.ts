import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Device } from '@app/session/models';
import { DevicesSelectors } from '@app/session/store/selectors';
import { DeviceActions } from '@app/session/store/actions';

@Component({
  selector: 'app-select-device-modal',
  templateUrl: './select-device-modal.component.html',
  styleUrls: ['./select-device-modal.component.scss'],
})
export class SelectDeviceModalComponent implements OnInit {
  loaded$: Observable<boolean>;
  devices$: Observable<Array<Device>>;

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    private readonly store: Store<any>
  ) {}

  ngOnInit(): void {
    this.store.dispatch(DeviceActions.loadDevices());
    this.loaded$ = this.store.pipe(select(DevicesSelectors.selectLoaded));
    this.devices$ = this.store.pipe(select(DevicesSelectors.selectAll));
  }
}
