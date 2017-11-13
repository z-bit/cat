import { Routes, RouterModule } from '@angular/router';

import { AppHomeComponent } from './components/cn_app-home.component';
import { GetfirmaFailComponent } from './components/cn_getfirma-fail.component';

import { AuthGuardService } from './components/sv_auth-guard.service';
import { LoginPageComponent } from './components/cn_login-page.component';
import { EccnetHomeComponent } from './_modules/eccnet/components/co_eccnet-home.component';
import { eccnetRoutes } from './_modules/eccnet/eccnet-routes';

const routes: Routes = [
  // instant loading
  { path: '', component: AppHomeComponent, canActivate: [AuthGuardService] },
  { path: 'home', component: AppHomeComponent, canActivate: [AuthGuardService] },
  { path: 'login', component: LoginPageComponent },
  { path: 'firma-fail', component: GetfirmaFailComponent },  // todo add guard
  { path: 'eccnet', component: EccnetHomeComponent, children: eccnetRoutes },

  // lazy loading
  {path: 'wh-ex', loadChildren: './_modules/wh-ex/wh-ex.module#WhExModule'},
  {path: 'inventur', loadChildren: './_modules/inventur/inventur.module#InventurModule'},
  {path: 'ueben', loadChildren: './_modules/ueben/ueben.module#UebenModule'},

  // just in case
  { path: '**', component: AppHomeComponent }
];

export const AppRouting = RouterModule.forRoot(routes);
