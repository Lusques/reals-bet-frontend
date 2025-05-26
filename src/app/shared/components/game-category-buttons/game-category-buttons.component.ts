import { GameCategory } from '@app/shared/models/game-category.model';
import { ApiMockService } from '@app/core/services/api-mock.service';
import {
  Component,
  OnInit,
  Output,
  EventEmitter,
  Input,
  OnDestroy,
} from '@angular/core';
import { AppData } from '@app/shared/models/AppData.model';
import { Subject, takeUntil } from 'rxjs';
import { ButtonVariant } from '@app/shared/types/ui.types';

@Component({
  selector: 'app-game-category-buttons',
  templateUrl: './game-category-buttons.component.html',
  styleUrls: ['./game-category-buttons.component.scss'],
})
export class GameCategoryButtonsComponent implements OnInit, OnDestroy {
  @Output() categorySelected = new EventEmitter<string>();
  @Input() activeCategory: string = 'Todos';
  gameCategory: GameCategory[] = [];
  private destroy$ = new Subject<void>();
  constructor(private apiMockService: ApiMockService) {}

  ngOnInit(): void {
    this.apiMockService
      .getAppData()
      .pipe(takeUntil(this.destroy$))
      .subscribe({
        next: (data: AppData) => {
          this.gameCategory = data.gameCategories;
          this.categorySelected.emit(this.activeCategory);
        },
        error: (error) => {
          console.error('Erro ao carregar categorias dos jogos:', error);
          this.gameCategory = [];
        },
      });
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

  onCategoryClick(categoryTitle: string): void {
    this.activeCategory = categoryTitle;
    this.categorySelected.emit(categoryTitle);
  }

  isActiveButton(categoryTitle: string): ButtonVariant {
    return this.activeCategory === categoryTitle ? 'golden' : 'default';
  }

  getTrackByCategoryId(index: number, category: GameCategory) {
    return category.id || index;
  }
}
