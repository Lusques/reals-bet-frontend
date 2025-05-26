import { Injectable } from '@angular/core';
import { BreakpointObserver } from '@angular/cdk/layout';
import { map, Observable, shareReplay } from 'rxjs';
import {
  APP_DESKTOP_MEDIA_QUERIES,
  APP_MOBILE_MEDIA_QUERIES,
} from '../enums/app-breakpoints';

@Injectable({
  providedIn: 'root',
})
export class ScreenSizeService {
  constructor(private breakpointObserver: BreakpointObserver) {}

  isMobile(): Observable<boolean> {
    return this.breakpointObserver.observe(APP_MOBILE_MEDIA_QUERIES).pipe(
      map((result) => result.matches),
      shareReplay()
    );
  }
  isDesktop(): Observable<boolean> {
    return this.breakpointObserver.observe(APP_DESKTOP_MEDIA_QUERIES).pipe(
      map((result) => result.matches),
      shareReplay()
    );
  }
}
