import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IShoppingCart } from 'src/app/shared/models/IShoppingCart';
import { OrderService } from 'src/app/shared/services/order.service';

@Component({
  selector: 'app-admin-orders-details',
  templateUrl: './admin-orders-details.component.html',
  styleUrls: ['./admin-orders-details.component.css']
})
export class AdminOrdersDetailsComponent implements OnInit {
  orderKey: any;
  orderData: any[] = [];
  shippingData:any;

  constructor(private route: ActivatedRoute, private orderService: OrderService) { }

  ngOnInit(): void {
    this.orderKey = this.route.snapshot.paramMap.get('id');
    this.orderService.getOrderById(this.orderKey).subscribe((order: any) => {
      this.orderData = order.items;
      this.shippingData= order.shipping
    })
  }
}
