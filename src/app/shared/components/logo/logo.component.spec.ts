import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LogoComponent } from './logo.component';
import { By } from '@angular/platform-browser';

describe('LogoComponent', () => {
  let component: LogoComponent;
  let fixture: ComponentFixture<LogoComponent>;
  let figureElement: HTMLDivElement;
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LogoComponent],
    }).compileComponents();
  });
  beforeEach(() => {
    fixture = TestBed.createComponent(LogoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    figureElement = fixture.debugElement.query(By.css('figure')).nativeElement;
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
  it('should initialize maxWidth to "124px" by default', () => {
    expect(component.maxWidth).toBe('124px');
  });
  it('should apply the default max-width style to the figure element', () => {
    expect(figureElement.style.maxWidth).toBe('124px');
  });
  it('should apply a custom max-width when provided via input', () => {
    const customMaxWidth = '200px';
    component.maxWidth = customMaxWidth;
    fixture.detectChanges();
    expect(figureElement.style.maxWidth).toBe(customMaxWidth);
  });
});
