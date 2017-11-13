import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { AppMaterialModule } from 'app/app-material';
import { StoreModule, Store, combineReducers } from '@ngrx/store';
import * as storeIndex from '../store';
import { LoginService } from './sv_login.service';
import { HttpModule } from '@angular/http';
import { APP_CONFIG, AppConfig } from '../store/app.config';



import { LoginPageComponent } from './cn_login-page.component';

describe('LoginPageComponent', () => {
  let component: LoginPageComponent;
  let fixture: ComponentFixture<LoginPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [LoginPageComponent],
      imports: [
        AppMaterialModule,
        HttpModule,
        StoreModule.forRoot(storeIndex.reducers),
      ],
      providers: [
        LoginService,
        { provide: APP_CONFIG, useValue: AppConfig },
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
