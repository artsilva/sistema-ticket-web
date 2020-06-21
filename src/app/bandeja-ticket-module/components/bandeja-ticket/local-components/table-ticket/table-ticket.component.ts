import { Ticket } from './../../../../../shared/models/ticket';
import { TicketService } from './../../../../../shared/services/ticket.service';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

export interface PeriodicElement {
  icon?: string;
  id: number;
  status: string;
  title: string;
  tech: string;
  petitioner: string;
  creation: string;
  expire: string;
  details?: string;
  action?: string;
}

@Component({
  selector: 'app-table-ticket',
  templateUrl: './table-ticket.component.html',
  styleUrls: ['./table-ticket.component.css']
})
export class TableTicketComponent implements OnInit {

  displayedColumns: string[] = ['icon', 'id', 'status', 'title', 'tech', 'petitioner', 'creation', 'expire', 'action', 'details'];
  dataSource: PeriodicElement[] = [];

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private ticketService: TicketService) { }

  ngOnInit() {
    const items = [
      {id: 1, status: 'En Proceso', title: 'Orden de servicio', tech: 'Ivan Arenas', petitioner: 'Camila Pino', creation: '12-12-12', expire: '12-12-12', action: '', details: 'Solicitud ejemplo 1'},
      {id: 2, status: 'En Proceso', title: 'asdf', tech: 'Pedro Perez', petitioner: 'Ivan Vargas', creation: '12-12-12', expire: '12-12-12', action: '', details: 'Solicitud ejemplo 1'},
      {id: 3, status: 'Sin Asignar', title: 'asdf', tech: '', petitioner: 'Renato Apablaza', creation: '12-12-12', expire: '12-12-12', action: '', details: 'Solicitud ejemplo 1'},
      {id: 4, status: 'Sin Asignar', title: 'Petición de sillas nuevas', tech: '', petitioner: 'Renato Apablaza', creation: '12-12-12', expire: '12-12-12', action: '', details: 'Solicitud ejemplo 1'},
      {id: 5, status: 'Detenido', title: 'asdf', tech: 'Camilo Cordoba', petitioner: 'José Perez', creation: '12-12-12', expire: '12-12-12', action: '', details: 'Solicitud ejemplo 1'},
      {id: 6, status: 'Sin Asignar', title: 'asdf', tech: '', petitioner: 'Pablo Arriaza', creation: '12-12-12', expire: '12-12-12', action: '', details: 'Solicitud ejemplo 1'},
      {id: 7, status: 'En Espera', title: 'asdf', tech: 'camilo carrasco', petitioner: 'Miguel Borquez', creation: '12-12-12', expire: '12-12-12', action: '', details: 'Solicitud ejemplo 1'}
    ];
    this.setIcon(items);
  }

  setIcon(dataSource: PeriodicElement[]): void {
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
    this.dataSource = dataSource;
  }

  viewDetails(row: Ticket) {
    console.log(row);
    this.ticketService.changeTicket(row);
    this.router.navigate([`detalles`], { relativeTo: this.route });
  }

  startTicket(row) {
    console.log('start', row);
  }

  pauseTicket(row) {
    console.log('pause', row);
  }

  stopTicket(row) {
    console.log('stop', row);
  }

}
