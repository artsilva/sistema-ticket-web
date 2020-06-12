import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrincipalButtonComponent } from './principal-button.component';

describe('PrincipalButtonComponent', () => {
  let component: PrincipalButtonComponent;
  let fixture: ComponentFixture<PrincipalButtonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrincipalButtonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrincipalButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
