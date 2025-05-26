import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DefaultLayoutFooterDesktopComponent } from './default-layout-footer-desktop.component';
import { SharedModule } from '../../../shared/shared.module';

describe('DefaultLayoutFooterDesktopComponent', () => {
  let component: DefaultLayoutFooterDesktopComponent;
  let fixture: ComponentFixture<DefaultLayoutFooterDesktopComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DefaultLayoutFooterDesktopComponent],
      imports: [SharedModule],
    }).compileComponents();

    fixture = TestBed.createComponent(DefaultLayoutFooterDesktopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
