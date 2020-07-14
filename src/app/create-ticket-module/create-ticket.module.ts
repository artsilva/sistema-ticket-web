import { SharedModule } from './../shared/shared.module';
import { MaterialModule } from './../material-module/material.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CreateTicketRoutingModule } from './create-ticket-routing.module';
import { CreateTicketComponent } from './create-ticket/create-ticket.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [CreateTicketComponent],
  imports: [
    CommonModule,
    CreateTicketRoutingModule,
    MaterialModule,
    FormsModule,
    SharedModule,
    ReactiveFormsModule
  ]
})
export class CreateTicketModule { }
