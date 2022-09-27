import { Component, OnInit } from '@angular/core';
import { Observable, EMPTY } from 'rxjs';
import { Store, select } from '@ngrx/store';

import { Packet } from '@app/core/models';
import { PacketMessageSelectors } from '@app/core/store/selectors';
import * as sessionSelectors from '@app/core/store/selectors/session.selectors';
import { SessionPageActions } from '@app/session/store/actions';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-session-page',
  templateUrl: './session-page.component.html',
  styleUrls: ['./session-page.component.scss'],
})
export class SessionPageComponent {
  selectedBuffer: ArrayBuffer | null = null;

  readonly selectedSessionId$: Observable<number | null> = this.store.pipe(select(sessionSelectors.selectSelectedSessionId),  map(Number));
  readonly messagePackets$: Observable<Packet[]> = this.store.pipe(select(PacketMessageSelectors.selectAllForActiveSession));
  readonly selectedPayload$: Observable<ArrayBuffer> = this.store.pipe(select(PacketMessageSelectors.selectSelectedMessageArrayBuffer));

  constructor(private readonly store: Store<any>) {}

  changeHexSelection(event: ArrayBuffer | null): void {
    this.selectedBuffer = event;
  }

  packetMessageSelected(sessionId: number, messageId: string): void {
    if (sessionId) {
      this.store.dispatch(
        SessionPageActions.selectMessagePacket({ sessionId, messageId })
      );
    }
  }
}
