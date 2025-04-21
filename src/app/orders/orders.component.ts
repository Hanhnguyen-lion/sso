import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Orders } from '../models/orders';
import { OrdersService } from '../orders.service';

@Component({
  standalone: false,
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrl: './orders.component.css'
})
export class OrdersComponent implements OnInit{
  
  orders?: Observable<Orders[]>;
  orders_1?: Observable<Orders[]>;

  constructor(private orderService: OrdersService){}

  ngOnInit(): void {
    this.getOrders();
  }

  getOrders(): void{
    this.orders_1 = this.orderService.getOrders();
    this.orders = this.orders_1;
  }

}
