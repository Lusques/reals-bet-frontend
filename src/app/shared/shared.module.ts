import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedRoutingModule } from './shared-routing.module';
import { ButtonComponent } from './components/button/button.component';
import { LogoComponent } from './components/logo/logo.component';
import { InputIconComponent } from './components/input-icon/input-icon.component';

@NgModule({
  declarations: [ButtonComponent, LogoComponent, InputIconComponent],
  imports: [CommonModule, SharedRoutingModule],
  exports: [ButtonComponent, LogoComponent, InputIconComponent],
})
export class SharedModule {}
