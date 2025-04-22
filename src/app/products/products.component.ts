import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Products } from '../models/products';
import { ProductsService } from '../products.service';
import { DialogService } from '../dialog.service';
import { FormBuilder, Validators } from '@angular/forms';
import { DatePipe } from '@angular/common';

@Component({
  standalone: false,
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent implements OnInit{
  
  products?: Observable<Products[]>;
  products_1?: Observable<Products[]>;

  productForm: any;

  productId: number = 0;

  isSubmit:boolean = false;

  constructor(
    private productsService: ProductsService,
    private dialogService: DialogService,
    private formBuilder: FormBuilder,
    private datePipe: DatePipe
  ){}

  displayErrorOnForm(formName: any, controlName: string){
    const control = formName.get(controlName);
    control?.autofocus;
    const invalid = Boolean(control?.invalid) && (this.isSubmit || Boolean(control?.touched) || Boolean(control?.dirty));
    return invalid;
  }

  ngOnInit(): void {

    this.productForm = this.formBuilder.group({
      OrderDate: [this.datePipe.transform(new Date(), "yyyy-MM-dd"), [Validators.required]],
      ProductName: ["", [Validators.required]],
      Description: ["", [Validators.required]],
      Quantity: [0, [
                      Validators.required, 
                      Validators.min(1)]],
      Price: [0, [
        Validators.required, 
        Validators.min(1)]],
      Total: [0]
    });

    this.getProducts();
  }

  getProducts(): void{
    this.products_1 = this.productsService.getProducts();
    this.products = this.products_1;
  }

  onEdit(productId: number){
    this.productId = productId;
    this.productsService.getProduct(productId).subscribe((product: Products) =>{
      if (product){
        this.productForm.controls["ProductName"].setValue(product.ProductName);
        this.productForm.controls["Description"].setValue(product.Description);
        this.productForm.controls["OrderDate"].setValue(this.datePipe.transform(product.OrderDate, "yyyy-MM-dd"));
        this.productForm.controls["Quantity"].setValue(product.Quantity);
        this.productForm.controls["Price"].setValue(product.Price);
      }
    })
  }

  Update(){
    this.isSubmit = true;
    if (this.productForm.Valid){
      const product: Products = this.productForm.value;
      product.ProductId = this.productId;
      this.productsService.updateProduct(product).subscribe(
        ()=>{
          this.getProducts();
          this.Clear();
          this.isSubmit = false;
        })
      }
  }

  Add(){
    this.isSubmit = true;
    if (this.productForm.Valid){
      const product: Products = this.productForm.value;
      this.productsService.addProduct(product).subscribe(() =>{
        this.getProducts();
        this.Clear();
        this.isSubmit = false;
      });
    }
  }

  Clear(){
    this.productForm.reset();
  }

  onDelete(productId: number){
    this.dialogService.openConfirmDialog("Are you sure want to delete this item?", "Confirm Delete")
    .subscribe((result) =>{
      if (result){
        this.productsService.deleteProduct(productId).subscribe(() =>{
          this.getProducts();
        });
      }
    })
  }
}
