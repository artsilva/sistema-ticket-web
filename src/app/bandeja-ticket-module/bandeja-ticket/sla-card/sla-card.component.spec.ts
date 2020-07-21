import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SlaCardComponent } from './sla-card.component';

describe('SlaCardComponent', () => {
  let component: SlaCardComponent;
  let fixture: ComponentFixture<SlaCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SlaCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SlaCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
