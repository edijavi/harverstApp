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
import { ListProductsByCategoryComponent } from './components/list-products-by-category/list-products-by-category.component';
import { ListCategoriesComponent } from './components/list-categories/list-categories.component';
import { ResultsHeaderComponent } from './components/results-header/results-header.component';
import { ListProductsByNameComponent } from './components/list-products-by-name/list-products-by-name.component';
import { ProductDetailsComponent } from './components/product-details/product-details.component';
import { ProductRequestComponent } from './components/product-request/product-request.component';
import { SuccessedRequestComponent } from './components/successed-request/successed-request.component';
import { NewProductComponent } from './components/new-product/new-product.component';



@NgModule({
  declarations: [
    ProductsComponent,
    LegumeListComponent,
    FruitListComponent,
    VegetablesListComponent,
    TuberListComponent,
    NutsListComponent,
    CerealListComponent,
    ListProductsByCategoryComponent,
    ListCategoriesComponent,
    ResultsHeaderComponent,
    ListProductsByNameComponent,
    ProductDetailsComponent,
    ProductRequestComponent,
    SuccessedRequestComponent,
    NewProductComponent
  ],
  imports: [
    CommonModule,
    ProductsRoutingModule
  ],
  exports: [
    NewProductComponent
  ]
})
export class ProductsModule { }
