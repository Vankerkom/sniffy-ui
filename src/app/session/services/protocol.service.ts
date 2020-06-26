import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Protocol } from '../models';
import { environment } from '@environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ProtocolService {

  public getAll(): Observable<Array<Protocol>> {
    return this.http.get<Array<Protocol>>(
      `${environment.apiBaseUri}/protocols`
    );
  }

  constructor(private readonly http: HttpClient) {}
}
