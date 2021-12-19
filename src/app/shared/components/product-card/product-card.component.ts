import { Component, Input } from '@angular/core';
import { IShoppingCart } from 'src/app/shared/models/IShoppingCart';
import { ShoppingCartService } from 'src/app/shared/services/shopping-cart.service';

@Component({
  selector: 'product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css']
})
export class ProductCardComponent {
  @Input('product') product!: any;
  @Input('shoppingCart') shoppingCart!: IShoppingCart;
  constructor(private cartService: ShoppingCartService) { }

  addToCart(product: any) {
    this.cartService.addToCart(product);
  }
 
}
