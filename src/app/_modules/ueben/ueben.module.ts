import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppMaterialModule } from 'app/app-material';

import { PdfViewerComponent } from 'ng2-pdf-viewer';


import { UebenComponent } from './components/cn_ueben.component';
import { UebenRouting } from './ueben-routing';


@NgModule({
  imports: [
      CommonModule,
      AppMaterialModule,
      UebenRouting,

  ],
  declarations: [
      UebenComponent,
      PdfViewerComponent,
  ]
})
export class UebenModule { }
