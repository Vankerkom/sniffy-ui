import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Session } from '../models';
import { environment } from '@environments/environment';


@Injectable({
  providedIn: 'root',
})
export class SessionsService {


  public loadSessions(): Observable<Array<Session>> {
    return this.http.get<Array<Session>>(`${environment.apiBaseUri}/sessions`);
  }

  public loadById(sessionId: number): Observable<Session> {
    return this.http.get<Session>(`${environment.apiBaseUri}/sessions/${sessionId}`);
  }

  constructor(private readonly http: HttpClient) {}
}
