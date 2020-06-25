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


@NgModule({
  declarations: [
    SessionsPageComponent,
    SessionShellComponent,
    SessionTabNavComponent,
    SessionPacketsListComponent,
    SessionPageComponent,
    ActionBarComponent,
  ],
  imports: [
    CommonModule,
    SessionRoutingModule,
    SharedModule,
  ],
  providers: [
    LoadSessionsGuard,
    LoadSessionGuard,
  ],
})
export class SessionModule { }
