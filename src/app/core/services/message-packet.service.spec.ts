import { TestBed } from '@angular/core/testing';

import { MessagePacketService } from './message-packet.service';

describe('MessagePacketService', () => {
  let service: MessagePacketService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MessagePacketService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
