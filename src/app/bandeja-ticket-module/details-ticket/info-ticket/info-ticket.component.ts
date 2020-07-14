import { TicketService } from '../../../shared/services/tiket/ticket.service';
import { Ticket } from './../../../shared/models/ticket';
import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-info-ticket',
  templateUrl: './info-ticket.component.html',
  styleUrls: ['./info-ticket.component.css']
})
export class InfoTicketComponent implements OnInit {

  currentTicket$: Observable<Ticket>;

  constructor(private ticketService: TicketService) { }

  ngOnInit() {
    this.currentTicket$ = this.ticketService.currentTicket$;
  }

}
