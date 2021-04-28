import { NgModule } from '@angular/core';
import { RouterModule, Routes, PreloadAllModules } from '@angular/router';

import {ProductsComponent} from './products/products.component'
import { PageNoFoundComponent } from './page-no-found/page-no-found.component';
import {ProductDetailComponent} from './product-detail/product-detail.component'
import { LayoutComponent } from './layout/layout.component'
// import { homedir } from 'node:os';

const routes: Routes = [
  // redirecciones
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full',
      },
      {
        path: 'home',
        loadChildren: ()=> import('./home/home.module').then(m => m.HomeModule)
      },
      {
        path: 'products',
        component: ProductsComponent
      },
      {
        path: 'products/:id',
        component: ProductDetailComponent
      },
      {
        path:'contact',
        loadChildren: ()=> import('./contact/contact.module').then(m => m.ContactModule)
      },
      

    ]

  },
  {
    path:'**',
    component: PageNoFoundComponent
  },
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    preloadingStrategy: PreloadAllModules
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
