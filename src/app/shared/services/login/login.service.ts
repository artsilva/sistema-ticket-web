import { environment } from './../../../../environments/environment';
import { User } from './../../models/user';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  url = environment.urlApi;

  constructor(private http: HttpClient) { }

  login(user: {username: string, pass: string}): Observable<HttpResponse<any>> {
    console.log('object', user);
    return this.http.post<User>(`${this.url}/login`, user, {observe: 'response'});
  }

}
