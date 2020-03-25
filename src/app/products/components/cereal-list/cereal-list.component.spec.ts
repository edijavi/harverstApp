import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CerealListComponent } from './cereal-list.component';

describe('CerealListComponent', () => {
  let component: CerealListComponent;
  let fixture: ComponentFixture<CerealListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CerealListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CerealListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
