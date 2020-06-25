import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SessionsPageComponent } from './session/containers/sessions-page/sessions-page.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/sessions' },
  {
    path: 'sessions',
    loadChildren: () =>
      import('./session/session.module').then((m) => m.SessionModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
