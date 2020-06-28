import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoTicketComponent } from './info-ticket.component';

describe('InfoTicketComponent', () => {
  let component: InfoTicketComponent;
  let fixture: ComponentFixture<InfoTicketComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InfoTicketComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InfoTicketComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
