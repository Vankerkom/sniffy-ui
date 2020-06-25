import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '@environments/environment';
import { SnifferStateChangedEvent } from '../events';
import { StartSniffingRequest } from '../models';

@Injectable({
  providedIn: 'root',
})
export class SnifferService {
  public getState(): Observable<SnifferStateChangedEvent> {
    return this.http.get<SnifferStateChangedEvent>(
      `${environment.apiBaseUri}/sniffer`
    );
  }

  public start(payload: StartSniffingRequest): Observable<SnifferStateChangedEvent> {
    return this.http.post<SnifferStateChangedEvent>(
      `${environment.apiBaseUri}/sniffer/start`,
      payload
    );
  }

  public stop(): Observable<void> {
    return this.http.post<void>(`${environment.apiBaseUri}/sniffer/stop`, {});
  }

  constructor(private readonly http: HttpClient) {}
}
