import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DefaultLayoutHeaderComponent } from './default-layout-header.component';
import { SharedModule } from '../../../shared/shared.module';

describe('DefaultLayoutHeaderComponent', () => {
  let component: DefaultLayoutHeaderComponent;
  let fixture: ComponentFixture<DefaultLayoutHeaderComponent>;
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DefaultLayoutHeaderComponent],
      imports: [SharedModule],
    }).compileComponents();
    fixture = TestBed.createComponent(DefaultLayoutHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
