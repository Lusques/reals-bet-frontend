import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedRoutingModule } from './shared-routing.module';
import { ButtonComponent } from './components/button/button.component';
import { LogoComponent } from './components/logo/logo.component';
import { InputIconComponent } from './components/input-icon/input-icon.component';
import { GameCategoryButtonsComponent } from './components/game-category-buttons/game-category-buttons.component';
import { GameCategoryHeaderComponent } from './components/game-category-header/game-category-header.component';
import { GameCategoryWrapperComponent } from './components/game-category-wrapper/game-category-wrapper.component';
import { GameCategoryCardsComponent } from './components/game-category-cards/game-category-cards.component';
import { SliceOrAllPipe } from './pipes/slice-or-all.pipe';

@NgModule({
  declarations: [
    ButtonComponent,
    LogoComponent,
    InputIconComponent,
    GameCategoryButtonsComponent,
    GameCategoryHeaderComponent,
    GameCategoryWrapperComponent,
    GameCategoryCardsComponent,
    SliceOrAllPipe,
  ],
  imports: [CommonModule, SharedRoutingModule],
  exports: [
    ButtonComponent,
    LogoComponent,
    InputIconComponent,
    GameCategoryButtonsComponent,
    GameCategoryWrapperComponent,
  ],
})
export class SharedModule {}
