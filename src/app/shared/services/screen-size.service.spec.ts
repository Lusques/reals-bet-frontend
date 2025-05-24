import { TestBed } from '@angular/core/testing';
import { ScreenSizeService } from './screen-size.service';
import { BreakpointObserver, BreakpointState } from '@angular/cdk/layout';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';

class MockBreakpointObserver {
  private _matchesSubject = new BehaviorSubject<BreakpointState>({
    matches: false,
    breakpoints: {},
  });

  observe(value: string[] | string): Observable<BreakpointState> {
    return this._matchesSubject.asObservable();
  }

  setMatches(matches: boolean) {
    this._matchesSubject.next({ matches, breakpoints: {} });
  }
}

describe('ScreenSizeService', () => {
  let service: ScreenSizeService;
  let mockBreakpointObserver: MockBreakpointObserver;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        ScreenSizeService,
        { provide: BreakpointObserver, useClass: MockBreakpointObserver },
      ],
    });

    service = TestBed.inject(ScreenSizeService);

    mockBreakpointObserver = TestBed.inject(
      BreakpointObserver
    ) as any as MockBreakpointObserver;
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should return true for isMobile() when the breakpoint matches', (done) => {
    mockBreakpointObserver.setMatches(true);

    service.isMobile().subscribe((isMobile) => {
      expect(isMobile).toBeTruthy();
      done();
    });
  });

  it('should return false for isMobile() when the breakpoint does not match', (done) => {
    mockBreakpointObserver.setMatches(false);

    service.isMobile().subscribe((isMobile) => {
      expect(isMobile).toBeFalsy();
      done();
    });
  });

  it('should return true for isDesktop() when the breakpoint matches', (done) => {
    mockBreakpointObserver.setMatches(true);

    service.isDesktop().subscribe((isDesktop) => {
      expect(isDesktop).toBeTruthy();
      done();
    });
  });

  it('should return false for isDesktop() when the breakpoint does not match', (done) => {
    mockBreakpointObserver.setMatches(false);

    service.isDesktop().subscribe((isDesktop) => {
      expect(isDesktop).toBeFalsy();
      done();
    });
  });
});
