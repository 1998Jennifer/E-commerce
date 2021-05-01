import { NgModule } from '@angular/core';
import { RouterModule, Routes, PreloadAllModules } from '@angular/router';

import { PageNoFoundComponent } from './page-no-found/page-no-found.component';
import {ProductDetailComponent} from './products/components/product-detail/product-detail.component'
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
        loadChildren: ()=> import('./products/products.module').then(m => m.ProductsModule)
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
