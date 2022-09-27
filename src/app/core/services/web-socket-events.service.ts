import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { webSocket, WebSocketSubject } from 'rxjs/webSocket';
import { environment } from '@environments/environment';
import { Action } from '@ngrx/store';

import { EventContainer } from '../models';
import { EventId } from '../models/event-id';

import {
  PacketActions,
  SessionActions,
  SnifferActions,
  WebSocketActions,
  MessageActions,
} from '../store/actions';

const EVENT_TYPES_MAP = new Map<number, string>([
  [EventId.SNIFFER_STATE_CHANGED, SnifferActions.loadStateSuccess.type],
  [EventId.SESSION_CREATE, SessionActions.sessionCreateSuccess.type],
  [EventId.SESSION_UPDATE, SessionActions.sessionUpdateSuccess.type],
  [EventId.SESSION_DELETE, SessionActions.sessionDeleteSuccess.type],
  [EventId.PACKET_RECEIVED, PacketActions.packetReceived.type],
  [EventId.MESSAGE_RECEIVED, MessageActions.messageReceived.type],
]);

@Injectable({
  providedIn: 'root',
})
export class WebSocketEventsService {
  private socket: WebSocketSubject<EventContainer> | null = null;

  readonly opened$ = new Subject<Event>();
  readonly closed$ = new Subject<CloseEvent>();

  public connect() {
    if (this.socket) {
      this.socket.complete();
      this.socket = null;
    }

    return this.createWebSocket(environment.eventsWebSocketUri);
  }

  private createWebSocket(uri: string): WebSocketSubject<EventContainer> {
    this.socket = webSocket<EventContainer>({
      url: uri,
      openObserver: this.opened$,
      closeObserver: this.closed$,
    });

    return this.socket;
  }

  public mapMessage(container: EventContainer): Action {
    const type = EVENT_TYPES_MAP.get(container.i) || false;

    if (type) {
      return { type, payload: container.d } as Action;
    }

    return WebSocketActions.unknownMessageReceived({
      id: container.i,
      payload: container.d,
    });
  }
}
