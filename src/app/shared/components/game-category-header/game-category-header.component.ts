import { Component, EventEmitter, Input, Output } from '@angular/core';
import { GameCategory } from '@app/shared/models/game-category.model';

@Component({
  selector: 'app-game-category-header',
  templateUrl: './game-category-header.component.html',
  styleUrls: ['./game-category-header.component.scss'],
})
export class GameCategoryHeaderComponent {
  @Input() category: GameCategory = {
    id: '',
    iconUrl: '',
    title: '',
    totalGames: 0,
    games: [],
  };
  @Input() isExpanded: boolean = false;
  @Output() onButtonClick = new EventEmitter<void>();

  emitButtonClick() {
    this.onButtonClick.emit();
  }
}
