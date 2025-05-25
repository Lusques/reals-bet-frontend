import { Component, Input, OnInit } from '@angular/core';
import { Game } from '@app/shared/models/game.model';

@Component({
  selector: 'app-game-category-cards',
  templateUrl: './game-category-cards.component.html',
  styleUrls: ['./game-category-cards.component.scss'],
})
export class GameCategoryCardsComponent {
  @Input() games: Game[] = [];

  getTrackByCardId(index: number, game: Game) {
    return game.id ? game.id : index;
  }
}
