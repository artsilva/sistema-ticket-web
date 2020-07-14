import { DetailsTicketComponent } from './details-ticket/details-ticket.component';
import { BandejaTicketComponent } from './bandeja-ticket/bandeja-ticket.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', component: BandejaTicketComponent },
  { path: 'detalles', component: DetailsTicketComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BandejaTicketRoutingModule { }
