import {Inject, Injectable } from '@angular/core';
import { Http, URLSearchParams } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/take';
import 'rxjs/add/operator/mergeMap';

import { APP_CONFIG, AppConfig } from '../store/app.config';

import { LoginData } from './md_login-data.model';
import { User } from './md_user.model';
import { Store } from '@ngrx/store';
import * as storeIndex from '../store';
import * as userActions from '../store/user.actions';
import { _throw } from 'rxjs/observable/throw';


@Injectable()
export class LoginService {
  user$: Observable<User>;
  constructor(
    private http: Http,
    private store: Store<storeIndex.State>,
    @Inject(APP_CONFIG) private appConfig: AppConfig
  ) {
    this.user$ = this.store.select(storeIndex.getUser);
  }

  careLogin(login: LoginData): Observable<User> {

    if (login.pass === '') {
      // Login mit Personalnummer
      const url = `${this.appConfig.careApiUrl}/login/${login.fa}/${login.name}`;
      console.log('LoginService - PNR - ', url);
      return this.http
        .get(url)
        .map( res => {
          if (res.json().error) {
            return _throw(res.json());
          }
          return res.json().user;
        })
      ;

      /*
      return this.http
        .get(`${this.appConfig.careApiUrl}/login/${login.fa}/${login.name}`)
        .map ( res => {
          console.log('LoginService - response.json(): ', res.json());
          
          const err = res.json().error;
          if (err) {
            console.log('LoginService: ', err);
            return _throw(err);
          }
          const user = res.json().user;
          console.log('LoginService: ', user);
          
          return res.json();
          
        })
       ;
        */


    } else {
      // Login mit Care User und Passwort
      console.log('LoginService - careLogin');
      const data = new URLSearchParams();
      data.append('benutzer', login.name);
      data.append('passwort', login.pass);
      return this.http
        .post(`${this.appConfig.careApiUrl}/login/${login.fa}`, data)
        .map ( res => {
          console.log('LoginService - response.json(): ', res.json());
          const err = res.json().error;
          if (err) {
            console.log('LoginService: ', err);
            return _throw(err);
          }
          const user = res.json().user;
          console.log('LoginService: ', user);
          return user;
        })
      ;
    }
  }
}
