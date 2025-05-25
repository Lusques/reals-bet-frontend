import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedRoutingModule } from './shared-routing.module';
import { ButtonComponent } from './components/button/button.component';
import { LogoComponent } from './components/logo/logo.component';
import { InputIconComponent } from './components/input-icon/input-icon.component';
import { GameCategoryButtonsComponent } from './components/game-category-buttons/game-category-buttons.component';

@NgModule({
  declarations: [
    ButtonComponent,
    LogoComponent,
    InputIconComponent,
    GameCategoryButtonsComponent,
  ],
  imports: [CommonModule, SharedRoutingModule],
  exports: [
    ButtonComponent,
    LogoComponent,
    InputIconComponent,
    GameCategoryButtonsComponent,
  ],
})
export class SharedModule {}
