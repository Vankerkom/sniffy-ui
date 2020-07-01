import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Store, select } from '@ngrx/store';

import { MessagePacket } from '@app/core/models';
import { PacketMessageSelectors } from '@app/core/store/selectors';
import { tap } from 'rxjs/operators';

@Component({
  selector: 'app-session-page',
  templateUrl: './session-page.component.html',
  styleUrls: ['./session-page.component.scss'],
})
export class SessionPageComponent implements OnInit {
  messagePackets$: Observable<Array<MessagePacket>>;

  constructor(private readonly store: Store<any>) {}

  ngOnInit(): void {
    this.messagePackets$ = this.store.pipe(
      select(PacketMessageSelectors.selectAllForActiveSession),
      tap((x) => console.log(x))
    );
  }
}
