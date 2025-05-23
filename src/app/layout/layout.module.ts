import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DefaultLayoutComponent } from './default-layout/default-layout.component';
import { DefaultLayoutHeaderComponent } from './components/default-layout-header/default-layout-header.component';

@NgModule({
  declarations: [DefaultLayoutComponent, DefaultLayoutHeaderComponent],
  imports: [CommonModule],
  exports: [DefaultLayoutComponent],
})
export class LayoutModule {}
