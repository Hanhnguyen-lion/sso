import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Orders } from '../models/orders';
import { OrdersService } from '../orders.service';
import { FormBuilder, Validators } from '@angular/forms';
import { DatePipe } from '@angular/common';
import { Products } from '../models/products';
import { InventoryService } from '../inventory.service';
import { DialogService } from '../dialog.service';

@Component({
  standalone: false,
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrl: './orders.component.css'
})
export class OrdersComponent implements OnInit{
  
  orders?: Observable<Orders[]>;
  products?: Observable<Products[]>;
  orders_1?: Observable<Orders[]>;
  ordersGroup: any;
  isSubmit:boolean = false;
  orderId: number = 0;

  constructor(
    private orderService: OrdersService,
    private productService: InventoryService,
    private formBuilder: FormBuilder,
    private datePipe: DatePipe,
    private dialogService: DialogService){}

  ngOnInit(): void {

    this.ordersGroup = this.formBuilder.group({
      OrderDate: [this.datePipe.transform(new Date(), "yyyy-MM-dd"), [Validators.required]],
      Quantity: [0, 
                [Validators.required,
                  Validators.min(1)
                ]],
      Amount: [0, [
                    Validators.required,
                    Validators.min(1)]],
      Total: [0],
      ProductId: [0]
    });

    this.getOrders();
    this.getProducts();
  }

  displayErrorOnForm(formName: any, controlName: string){
    const control = formName.get(controlName);
    control?.autofocus;
    const invalid = Boolean(control?.invalid) && (this.isSubmit || Boolean(control?.touched) || Boolean(control?.dirty));
    return invalid;
  }

  getOrders(): void{
    this.orders_1 = this.orderService.getOrders();
    this.orders = this.orders_1;
  }

  getProducts(): void{
    this.products = this.productService.getInventories();
  }

  Add(){
    this.isSubmit = true;
  if (this.ordersGroup.valid){
      const order = this.ordersGroup.value;
      this.orderService.createOrder(order).subscribe(() =>{
        this.getOrders();
        this.ordersGroup.controls["OrderDate"].setValue(this.datePipe.transform(new Date(), "yyyy-MM-dd"));
        this.ordersGroup.controls["Amount"].setValue(0);
        this.ordersGroup.controls["Quantity"].setValue(0);
        this.ordersGroup.controls["ProductId"].setValue(0);
      });
    }
  }

  Update(){
    this.isSubmit = true;
    if (this.ordersGroup.valid){
      const order:Orders = this.ordersGroup.value;
      order.Id = this.orderId;
      console.log(order);
      this.orderService.updateOrder(order).subscribe(() =>{
        this.getOrders();
        this.ordersGroup.controls["OrderDate"].setValue(this.datePipe.transform(new Date(), "yyyy-MM-dd"));
        this.ordersGroup.controls["Amount"].setValue(0);
        this.ordersGroup.controls["Quantity"].setValue(0);
        this.ordersGroup.controls["ProductId"].setValue(0);
      });
    }
  }

  Clear(){
    this.isSubmit = false;
    this.ordersGroup.reset();
}

  onEdit(id: number){
    this.orderId = id;
    this.orderService.getOrder(id).subscribe((data) =>{
      this.ordersGroup.controls["OrderDate"].setValue(this.datePipe.transform(data.OrderDate, "yyyy-MM-dd"));
      this.ordersGroup.controls["Amount"].setValue(data.Amount);
      this.ordersGroup.controls["Quantity"].setValue(data.Quantity);
      this.ordersGroup.controls["ProductId"].setValue(data.ProductId);
    })
  }

  onDelete(id: number){
    this.dialogService.openConfirmDialog("Are you sure want delete this item ?", "Confirm Delete").subscribe(
      (result) =>{
        this.orderService.deleteOrder(id);
        this.getOrders();
      }
    );
  }
}
