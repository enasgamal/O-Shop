import { NgModule } from '@angular/core';
import { ProductsComponent } from './components/products/products.component';
import { ShoppingCardComponent } from './components/shopping-card/shopping-card.component';
import { CheckOutComponent } from './components/check-out/check-out.component';
import { OrderSuccessComponent } from './components/order-success/order-success.component';
import { ShoppingCartSummaryComponent } from './components/shopping-cart-summary/shopping-cart-summary.component';
import { ShippingFormComponent } from './components/shipping-form/shipping-form.component';
import { ProductFilterComponent } from './components/products/product-filter/product-filter.component';
import { RouterModule, Routes } from '@angular/router';
import { AngularFireAuthGuard, redirectUnauthorizedTo } from '@angular/fire/compat/auth-guard';
import { SharedModule } from '../shared/shared.module';

const redirectUnauthorizedToLogin = () => redirectUnauthorizedTo(['login']);

const routes: Routes = [
  
  { path: 'products', component: ProductsComponent },
  { path: 'shopping-card', component: ShoppingCardComponent },
  { path: 'check-out', component: CheckOutComponent, canActivate: [AngularFireAuthGuard], data: { authGuardPipe: redirectUnauthorizedToLogin } },
  { path: 'order-success/:id', component: OrderSuccessComponent, canActivate: [AngularFireAuthGuard], data: { authGuardPipe: redirectUnauthorizedToLogin } },
]

@NgModule({
  declarations: [
    ProductsComponent,
    ShoppingCardComponent,
    CheckOutComponent,
    OrderSuccessComponent,
    ShoppingCartSummaryComponent,
    ShippingFormComponent,
    ProductFilterComponent
  ],
  imports: [
    RouterModule.forChild(routes),
    SharedModule
  ]
})
export class ShoppingModule { }
