import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Device } from '../models';
import { environment } from '@environments/environment';

@Injectable({
  providedIn: 'root',
})
export class DevicesService {
  public getAll(): Observable<Array<Device>> {
    return this.http.get<Array<Device>>(`${environment.apiBaseUri}/devices`);
  }

  constructor(private readonly http: HttpClient) {}
}
