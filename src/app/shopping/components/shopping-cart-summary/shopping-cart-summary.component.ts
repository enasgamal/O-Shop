import { Component, Input, OnInit } from '@angular/core';
import { IShoppingCart } from 'src/app/shared/models/IShoppingCart';

@Component({
  selector: 'shopping-cart-summary',
  templateUrl: './shopping-cart-summary.component.html',
  styleUrls: ['./shopping-cart-summary.component.css']
})
export class ShoppingCartSummaryComponent implements OnInit {

  @Input('cart') cart!:IShoppingCart;
  
  constructor() { }

  ngOnInit(): void {
  }

}
