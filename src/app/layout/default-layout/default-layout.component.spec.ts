import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DefaultLayoutComponent } from './default-layout.component';
import { ScreenSizeService } from '../../shared/services/screen-size.service';
import { BehaviorSubject, Observable } from 'rxjs';
import { RouterTestingModule } from '@angular/router/testing';
import { By } from '@angular/platform-browser';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { DefaultLayoutHeaderComponent } from '../components/default-layout-header/default-layout-header.component';
import { DefaultLayoutFooterMobileComponent } from '../components/default-layout-footer-mobile/default-layout-footer-mobile.component';
import { DefaultLayoutFooterDesktopComponent } from '../components/default-layout-footer-desktop/default-layout-footer-desktop.component';

class MockScreenSizeService {
  private isMobileSubject = new BehaviorSubject<boolean>(false);
  private isDesktopSubject = new BehaviorSubject<boolean>(true);

  isMobile(): Observable<boolean> {
    return this.isMobileSubject.asObservable();
  }

  isDesktop(): Observable<boolean> {
    return this.isDesktopSubject.asObservable();
  }

  setMobile(value: boolean) {
    this.isMobileSubject.next(value);
  }

  setDesktop(value: boolean) {
    this.isDesktopSubject.next(value);
  }
}

describe('DefaultLayoutComponent', () => {
  let component: DefaultLayoutComponent;
  let fixture: ComponentFixture<DefaultLayoutComponent>;
  let mockScreenSizeService: MockScreenSizeService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        DefaultLayoutComponent,
        DefaultLayoutHeaderComponent,
        DefaultLayoutFooterMobileComponent,
        DefaultLayoutFooterDesktopComponent,
      ],
      imports: [HttpClientTestingModule, RouterTestingModule],
      providers: [
        { provide: ScreenSizeService, useClass: MockScreenSizeService },
      ],
      schemas: [NO_ERRORS_SCHEMA],
    }).compileComponents();

    fixture = TestBed.createComponent(DefaultLayoutComponent);
    component = fixture.componentInstance;
    mockScreenSizeService = TestBed.inject(
      ScreenSizeService
    ) as any as MockScreenSizeService;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });

  it('should initialize isMobileScreen$ based on ScreenSizeService', (done) => {
    mockScreenSizeService.setMobile(true);
    fixture.detectChanges();

    component.isMobileScreen$.subscribe((isMobile) => {
      expect(isMobile).toBeTruthy();
      done();
    });
  });

  it('should initialize isDesktopScreen$ based on ScreenSizeService', (done) => {
    mockScreenSizeService.setDesktop(true);
    fixture.detectChanges();

    component.isDesktopScreen$.subscribe((isDesktop) => {
      expect(isDesktop).toBeTruthy();
      done();
    });
  });

  it('should react to dynamic changes from ScreenSizeService for mobile', (done) => {
    let mobileValue: boolean | undefined;

    mockScreenSizeService.setMobile(false);
    fixture.detectChanges();

    component.isMobileScreen$.subscribe((val) => {
      mobileValue = val;
    });

    expect(mobileValue).toBeFalsy();

    mockScreenSizeService.setMobile(true);
    fixture.detectChanges();

    expect(mobileValue).toBeTruthy();
    done();
  });

  it('should react to dynamic changes from ScreenSizeService for desktop', (done) => {
    let desktopValue: boolean | undefined;

    mockScreenSizeService.setDesktop(false);
    fixture.detectChanges();

    component.isDesktopScreen$.subscribe((val) => {
      desktopValue = val;
    });

    expect(desktopValue).toBeFalsy();

    mockScreenSizeService.setDesktop(true);
    fixture.detectChanges();

    expect(desktopValue).toBeTruthy();
    done();
  });

  it('should display mobile footer and hide desktop footer when on mobile screen', () => {
    let conditionalElement: HTMLElement;
    let hiddenElement: HTMLElement;

    mockScreenSizeService.setMobile(true);
    mockScreenSizeService.setDesktop(false);
    fixture.detectChanges();
    conditionalElement = fixture.debugElement.query(
      By.css('app-default-layout-footer-mobile')
    )?.nativeElement;
    hiddenElement = fixture.debugElement.query(
      By.css('app-default-layout-footer-desktop')
    )?.nativeElement;

    expect(conditionalElement).toBeTruthy();
    expect(hiddenElement).toBeFalsy();
  });

  it('should display desktop footer and hide mobile footer when on desktop screen', () => {
    let conditionalElement: HTMLElement;
    let hiddenElement: HTMLElement;

    mockScreenSizeService.setMobile(false);
    mockScreenSizeService.setDesktop(true);
    fixture.detectChanges();
    conditionalElement = fixture.debugElement.query(
      By.css('app-default-layout-footer-desktop')
    )?.nativeElement;
    hiddenElement = fixture.debugElement.query(
      By.css('app-default-layout-footer-mobile')
    )?.nativeElement;

    expect(conditionalElement).toBeTruthy();
    expect(hiddenElement).toBeFalsy();
  });
});
