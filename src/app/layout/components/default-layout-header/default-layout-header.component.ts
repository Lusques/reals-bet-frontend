import { Observable } from 'rxjs';
import { ScreenSizeService } from '../../../shared/services/screen-size.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-default-layout-header',
  templateUrl: './default-layout-header.component.html',
  styleUrls: ['./default-layout-header.component.scss'],
})
export class DefaultLayoutHeaderComponent implements OnInit {
  isMobileScreen$!: Observable<boolean>;
  isDesktopScreen$!: Observable<boolean>;
  constructor(private screenSizeService: ScreenSizeService) {}
  ngOnInit(): void {
    this.isMobileScreen$ = this.screenSizeService.isMobile();
    this.isDesktopScreen$ = this.screenSizeService.isDesktop();
  }
}
