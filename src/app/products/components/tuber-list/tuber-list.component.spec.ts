import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TuberListComponent } from './tuber-list.component';

describe('TuberListComponent', () => {
  let component: TuberListComponent;
  let fixture: ComponentFixture<TuberListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TuberListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TuberListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
