import { PrincipalButtonComponent } from './components/principal-button/principal-button.component';
import { MaterialModule } from './../material-module/material.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


@NgModule({
  declarations: [
    PrincipalButtonComponent
  ],
  imports: [
    CommonModule,
    MaterialModule
  ], exports: [
    PrincipalButtonComponent
  ]
})
export class SharedModule { }
