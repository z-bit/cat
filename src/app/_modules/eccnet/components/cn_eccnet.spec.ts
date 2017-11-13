import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EccnetComponent } from './cn_eccnet.component';

describe('EccnetComponent', () => {
  let component: EccnetComponent;
  let fixture: ComponentFixture<EccnetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EccnetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EccnetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
