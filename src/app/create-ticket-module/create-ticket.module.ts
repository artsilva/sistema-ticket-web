import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CreateTicketRoutingModule } from './create-ticket-routing.module';
import { CreateTicketComponent } from './create-ticket/create-ticket.component';

@NgModule({
  declarations: [CreateTicketComponent],
  imports: [
    CommonModule,
    CreateTicketRoutingModule
  ]
})
export class CreateTicketModule { }
