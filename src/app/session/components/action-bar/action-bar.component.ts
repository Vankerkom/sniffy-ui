import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-action-bar',
  templateUrl: './action-bar.component.html',
  styleUrls: ['./action-bar.component.scss']
})
export class ActionBarComponent {

  @Input() active = false;

  @Output() start = new EventEmitter<void>();
  @Output() stop = new EventEmitter<void>();

}
