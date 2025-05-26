import { AppData } from '@app/shared/models/AppData.model';
import { ApiMockService } from './../../core/services/api-mock.service';
import { Component, OnInit } from '@angular/core';
import { GameCategory } from '@app/shared/models/game-category.model';

@Component({
  selector: 'app-dashboard-page',
  templateUrl: './dashboard-page.component.html',
  styleUrls: ['./dashboard-page.component.scss'],
})
export class DashboardPageComponent implements OnInit {
  allGameCategories: GameCategory[] = [];
  searchValue: string = '';
  categorySelected: string = '';
  constructor(private apiMockService: ApiMockService) {}

  ngOnInit(): void {
    this.apiMockService.getAppData().subscribe({
      next: (data: AppData) => {
        this.allGameCategories = data.gameCategories;
      },
      error: (error) => {
        console.error('Erro ao carregar API:', error);
      },
    });
  }
  updateCategorySelected(category: string) {
    this.categorySelected = category;
  }

  onSearchChange(value: string) {
    this.searchValue = value;
  }
}
