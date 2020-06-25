import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { WebSocketEventsService } from './core/services/web-socket-events.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  readonly connected$: Observable<boolean>;

  constructor(private readonly webSocketEventsService: WebSocketEventsService) {
    this.connected$ = this.webSocketEventsService.connected$;
  }
}
