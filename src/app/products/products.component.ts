import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Products } from '../models/products';
import { ProductsService } from '../products.service';

@Component({
  standalone: false,
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent implements OnInit{
  
  products?: Observable<Products[]>;
  products_1?: Observable<Products[]>;
  displayStyle: string = "none";
  productDeleteId: number = 0;
  constructor(
    private productsService: ProductsService
  ){}

  ngOnInit(): void {
    this.getProducts();
  }

  getProducts(): void{
    this.products_1 = this.productsService.getProducts();
    this.products = this.products_1;
  }

  onEdit(productId: number){
    alert(productId);
  }

  onDelete(productId: number){
    this.productDeleteId = productId;
    this.displayStyle = "block";
  }

  deleteProduct(){
    alert("deleteProduct: "+this.deleteProduct)
  }
}
