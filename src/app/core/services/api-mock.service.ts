import { AppData } from 'src/app/shared/models/AppData.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ApiMockService {
  constructor(private httpClient: HttpClient) {}
  private readonly MOCK_DATA_URL = 'assets/data/mock-data.json';
  getAppData(): Observable<AppData> {
    return this.httpClient.get<AppData>(this.MOCK_DATA_URL);
  }
}
