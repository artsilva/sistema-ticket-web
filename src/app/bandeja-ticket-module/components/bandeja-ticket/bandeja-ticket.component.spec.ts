import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BandejaTicketComponent } from './bandeja-ticket.component';

describe('BandejaTicketComponent', () => {
  let component: BandejaTicketComponent;
  let fixture: ComponentFixture<BandejaTicketComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BandejaTicketComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BandejaTicketComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
