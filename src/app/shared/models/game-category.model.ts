import { Game } from './game.model';

export interface GameCategory {
  id: string;
  iconUrl: string;
  title: string;
  totalGames: number;
  games: Game[];
}
