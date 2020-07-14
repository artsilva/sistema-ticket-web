import { HttpClientModule } from '@angular/common/http';
import { LoadingComponent } from './components/loading/loading.component';
import { SelectionCardComponent } from './components/selection-card/selection-card.component';
import { PrincipalButtonComponent } from './components/principal-button/principal-button.component';
import { MaterialModule } from './../material-module/material.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PrincipalTitleComponent } from './components/principal-title/principal-title.component';
import { AttachmentCardComponent } from './components/attachment-card/attachment-card.component';
import { GeneralUploadfileComponent } from './components/general-uploadfile/general-uploadfile.component';


@NgModule({
  declarations: [
    PrincipalButtonComponent,
    SelectionCardComponent,
    PrincipalTitleComponent,
    AttachmentCardComponent,
    LoadingComponent,
    GeneralUploadfileComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    HttpClientModule
  ], exports: [
    PrincipalButtonComponent,
    SelectionCardComponent,
    PrincipalTitleComponent,
    AttachmentCardComponent,
    LoadingComponent,
    GeneralUploadfileComponent
  ],
  providers: []
})
export class SharedModule { }
