import { Action } from '@ngrx/store';
export interface UserAction extends Action {
  type: string;
  payload?: any;
}
import { LoginData } from '../components/md_login-data.model';
import { User } from '../components/md_user.model';

export const LOGIN          = '[User] Login';
export const LOGIN_DONE     = '[User] Login Done';
export const LOGIN_FAIL     = '[User] Login Fail';
export const LOGIN_REDIRECT = '[User] Login Redirect';
export const LOGOUT         = '[User] Logout';
export const SET_ERROR      = '[User] Set Error';
export const CLEAR_ERROR    = '[User] Clear Error';


export class Login implements UserAction {
    readonly type = LOGIN;
    constructor(public payload: LoginData) {}
}
export class LoginDone implements UserAction {
    readonly type = LOGIN_DONE;
    constructor(public payload: User) {}
}
export class LoginFail implements UserAction {
    readonly type = LOGIN_FAIL;
    constructor(public payload: { error: string }) {}
}

export class LoginRedirect implements UserAction {
  readonly type = LOGIN_REDIRECT;
}

export class Logout implements UserAction {
    readonly type = LOGOUT;
}

export class SetError implements UserAction {
  readonly type = SET_ERROR;
  constructor(public payload: string) {}
}

export class ClearError implements UserAction {
  readonly type = CLEAR_ERROR;
}

export type Actions
  = Login
  | LoginDone
  | LoginFail
  | LoginRedirect
  | Logout
  | SetError
  | ClearError
;
