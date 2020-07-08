import {
  Component,
  Input,
  Output,
  EventEmitter,
  ChangeDetectionStrategy,
} from '@angular/core';

@Component({
  selector: 'app-action-bar',
  templateUrl: './action-bar.component.html',
  styleUrls: ['./action-bar.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ActionBarComponent {
  @Input() active = false;

  @Output() start = new EventEmitter<void>();
  @Output() stop = new EventEmitter<void>();
}
