import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WelcomeRoutingModule } from './welcome-routing.module';
import { WelcomeComponent } from './view/welcome.component';
import { SearchBarComponent } from './components/search-bar/search-bar.component';
import { ProductCategoriesComponent } from './components/product-categories/product-categories.component';


@NgModule({
  declarations: [
    WelcomeComponent,
    SearchBarComponent,
    ProductCategoriesComponent
  ],
  imports: [
    CommonModule,
    WelcomeRoutingModule
  ]
})
export class WelcomeModule { }
