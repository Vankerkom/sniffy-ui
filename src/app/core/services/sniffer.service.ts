import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '@environments/environment';
import { SnifferStateChangedEvent } from '../events';

@Injectable({
  providedIn: 'root',
})
export class SnifferService {

  public getState(): Observable<SnifferStateChangedEvent> {
    return this.http.get<SnifferStateChangedEvent>(`${environment.apiBaseUri}/sniffer`);
  }

  constructor(private readonly http: HttpClient) {}
}
