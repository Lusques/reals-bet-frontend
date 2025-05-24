// [WIP]: Testes do Service - Necessitam de implementação.
// TODO: @Lucas Silva - Prioridade Média: Implementar testes para a lógica de exibição de elementos
import { TestBed } from '@angular/core/testing';
import { ScreenSizeService } from './screen-size.service';
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';

describe('ScreenSizeService', () => {
  let service: ScreenSizeService;
  let httpTestingController: HttpTestingController;
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [ScreenSizeService],
    });
  });
  beforeEach(() => {
    service = TestBed.inject(ScreenSizeService);
    httpTestingController = TestBed.inject(HttpTestingController);
  });
  afterEach(() => {
    httpTestingController.verify();
  });

  it('Should be created', () => {
    expect(service).toBeTruthy();
  });
});
