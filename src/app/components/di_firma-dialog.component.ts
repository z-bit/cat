import { Component, Input, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material';
import { Firma } from './md_firma.model';

@Component({
  selector: 'cat-firma-dialog',
  templateUrl: 'di_firma-dialog.html',
  styleUrls: [ 'di_firma-dialog.css' ]
})
export class FirmaDialogComponent implements OnInit{
  fils = '';
  @Input() firma: Firma;

  constructor(
    public dialogRef: MatDialogRef<FirmaDialogComponent>
  ) {}

  ngOnInit() {
    this.firma.fils.forEach( (fi) => {
      this.fils += fi.substr(0,2) + ', ';
    });
    this.fils = this.fils.substr(0, this.fils.length - 2); // ", "
  }
}
