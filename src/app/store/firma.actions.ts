import { Action } from '@ngrx/store';
export interface FirmaAction extends Action {
  type: string;
  payload?: any;
}
import { Firma } from '../components/md_firma.model';

export const GET_FIRMA       = '[Firma] Get Firma';
export const GET_FIRMA_DONE  = '[Firma] Get Firma Done';
export const GET_FIRMA_FAIL  = '[Firma] Get Firma Fail';
export const FIRMA_REDIRECT  = '[Firma] Redirect';


export class GetFirma implements FirmaAction {
    readonly type = GET_FIRMA;
    constructor(public payload: void) {}
}

export class GetFirmaDone implements FirmaAction {
    readonly type = GET_FIRMA_DONE;
    constructor(public payload: Firma) {}
}

export class GetFirmaFail implements FirmaAction {
    readonly type = GET_FIRMA_FAIL;
    constructor(public payload: string) {}
}

export class FirmaRedirect implements FirmaAction {
    readonly type = FIRMA_REDIRECT;
}

export type Actions
  = GetFirma
  | GetFirmaDone
  | GetFirmaFail
  | FirmaRedirect
;
