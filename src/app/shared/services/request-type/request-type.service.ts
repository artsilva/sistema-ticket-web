import { RequestType } from './../../models/request-type';
import { Observable } from 'rxjs';
import { environment } from './../../../../environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RequestTypeService {

  url = `${environment.urlApi}`;

  constructor(private http: HttpClient) { }

  getRequestTypes(areaid: number): Observable<RequestType[]> {
    return this.http.get<RequestType[]>(`${this.url}/request-types/${areaid}`);
  }
}
