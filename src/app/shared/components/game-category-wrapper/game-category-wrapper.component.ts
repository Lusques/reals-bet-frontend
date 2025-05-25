import { Component, Input, OnInit } from '@angular/core';
import { GameCategory } from '@app/shared/models/game-category.model';
import { Game } from '@app/shared/models/game.model';

@Component({
  selector: 'app-game-category-wrapper',
  templateUrl: './game-category-wrapper.component.html',
  styleUrls: ['./game-category-wrapper.component.scss'],
})
export class GameCategoryWrapperComponent implements OnInit {
  @Input() category: GameCategory = {
    id: '',
    iconUrl: '',
    title: '',
    totalGames: 0,
    games: [],
  };
  games: Game[] = [];
  ngOnInit(): void {
    this.games = this.category.games;
  }
}
