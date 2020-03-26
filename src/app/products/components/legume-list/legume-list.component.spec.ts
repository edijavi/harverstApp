import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LegumeListComponent } from './legume-list.component';

describe('LegumeListComponent', () => {
  let component: LegumeListComponent;
  let fixture: ComponentFixture<LegumeListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LegumeListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LegumeListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
