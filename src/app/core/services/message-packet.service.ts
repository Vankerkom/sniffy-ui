import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { MessagePacket } from '../models';
import { HttpClient } from '@angular/common/http';
import { environment } from '@environments/environment';

@Injectable({
  providedIn: 'root',
})
export class MessagePacketService {
  loadMessage(sessionId: number): Observable<Array<MessagePacket>> {
    return this.http.get<Array<MessagePacket>>(
      `${environment.apiBaseUri}/sessions/${sessionId}/message-packets`
    );
  }

  constructor(private readonly http: HttpClient) {}
}
