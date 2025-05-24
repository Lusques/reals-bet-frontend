import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DefaultLayoutComponent } from './default-layout/default-layout.component';
import { DefaultLayoutHeaderComponent } from './components/default-layout-header/default-layout-header.component';
import { SharedModule } from '../shared/shared.module';
import { DefaultLayoutFooterMobileComponent } from './components/default-layout-footer-mobile/default-layout-footer-mobile.component';
import { DefaultLayoutFooterDesktopComponent } from './components/default-layout-footer-desktop/default-layout-footer-desktop.component';
import { DashboardModule } from '@app/features/dashboard/dashboard.module';

@NgModule({
  declarations: [DefaultLayoutComponent, DefaultLayoutHeaderComponent, DefaultLayoutFooterMobileComponent, DefaultLayoutFooterDesktopComponent],
  imports: [CommonModule, SharedModule, DashboardModule],
  exports: [DefaultLayoutComponent, DefaultLayoutHeaderComponent],
})
export class LayoutModule {}
