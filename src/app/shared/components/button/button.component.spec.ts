import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ButtonComponent } from './button.component';
import { By } from '@angular/platform-browser';

describe('ButtonComponent', () => {
  let component: ButtonComponent;
  let fixture: ComponentFixture<ButtonComponent>;
  let buttonElement: HTMLButtonElement;
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ButtonComponent],
    }).compileComponents();
  });
  beforeEach(() => {
    fixture = TestBed.createComponent(ButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    buttonElement = fixture.debugElement.query(By.css('.button')).nativeElement;
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
  describe('@Input variant', () => {
    it('should apply the default variant class by default', () => {
      expect(buttonElement.classList).toContain('default');
    });
    it('should apply the "golden-gradient" variant class when variant is set', () => {
      component.variant = 'golden-gradient';
      fixture.detectChanges();
      expect(buttonElement.classList).toContain('golden-gradient');
      expect(buttonElement.classList).not.toContain('default');
    });
  });
  describe('@Input glowing', () => {
    it('should apply the "glowing" class when glowing is true and the button is NOT disabled', () => {
      component.glowing = true;
      component.disabled = false;
      fixture.detectChanges();
      expect(buttonElement.classList).toContain('glowing');
    });
    it('should NOT apply the "glowing" class when glowing is true and the button IS disabled', () => {
      component.glowing = true;
      component.disabled = true;
      fixture.detectChanges();
      expect(buttonElement.classList).not.toContain('glowing');
    });
  });
  describe('@Input disabled', () => {
    it('should apply the "disabled" class and native disabled attribute when disabled is true', () => {
      component.disabled = true;
      fixture.detectChanges();
      expect(buttonElement.classList).toContain('disabled');
      expect(buttonElement.disabled).toBeTruthy();
    });
    it('should NOT apply the "disabled" class and native attribute when disabled is false', () => {
      component.disabled = false;
      fixture.detectChanges();
      expect(buttonElement.classList).not.toContain('disabled');
      expect(buttonElement.disabled).toBeFalsy();
    });
  });
  describe('@Input type', () => {
    it('should set the native button type  to "button" by default', () => {
      expect(buttonElement.type).toBe('button');
    });
    it('should set native button type to "submit" when type is set to "submit"', () => {
      component.type = 'submit';
      fixture.detectChanges();
      expect(buttonElement.type).toBe('submit');
    });
    it('should set natiive button type to "reset" when type is set to "reset"', () => {
      component.type = 'reset';
      fixture.detectChanges();
      expect(buttonElement.type).toBe('reset');
    });
  });
  describe('@Output onClick', () => {
    it('should emit onClick event when the button is clicked and NOT disabled', () => {
      jest.spyOn(component.onClick, 'emit');
      component.disabled = false;
      fixture.detectChanges();
      buttonElement.click();
      expect(component.onClick.emit).toHaveBeenCalled();
    });
    it('should NOT emit onClick event when the button is clicked and IS disabled', () => {
      jest.spyOn(component.onClick, 'emit');
      component.disabled = true;
      fixture.detectChanges();
      buttonElement.click();
      expect(component.onClick.emit).not.toHaveBeenCalled();
    });
  });
});
