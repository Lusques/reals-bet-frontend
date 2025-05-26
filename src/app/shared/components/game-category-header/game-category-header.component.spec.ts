import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GameCategoryHeaderComponent } from './game-category-header.component';

describe('GameCategoryHeaderComponent', () => {
  let component: GameCategoryHeaderComponent;
  let fixture: ComponentFixture<GameCategoryHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GameCategoryHeaderComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GameCategoryHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
