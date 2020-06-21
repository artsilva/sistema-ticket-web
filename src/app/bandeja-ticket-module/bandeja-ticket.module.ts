import { TableTicketComponent } from './components/bandeja-ticket/local-components/table-ticket/table-ticket.component';
import { BandejaTicketComponent } from './components/bandeja-ticket/bandeja-ticket.component';
import { SharedModule } from './../shared/shared.module';
import { MaterialModule } from './../material-module/material.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BandejaTicketRoutingModule } from './bandeja-ticket-routing.module';
import { FormsModule } from '@angular/forms';
import { DetailsTicketComponent } from './components/details-ticket/details-ticket.component';

@NgModule({
  declarations: [
    BandejaTicketComponent,
    TableTicketComponent,
    DetailsTicketComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    SharedModule,
    FormsModule,
    BandejaTicketRoutingModule
  ]
})
export class BandejaTicketModule { }
