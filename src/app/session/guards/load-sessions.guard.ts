import { Injectable } from '@angular/core';
import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
} from '@angular/router';
import { Observable, of } from 'rxjs';
import { Store, select } from '@ngrx/store';

import * as fromRoot from '@core/store/reducers';
import { SessionSelectors } from '@app/core/store/selectors';
import { take, tap, filter } from 'rxjs/operators';
import { SessionActions } from '@app/core/store/actions';

@Injectable()
export class LoadSessionsGuard implements CanActivate {
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> {
    return this.store.pipe(
      select(SessionSelectors.selectLoaded),
      tap((loaded) =>
        !loaded ? this.store.dispatch(SessionActions.loadSessions()) : {}
      ),
      filter((loaded) => !!loaded),
      take(1),
    );
  }

  constructor(private readonly store: Store<fromRoot.State>) {}
}
