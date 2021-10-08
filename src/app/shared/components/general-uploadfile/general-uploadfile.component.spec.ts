import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GeneralUploadfileComponent } from './general-uploadfile.component';
import { CommonModule } from '@angular/common';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientModule } from '@angular/common/http';
import { MaterialModule } from 'src/app/material-module/material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

describe('GeneralUploadfileComponent', () => {
  let component: GeneralUploadfileComponent;
  let fixture: ComponentFixture<GeneralUploadfileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GeneralUploadfileComponent ],
      imports: [
        CommonModule,
        RouterTestingModule,
        HttpClientModule,
        MaterialModule,
        FormsModule,
        BrowserAnimationsModule,
        ReactiveFormsModule
    ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GeneralUploadfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
