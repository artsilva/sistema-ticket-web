import { TicketService } from './services/ticket.service';
import { SelectionCardComponent } from './components/selection-card/selection-card.component';
import { PrincipalButtonComponent } from './components/principal-button/principal-button.component';
import { MaterialModule } from './../material-module/material.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PrincipalTitleComponent } from './components/principal-title/principal-title.component';


@NgModule({
  declarations: [
    PrincipalButtonComponent,
    SelectionCardComponent,
    PrincipalTitleComponent
  ],
  imports: [
    CommonModule,
    MaterialModule
  ], exports: [
    PrincipalButtonComponent,
    SelectionCardComponent,
    PrincipalTitleComponent
  ],
  providers: [
    TicketService
  ]
})
export class SharedModule { }
