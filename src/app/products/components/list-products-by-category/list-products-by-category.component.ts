import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-products-by-category',
  templateUrl: './list-products-by-category.component.html',
  styleUrls: ['./list-products-by-category.component.scss']
})
export class ListProductsByCategoryComponent implements OnInit {

  routes = [
    { route: '/products/product-details'},
    { route: '/products/product-details'},
    { route: '/products/product-details'},
    { route: '/products/product-details'},
    { route: '/products/product-details'},
    { route: '/products/product-details'}
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
