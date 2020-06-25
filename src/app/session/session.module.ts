import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SessionRoutingModule } from './session-routing.module';
import { SessionsPageComponent } from './containers/sessions-page/sessions-page.component';
import { SharedModule } from '@app/shared/shared.module';
import { SessionShellComponent } from './containers/session-shell/session-shell.component';
import { SessionTabNavComponent } from './components/session-tab-nav/session-tab-nav.component';
import { SessionPacketsListComponent } from './components/session-packets-list/session-packets-list.component';
import { SessionPageComponent } from './containers/session-page/session-page.component';


@NgModule({
  declarations: [
    SessionsPageComponent,
    SessionShellComponent,
    SessionTabNavComponent,
    SessionPacketsListComponent,
    SessionPageComponent,
  ],
  imports: [
    CommonModule,
    SessionRoutingModule,
    SharedModule,
  ]
})
export class SessionModule { }
