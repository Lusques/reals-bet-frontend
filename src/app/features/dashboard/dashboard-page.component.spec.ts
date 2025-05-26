import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DashboardPageComponent } from './dashboard-page.component';
import { ApiMockService } from './../../core/services/api-mock.service';
import { of } from 'rxjs';
import { AppData } from '@app/shared/models/AppData.model';
import { GameCategory } from '@app/shared/models/game-category.model';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { SharedModule } from '@app/shared/shared.module';
import { FeaturesModule } from '../features.module';

describe('DashboardPageComponent', () => {
  let component: DashboardPageComponent;
  let fixture: ComponentFixture<DashboardPageComponent>;
  let mockApiMockService: any;

  const mockGameCategories: GameCategory[] = [
    { id: 'cat1', iconUrl: '', title: 'Ação', totalGames: 10, games: [] },
    { id: 'cat2', iconUrl: '', title: 'Aventura', totalGames: 5, games: [] },
  ];

  const mockAppData: AppData = {
    gameCategories: mockGameCategories,
    banners: [],
  };

  beforeEach(async () => {
    mockApiMockService = {
      getAppData: jest.fn().mockReturnValue(of(mockAppData)),
    };

    await TestBed.configureTestingModule({
      declarations: [DashboardPageComponent],
      imports: [
        HttpClientTestingModule,
        RouterTestingModule,
        SharedModule,
        FeaturesModule,
      ],
      providers: [{ provide: ApiMockService, useValue: mockApiMockService }],
    }).compileComponents();

    fixture = TestBed.createComponent(DashboardPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('should load game categories on ngOnInit', () => {
    expect(mockApiMockService.getAppData).toHaveBeenCalled();
    expect(component.allGameCategories).toEqual(mockGameCategories);
  });

  describe('State Update Methods', () => {
    it('should update categorySelected when updateCategorySelected is called', () => {
      const newCategory = 'Esportes';
      component.updateCategorySelected(newCategory);
      fixture.detectChanges();
      expect(component.categorySelected).toBe(newCategory);
    });

    it('should update searchValue when onSearchChange is called', () => {
      const newSearchValue = 'cassino';
      component.onSearchChange(newSearchValue);
      fixture.detectChanges();
      expect(component.searchValue).toBe(newSearchValue);
    });
  });
});
