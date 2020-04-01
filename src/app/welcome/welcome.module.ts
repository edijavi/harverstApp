import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WelcomeRoutingModule } from './welcome-routing.module';
import { WelcomeComponent } from './view/welcome.component';
import { SearchBarComponent } from './shared/search-bar/search-bar.component';
import {ProductCardComponent} from './product-card/product-card.component';


@NgModule({
  declarations: [
    WelcomeComponent,
    SearchBarComponent,
    ProductCardComponent
  ],
  imports: [
    CommonModule,
    WelcomeRoutingModule
  ]
})
export class WelcomeModule { }
