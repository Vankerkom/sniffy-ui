import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Packet } from '../models';
import { HttpClient } from '@angular/common/http';
import { environment } from '@environments/environment';

@Injectable({
  providedIn: 'root',
})
export class MessagePacketService {
  loadMessage(sessionId: number): Observable<Array<Packet>> {
    return this.http.get<Array<Packet>>(
      `${environment.apiBaseUri}/sessions/${sessionId}/message-packets`
    );
  }

  constructor(private readonly http: HttpClient) {}
}
