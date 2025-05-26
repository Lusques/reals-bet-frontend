import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardBannerComponent } from './dashboard-banner.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';

describe('DashboardBannerComponent', () => {
  let component: DashboardBannerComponent;
  let fixture: ComponentFixture<DashboardBannerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DashboardBannerComponent],
      imports: [HttpClientTestingModule, RouterTestingModule]
    }).compileComponents();

    fixture = TestBed.createComponent(DashboardBannerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
