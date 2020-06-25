import { Injectable } from '@angular/core';
import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { Observable, of } from 'rxjs';
import { Store, select } from '@ngrx/store';

import * as fromRoot from '@core/store/reducers';
import { SessionSelectors } from '@app/core/store/selectors';
import { take, tap, filter, map, switchMap, catchError } from 'rxjs/operators';
import { SessionActions } from '@app/core/store/actions';
import { SessionsService } from '@app/core/services/sessions.service';

@Injectable()
export class LoadSessionGuard implements CanActivate {
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> {
    const sessionId = route.params.sessionId | 0;
    return this.waitForCollectionLoad().pipe(
      switchMap(() => this.exists(sessionId))
    );
  }

  private exists(sessionId: number): Observable<boolean> {
    return this.existsInStore(sessionId).pipe(
      switchMap((inStore) =>
        inStore ? of(inStore) : this.existsInApi(sessionId)
      )
    );
  }

  private waitForCollectionLoad(): Observable<boolean> {
    return this.store.pipe(
      select(SessionSelectors.selectLoaded),
      filter((loaded) => loaded),
      take(1)
    );
  }

  private existsInStore(sessionId: number): Observable<boolean> {
    return this.store.pipe(
      select(SessionSelectors.selectEntities),
      map((entities) => !!entities[sessionId]),
      take(1)
    );
  }

  private existsInApi(sessionId: number): Observable<boolean> {
    return this.sessionService.loadById(sessionId).pipe(
      map(sessionEntity => SessionActions.loadSession({ payload: sessionEntity })),
      tap(action => this.store.dispatch(action)),
      map(session => !!session),
      catchError(_ => of(false)),
    );
  }

  constructor(
    private readonly store: Store<fromRoot.State>,
    private readonly sessionService: SessionsService
  ) {}
}
