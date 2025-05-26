import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GameCategoryCardsComponent } from './game-category-cards.component';
import { SharedModule } from '@app/shared/shared.module';

describe('GameCategoryCardsComponent', () => {
  let component: GameCategoryCardsComponent;
  let fixture: ComponentFixture<GameCategoryCardsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [GameCategoryCardsComponent],
      imports: [SharedModule],
    }).compileComponents();

    fixture = TestBed.createComponent(GameCategoryCardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
