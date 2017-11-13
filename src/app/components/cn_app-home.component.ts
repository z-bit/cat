import {Component, OnInit, OnDestroy, ChangeDetectionStrategy} from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { DialogService } from './sv_dialog.service';
import { Firma } from './md_firma.model';
import { LoginData } from './md_login-data.model';
import { User } from './md_user.model';
import { Module } from './md_module.model';
import { modules } from './cn_app.component';



import { Store } from '@ngrx/store';
import * as storeIndex from '../store/index';
import * as firmaActions from '../store/firma.actions';
import * as userActions from '../store/user.actions';
import * as moduleActions from '../store/module.actions';

@Component({
  selector: 'cat-app-home',
  templateUrl: 'cn_app-home.html',
  styleUrls: [ 'cn_app-home.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppHomeComponent implements OnInit, OnDestroy {
  firma$: Observable<Firma>;
  login$: Observable<LoginData>;
  user$: Observable<User>;
  module$: Observable<Module>;
  moduleList: Module[];
  userSubscription;
  fa = '';
  pnr = '';

  constructor(
    private store: Store<storeIndex.State>,
    private dialogService: DialogService
  ) {
    this.moduleList = modules;
  }

  ngOnInit() {
    /*
    // nur um zu sehen, ob die Fa bereits ermittelt ist
    this.firma$ = this.store.select(storeIndex.getFirma).take(1);
    this.firma$.subscribe(fa => this.fa = fa.fa);

    // reagiert auf Änderungen der Pnr: wenn leer, dann Login-Dialog
    // onDestroy: userSubscription.unsubscribe() ==> wichtig
    this.user$ = this.store.select(storeIndex.getUser);
    this.userSubscription = this.user$.subscribe(
    user => {
      this.pnr = user.pnr;
      console.log('*** userSubscription - fa pnr', this.fa, this.pnr);
      if (this.fa && !this.pnr) {
        console.log('*** LOGIN DIALOG ***');
        this.login$ = this.dialogService.loginDialog();
        this.login$.subscribe(
        loginDialog => {
          const login: LoginData = Object.assign({}, loginDialog, {fa: this.fa});
          this.store.dispatch(new userActions.LoginAction(login));
        }
        // error wird von LoginErrorAction behandelt
        );
      } else {
        console.log('*** NO LOGIN ***');
      }
    }
    );

    
    }
    /**/
  }

  ngOnDestroy() {
    // Wichtig: sonst laufen mehrere subscribe, wenn mann aus einem anderen Modul
    // ausloggt, d.h Login kommt dann doppelt
    //this.userSubscription.unsubscribe();
  }
}
