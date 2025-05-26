import { ComponentFixture, TestBed } from '@angular/core/testing';
import { GameCategoryHeaderComponent } from './game-category-header.component';
import { By } from '@angular/platform-browser';
import { GameCategory } from '@app/shared/models/game-category.model';

describe('GameCategoryHeaderComponent', () => {
  let component: GameCategoryHeaderComponent;
  let fixture: ComponentFixture<GameCategoryHeaderComponent>;

  const mockCategory: GameCategory = {
    id: 'popular-games',
    iconUrl: 'popular.svg',
    title: 'Jogos Populares',
    totalGames: 123,
    games: [],
  };

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GameCategoryHeaderComponent],
    });
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GameCategoryHeaderComponent);
    component = fixture.componentInstance;
    component.category = { ...mockCategory };
    component.isExpanded = false;
    fixture.detectChanges();
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  describe('Input Properties', () => {
    it('should display the category title', () => {
      const testTitle = 'Meus Jogos Favoritos';
      component.category = { ...mockCategory, title: testTitle };
      fixture.detectChanges();

      const titleElement: HTMLElement = fixture.debugElement.query(
        By.css('.category-header__col > span.font-body-2')
      ).nativeElement;
      expect(titleElement.textContent).toContain(testTitle);
    });

    it('should display the category icon', () => {
      const testIconUrl = 'path/to/custom-icon.svg';
      component.category = { ...mockCategory, iconUrl: testIconUrl };
      fixture.detectChanges();

      const iconElement: HTMLImageElement = fixture.debugElement.query(
        By.css('.category-header__icon > img')
      ).nativeElement;
      expect(iconElement.src).toContain(testIconUrl);
    });

    it('should display "Ver mais" when not expanded and "Ver menos" when expanded', () => {
      const buttonElement: HTMLElement = fixture.debugElement.query(
        By.css('.category-header__button')
      ).nativeElement;

      expect(buttonElement.textContent).toContain('Ver mais');

      component.isExpanded = true;
      fixture.detectChanges();
      expect(buttonElement.textContent).toContain('Ver menos');

      component.isExpanded = false;
      fixture.detectChanges();
      expect(buttonElement.textContent).toContain('Ver mais');
    });
  });

  describe('Output Events', () => {
    it('should emit onButtonClick when emitButtonClick is called', () => {
      jest.spyOn(component.onButtonClick, 'emit');

      component.emitButtonClick();

      expect(component.onButtonClick.emit).toHaveBeenCalledTimes(1);
    });

    it('should emit onButtonClick when the button is clicked', () => {
      jest.spyOn(component.onButtonClick, 'emit');

      const buttonElement: HTMLElement = fixture.debugElement.query(
        By.css('.category-header__button')
      ).nativeElement;

      buttonElement.click();

      expect(component.onButtonClick.emit).toHaveBeenCalledTimes(1);
    });
  });
});
