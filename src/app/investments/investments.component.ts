import { Component, OnInit } from '@angular/core';
import { OrdersService } from '../orders.service';
import { Observable } from 'rxjs';
import { Orders } from '../models/orders';

@Component({
  standalone: false,
  selector: 'app-investments',
  templateUrl: './investments.component.html',
  styleUrl: './investments.component.css'
})
export class InvestmentsComponent implements OnInit{

  orders_1?:Observable<Orders[]>;
  orders?:Observable<Orders[]>;

  constructor(private ordersService: OrdersService){}

  ngOnInit(): void {
    this.getInterests();
  }

  getInterests(): void{
    this.orders_1 = this.ordersService.getInterests();
    this.orders = this.orders_1;
  }
}
