import { BasicObject } from './../../shared/models/basic-object';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-create-ticket',
  templateUrl: './create-ticket.component.html',
  styleUrls: ['./create-ticket.component.css']
})
export class CreateTicketComponent implements OnInit {

  acceptButton = 'Crear';
  cleanButton = 'Limpiar Formulario';
  petitioners: BasicObject[] = [];
  selectedPetitioner: BasicObject;
  areas: BasicObject[] = [];
  selectedArea: BasicObject;
  types: BasicObject[] = [];
  selectedType: BasicObject;
  constructor() { }

  ngOnInit() {
    this.initValues();
  }

  initValues() {
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
    this.types = [
      { code: 1, description: 'Solicitud de servicio' },
      { code: 1, description: 'Reparación' },
      { code: 1, description: 'Gestión personal' },
      { code: 1, description: 'SOlicitud vacaciones' },
    ];
  }

}
