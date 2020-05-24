import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListProductsByNameComponent } from './list-products-by-name.component';

describe('ListProductsByNameComponent', () => {
  let component: ListProductsByNameComponent;
  let fixture: ComponentFixture<ListProductsByNameComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListProductsByNameComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListProductsByNameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
