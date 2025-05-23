import { TestBed } from '@angular/core/testing';

import { ApiMockServiceService } from './api-mock-service.service';

describe('ApiMockServiceService', () => {
  let service: ApiMockServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApiMockServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
