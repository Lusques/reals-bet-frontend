import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GameCategoryButtonsComponent } from './game-category-buttons.component';
import { SharedModule } from '@app/shared/shared.module';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('GameCategoryButtonsComponent', () => {
  let component: GameCategoryButtonsComponent;
  let fixture: ComponentFixture<GameCategoryButtonsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [GameCategoryButtonsComponent],
      imports: [SharedModule, HttpClientTestingModule],
    }).compileComponents();

    fixture = TestBed.createComponent(GameCategoryButtonsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
