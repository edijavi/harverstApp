import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-products-by-category',
  templateUrl: './list-products-by-category.component.html',
  styleUrls: ['./list-products-by-category.component.scss']
})
export class ListProductsByCategoryComponent implements OnInit {

  routes = [
    { route: '/products/legumbres'},
    { route: '/products/frutas'},
    { route: '/products/verduras-hortalizas'},
    { route: '/products/tuberculos'},
    { route: '/products/frutos-secos'},
    { route: '/products/cereales'}
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
