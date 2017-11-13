import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { AppMaterialModule } from 'app/app-material';

import { Store } from '@ngrx/store';



import { WhExComponent } from './cn_wh-ex.component';

describe('WhExComponent', () => {
  let component: WhExComponent;
  let fixture: ComponentFixture<WhExComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WhExComponent ],
      imports: [
        RouterTestingModule,
        AppMaterialModule,
      ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WhExComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
