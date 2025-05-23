import { TestBed } from '@angular/core/testing';
import { ApiMockService } from './api-mock.service';
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';

describe('ApiMockService', () => {
  let service: ApiMockService;
  let httpClientController: HttpTestingController;
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [ApiMockService],
    });
    service = TestBed.inject(ApiMockService);
    httpClientController = TestBed.inject(HttpTestingController);
  });
  afterEach(() => {
    httpClientController.verify();
  });

  it('Should be created', () => {
    expect(service).toBeTruthy();
  });

  it('Should retrieve app data from the mock JSON', (done) => {
    const dummyAppData = {
      banners: [
        {
          id: 'banner-1',
          imageUrl: 'url-banner',
          altText: 'banner alternative description',
          link: '',
        },
      ],
      gameCategories: [
        {
          id: 'category-1',
          iconUrl: 'url-icon',
          title: 'category-title',
          totalGames: 10,
          games: [
            {
              id: 'game-1',
              imageUrl: 'url-game',
              altText: 'game alternative description',
              title: 'game title',
              provider: 'provider',
              tags: ['tag-1', 'tag-2', 'tag-3'],
            },
          ],
        },
      ],
    };

    service.getAppData().subscribe((data) => {
      expect(data).toEqual(dummyAppData);
      done();
    });

    const request = httpClientController.expectOne(
      'assets/data/mock-data.json'
    );

    expect(request.request.method).toEqual('GET');
    request.flush(dummyAppData);
  });
});
