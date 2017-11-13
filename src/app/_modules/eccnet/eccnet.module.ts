import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { CommonModule } from '@angular/common';
import { EccnetHomeComponent } from './components/co_eccnet-home.component';

import { EccnetComponent } from './components/cn_eccnet.component';
import { TestComponent } from './components/cn_test.component';


@NgModule({
  imports: [
      CommonModule,
      RouterModule,

  ],
  declarations: [
      EccnetHomeComponent,
      EccnetComponent,
      TestComponent,
  ]
})
export class EccnetModule { }
