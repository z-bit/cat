import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AppMaterialModule } from '../../app-material';

import { AgGridModule } from 'ag-grid-angular/main';




import { InventurComponent } from './components/co_inventur.component';
import { LaufendeInventurenComponent } from './components/co_laufende-inventuren.component';
import { AbgeschlosseneInventurenComponent } from './components/co_abgeschlossene-inventuren.component';

import { InventurRouting } from './inventur-routing';



@NgModule({
  declarations: [
      InventurComponent,
      LaufendeInventurenComponent,
      AbgeschlosseneInventurenComponent,

  ],
  imports: [
    CommonModule,
    FormsModule,
    AppMaterialModule,
    AgGridModule.withComponents([]),
    InventurRouting,
  ],
  exports: [AppMaterialModule]
})
export class InventurModule { }
