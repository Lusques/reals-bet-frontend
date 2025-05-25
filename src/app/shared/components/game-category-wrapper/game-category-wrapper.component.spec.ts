import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GameCategoryWrapperComponent } from './game-category-wrapper.component';

describe('GameCategoryWrapperComponent', () => {
  let component: GameCategoryWrapperComponent;
  let fixture: ComponentFixture<GameCategoryWrapperComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GameCategoryWrapperComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GameCategoryWrapperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
