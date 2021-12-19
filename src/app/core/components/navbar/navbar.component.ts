import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Observable } from 'rxjs';
import { IShoppingCart } from 'src/app/shared/models/IShoppingCart';
import { AuthService } from 'src/app/shared/services/auth.service';
import { ShoppingCartService } from 'src/app/shared/services/shopping-cart.service';


@Component({
  selector: 'navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  cart$!:Observable<IShoppingCart>

  constructor(public auth: AngularFireAuth, public authService: AuthService, private cartService: ShoppingCartService) {
  }
  async ngOnInit() {
    this.cart$ = await this.cartService.getCart();
  }

  login() {
    this.authService.login();
  }

  logout() {
    this.authService.logout();
  }

}
