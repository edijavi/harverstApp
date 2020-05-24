import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SuccessedRequestComponent } from './successed-request.component';

describe('SuccessedRequestComponent', () => {
  let component: SuccessedRequestComponent;
  let fixture: ComponentFixture<SuccessedRequestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SuccessedRequestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SuccessedRequestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
