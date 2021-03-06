import { NgModule, Optional, SkipSelf } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { EffectsModule } from '@ngrx/effects';
import { StoreRouterConnectingModule } from '@ngrx/router-store';

import { environment } from '@environments/environment';
import { reducers, metaReducers } from './store/reducers';
import { WebSocketEffects } from './store/effects/web-socket.effects';
import { SessionEffects } from './store/effects/session.effects';
import { SnifferEffects } from './store/effects/sniffer.effects';
import * as fromPacketMessage from './store/reducers/packet.reducer';
import { PacketEffects } from './store/effects/packet.effects';
import * as fromMessage from './store/reducers/message.reducer';
import { MessageEffects } from './store/effects/message.effects';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    StoreModule.forRoot(reducers, {
      metaReducers,
      runtimeChecks: {
        strictStateImmutability: true,
        strictActionImmutability: true,
      },
    }),
    !environment.production ? StoreDevtoolsModule.instrument({ }) : [],
    EffectsModule.forRoot([WebSocketEffects, SessionEffects, SnifferEffects, PacketEffects]),
    StoreRouterConnectingModule.forRoot(),
    StoreModule.forFeature(fromMessage.messageFeatureKey, fromMessage.reducer),
    EffectsModule.forFeature([MessageEffects]),
  ],
})
export class CoreModule {
  constructor(@Optional() @SkipSelf() parentModule?: CoreModule) {
    if (parentModule) {
      throw new Error(
        'CoreModule is already loaded. Import it in the AppModule only'
      );
    }
  }
}
