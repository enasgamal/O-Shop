import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AngularFireModule } from '@angular/fire/compat';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { environment } from 'src/environments/environment';
import { ProductsComponent } from './shopping/components/products/products.component';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './core/components/login/login.component';
import { SharedModule } from './shared/shared.module';
import { AuthGuard } from './admin/guards/auth.guard';
import { AdminModule } from './admin/admin.module';
import { ShoppingModule } from './shopping/shopping.module';
import { CoreModule } from './core/core.module';

const routes: Routes = [
  { path: '', component: ProductsComponent },
  { path: 'login', component: LoginComponent },
]

@NgModule({
  declarations: [
    AppComponent, 
  ],

  imports: [
    BrowserModule,
    AppRoutingModule,
    AdminModule,
    ShoppingModule,
    SharedModule,
    CoreModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    RouterModule.forRoot(routes),
  ],
  exports: [RouterModule],
  providers: [AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
