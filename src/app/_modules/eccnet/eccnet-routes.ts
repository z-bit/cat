import { Routes } from '@angular/router';

import { EccnetComponent } from './components/cn_eccnet.component';
import { TestComponent } from './components/cn_test.component';


// instant loading: routes are being used in app.rpouting
export const eccnetRoutes: Routes = [
    {path: '', component: EccnetComponent },
    {path: 'test', component: TestComponent},
];

