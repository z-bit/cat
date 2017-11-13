import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/skip';
import 'rxjs/add/operator/takeUntil';
import { of } from 'rxjs/observable/of';

import { Injectable } from '@angular/core';
import { Effect, Actions } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';

import { ApiCareService } from '../components/sv_api-care.service';

import * as firmaActions from './firma.actions';
import * as userActions from './user.actions';

@Injectable()
export class FirmaEffects {

  constructor(
    private actions$: Actions,
    private apiCare: ApiCareService
  ) {}

  @Effect() firma$: Observable<Action> = this.actions$
    .ofType<firmaActions.GetFirma>(firmaActions.GET_FIRMA)
    .map( action => action.payload )
    .switchMap( () => {
      return this.apiCare.get('firma')
        .map( res => new firmaActions.GetFirmaDone(res.firma) )
        .catch( err => of(new firmaActions.GetFirmaFail(err)) )
      ;
    })
  ;

  @Effect() firmaDone$: Observable<Action> = this.actions$
    .ofType<firmaActions.GetFirmaDone>(firmaActions.GET_FIRMA_DONE)
    .map( () => {
      console.log('FirmaEffects - GetFirmaDone - Redirect to Login');
      return new userActions.LoginRedirect();
    })
  ;

  @Effect() firmaFail$: Observable<Action> = this.actions$
    .ofType<firmaActions.GetFirmaFail>(firmaActions.GET_FIRMA_FAIL)
    .map( err => new firmaActions.FirmaRedirect() )
  ;
}
