import { BasicObject } from './../../models/basic-object';
import { Ticket } from './../../models/ticket';
import { environment } from './../../../../environments/environment';
import { BehaviorSubject, Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TicketService {

  url: string = environment.urlApi;
  private ticket$: BehaviorSubject<any> = new BehaviorSubject('');
  currentTicket$ = this.ticket$.asObservable();

  constructor(private http: HttpClient) { }

  changeTicket(ticket: Ticket) {
    this.ticket$.next(ticket);
  }

  getTickets(): Observable<Ticket[]> {
    return this.http.get<Ticket[]>(`${this.url}/request-ticket`);
  }

  insertTicket(ticket: Ticket) {
    console.log(`${this.url}/request-ticket`, ticket);
    return this.http.post(`${this.url}/request-ticket`, ticket);
  }

  updateTicket(ticket: Ticket) {
    return this.http.put(`${this.url}/request-ticket`, ticket);
  }

  getStatus(): Observable<BasicObject[]> {
    return this.http.get<BasicObject[]>(`${this.url}/status`);
  }

}
