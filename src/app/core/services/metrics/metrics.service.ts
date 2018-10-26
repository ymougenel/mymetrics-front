import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/index';
import { Metric } from '../../models/metric';
import { ApiConfig } from '../api-config';

@Injectable({
  providedIn: 'root'
})
export class MetricsService {

  private METRICS8URL = `${this._apiConfig.apiUrl}/metrics/`;

  constructor(private _http: HttpClient, private _apiConfig: ApiConfig) {
  }

  postMetric(metric: Metric): Observable<any> {
    console.log('Post metric called with: ' + metric);
    return this._http.post(`${this.METRICS8URL}`, metric);
  }
}
