import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LegumeListComponent } from './components/legume-list/legume-list.component';
import { FruitListComponent } from './components/fruit-list/fruit-list.component';
import { VegetablesListComponent } from './components/vegetables-list/vegetables-list.component';
import { TuberListComponent } from './components/tuber-list/tuber-list.component';
import { NutsListComponent } from './components/nuts-list/nuts-list.component';
import { CerealListComponent } from './components/cereal-list/cereal-list.component';
import { ListCategoriesComponent } from './components/list-categories/list-categories.component';

const routes: Routes = [
  { path: 'list-categories', component: ListCategoriesComponent },
  { path: 'list-products-by-category', component: ListCategoriesComponent },
  { path: 'legumbres', component: LegumeListComponent },
  { path: 'frutas', component: FruitListComponent },
  { path: 'verduras-hortalizas', component: VegetablesListComponent },
  { path: 'tuberculos', component: TuberListComponent },
  { path: 'frutos-secos', component: NutsListComponent },
  { path: 'cereales', component: CerealListComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductsRoutingModule { }
