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
      const url1 = `${this.appConfig.careApiUrl}/login/${login.fa}/${login.name}`;
      console.log('LoginService - PNR - ', url1);
      return this.http
        .get(url1)
        .map ( res => {
          console.log('UserService - response.json(): ', res.json());

          const time = res.json().time;
          // todo log time
          console.log('time: ', time);

          const err = res.json().error;
          if (err) {
            console.log('LoginService', err);
            this.store.dispatch(new userActions.LoginFail(err));
            return new Error(err);
          } else {
            const user = res.json().user;
            console.log('LoginService', user);
            this.store.dispatch(new userActions.LoginDone(user));
            return user;
          }
        })
        .filter(res => res.fa !== '')
        .take(1)
      ;
    } else {
      console.log('LoginService - careLogin');
      const data = new URLSearchParams();
      data.append('benutzer', login.name);
      data.append('passwort', login.pass);
      return this.http
        .post(`${this.appConfig.careApiUrl}/login/${login.fa}`, data)
        .map ( res => {
          console.log('UserService - response.json(): ', res.json());
          const time = res.json().time;
          // todo log time
          console.log('time: ', time);

          const err = res.json().error;
          if (err) {
            return new Error(err);
          } else {
            return res.json().user;
          }
        })
        .filter(res => res.fa !== '')
        .take(1)
      ;
    }
  }
}
