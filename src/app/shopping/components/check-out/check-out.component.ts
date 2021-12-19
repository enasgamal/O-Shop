import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { IShoppingCart } from 'src/app/shared/models/IShoppingCart';
import { ShoppingCartService } from 'src/app/shared/services/shopping-cart.service';

@Component({
  selector: 'app-check-out',
  templateUrl: './check-out.component.html',
  styleUrls: ['./check-out.component.css']
})
export class CheckOutComponent implements OnInit, OnDestroy {

  cart$! : Observable<IShoppingCart>;
  // cart! : IShoppingCart;
  // cardSubscribtion!: Subscription
  prod: any;
  // userId: any;
  // userSubscribtion!: Subscription;

  constructor(private cartService: ShoppingCartService) { }


  async ngOnInit() {
    this.cart$ = await this.cartService.getCart();
    // this.cardSubscribtion = cart$.subscribe(cart => { this.cart = cart });


    // this.userSubscribtion = this.authService.user$.subscribe(users => {
    //   this.userId = users
    //   console.log(this.userId)
    // })
  }

  ngOnDestroy() {
    // this.cardSubscribtion.unsubscribe();
    // this.userSubscribtion.unsubscribe();
  }

}
