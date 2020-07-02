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
import * as fromProtocol from './store/reducers/protocol.reducer';
import { ProtocolEffects } from './store/effects/protocol.effects';
import { HexboxDebugPageComponent } from './containers/hexbox-debug-page/hexbox-debug-page.component';
import { HexBoxComponent } from './components/hex-box/hex-box.component';
import { HexPipe } from './pipes/hex.pipe';
import { CharPipe } from './pipes/char.pipe';

@NgModule({
  declarations: [
    SessionsPageComponent,
    SessionShellComponent,
    SessionTabNavComponent,
    SessionPacketsListComponent,
    SessionPageComponent,
    ActionBarComponent,
    SelectDeviceModalComponent,
    HexBoxComponent,
    HexboxDebugPageComponent,
    HexPipe,
    CharPipe,
  ],
  imports: [
    CommonModule,
    SessionRoutingModule,
    SharedModule,
    ReactiveFormsModule,
    EffectsModule.forFeature([DeviceEffects, ProtocolEffects]),
    StoreModule.forFeature(fromDevice.deviceFeatureKey, fromDevice.reducer),
    StoreModule.forFeature(fromProtocol.protocolFeatureKey, fromProtocol.reducer),
  ],
  providers: [LoadSessionsGuard, LoadSessionGuard],
})
export class SessionModule {}
