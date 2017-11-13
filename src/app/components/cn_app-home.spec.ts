import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { AppMaterialModule } from 'app/app-material';
import { StoreModule, Store, combineReducers } from '@ngrx/store';
import * as storeIndex from '../store/index';
import { DialogService } from './sv_dialog.service';

import { AppHomeComponent } from './cn_app-home.component';

describe('AppHomeComponent', () => {
  let component: AppHomeComponent;
  let fixture: ComponentFixture<AppHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AppHomeComponent],
      imports: [
        AppMaterialModule,
        StoreModule.forRoot(storeIndex.reducers)
      ],
      providers: [DialogService]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
