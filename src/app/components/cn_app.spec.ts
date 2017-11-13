import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './cn_app.component';
import { ToolbarComponent } from './co_toolbar.component';
import { SidenavComponent } from './co_sidenav.component';
import { AppMaterialModule } from 'app/app-material';
import { RouterTestingModule } from '@angular/router/testing';
import { StoreModule, Store, combineReducers } from '@ngrx/store';
import * as appIndex from '../store';
import { DialogService } from './sv_dialog.service';


describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        ToolbarComponent,
        SidenavComponent,
      ],
      imports: [
        AppMaterialModule,
        RouterTestingModule,
        StoreModule.forRoot({...appIndex.reducers})
      ],
      providers: [DialogService]
    }).compileComponents();
  }));
  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));
  it(`should have as title 'app'`, async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('app');
  }));
  it('should render title in a h1 tag', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to app!');
  }));
});
