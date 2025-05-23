import { Game } from './game.models';

export interface GameCategory {
  id: string;
  iconUrl: string;
  totalGames: number;
  games: Game[];
}
