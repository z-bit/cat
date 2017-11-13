import { Component, OnInit } from '@angular/core';


import { Store } from '@ngrx/store';
import * as storeIndex from '../../../store/index';
import * as moduleActions from '../../../store/module.actions';


@Component({
  selector: 'cat-excel',
  template: `
      <p>
          wh-ex works!
      </p>
    <router-outlet></router-outlet>

  `
})
export class WhExComponent implements OnInit {

  constructor(
     // private store: Store<storeIndex.State>,
  ) {
  //    this.store.dispatch(new moduleActions.SetAction('Excel'));
  }

  ngOnInit() {
  }

}
