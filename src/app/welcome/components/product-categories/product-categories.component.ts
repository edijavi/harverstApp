import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-categories',
  templateUrl: './product-categories.component.html',
  styleUrls: ['./product-categories.component.scss']
})
export class ProductCategoriesComponent implements OnInit {
  routes = [
    { route: '/products/list-categories', id: 'legumes', link: '../assets/icons/sprite.svg#legumbres'},
    { route: '/products/list-categories', id: 'fruits', link: '../assets/icons/sprite.svg#frutas'},
    { route: '/products/list-categories', id: 'vegetables', link: '../assets/icons/sprite.svg#verduras-hortalizas'},
    { route: '/products/list-categories', id: 'tubers', link: '../assets/icons/sprite.svg#tuberculos'},
    { route: '/products/list-categories', id: 'nuts', link: '../assets/icons/sprite.svg#frutos-secos'},
    { route: '/products/list-categories', id: 'cereals', link: '../assets/icons/sprite.svg#cereales'}
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
