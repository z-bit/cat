import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { AppMaterialModule } from 'app/app-material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { SidenavComponent } from './co_sidenav.component';


describe('SidenavComponent', () => {
  let component: SidenavComponent;
  let fixture: ComponentFixture<SidenavComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [SidenavComponent],
      imports: [
        AppMaterialModule,
        BrowserAnimationsModule,
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SidenavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
