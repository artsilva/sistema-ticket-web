import { AttachmentTicketComponent } from './details-ticket/attachment-ticket/attachment-ticket.component';
import { InfoTicketComponent } from './details-ticket/info-ticket/info-ticket.component';
import { ChatDetailsComponent } from './details-ticket/chat-details/chat-details.component';
import { DetailsTicketComponent } from './details-ticket/details-ticket.component';
import { TableTicketComponent } from './bandeja-ticket/table-ticket/table-ticket.component';
import { BandejaTicketComponent } from './bandeja-ticket/bandeja-ticket.component';
import { SharedModule } from './../shared/shared.module';
import { MaterialModule } from './../material-module/material.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BandejaTicketRoutingModule } from './bandeja-ticket-routing.module';
import { FormsModule } from '@angular/forms';

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
