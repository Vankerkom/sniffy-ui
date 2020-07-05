import { Component, Input, Output, EventEmitter } from '@angular/core';
import { MessagePacket } from '@app/core/models';

@Component({
  selector: 'app-session-packets-list',
  templateUrl: './session-packets-list.component.html',
  styleUrls: ['./session-packets-list.component.scss'],
})
export class SessionPacketsListComponent {
  @Input() dataSource: Array<any> = [];

  @Output() selectMessage = new EventEmitter<string>();

  onRowClicked(messagePacket: MessagePacket): void {
    this.selectMessage.emit(messagePacket.id);
  }
}
