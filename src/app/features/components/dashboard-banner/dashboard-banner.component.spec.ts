import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DashboardBannerComponent } from './dashboard-banner.component';
import { ApiMockService } from './../../../core/services/api-mock.service';
import { of, throwError } from 'rxjs';
import { AppData } from 'src/app/shared/models/AppData.model';
import { Banner } from 'src/app/shared/models/banner.model';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('DashboardBannerComponent', () => {
  let component: DashboardBannerComponent;
  let fixture: ComponentFixture<DashboardBannerComponent>;
  let mockApiMockService: any;

  const mockBanners: Banner[] = [
    {
      id: '1',
      imageUrl: 'banner1.png',
      altText: 'Banner de Exemplo 1',
      link: '/promo1',
    },
    { id: '2', imageUrl: 'banner2.png', altText: 'Banner de Exemplo 2' },
    {
      id: '3',
      imageUrl: 'banner3.png',
      altText: 'Banner de Exemplo 3',
      link: '/promo3',
    },
  ];

  const mockAppData: AppData = {
    banners: mockBanners,
    gameCategories: [],
  };

  beforeEach(() => {
    mockApiMockService = {
      getAppData: jest.fn().mockReturnValue(of(mockAppData)),
    };

    TestBed.configureTestingModule({
      declarations: [DashboardBannerComponent],
      imports: [HttpClientTestingModule, RouterTestingModule],
      providers: [{ provide: ApiMockService, useValue: mockApiMockService }],
    });
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardBannerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  describe('ngOnInit', () => {
    it('should call apiMockService.getAppData on ngOnInit', () => {
      expect(mockApiMockService.getAppData).toHaveBeenCalledTimes(1);
    });

    it('should populate bannerSlides with data from apiMockService', () => {
      expect(component.bannerSlides).toEqual(mockBanners);
    });

    it('should set bannerSlides to empty array and log error if apiMockService.getAppData fails', () => {
      mockApiMockService.getAppData.mockReturnValue(
        throwError(() => new Error('API Error'))
      );
      const consoleSpy = jest
        .spyOn(console, 'error')
        .mockImplementation(() => {});

      fixture = TestBed.createComponent(DashboardBannerComponent);
      component = fixture.componentInstance;
      fixture.detectChanges();

      expect(component.bannerSlides).toEqual([]);
      expect(consoleSpy).toHaveBeenCalledWith(
        'Erro ao carregar dados do banner:',
        expect.any(Error)
      );
      consoleSpy.mockRestore();
    });
  });

  describe('Component Methods', () => {
    it('haveSlides should return true if bannerSlides has elements', () => {
      component.bannerSlides = mockBanners;
      expect(component.haveSlides()).toBe(true);
    });

    it('haveSlides should return false if bannerSlides is empty', () => {
      component.bannerSlides = [];
      expect(component.haveSlides()).toBe(false);
    });

    it('trackBySlideId should return slide.id combined with index if slide.id is available', () => {
      const slide1: Banner = {
        id: 'slide-abc',
        imageUrl: 'test.png',
        altText: 'Test Alt',
      };
      expect(component.trackBySlideId(0, slide1)).toBe('slide-abc-0');
    });

    it('trackBySlideId should return index if slide.id is not available', () => {
      const slide2: Banner = {
        id: '',
        imageUrl: 'test.png',
        altText: 'Test Alt',
      };
      expect(component.trackBySlideId(1, slide2)).toBe(1);

      const slide3: Banner = {
        imageUrl: 'test.png',
        altText: 'Test Alt',
      } as Banner;
      expect(component.trackBySlideId(2, slide3)).toBe(2);
    });
  });
});
