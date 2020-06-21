import { Message } from './../../../shared/models/message';
import { Observable } from 'rxjs';
import { Ticket } from './../../../shared/models/ticket';
import { TicketService } from './../../../shared/services/ticket.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-details-ticket',
  templateUrl: './details-ticket.component.html',
  styleUrls: ['./details-ticket.component.css']
})
export class DetailsTicketComponent implements OnInit {

  title: string;
  currentTicket$: Observable<Ticket>;
  messages: Message[] = [];

  constructor(private ticketService: TicketService) { }

  ngOnInit() {
    this.title = 'detalles de la solicitud';
    this.currentTicket$ = this.ticketService.currentTicket$;
    this.getChatMessages();
  }

  getChatMessages() {
    this.messages = [
      { id: 1, type: 1, date: '12-12-2019', hour: '11:45:36', description: 'Hola, le informo que su solicitud estara hoy a mas tardar a las 4 de la tarde.' },
      { id: 1, type: 2, date: '12-12-2019', hour: '13:45:02', description: 'Ok, muchas gracias, lamentablemente no estaré hoy.' },
      { id: 1, type: 1, date: '12-12-2019', hour: '13:50:59', description: 'Lo dejamos para mañana entonces, Saludos.' },
    ];
  }

}
