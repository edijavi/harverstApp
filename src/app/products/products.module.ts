import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductsRoutingModule } from './products-routing.module';
import { ProductsComponent } from './products.component';
import { LegumeListComponent } from './components/legume-list/legume-list.component';
import { FruitListComponent } from './components/fruit-list/fruit-list.component';
import { VegetablesListComponent } from './components/vegetables-list/vegetables-list.component';
import { TuberListComponent } from './components/tuber-list/tuber-list.component';
import { NutsListComponent } from './components/nuts-list/nuts-list.component';
import { CerealListComponent } from './components/cereal-list/cereal-list.component';
import { ListCategoryResultsComponent } from './components/list-category-results/list-category-results.component';
import { HeaderResultsComponent } from './components/header-results/header-results.component';



@NgModule({
  declarations: [
    ProductsComponent,
    LegumeListComponent,
    FruitListComponent,
    VegetablesListComponent,
    TuberListComponent,
    NutsListComponent,
    CerealListComponent,
    ListCategoryResultsComponent,
    HeaderResultsComponent],
  imports: [
    CommonModule,
    ProductsRoutingModule
  ],

})
export class ProductsModule { }
