import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { PdfViewerComponent } from 'ng2-pdf-viewer';
import { AppMaterialModule } from 'app/app-material';
import { StoreModule, Store, combineReducers } from '@ngrx/store';
import * as appIndex from 'app/store';


import { UebenComponent } from './cn_ueben.component';

describe('UebenComponent', () => {
  let component: UebenComponent;
  let fixture: ComponentFixture<UebenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UebenComponent, PdfViewerComponent ],
      imports: [
        AppMaterialModule,
        StoreModule.forRoot(appIndex.reducers),
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UebenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
