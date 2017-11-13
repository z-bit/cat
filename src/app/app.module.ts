import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppMaterialModule } from './app-material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpModule } from '@angular/http';
import { AppRouting } from './app-routing';

import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import {
  StoreRouterConnectingModule,
  RouterStateSerializer,
} from '@ngrx/router-store'
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { reducers, metaReducers } from './store';
import { CustomRouterStateSerializer } from './_modules/shared/router-state-utils';
import { environment } from '../environments/environment';

import { DBModule } from '@ngrx/db';
import { schema } from './store/db';

import { EccnetModule } from './_modules/eccnet/eccnet.module';

import { AppComponent } from './components/cn_app.component';
import { AppHomeComponent } from './components/cn_app-home.component';
import { ToolbarComponent } from './components/co_toolbar.component';
import { SidenavComponent } from './components/co_sidenav.component';

import { DialogService } from './components/sv_dialog.service';
import { FirmaDialogComponent } from './components/di_firma-dialog.component';
import { LoginDialogComponent } from './components/di_login-dialog.component';
import { UserDialogComponent } from './components/di_user-dialog.component';

import { FirmaEffects } from './store/firma.effects';
import { UserEffects } from './store/user.effects';

import { AppConfig, APP_CONFIG } from './store/app.config';
import { ApiCareService } from './components/sv_api-care.service';
import { AuthGuardService } from './components/sv_auth-guard.service';

import { LoginPageComponent } from './components/cn_login-page.component';
import { LoginService } from './components/sv_login.service';

import { GetfirmaFailComponent } from './components/cn_getfirma-fail.component';
import { LoginComponent } from './components/cn_login.component';



@NgModule({
  declarations: [
    AppComponent,
    AppHomeComponent,
    ToolbarComponent,
    SidenavComponent,
    FirmaDialogComponent,
    LoginDialogComponent,
    UserDialogComponent,
    LoginPageComponent,
    GetfirmaFailComponent,
    LoginComponent,
    SidenavComponent,
    ToolbarComponent,

  ],
  entryComponents: [
    LoginDialogComponent,
    FirmaDialogComponent,
    UserDialogComponent,

  ],
  imports: [
    BrowserModule,
    AppMaterialModule,
    BrowserAnimationsModule,
    HttpModule,
    AppRouting,
    StoreModule.forRoot(reducers, { metaReducers }),
    StoreRouterConnectingModule,
    !environment.production ? StoreDevtoolsModule.instrument() : [],
    EffectsModule.forRoot([FirmaEffects, UserEffects]),
    DBModule.provideDB((schema)),
    EccnetModule,

  ],
  exports: [
    AppMaterialModule,
  ],
  providers: [
    DialogService,
    { provide: RouterStateSerializer, useClass: CustomRouterStateSerializer },
    { provide: APP_CONFIG, useValue: AppConfig },
    ApiCareService,
    LoginService,
    AuthGuardService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
