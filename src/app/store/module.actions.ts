import { Action } from '@ngrx/store';
import { Module } from '../components/md_module.model';

export interface ModuleAction extends Action {
  type: string;
  payload?: any;
}

export const SET = '[Module] Set';
export const GET = '[Module] Get';

export class SetAction implements ModuleAction {
    readonly type = SET;
    constructor(public payload: Module) {}
}
export class GetAction implements ModuleAction {
    readonly type = GET;
}

export type Actions = GetAction | SetAction;
