import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TableTicketComponent } from './table-ticket.component';

describe('TableTicketComponent', () => {
  let component: TableTicketComponent;
  let fixture: ComponentFixture<TableTicketComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TableTicketComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TableTicketComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
