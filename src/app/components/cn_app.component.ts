import { Component, Input, Output, EventEmitter, ChangeDetectionStrategy, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Observable } from 'rxjs/Observable';
import { Firma } from './md_firma.model';
import { User } from './md_user.model';
import { Module } from './md_module.model';

import * as firmaActions from '../store/firma.actions';
import * as userActions from '../store/user.actions';
import * as moduleActions from '../store/module.actions';

import { Store } from '@ngrx/store';
import * as storeIndex from '../store/index';

export const modules: Module[] = [
  {
    name: 'Home',
    titel: 'Care Angular Tools',
    untertitel: 'Cat\'s Home',
    beschreibung: 'Programm-Auswahl',
    avatarLink: 'assets/Home.png'
  },
  {
    name: 'wh-ex',
    titel: 'WHex',
    untertitel: 'Wagenhandel über Excel',
    beschreibung: '',
    avatarLink: 'assets/Excel.png',
  },
  {
    name: 'dummy',
    titel: '',
    beschreibung: '',
    untertitel: '',
    avatarLink: '',
  },
  {
    name: 'Inventur',
    titel: 'CleoInv',
    beschreibung: '',
    untertitel: '',
    avatarLink: 'assets/Inventur.png',
  },
  {
    name: 'ECCnet',
    titel: 'ECCnet',
    beschreibung: '',
    untertitel: '',
    avatarLink: 'assets/ECCnet.png',
  },
  {
    name: 'Ueben',
    titel: 'Ueben',
    beschreibung: '',
    untertitel: '',
    avatarLink: 'assets/Ueben.png',
  },
];

@Component({
  selector: 'app-root',
  templateUrl: './cn_app.html',
  styleUrls: [ './cn_app.css' ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent implements OnInit {
  @Input() selectedFromMenu: Module;
  @Output() firma$: Observable<Firma>;
  @Output() user$: Observable<User>;
  @Output() module$: Observable<Module>;
  @Output() modules: string[];
  @Output() loggedOut = new EventEmitter();
  private sidenavIsOpen = false;
  moduleList = modules;

  private w: number;
  private h: number;
  fa: string;

  ngOnInit() {
    this.store.dispatch(new firmaActions.GetFirma(null));
  }

  constructor(
  private store: Store<storeIndex.State>,
  private router: Router
  ) {
    this.firma$ = store.select(storeIndex.getFirma);
    this.user$ = store.select(storeIndex.getUser);
    this.module$ = store.select(storeIndex.getModule);
    this.w = window.innerWidth;
    this.h = window.innerHeight;
  }

  logout() {
    this.store.dispatch(new userActions.Logout());
  }

  navigate(module) {
    this.store.dispatch(new moduleActions.SetAction(module));
    const path = module.name.toLowerCase();
    this.router.navigate([path], {queryParams: {init: true}});
  }

  sidenavToggle() {
    this.sidenavIsOpen = !this.sidenavIsOpen;
  }
}
