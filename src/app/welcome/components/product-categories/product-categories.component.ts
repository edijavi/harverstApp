import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-categories',
  templateUrl: './product-categories.component.html',
  styleUrls: ['./product-categories.component.scss']
})
export class ProductCategoriesComponent implements OnInit {
  routes = [
    { route: '/products/list-category-results', id: 'legumbres', link: '../assets/icons/sprite.svg#legumbres'},
    { route: '/products/list-category-results', id: 'frutas', link: '../assets/icons/sprite.svg#frutas'},
    { route: '/products/list-category-results', id: 'verduras-hortalizas', link: '../assets/icons/sprite.svg#verduras-hortalizas'},
    { route: '/products/list-category-results', id: 'tuberculos', link: '../assets/icons/sprite.svg#tuberculos'},
    { route: '/products/list-category-results', id: 'frutos-secos', link: '../assets/icons/sprite.svg#frutos-secos'},
    { route: '/products/list-category-results', id: 'cereales', link: '../assets/icons/sprite.svg#cereales'}
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
