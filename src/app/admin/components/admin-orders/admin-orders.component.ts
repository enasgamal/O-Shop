import { Component, OnInit } from '@angular/core';
import { OrderService } from 'src/app/shared/services/order.service';

@Component({
  selector: 'app-admin-orders',
  templateUrl: './admin-orders.component.html',
  styleUrls: ['./admin-orders.component.css']
})
export class AdminOrdersComponent implements OnInit {
 
  orders$: any;
  orders!: any[];
  constructor(private orderService:OrderService) { 

    
  }

   ngOnInit() {
    this.orders$ = this.orderService.getOrders();
    this.orders$.snapshotChanges().subscribe((orders: any) => {
      this.orders = orders
      console.log(this.orders)
    });
  }

}
