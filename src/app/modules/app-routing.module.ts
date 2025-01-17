import { SingleProductComponent } from './../components/customer/single-product/single-product.component';
import { ProductContainerComponent } from './../components/customer/product-container/product-container.component';
import { CustomerComponent } from './../components/customer/customer.component';
import { PagenotfoundComponent } from '../components/pagenotfound/pagenotfound.component';
import { PayoutComponent } from '../components/user/payout/payout.component';
import { ProfileComponent } from '../components/user/profile/profile.component';
import { DocumentComponent } from '../components/user/document/document.component';
import { ProductsComponent } from '../components/user/products/products.component';
import { UserComponent } from '../components/user/user/user.component';
import { RegistrationComponent } from '../components/registration/registration.component';
import { LoginComponent } from '../components/login/login.component';
import { LandingComponent } from '../components/landing/landing.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: 'landing',
    component: LandingComponent
  },
  {
    path: 'register',
    component: RegistrationComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'user',
    component: UserComponent,
    children: [
      {
        path:'',
        redirectTo: 'profile',
        pathMatch: 'full'
      },
      {
        path: 'products',
        component: ProductsComponent
      },
      {
        path: 'documents',
        component: DocumentComponent
      },
      {
        path: 'profile',
        component: ProfileComponent
      },
      {
        path: 'payout',
        component: PayoutComponent
      }
    ]
  },
  {
    path: 'customer/user/:userId',
    component: CustomerComponent,
    children: [
      {
        path:'',
        redirectTo: 'products',
        pathMatch: 'full'
      },
      {
        path: 'products',
        component: ProductContainerComponent
      },
      {
        path: 'products/:productId',
        component: SingleProductComponent
      }
    ]
  },
  {
    path: '',
    redirectTo: '/landing',
    pathMatch: 'full'
  },
  {
    path: '**',
    component: PagenotfoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(
    routes,
    //{enableTracing: true} // Logs Router events to console for development
    )],
  exports: [RouterModule]
})
export class AppRoutingModule { }
