import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WhExRouting } from './wh-ex-routing';

import { WhExComponent } from './components/cn_wh-ex.component';


@NgModule({
  imports: [
    CommonModule,
    // StoreModule.forFeature('module', reducers),
    WhExRouting,

  ],
  declarations: [
    WhExComponent,
  ]
})
export class WhExModule { }
