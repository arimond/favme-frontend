import { AngularModule } from './modules/angular.module';
import { MaterialModule } from './modules/material.module';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './modules/app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { RegistrationComponent } from './components/registration/registration.component';
import { UserComponent } from './components/user/user/user.component';
import { LandingComponent } from './components/landing/landing.component';
import { CustomerComponent } from './components/customer/customer.component';
import { ProfileComponent } from './components/user/profile/profile.component';
import { PayoutComponent } from './components/user/payout/payout.component';
import { DocumentComponent } from './components/user/document/document.component';
import { ProductsComponent } from './components/user/products/products.component';
import { PagenotfoundComponent } from './components/pagenotfound/pagenotfound.component';
import { HeaderComponent } from './components/shared/header/header.component';
import { BankaccountComponent } from './components/user/payout/bankaccount/bankaccount.component';
import { SubmitpayoutComponent } from './components/user/payout/submitpayout/submitpayout.component';
import { ProductComponent } from './components/user/products/product/product.component';
import { AddProductComponent } from './components/user/products/add-product/add-product.component';
import { PublicProfileComponent } from './components/customer/public-profile/public-profile.component';
import { ProductContainerComponent } from './components/customer/product-container/product-container.component';
import { CustomerProductComponent } from './components/customer/product-container/customer-product/customer-product.component';
import { PayComponent } from './components/customer/pay/pay.component';
import { SingleProductComponent } from './components/customer/single-product/single-product.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegistrationComponent,
    UserComponent,
    LandingComponent,
    CustomerComponent,
    ProfileComponent,
    PayoutComponent,
    DocumentComponent,
    ProductsComponent,
    PagenotfoundComponent,
    HeaderComponent,
    BankaccountComponent,
    SubmitpayoutComponent,
    ProductComponent,
    AddProductComponent,
    PublicProfileComponent,
    ProductContainerComponent,
    CustomerProductComponent,
    PayComponent,
    SingleProductComponent
  ],
  imports: [
    AppRoutingModule,
    MaterialModule,
    AngularModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
