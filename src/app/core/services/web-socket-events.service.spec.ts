import { TestBed } from '@angular/core/testing';

import { WebSocketEventsService } from './web-socket-events.service';

describe('WebSocketEventsService', () => {
  let service: WebSocketEventsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WebSocketEventsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
