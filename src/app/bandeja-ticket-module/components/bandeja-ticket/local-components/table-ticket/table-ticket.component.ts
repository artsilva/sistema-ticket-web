import { Constants } from './../../../../../shared/utils/constants';
import { MessageService } from './../../../../../shared/services/message/message.service';
import { Ticket } from './../../../../../shared/models/ticket';
import { TicketService } from '../../../../../shared/services/tiket/ticket.service';
import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-table-ticket',
  templateUrl: './table-ticket.component.html',
  styleUrls: ['./table-ticket.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class TableTicketComponent implements OnInit {

  displayedColumns: string[] = ['icon', 'id', 'status', 'title', 'tech', 'petitioner', 'creation', 'expire', 'action', 'details'];
  dataSource: Ticket[] = [];

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private ticketService: TicketService,
    private messageService: MessageService) { }

  ngOnInit() {
    const items = [
      {id: 1, status: 'En Proceso', title: 'Orden de servicio', tech: 'Ivan Arenas', petitioner: 'Camila Pino', creation: '12-12-12', expire: '12-12-12', action: '', details: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas ultricies molestie mattis. Mauris porttitor elit id erat egestas, ac consequat justo placerat. In ac nibh non libero volutpat maximus vitae sed nibh.  Mauris porttitor elit id erat egestas, ac consequat justo placerat. In ac nibh non libero volutpat maximus vitae sed nibh.'},
      {id: 2, status: 'En Proceso', title: 'asdf', tech: 'Pedro Perez', petitioner: 'Ivan Vargas', creation: '12-12-12', expire: '12-12-12', action: '', details: 'Solicitud ejemplo 1'},
      {id: 3, status: 'Sin Asignar', title: 'asdf', tech: '', petitioner: 'Renato Apablaza', creation: '12-12-12', expire: '12-12-12', action: '', details: 'Solicitud ejemplo 1'},
      {id: 4, status: 'Sin Asignar', title: 'Petición de sillas nuevas', tech: '', petitioner: 'Renato Apablaza', creation: '12-12-12', expire: '12-12-12', action: '', details: 'Solicitud ejemplo 1'},
      {id: 5, status: 'Detenido', title: 'asdf', tech: 'Camilo Cordoba', petitioner: 'José Perez', creation: '12-12-12', expire: '12-12-12', action: '', details: 'Solicitud ejemplo 1'},
      {id: 6, status: 'Sin Asignar', title: 'asdf', tech: '', petitioner: 'Pablo Arriaza', creation: '12-12-12', expire: '12-12-12', action: '', details: 'Solicitud ejemplo 1'},
      {id: 7, status: 'En Espera', title: 'asdf', tech: 'camilo carrasco', petitioner: 'Miguel Borquez', creation: '12-12-12', expire: '12-12-12', action: '', details: 'Solicitud ejemplo 1'}
    ];
    this.setIcons(items);
    this.dataSource = items;
  }

  setIcons(dataSource: Ticket[]): void {
    dataSource.forEach(d => {
      if (d.status === 'En Proceso') {
        d.icon = 'status-green';
      } else if (d.status === 'En Espera') {
        d.icon = 'status-yellow';
      } else if (d.status === 'Detenido') {
        d.icon = 'status-red';
      } else {
        d.icon = 'status-blue';
      }
    });
    
  }

  viewDetails(row: Ticket) {
    console.log(row);
    this.ticketService.changeTicket(row);
    this.router.navigate([`detalles`], { relativeTo: this.route });
  }

  async changeStatusTicket(row: Ticket, status: string) {
    let msj = Constants.MSJ_REASON;
    let reason;
    if (status === 'start') {
      msj = `${msj} de inicio de la solicitud`;
      reason = await this.messageService.showModalTextArea(msj);
      row.status = 'En Proceso';
    } else if (status === 'pause') {
      msj = `${msj} para poner en pausa la solicitud`;
      reason = await this.messageService.showModalTextArea(msj);
      row.status = 'En Espera';
    } else {
      msj = `${msj} para detener la solicitud`;
      reason = await this.messageService.showModalTextArea(msj);
      row.status = 'Detenido';
    }
    const reasonConf = reason.value.toString();
    this.setIcons([row]);
    row.reason = reasonConf;
    this.messageService.messageToast(Constants.SUCCESS, Constants.MSJ_STATE_SUCCESS, 4000);
  }

  changeReasonAndState(idTicket: number, reason: string) {

  }

}
