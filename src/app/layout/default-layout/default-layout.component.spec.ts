// [WIP]: Testes de responsividade - Necessitam de implementação.
// TODO: @Lucas Silva - Prioridade Média: Implementar testes para a lógica de exibição de elementos

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DefaultLayoutComponent } from './default-layout.component';
import { SharedModule } from '../../shared/shared.module';
import { LayoutModule } from '../layout.module';

describe('DefaultLayoutComponent', () => {
  let component: DefaultLayoutComponent;
  let fixture: ComponentFixture<DefaultLayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DefaultLayoutComponent],
      imports: [LayoutModule, SharedModule],
    }).compileComponents();

    fixture = TestBed.createComponent(DefaultLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
