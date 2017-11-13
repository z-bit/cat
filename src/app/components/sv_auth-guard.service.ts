import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { Store } from '@ngrx/store';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/take';
import { User } from './md_user.model';
import * as userReducer from '../store/user.reducer';
import * as userActions from '../store/user.actions';

@Injectable()
export class AuthGuardService implements CanActivate {

  constructor (private store: Store<userReducer.State>) {}

  canActivate(): Observable<boolean> {
    return this.store
    .select(userReducer.getUser)
    .map( (user: User) => {
      // console.log('AuthGuardService - user: ', user, user.pnr);
      if (user.name === '') {
        // console.log('AuthGuardService -> LoginRedirect ');
        this.store.dispatch(new userActions.LoginRedirect());
        return false;
      }
      return true;
    }).take(1);
  }
}

