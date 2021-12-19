import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IShoppingCart } from 'src/app/shared/models/IShoppingCart';
import { Order } from 'src/app/shared/models/order';
import { OrderService } from 'src/app/shared/services/order.service';

@Component({
  selector: 'shipping-form',
  templateUrl: './shipping-form.component.html',
  styleUrls: ['./shipping-form.component.css']
})
export class ShippingFormComponent implements OnInit {

  @Input('cart') cart! :IShoppingCart;
  shipping: any = {};

  constructor(private orderService: OrderService, private route: Router) { }

  ngOnInit(): void {
  }

  async placeOrder() {
    let order = new Order(this.shipping,this.cart);
    let result =await this.orderService.placeOrder(order);
    this.route.navigate(['order-success', result.key]);
  }

}
