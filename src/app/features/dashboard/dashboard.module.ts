import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardPageComponent } from './dashboard-page.component';
import { DashboardBannerComponent } from '../components/dashboard-banner/dashboard-banner.component';
import { SharedModule } from '@app/shared/shared.module';

@NgModule({
  declarations: [DashboardPageComponent, DashboardBannerComponent],
  imports: [CommonModule, DashboardRoutingModule, SharedModule],
  exports: [DashboardPageComponent],
})
export class DashboardModule {}
