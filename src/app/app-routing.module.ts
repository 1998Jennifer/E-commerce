import { NgModule } from '@angular/core';
import { RouterModule, Routes, PreloadAllModules } from '@angular/router';

import { PageNoFoundComponent } from './page-no-found/page-no-found.component';
import {ProductDetailComponent} from './products/components/product-detail/product-detail.component'
import { LayoutComponent } from './layout/layout.component'
import { AdminGuard } from './admin.guard';

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
        canActivate: [AdminGuard],
        loadChildren: ()=> import('./products/products.module').then(m => m.ProductsModule)
      },
      
      {
        path:'contact',
        canActivate: [AdminGuard],
        loadChildren: ()=> import('./contact/contact.module').then(m => m.ContactModule)
      },
      

    ]

  },
  {
    path: 'admin',
    loadChildren: ()=> import('./admin/admin.module').then(m => m.AdminModule)
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
