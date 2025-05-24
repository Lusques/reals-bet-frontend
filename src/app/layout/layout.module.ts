import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DefaultLayoutComponent } from './default-layout/default-layout.component';
import { DefaultLayoutHeaderComponent } from './components/default-layout-header/default-layout-header.component';
import { SharedModule } from '../shared/shared.module';
import { DefaultLayoutFooterMobileComponent } from './components/default-layout-footer-mobile/default-layout-footer-mobile.component';

@NgModule({
  declarations: [DefaultLayoutComponent, DefaultLayoutHeaderComponent, DefaultLayoutFooterMobileComponent],
  imports: [CommonModule, SharedModule],
  exports: [DefaultLayoutComponent, DefaultLayoutHeaderComponent],
})
export class LayoutModule {}
