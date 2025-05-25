import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FeaturesRoutingModule } from './features-routing.module';
import { DashboardBannerComponent } from './components/dashboard-banner/dashboard-banner.component';
import { DashboardModule } from './dashboard/dashboard.module';


@NgModule({
  declarations: [
  ],
  imports: [
    CommonModule,
    DashboardModule,
    FeaturesRoutingModule
  ]
})
export class FeaturesModule { }
