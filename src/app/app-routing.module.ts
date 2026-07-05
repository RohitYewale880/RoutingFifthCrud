import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './component/home/home/home.component';
import { ProductsComponent } from './component/product/products/products.component';
import { UsersComponent } from './component/users/users/users.component';
import { FairsComponent } from './component/fairs/fairs/fairs.component';
import { ProductformComponent } from './component/product/productform/productform.component';
import { SinglproductComponent } from './component/product/singlproduct/singlproduct.component';
import { UserformComponent } from './component/users/userform/userform.component';
import { SingleuserComponent } from './component/users/singleuser/singleuser.component';
import { FairDescriptionComponent } from './component/fairs/fair-description/fair-description.component';
import { AuthComponent } from './component/auth/auth.component';

const routes: Routes = [
  {
    path: '',
    component: AuthComponent
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'product',
    component: ProductsComponent,
    children: [
      {
        path: 'adduser',
        component: ProductformComponent
      },
      {
        path: ':id',
        component: SinglproductComponent
      },
      {
        path: ':id/edit',
        component: ProductformComponent
      }
    ]
  },
  {
    path: 'users',
    component: UsersComponent,
    children: [
      {
        path: 'userAdd',
        component: UserformComponent
      },
      {
        path: ':id',
        component: SingleuserComponent
      },
      {
        path: ':id/edit',
        component: UserformComponent
      }
    ]
  },
  {
    path: 'fairs',
    component: FairsComponent,
    children : [
      {
        path : ':id',
        component : FairDescriptionComponent
      }
    ]
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      onSameUrlNavigation: 'reload'
    })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
