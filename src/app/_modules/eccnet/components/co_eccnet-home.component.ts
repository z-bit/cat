import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { Store } from '@ngrx/store';
import * as storeIndex from '../../../store/index';
import * as moduleActions from '../../../store/module.actions';


@Component({
    selector: 'cat-eccnet-home',
    template: `
        <h1>EccnetHome</h1>
        <button (click)="gotoTest()">Test</button>
        <router-outlet></router-outlet>
    `
})
export class EccnetHomeComponent {
    constructor(
        private store: Store<storeIndex.State>,
        public router: Router
    ) {
    //    this.store.dispatch(new moduleActions.SetAction('ECCnet'));
    }
    gotoTest() {
        this.router.navigate(['eccnet/test']);
    }
}