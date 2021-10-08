import { Observable } from 'rxjs';
import { Ticket } from './../../shared/models/ticket';
import { TicketService } from '../../shared/services/tiket/ticket.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-details-ticket',
  templateUrl: './details-ticket.component.html',
  styleUrls: ['./details-ticket.component.css']
})
export class DetailsTicketComponent implements OnInit {

  title: string;
  currentTicket$: Observable<Ticket>;

  constructor(private ticketService: TicketService) { }

  ngOnInit() {
    this.title = 'detalles de la solicitud';
    this.currentTicket$ = this.ticketService.currentTicket$;
  }

}
