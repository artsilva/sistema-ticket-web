import { SharedModule } from './../shared/shared.module';
import { PrincipalButtonComponent } from '../shared/components/principal-button/principal-button.component';
import { MaterialModule } from './../material-module/material.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CreateTicketRoutingModule } from './create-ticket-routing.module';
import { CreateTicketComponent } from './create-ticket/create-ticket.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [CreateTicketComponent],
  imports: [
    CommonModule,
    CreateTicketRoutingModule,
    MaterialModule,
    FormsModule,
    SharedModule
  ]
})
export class CreateTicketModule { }
