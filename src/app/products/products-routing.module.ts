import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LegumeListComponent } from './components/legume-list/legume-list.component';
import { FruitListComponent } from './components/fruit-list/fruit-list.component';
import { VegetablesListComponent } from './components/vegetables-list/vegetables-list.component';
import { TuberListComponent } from './components/tuber-list/tuber-list.component';
import { NutsListComponent } from './components/nuts-list/nuts-list.component';
import { CerealListComponent } from './components/cereal-list/cereal-list.component';
import { ListCategoriesComponent } from './components/list-categories/list-categories.component';
import { ListProductsByCategoryComponent } from './components/list-products-by-category/list-products-by-category.component';
import { ProductDetailsComponent } from './components/product-details/product-details.component';

const routes: Routes = [
  { path: 'list-categories', component: ListCategoriesComponent },
  { path: 'list-products-by-category', component: ListProductsByCategoryComponent },
  { path: 'legumes', component: LegumeListComponent },
  { path: 'fruits', component: FruitListComponent },
  { path: 'vegetables', component: VegetablesListComponent },
  { path: 'tubers', component: TuberListComponent },
  { path: 'nuts', component: NutsListComponent },
  { path: 'cereals', component: CerealListComponent },
  { path: 'product-details', component: ProductDetailsComponent }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductsRoutingModule { }
