import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HelpComponent } from './components/help/help.component';


const routes: Routes = [
  { path: 'products',
  loadChildren: () => import('../products/products.module')
    .then(m => m.ProductsModule) },
  { path: 'welcome',
    loadChildren: () => import('../welcome/welcome.module')
      .then(m => m.WelcomeModule) },
  { path: '',   redirectTo: '/welcome', pathMatch: 'full' },
  { path: 'help', component: HelpComponent },
  // { path: '**', component: PageNotFoundComponent }
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class PublicRoutingModule { }
