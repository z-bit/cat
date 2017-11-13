import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { AppMaterialModule } from 'app/app-material';

import { InventurComponent } from './co_inventur.component';

describe('InventurComponent', () => {
  let component: InventurComponent;
  let fixture: ComponentFixture<InventurComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InventurComponent],
      imports: [AppMaterialModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InventurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
