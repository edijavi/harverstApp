import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-categories',
  templateUrl: './list-categories.component.html',
  styleUrls: ['./list-categories.component.scss']
})
export class ListCategoriesComponent implements OnInit {
  routes = [
    { route: '/products/legumes', category: 'Legumes'},
    { route: '/products/fruits', category: 'Fuits'},
    { route: '/products/vegetables', category: 'Vegetables'},
    { route: '/products/tubers', category: 'Tubers'},
    { route: '/products/nuts', category: 'Nuts'},
    { route: '/products/cereals', category: 'Cereals'}

  ];

  constructor() { }

  ngOnInit(): void {
  }

}
