import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-categories',
  templateUrl: './product-categories.component.html',
  styleUrls: ['./product-categories.component.scss']
})
export class ProductCategoriesComponent implements OnInit {
  routes = [
    { route: '/products/list-categories', id: 'legumbres', link: '../assets/icons/sprite.svg#legumbres'},
    { route: '/products/list-categories', id: 'frutas', link: '../assets/icons/sprite.svg#frutas'},
    { route: '/products/list-categories', id: 'verduras-hortalizas', link: '../assets/icons/sprite.svg#verduras-hortalizas'},
    { route: '/products/list-categories', id: 'tuberculos', link: '../assets/icons/sprite.svg#tuberculos'},
    { route: '/products/list-categories', id: 'frutos-secos', link: '../assets/icons/sprite.svg#frutos-secos'},
    { route: '/products/list-categories', id: 'cereales', link: '../assets/icons/sprite.svg#cereales'}
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
