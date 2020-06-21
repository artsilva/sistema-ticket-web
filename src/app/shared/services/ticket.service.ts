import { Ticket } from './../models/ticket';
import { BehaviorSubject } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TicketService {

  private ticket: BehaviorSubject<any> = new BehaviorSubject('');
  currentTicket$ = this.ticket.asObservable();

  constructor() { }

  changeTicket(ticket: Ticket) {
    this.ticket.next(ticket);
  }

}
