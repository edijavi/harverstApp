import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ToolbarLoggedComponent } from './toolbar-logged.component';

describe('ToolbarLoggedComponent', () => {
  let component: ToolbarLoggedComponent;
  let fixture: ComponentFixture<ToolbarLoggedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ToolbarLoggedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ToolbarLoggedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
