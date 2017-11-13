import { Http } from '@angular/http';
import { Inject, Injectable } from '@angular/core';

import { APP_CONFIG, AppConfig } from '../store/app.config';

@Injectable()
export class ApiCareService {
  constructor(
    private http: Http,
    @Inject(APP_CONFIG) private appConfig: AppConfig
  ) {}

  get(url: string) {
    return this.http
      .get(`${this.appConfig.careApiUrl}/${url}`)
      .take(1)
      .map(res => {
        console.log(`ApiCareService - ${url} - response.json(): `, res.json());

        const time = res.json().time;
        // todo log time
        console.log('time: ', time);

        const err = res.json().error;
        if (err) {
          return new Error(err);
        } else {
          if (res.json().data) {
            return res.json().data;
            } else {
              return res.json();
            }
        }
      })
    ;
  }
}