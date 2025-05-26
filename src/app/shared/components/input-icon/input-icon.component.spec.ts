import { ComponentFixture, TestBed } from '@angular/core/testing';
import { InputIconComponent } from './input-icon.component';
import { FormsModule } from '@angular/forms';

describe('InputIconComponent', () => {
  let component: InputIconComponent;
  let fixture: ComponentFixture<InputIconComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [InputIconComponent],
      imports: [FormsModule],
    }).compileComponents();

    fixture = TestBed.createComponent(InputIconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
