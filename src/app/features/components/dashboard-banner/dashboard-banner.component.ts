import { AppData } from 'src/app/shared/models/AppData.model';
import { Banner } from 'src/app/shared/models/banner.model';
import { ApiMockService } from './../../../core/services/api-mock.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard-banner',
  templateUrl: './dashboard-banner.component.html',
  styleUrls: ['./dashboard-banner.component.scss'],
})
export class DashboardBannerComponent implements OnInit {
  bannerSlides: Banner[] = [];
  constructor(private apiMockService: ApiMockService) {}
  ngOnInit(): void {
    this.apiMockService.getAppData().subscribe({
      next: (data: AppData) => {
        this.bannerSlides = [...data.banners];
      },
      error: (error) => {
        console.error('Erro ao carregar dados do banner:', error);
      },
    });
  }

  haveSlides(): boolean {
    return this.bannerSlides.length > 0;
  }

  trackBySlideId(index: number, slide: Banner) {
    return slide.id ?`${slide.id}-${index}` : index;
  }
}
