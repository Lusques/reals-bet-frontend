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
  @Input() categorySelected: string = '';
  @Input() category: GameCategory = {
    id: '',
    iconUrl: '',
    title: '',
    totalGames: 0,
    games: [],
  };
  @Input() query: string = '';
  hasVisibleGame: boolean = true;
  showAllGames: boolean = false;

  ngOnInit(): void {
    this.showAllGames = this.showAllGamesInitial;
  }
  ngOnChanges(changes: SimpleChanges): void {
    if (changes['category'] && changes['category'].currentValue) {
      this.showAllGames = this.showAllGamesInitial;
    } else if (changes['showAllGamesInitial']) {
      this.showAllGames = changes['showAllGamesInitial'].currentValue;
    }
    if (changes['query'] || changes['categorySelected']) {
      this.hasVisibleGame = this.getFilteredGamesCount() > 0;
    }
  }
  getFilteredGamesCount() {
    const count = this.queryGames().length;
    return count;
  }
  queryGames(): Game[] {
    const gamesFilteredByCategory = this.filterByCategory();
    return this.filterByInput(gamesFilteredByCategory);
  }
  filterByInput(games: Game[]) {
    const gamess: Game[] = games;
    if (this.query.trim() === '') return gamess;
    return gamess.filter((game) =>
      game.title.toLowerCase().includes(this.query.toLowerCase().trim())
    );
  }
  filterByCategory(): Game[] {
    if (
      this.categorySelected === 'Todos' ||
      this.category.title === this.categorySelected
    ) {
      return this.category.games;
    }
    return [];
  }

  toggleShowAllGames(): void {
    this.showAllGames = !this.showAllGames;
  }
}
