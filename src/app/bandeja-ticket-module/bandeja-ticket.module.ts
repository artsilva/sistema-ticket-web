import { TableTicketComponent } from './components/bandeja-ticket/local-components/table-ticket/table-ticket.component';
import { BandejaTicketComponent } from './components/bandeja-ticket/bandeja-ticket.component';
import { SharedModule } from './../shared/shared.module';
import { MaterialModule } from './../material-module/material.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BandejaTicketRoutingModule } from './bandeja-ticket-routing.module';
import { FormsModule } from '@angular/forms';
import { DetailsTicketComponent } from './components/details-ticket/details-ticket.component';
import { ChatDetailsComponent } from './components/details-ticket/chat-details/chat-details.component';
import { InfoTicketComponent } from './components/details-ticket/info-ticket/info-ticket.component';
import { AttachmentTicketComponent } from './components/details-ticket/attachment-ticket/attachment-ticket.component';

@NgModule({
  declarations: [
    BandejaTicketComponent,
    TableTicketComponent,
    DetailsTicketComponent,
    ChatDetailsComponent,
    InfoTicketComponent,
    AttachmentTicketComponent
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
