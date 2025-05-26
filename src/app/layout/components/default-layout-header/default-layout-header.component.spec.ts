import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DefaultLayoutHeaderComponent } from './default-layout-header.component';
import { ScreenSizeService } from '../../../shared/services/screen-size.service';
import { BehaviorSubject, Observable } from 'rxjs';
import { SharedModule } from '../../../shared/shared.module';
import { By } from '@angular/platform-browser';

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

describe('DefaultLayoutHeaderComponent', () => {
  let component: DefaultLayoutHeaderComponent;
  let fixture: ComponentFixture<DefaultLayoutHeaderComponent>;
  let mockScreenSizeService: MockScreenSizeService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DefaultLayoutHeaderComponent],
      imports: [SharedModule],
      providers: [
        { provide: ScreenSizeService, useClass: MockScreenSizeService },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(DefaultLayoutHeaderComponent);
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

  it('should hide display mobile-specific elements when isMobileScreen$ is true', () => {
    let conditionalElement: HTMLElement;

    mockScreenSizeService.setMobile(true);
    mockScreenSizeService.setDesktop(false);
    fixture.detectChanges();
    conditionalElement = fixture.debugElement.query(
      By.css('.header__navigation')
    )?.nativeElement;

    expect(conditionalElement).toBeFalsy();
  });

  it('should display desktop-specific elements when isDesktopScreen$ is true', () => {
    let conditionalElement: HTMLElement;

    mockScreenSizeService.setMobile(false);
    mockScreenSizeService.setDesktop(true);
    fixture.detectChanges();
    conditionalElement = fixture.debugElement.query(
      By.css('.header__navigation')
    )?.nativeElement;

    expect(conditionalElement).toBeTruthy();
  });
});
