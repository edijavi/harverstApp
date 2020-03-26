import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WelcomeRoutingModule } from './welcome-routing.module';
import { WelcomeComponent } from './view/welcome.component';
import { SearchBarComponent } from './shared/search-bar/search-bar.component';
import { ProductsModule } from '../products/products.module';


@NgModule({
  declarations: [
    WelcomeComponent,
    SearchBarComponent
  ],
  imports: [
    CommonModule,
    WelcomeRoutingModule,
    ProductsModule
  ]
})
export class WelcomeModule { }
