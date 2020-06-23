import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChatDetailsComponent } from './chat-details.component';

describe('ChatDetailsComponent', () => {
  let component: ChatDetailsComponent;
  let fixture: ComponentFixture<ChatDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChatDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChatDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
