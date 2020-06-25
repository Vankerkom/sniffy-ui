import { Component } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';

import * as fromRoot from '@core/store/reducers';
import * as WebSocketActions from '@core/store/actions/web-socket.actions';
import * as WebSocketSelectors  from '@core/store/selectors/web-socket.selectors';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  readonly connected$: Observable<boolean>;

  constructor(private readonly store: Store<fromRoot.State>) {
    this.connected$ = this.store.pipe(select(WebSocketSelectors.selectConnected));
    this.store.dispatch(WebSocketActions.connect());
  }
}
