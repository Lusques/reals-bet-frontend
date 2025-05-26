import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { InputIconComponent } from './input-icon.component';
import { FormsModule } from '@angular/forms';

describe('InputIconComponent', () => {
  let component: InputIconComponent;
  let fixture: ComponentFixture<InputIconComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InputIconComponent],
      imports: [FormsModule],
    });
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InputIconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  describe('Input Properties', () => {
    it('should display the correct icon based on iconUrl input', () => {
      const testUrl = '/assets/icons/custom-icon.svg';
      component.iconUrl = testUrl;
      fixture.detectChanges();

      const imgElement: HTMLImageElement = fixture.debugElement.query(
        By.css('.input-icon__figure > img')
      ).nativeElement;

      expect(imgElement.src).toContain(testUrl);
    });

    it('should display the correct alt text for the icon', () => {
      const testAltText = 'Custom Icon Alt';
      component.altText = testAltText;
      fixture.detectChanges();

      const imgElement: HTMLImageElement = fixture.debugElement.query(
        By.css('.input-icon__figure > img')
      ).nativeElement;
      expect(imgElement.alt).toBe(testAltText);
    });

    it('should display the correct placeholder for the input', () => {
      const testPlaceholder = 'Buscar algo...';
      component.placeholder = testPlaceholder;
      fixture.detectChanges();

      const inputElement: HTMLInputElement = fixture.debugElement.query(
        By.css('.input-icon__field')
      ).nativeElement;
      expect(inputElement.placeholder).toBe(testPlaceholder);
    });

    it('should set the input type correctly', () => {
      const testType = 'password';
      component.type = testType;
      fixture.detectChanges();

      const inputElement: HTMLInputElement = fixture.debugElement.query(
        By.css('.input-icon__field')
      ).nativeElement;
      expect(inputElement.type).toBe(testType);
    });
  });

  describe('Output Events and Logic', () => {
    it('should emit onInputChange when emitInputValue is called', () => {
      jest.spyOn(component.onInputChange, 'emit');

      const testValue = 'new input value';
      component.emitInputValue(testValue);

      expect(component.onInputChange.emit).toHaveBeenCalledWith(testValue);
    });

    it('should emit onInputChange when the input field value changes', () => {
      jest.spyOn(component.onInputChange, 'emit');

      const inputElement: HTMLInputElement = fixture.debugElement.query(
        By.css('.input-icon__field')
      ).nativeElement;

      inputElement.value = 'some text';
      inputElement.dispatchEvent(new Event('input'));

      fixture.detectChanges();

      expect(component.onInputChange.emit).toHaveBeenCalledWith('some text');
    });
  });
});
