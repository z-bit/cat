import {
  ActionReducerMap,
  createSelector,
  createFeatureSelector,
  ActionReducer,
  MetaReducer } from '@ngrx/store';

import { environment } from '../../environments/environment';
import { RouterStateUrl } from '../_modules/shared/router-state-utils';
import * as routerStore from '@ngrx/router-store';

import { storeFreeze } from 'ngrx-store-freeze';

import * as firmaReducer from './firma.reducer';
import * as moduleReducer from './module.reducer';
import * as userReducer from './user.reducer';


export interface State {
    firma: firmaReducer.State;
    module: moduleReducer.State;
    user: userReducer.State;
//  router: routerStore.RouterReducerState<RouterStateUrl>;
}

export const reducers: ActionReducerMap<State> = {
    firma: firmaReducer.reducer,
    module: moduleReducer.reducer,
    user: userReducer.reducer,
//  router: routerStore.routerReducer,
};

// console.log all actions
export function logger(reducer: ActionReducer<State>): ActionReducer<State> {
  return function(state: State, action: any): State {
    console.log('state', state);
    console.log('action', action);
    return reducer(state, action);
  };
}

export const metaReducers: MetaReducer<State>[]
  = !environment.production
  ? [
      //logger,
      storeFreeze ]
  : []
;

export const getFirmaState = (state: State) => state.firma;
export const getFirma = createSelector(getFirmaState, firmaReducer.getFirma);

export const getUserState = (state: State) => state.user;
export const getUser = createSelector(getUserState, userReducer.getUser);

export const getModuleState = (state: State) => state.module;
export const getModule = createSelector(getModuleState, moduleReducer.getModule);

