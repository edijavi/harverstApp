import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NutsListComponent } from './nuts-list.component';

describe('NutsListComponent', () => {
  let component: NutsListComponent;
  let fixture: ComponentFixture<NutsListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NutsListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NutsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
