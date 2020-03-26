import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './view/products.component.html',
  styleUrls: ['./view/products.component.scss']
})
export class ProductsComponent implements OnInit {

  routes = [
    { route: '/products/legumbres', id: 'legumbres', link: '../assets/icons/sprite.svg#legumbres'},
    { route: '/products/frutas', id: 'frutas', link: '../assets/icons/sprite.svg#frutas'},
    { route: '/products/verduras-hortalizas', id: 'verduras-hortalizas', link: '../assets/icons/sprite.svg#verduras-hortalizas'},
    { route: '/products/tuberculos', id: 'tuberculos', link: '../assets/icons/sprite.svg#tuberculos'},
    { route: '/products/frutos-secos', id: 'frutos-secos', link: '../assets/icons/sprite.svg#frutos-secos'},
    { route: '/products/cereales', id: 'cereales', link: '../assets/icons/sprite.svg#cereales'}
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
