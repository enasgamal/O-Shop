import { Component, Input, OnInit } from '@angular/core';
import { IShoppingCart } from 'src/app/shared/models/IShoppingCart';
import { ShoppingCartService } from 'src/app/shared/services/shopping-cart.service';

@Component({
  selector: 'product-quantity',
  templateUrl: './product-quantity.component.html',
  styleUrls: ['./product-quantity.component.css']
})
export class ProductQuantityComponent implements OnInit {

  @Input('product') product!: any;
  @Input('shoppingCart') shoppingCart!: IShoppingCart;

  constructor(private cartService:ShoppingCartService) { }

  ngOnInit(): void {
  }

  addToCart(product: any) {
    this.cartService.addToCart(product);
  }
  removeFromCart(product: any) {
    this.cartService.removeFromCart(product);
  }
 
}
