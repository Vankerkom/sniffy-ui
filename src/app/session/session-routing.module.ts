import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SessionShellComponent } from './containers/session-shell/session-shell.component';
import { SessionsPageComponent } from './containers/sessions-page/sessions-page.component';
import { SessionPageComponent } from './containers/session-page/session-page.component';
import { LoadSessionsGuard } from './guards/load-sessions.guard';
import { LoadSessionGuard } from './guards/load-session.guard';
import { HexboxDebugPageComponent } from './containers/hexbox-debug-page/hexbox-debug-page.component';

const routes: Routes = [
  { path: 'hex-box', component: HexboxDebugPageComponent },
  {
    path: '',
    component: SessionShellComponent,
    canActivate: [LoadSessionsGuard],
    children: [
      { path: '', component: SessionsPageComponent },
      {
        path: ':sessionId',
        component: SessionPageComponent,
        canActivate: [LoadSessionGuard],
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SessionRoutingModule {}
