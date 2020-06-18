import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WelcomeRoutingModule } from './welcome-routing.module';
import { WelcomeComponent } from './view/welcome.component';
import { SearchBarComponent } from './components/search-bar/search-bar.component';
import { ProductCategoriesComponent } from './components/product-categories/product-categories.component';
import { ChangeLocationComponent } from './components/change-location/change-location.component';
import { ProductsModule } from '../products/products.module';


@NgModule({
  declarations: [
    WelcomeComponent,
    SearchBarComponent,
    ProductCategoriesComponent,
    ChangeLocationComponent
  ],
  imports: [
    CommonModule,
    WelcomeRoutingModule,
    ProductsModule
    ]
})
export class WelcomeModule { }
