import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FeaturesRoutingModule } from './features-routing.module';
import { DashboardBannerComponent } from './components/dashboard-banner/dashboard-banner.component';


@NgModule({
  declarations: [
    DashboardBannerComponent
  ],
  imports: [
    CommonModule,
    FeaturesRoutingModule
  ]
})
export class FeaturesModule { }
