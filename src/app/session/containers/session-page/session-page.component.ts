import { Component, OnInit } from '@angular/core';
import { Observable, EMPTY } from 'rxjs';
import { Store, select } from '@ngrx/store';

import { MessagePacket } from '@app/core/models';
import { PacketMessageSelectors } from '@app/core/store/selectors';
import * as sessionSelectors from '@app/core/store/selectors/session.selectors';
import { SessionPageActions } from '@app/session/store/actions';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-session-page',
  templateUrl: './session-page.component.html',
  styleUrls: ['./session-page.component.scss'],
})
export class SessionPageComponent implements OnInit {
  selectedBuffer: ArrayBuffer | null = null;

  selectedSessionId$: Observable<number | null>;
  messagePackets$: Observable<Array<MessagePacket>>;
  selectedPayload$: Observable<ArrayBuffer>;

  constructor(private readonly store: Store<any>) {}

  ngOnInit(): void {
    this.selectedSessionId$ = this.store.pipe(
      select(sessionSelectors.selectSelectedSessionId),
      map(Number)
    );
    this.messagePackets$ = this.store.pipe(
      select(PacketMessageSelectors.selectAllForActiveSession)
    );

    this.selectedPayload$ = this.store.pipe(
      select(PacketMessageSelectors.selectSelectedMessageArrayBuffer)
    );
  }

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
