import { Constants } from './../../../shared/utils/constants';
import { StorageService } from './../../../shared/services/storage/storage.service';
import { MessageService } from './../../../shared/services/message/message.service';
import { TicketService } from './../../../shared/services/tiket/ticket.service';
import { BasicObject } from './../../../shared/models/basic-object';
import { Ticket } from './../../../shared/models/ticket';
import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-table-ticket',
  templateUrl: './table-ticket.component.html',
  styleUrls: ['./table-ticket.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class TableTicketComponent implements OnInit {
  displayedColumns: string[] = [
    'icon',
    'id',
    'status',
    'title',
    'tech',
    'petitioner',
    'datecreation',
    'datemodify',
    'dateexpire',
    'action',
    'details',
  ];
  dataSource: Ticket[] = [];
  status: BasicObject[] = [];
  showLoading = false;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private ticketService: TicketService,
    private messageService: MessageService,
    private storageService: StorageService
  ) {}

  ngOnInit() {
    this.showLoading = true;
    this.ticketService.getTickets().subscribe((data) => {
      this.setIcons(data);
      this.dataSource = data;
      console.log(data);
      this.ticketService.getStatus().subscribe(
        status => {
          this.status = status;
          this.showLoading = false;
        },
        error => this.showLoading = false
      );
    });
  }

  setIcons(dataSource: Ticket[]): void {
    dataSource.forEach((d) => {
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
    row.statusid = (this.status.find(st => row.status === st.description)).id;
    row.usertechid = this.storageService.getUserSession().id;
    const reasonConf = reason.value.toString();
    this.setIcons([row]);
    row.statusreason = reasonConf;
    row.datemodify = new Date();
    this.messageService.messageToast(
      Constants.SUCCESS,
      Constants.MSJ_STATE_SUCCESS,
      4000
    );
    this.changeReasonAndState(row);
  }

  changeReasonAndState(ticket: Ticket) {
    this.ticketService.updateTicket(ticket).subscribe();
  }

}
