import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SessionRoutingModule } from './session-routing.module';
import { SessionsPageComponent } from './containers/sessions-page/sessions-page.component';
import { SharedModule } from '@app/shared/shared.module';
import { SessionShellComponent } from './containers/session-shell/session-shell.component';
import { SessionTabNavComponent } from './components/session-tab-nav/session-tab-nav.component';
import { SessionPacketsListComponent } from './components/session-packets-list/session-packets-list.component';
import { SessionPageComponent } from './containers/session-page/session-page.component';
import { ActionBarComponent } from './components/action-bar/action-bar.component';
import { LoadSessionsGuard } from './guards/load-sessions.guard';
import { LoadSessionGuard } from './guards/load-session.guard';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import * as fromDevice from './store/reducers/device.reducer';
import { DeviceEffects } from './store/effects/device.effects';
import { SelectDeviceModalComponent } from './containers/select-device-modal/select-device-modal.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    SessionsPageComponent,
    SessionShellComponent,
    SessionTabNavComponent,
    SessionPacketsListComponent,
    SessionPageComponent,
    ActionBarComponent,
    SelectDeviceModalComponent,
  ],
  imports: [
    CommonModule,
    SessionRoutingModule,
    SharedModule,
    ReactiveFormsModule,
    EffectsModule.forFeature([DeviceEffects]),
    StoreModule.forFeature(fromDevice.deviceFeatureKey, fromDevice.reducer),
  ],
  providers: [LoadSessionsGuard, LoadSessionGuard],
})
export class SessionModule {}
