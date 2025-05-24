import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DefaultLayoutFooterMobileComponent } from './default-layout-footer-mobile.component';

describe('DefaultLayoutFooterMobileComponent', () => {
  let component: DefaultLayoutFooterMobileComponent;
  let fixture: ComponentFixture<DefaultLayoutFooterMobileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DefaultLayoutFooterMobileComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DefaultLayoutFooterMobileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
