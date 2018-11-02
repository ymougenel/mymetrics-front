import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/index';
import { ApiConfig } from '../api-config';
import { Tracker } from '../../models/Tracker';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class TrackersService {


  private TRACKERS_URL = `${this._apiConfig.apiUrl}/trackers/`;

  constructor(private _http: HttpClient, private _apiConfig: ApiConfig) {
  }

  getTrackers(): Observable<Tracker[]> {
    console.log('Get trackers called');
    return this._http.get<Tracker[]>(`${this.TRACKERS_URL}`)
      .pipe(map(res => res.map(t => new Tracker(t))));
  }
}
