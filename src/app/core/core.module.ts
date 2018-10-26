import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ApiConfig } from './services/api-config';
import { environment } from '../../environments/environment';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [],
  providers: [
    {provide: ApiConfig, useValue: {apiUrl: environment.API_URL}},
  ],
})
export class CoreModule { }
