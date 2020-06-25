import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { webSocket, WebSocketSubject } from "rxjs/webSocket";

import { EventContainer } from '../models';
import { environment } from '@environments/environment';

@Injectable({
  providedIn: 'root'
})
export class WebSocketEventsService {

  private connectedSubject = new BehaviorSubject(false);
  private websocket: WebSocketSubject<EventContainer>;

  readonly connected$ = this.connectedSubject.asObservable();
  readonly events$: Observable<EventContainer>;

  constructor() {
    this.websocket = webSocket({
      url: environment.eventsWebSocketUri,
      openObserver: { next: _ => this.connectedSubject.next(true) },
      closeObserver: { next: _ => this.connectedSubject.next(false) },
    });

    // this.events$ = this.websocket.asObservable();
  }

}
