import { Banner } from './banner.model';
import { GameCategory } from './game-category.model';

export interface AppData {
  banners: Banner[];
  gameCategories: GameCategory[];
}
