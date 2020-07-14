import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AttachmentTicketComponent } from './attachment-ticket.component';

describe('AttachmentTicketComponent', () => {
  let component: AttachmentTicketComponent;
  let fixture: ComponentFixture<AttachmentTicketComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AttachmentTicketComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AttachmentTicketComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
