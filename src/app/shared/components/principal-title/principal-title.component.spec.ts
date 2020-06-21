import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrincipalTitleComponent } from './principal-title.component';

describe('PrincipalTitleComponent', () => {
  let component: PrincipalTitleComponent;
  let fixture: ComponentFixture<PrincipalTitleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrincipalTitleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrincipalTitleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
