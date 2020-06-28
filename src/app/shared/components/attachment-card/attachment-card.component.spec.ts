import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AttachmentCardComponent } from './attachment-card.component';

describe('AttachmentCardComponent', () => {
  let component: AttachmentCardComponent;
  let fixture: ComponentFixture<AttachmentCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AttachmentCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AttachmentCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
