import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FloatingChatButtonComponent } from './floating-chat-button.component';

describe('FloatingChatButtonComponent', () => {
  let component: FloatingChatButtonComponent;
  let fixture: ComponentFixture<FloatingChatButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FloatingChatButtonComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FloatingChatButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
