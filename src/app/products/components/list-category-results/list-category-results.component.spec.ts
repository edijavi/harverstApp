import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListCategoryResultsComponent } from './list-category-results.component';

describe('ListCategoryResultsComponent', () => {
  let component: ListCategoryResultsComponent;
  let fixture: ComponentFixture<ListCategoryResultsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListCategoryResultsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListCategoryResultsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
