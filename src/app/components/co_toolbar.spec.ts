import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { AppMaterialModule } from 'app/app-material';
import { DialogService } from './sv_dialog.service';

import { ToolbarComponent } from './co_toolbar.component';

describe('ToolbarComponent', () => {
  let component: ToolbarComponent;
  let fixture: ComponentFixture<ToolbarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ToolbarComponent],
      imports: [AppMaterialModule],
      providers: [DialogService]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ToolbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
