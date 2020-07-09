import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Packet } from '@app/core/models';

@Component({
  selector: 'app-session-packets-list',
  templateUrl: './session-packets-list.component.html',
  styleUrls: ['./session-packets-list.component.scss'],
})
export class SessionPacketsListComponent {
  @Input() dataSource: Array<Packet> = [];

  @Output() selectMessage = new EventEmitter<string>();

  trackByFn(index: number, item: Packet): string {
    return item.id;
  }

  onRowClicked(messagePacket: Packet): void {
    this.selectMessage.emit(messagePacket.id);
  }
}
