import { Component, OnInit } from '@angular/core';
// import { GridOptions } from 'ag-grid';
import { InventurLaufend} from './md_inventur-laufend.model';
import {InventurAbgeschlossen } from './md_inventur-abgeschlossen.model';


import { Store } from '@ngrx/store';
import * as storeIndex from '../../../store/index';
import * as moduleActions from '../../../store/module.actions';
import { Firma } from '../../../components/md_firma.model';
import { Observable } from 'rxjs/Observable';
import { Router } from '@angular/router';
// import {forEach} from "@angular/router/src/utils/collection";
import { ApiCareService } from '../../../components/sv_api-care.service';



@Component({
  selector: 'cat-app-inventur',
  templateUrl: './co_inventur.html',
  styleUrls: ['./co_inventur.css']
})
export class InventurComponent implements OnInit {
  firma$: Observable<Firma>;

  laufend$: Observable<InventurLaufend[]>;
  private dataLaufend: InventurLaufend[];
  private lfdInvSelected: string;

  abgeschlossen$: Observable<InventurAbgeschlossen[]>;
  private dataAbgeschlossen: InventurAbgeschlossen[];
  private abgInvSelected: string;

  private archiveSelected: string;
  private invFirma: string;
  private invFil: string;
  private fils: string[] =[];

  // private fiLagers: string[] = [];
  private lagers: Array<Array<string>> = [[]];
  private invLager: string;

  private laufendesJahr: string = new Date().getFullYear().toString();
  private invJahr: string = this.laufendesJahr;
  private jahre: string[];
  constructor(
    private store: Store<storeIndex.State>,
    private router: Router,
    private care: ApiCareService
  ) {
    // store.dispatch(new moduleActions.SetAction('Inventur'));
    this.firma$ = store.select(storeIndex.getFirma);
  }

  ngOnInit() {
    this.firma$.subscribe( firma => {
      if (!firma.fa) {
        this.router.navigate(['/home']);
      }
      this.invFirma = firma.fa;           // immer
      this.invFil = firma.fi;             // Anfangswert

      // zu erzeugende Struktur:
      /*
       this.fils = ['01', '02', '03', '04', '05', '11'];

       this.lagers['01'] = ['LG1', 'LW1'];
       this.lagers['02'] = ['LG2'];
       this.lagers['03'] = ['LG3'];
       this.lagers['04'] = ['LG4'];
       this.lagers['05'] = ['LG5'];
       this.lagers['11'] = ['L11', 'W11'];
       */
      firma.fils.forEach(fil => {
        const arr = fil.split(';');
        const fi = arr.shift();
        this.fils.push(fi);
        this.lagers[fi] = arr;
      });

      this.invLager = this.lagers[this.invFil][0]; // Anfangswert, wird aktualisiert in onFilChanged()
      this.laufend$ = this.care.get('inv/laufend');
      this.abgeschlossen$ = this.care.get('inv/abgeschlossen');
    });
    const l = new Date().getFullYear();
    this.jahre = [l.toString(), (l - 1).toString(), (l - 2).toString()];
    this.dataLaufend = [
      {nr: '11', bez: 'Inventur Nr. 1', z1z: 0, z1p: 100, z2z: 0, z2p: 0},
      {nr: '12', bez: 'Inventur Nr. 2', z1z: 0, z1p: 200, z2z: 0, z2p: 0},
      {nr: '13', bez: 'Inventur Nr. 3', z1z: 0, z1p: 300, z2z: 0, z2p: 0},
      {nr: '14', bez: 'Inventur Nr. 4', z1z: 0, z1p: 400, z2z: 0, z2p: 0},
      {nr: '15', bez: 'Inventur Nr. 5', z1z: 0, z1p: 500, z2z: 0, z2p: 0},
      {nr: '21', bez: 'Inventur Nr. 1', z1z: 0, z1p: 100, z2z: 0, z2p: 0},
      {nr: '22', bez: 'Inventur Nr. 2', z1z: 0, z1p: 200, z2z: 0, z2p: 0},
      {nr: '23', bez: 'Inventur Nr. 3', z1z: 0, z1p: 300, z2z: 0, z2p: 0},
      {nr: '24', bez: 'Inventur Nr. 4', z1z: 0, z1p: 400, z2z: 0, z2p: 0},
      {nr: '25', bez: 'Inventur Nr. 5', z1z: 0, z1p: 500, z2z: 0, z2p: 0},
    ];
    const d = '2016-12-31';
    this.dataAbgeschlossen = [
      {nr: '11', bez: 'Inventur Nr. 1', datumZ1: d, datumZ2: d, archive: 55},
      {nr: '12', bez: 'Inventur Nr. 2', datumZ1: d, datumZ2: d, archive: 55},
      {nr: '13', bez: 'Inventur Nr. 3', datumZ1: d, datumZ2: d, archive: 55},
      {nr: '14', bez: 'Inventur Nr. 4', datumZ1: d, datumZ2: d, archive: 55},
      {nr: '15', bez: 'Inventur Nr. 5', datumZ1: d, datumZ2: d, archive: 55},
      {nr: '16', bez: 'Inventur Nr. 6', datumZ1: d, datumZ2: d, archive: 55},
      {nr: '17', bez: 'Inventur Nr. 7', datumZ1: d, datumZ2: d, archive: 55},
      {nr: '18', bez: 'Inventur Nr. 8', datumZ1: d, datumZ2: d, archive: 55},
    ];
  }

  onFilChanged() {
    this.invLager = this.lagers[this.invFil][0];
  }

  onLfdSelected($event) {
    this.lfdInvSelected = $event;

    alert('lfd: ' + $event);
  }

  onAbgSelected($event) {
    this.abgInvSelected = $event.nr;
    this.archiveSelected = $event.archive;
  }

  getZaehlliste() {
    alert(`Zählliste für Inventur Nr. ${this.abgInvSelected}/${this.archiveSelected}`);
  }
}
