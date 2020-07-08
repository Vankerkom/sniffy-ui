import { Component, Input, Output, EventEmitter } from '@angular/core';
import { MessagePacket } from '@app/core/models';

@Component({
  selector: 'app-session-packets-list',
  templateUrl: './session-packets-list.component.html',
  styleUrls: ['./session-packets-list.component.scss'],
})
export class SessionPacketsListComponent {
  @Input() dataSource: Array<MessagePacket> = [];

  @Output() selectMessage = new EventEmitter<string>();

  trackByFn(index: number, item: MessagePacket): string {
    return item.id;
  }

  onRowClicked(messagePacket: MessagePacket): void {
    this.selectMessage.emit(messagePacket.id);
  }
}
