import { DateService } from './../../shared/services/date/date.service';
import { User } from './../../shared/models/user';
import { StorageService } from './../../shared/services/storage/storage.service';
import { TicketService } from './../../shared/services/tiket/ticket.service';
import { Ticket } from './../../shared/models/ticket';
import { RequestType } from './../../shared/models/request-type';
import { RequestTypeService } from './../../shared/services/request-type/request-type.service';
import { AreaService } from './../../shared/services/area/area.service';
import { Constants } from './../../shared/utils/constants';
import { MessageService } from './../../shared/services/message/message.service';
import { AttachedFile } from './../../shared/models/file';
import { Area } from '../../shared/models/area';
import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormControl } from '@angular/forms';

@Component({
  selector: 'app-create-ticket',
  templateUrl: './create-ticket.component.html',
  styleUrls: ['./create-ticket.component.css'],
})
export class CreateTicketComponent implements OnInit {
  titleCards: string;
  titleForm: string;
  acceptButton = 'Crear Solicitud';
  cleanButton = 'Limpiar Formulario';
  reqTypes: RequestType[] = [];
  areas: Area[] = [];
  areaSelected: string;
  files: AttachedFile[];
  ticketForm: FormGroup;
  expireDays: number;

  constructor(
    private messageService: MessageService,
    private areaService: AreaService,
    private reqTypeService: RequestTypeService,
    private ticketService: TicketService,
    private storageService: StorageService,
    private dateService: DateService
  ) {}

  ngOnInit() {
    this.initValues();
  }

  initValues() {
    this.titleCards = 'aréas de servicio';
    this.titleForm = 'solicitud rápida';
    this.areaService.getAreas().subscribe((data) => (this.areas = data));
    this.files = [
      { code: 3, name: 'Solicitud inscripcion.word', type: 'text' },
    ];
    this.ticketForm = new FormGroup({
      area: new FormControl('', [Validators.required]),
      typeRequest: new FormControl('', [Validators.required]),
      title: new FormControl('', [Validators.required]),
      description: new FormControl('', [Validators.required]),
      mail: new FormControl(''),
    });
  }

  selectionCard(area: Area) {
    this.areaSelected = area.description;
    this.areas.forEach((s) => {
      if (s.id === area.id) {
        s.selected = true;
      } else {
        s.selected = false;
      }
    });
    this.ticketForm.get('area').setValue(area);
    this.reqTypeService.getRequestTypes(area.id).subscribe((data) => {
      this.reqTypes = data;
    });
  }

  selectionType() {
    this.expireDays = +this.ticketForm.get('typeRequest').value.days;
    console.log(this.expireDays, this.calculateExpireDate());
  }

  createTicket() {
    const user: User = this.storageService.getUserSession();
    const expireDate: Date = this.calculateExpireDate();
    const ticket: Ticket = {
      petitionerid: user.id,
      statusid: 1,
      typeid: this.ticketForm.get('typeRequest').value.id,
      details: this.ticketForm.get('description').value,
      title: this.ticketForm.get('title').value,
      datecreation: new Date(),
      emails: this.ticketForm.get('mail').value,
      dateexpire: expireDate
    };
    this.ticketService.insertTicket(ticket).subscribe(
      (data) => {
        this.messageService.messageToast(
          Constants.SUCCESS,
          Constants.MSJ_REQUEST_SUCCESS,
          4000
        );
        this.clearRequest();
      },
      (error) => console.log(error)
    );
  }

  async clearTicket() {
    const reason = await this.messageService.confirmDialog(
      'Esta seguro de vaciar los datos ingresados?',
      'Limpiar formulario',
      Constants.INFO
    );
    if (reason.value) {
      this.clearRequest();
    }
  }

  clearRequest() {
    this.ticketForm.reset();
    this.areaSelected = undefined;
    this.expireDays = undefined;
    this.areas.forEach((s) => {
      s.selected = false;
    });
  }

  calculateExpireDate(): Date {
    return this.dateService.addDaysToDate(new Date(), this.expireDays);
  }
}
