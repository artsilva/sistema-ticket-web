import { Constants } from './../../shared/utils/constants';
import { MessageService } from './../../shared/services/message/message.service';
import { AttachedFile } from './../../shared/models/file';
import { Service } from './../../shared/models/service';
import { BasicObject } from './../../shared/models/basic-object';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-create-ticket',
  templateUrl: './create-ticket.component.html',
  styleUrls: ['./create-ticket.component.css']
})
export class CreateTicketComponent implements OnInit {

  titleCards: string;
  titleForm: string;
  acceptButton = 'Crear';
  cleanButton = 'Limpiar Formulario';
  petitioners: BasicObject[] = [];
  selectedPetitioner: BasicObject;
  areas: BasicObject[] = [];
  selectedArea: BasicObject;
  reasons: BasicObject[] = [];
  selectedReason: BasicObject;
  services: Service[] = [];
  selectedService: Service;
  files: AttachedFile[];

  constructor(private messageService: MessageService) { }

  ngOnInit() {
    this.initValues();
  }

  initValues() {
    this.titleCards = 'aréas de servicio';
    this.titleForm = 'solicitud rápida';
    this.petitioners = [
      { code: 1, description: 'Carlos Lara' },
      { code: 1, description: 'Camila Oses' },
      { code: 1, description: 'Carlos Tapia' },
      { code: 1, description: 'Mario Lara' },
    ];
    this.areas = [
      { code: 1, description: 'Administración' },
      { code: 1, description: 'Desarrollo' },
      { code: 1, description: 'Recursos Humanos' },
      { code: 1, description: 'Gerencia' },
    ];
    this.reasons = [
      { code: 1, description: 'Solicitud de servicio' },
      { code: 1, description: 'Reparación' },
      { code: 1, description: 'Gestión personal' },
      { code: 1, description: 'Solicitud vacaciones' },
    ];
    this.services = [
      { code: 1, description: 'Soporte', selected: false },
      { code: 2, description: 'Registro Personas', selected: false },
      { code: 3, description: 'Bodega', selected: false },
      { code: 4, description: 'Desarrollo', selected: false },
      { code: 5, description: 'Casino', selected: false }
    ];
    this.files = [
      { code: 3, name: 'Solicitud inscripcion.word', type: 'text' },
    ];
  }

  selectionCard(service: Service) {
    this.selectedService = service;
    this.services.forEach(s => {
      if (s.code === service.code) {
        s.selected = true;
      } else {
        s.selected = false;
      }
    });
  }

  csvInputChange(fileInputEvent: any) {
    console.log(fileInputEvent.target.files[0]);
  }

  createTicket() {
    this.messageService.messageToast(Constants.SUCCESS, Constants.MSJ_SUCCESS, 4000);
  }
}
