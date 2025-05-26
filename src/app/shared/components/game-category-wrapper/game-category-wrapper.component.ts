import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  OnInit,
  Output,
  SimpleChanges,
} from '@angular/core';
import { GameCategory } from '@app/shared/models/game-category.model';
import { Game } from '@app/shared/models/game.model';

@Component({
  selector: 'app-game-category-wrapper',
  templateUrl: './game-category-wrapper.component.html',
  styleUrls: ['./game-category-wrapper.component.scss'],
})
export class GameCategoryWrapperComponent implements OnInit, OnChanges {
  @Input() showAllGamesInitial: boolean = false;
  @Input() category: GameCategory = {
    id: '',
    iconUrl: '',
    title: '',
    totalGames: 0,
    games: [],
  };
  @Input() query: string = '';
  hasVisibleGame: boolean = true;
  games: Game[] = [];
  showAllGames: boolean = false;

  ngOnInit(): void {
    this.games = this.category.games;
    this.showAllGames = this.showAllGamesInitial;
  }
  ngOnChanges(changes: SimpleChanges): void {
    if (changes['category'] && changes['category'].currentValue) {
      this.games = changes['category'].currentValue.games;
      this.showAllGames = this.showAllGamesInitial;
    } else if (changes['showAllGamesInitial']) {
      this.showAllGames = changes['showAllGamesInitial'].currentValue;
    }
    if (changes['query']) {
      this.hasVisibleGame = this.queryGames().length > 0;
    }
  }
  queryGames(): Game[] {
    if (this.query.trim() === '') return this.games;
    return this.games.filter((game) =>
      game.title.toLowerCase().includes(this.query.toLowerCase().trim())
    );
  }
  toggleShowAllGames(): void {
    this.showAllGames = !this.showAllGames;
  }
}
