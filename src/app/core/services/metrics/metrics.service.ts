import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/index';
import { Metric } from '../../models/metric';

@Injectable({
  providedIn: 'root'
})
export class MetricsService {

  private url = 'http://localhost:8092/metrics/';

  constructor(private _http: HttpClient) {
  }

  postMetric(metric: Metric): Observable<any> {
    console.log('Post metric called with: ' + metric);
    return this._http.post(`${this.url}`, metric);
  }
}
