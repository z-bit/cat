import { Injectable } from '@angular/core';
import { Effect, Actions } from '@ngrx/effects';
import { Router } from '@angular/router';

import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/exhaustMap';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/take';
import { of } from 'rxjs/observable/of';

import { LoginService } from '../components/sv_login.service';
import * as userActions from './user.actions';

@Injectable()
export class UserEffects {

  constructor(
    private actions$: Actions,
    private loginService: LoginService,
    private router: Router
  ) {}

  @Effect()
  login$ = this.actions$.ofType(userActions.LOGIN)
    .map( (action: userActions.Login) => action.payload )
    .exhaustMap( loginData => this.loginService
      .careLogin(loginData)
      .map( user => new userActions.LoginDone(user))
      .catch( error => of(new userActions.LoginFail(error)))
    )
  ;

  @Effect({ dispatch: false })
  loginDone$ = this.actions$.ofType(userActions.LOGIN_DONE)
    .do( () => this.router.navigate(['/']))
  ;

  @Effect()
  loginFail$ = this.actions$.ofType(userActions.LOGIN_FAIL)
    .map( (action: userActions.LoginFail) => action.payload.error )
    .exhaustMap ( err => of(new userActions.SetError(err)) )
  ;

  @Effect({ dispatch: false })
  loginRedirect$ = this.actions$.ofType(
    userActions.LOGIN_REDIRECT,
    userActions.LOGOUT,
    userActions.LOGIN_FAIL
  ).do( () => this.router.navigate(['/login']))
  ;
}
