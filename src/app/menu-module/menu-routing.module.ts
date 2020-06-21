import { MenuComponent } from './menu/menu.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: MenuComponent,
    children: [
      {
        path: 'creacion',
        loadChildren: () =>
          import('../create-ticket-module/create-ticket.module').then(
            (m) => m.CreateTicketModule
          ),
      },
      {
        path: 'bandeja',
        loadChildren: () =>
          import('../bandeja-ticket-module/bandeja-ticket.module').then(
            (m) => m.BandejaTicketModule
          ),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MenuRoutingModule { }
