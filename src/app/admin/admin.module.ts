import { NgModule } from '@angular/core';
import { AdminProductsComponent } from './components/admin-products/admin-products.component';
import { AdminOrdersComponent } from './components/admin-orders/admin-orders.component';
import { AdminOrdersDetailsComponent } from './components/admin-orders-details/admin-orders-details.component';
import { MatPaginatorModule } from '@angular/material/paginator';
import { AuthGuard } from './guards/auth.guard';
import { MatTableModule } from '@angular/material/table';
import { MatFormFieldModule } from '@angular/material/form-field';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from 'src/app/shared/shared.module';
import { ProductFormComponent } from './components/product-form/product-form.component';
import { AngularFireAuthGuard, hasCustomClaim, redirectUnauthorizedTo } from '@angular/fire/compat/auth-guard';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSortModule } from '@angular/material/sort';
import { MatInputModule } from '@angular/material/input';



const adminOnly = () => hasCustomClaim('admin');
const redirectUnauthorizedToLogin = () => redirectUnauthorizedTo(['login']);

const routes: Routes = [

  { path: 'admin/orders', component: AdminOrdersComponent, canActivate: [AngularFireAuthGuard], data: { authGuardPipe: redirectUnauthorizedToLogin, adminOnly } },
  { path: 'admin/orders/:id', component: AdminOrdersDetailsComponent, canActivate: [AngularFireAuthGuard], data: { authGuardPipe: redirectUnauthorizedToLogin, adminOnly } },
  { path: 'admin/products/new', component: ProductFormComponent, canActivate: [AngularFireAuthGuard], data: { authGuardPipe: redirectUnauthorizedToLogin, adminOnly } },
  { path: 'admin/products/:id', component: ProductFormComponent, canActivate: [AngularFireAuthGuard], data: { authGuardPipe: redirectUnauthorizedToLogin, adminOnly } },
  { path: 'admin/products', component: AdminProductsComponent, canActivate: [AngularFireAuthGuard], data: { authGuardPipe: redirectUnauthorizedToLogin, adminOnly } },
]

@NgModule({
  declarations: [
    AdminProductsComponent,
    AdminOrdersComponent,
    AdminOrdersDetailsComponent,
    ProductFormComponent
  ],

  imports: [
    MatPaginatorModule,
    MatTableModule,
    MatFormFieldModule,
    SharedModule,
    RouterModule.forChild(routes),
    BrowserAnimationsModule,
    MatSortModule,
    MatInputModule
  ],

  providers: [
    AuthGuard
  ]
})
export class AdminModule { }
