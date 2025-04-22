import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Products } from './models/products';
import appConfig from './config/appConfig.json';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  url: string = `${appConfig['api-url']}/api/shopping/products`;

  httpHeader= {
    headers: new HttpHeaders({
      "Content-Type": "application/json"
    })
  };

  constructor(
    private httpClient: HttpClient
  ) {}

  getProducts(): Observable<Products[]>{
    return this.httpClient.get<Products[]>(this.url);
  }

  getProduct(productId: number): Observable<Products>{
    const url = `${this.url}/${productId}`;
    return this.httpClient.get<Products>(url);
  }

  updateProduct(product: Products): Observable<Products>{
    const url = `${this.url}/${product.ProductId}`;
    return this.httpClient.put<Products>(url, product, this.httpHeader);
  }

  addProduct(product: Products): Observable<Products>{
    return this.httpClient.post<Products>(this.url, product, this.httpHeader);
  }

  deleteProduct(productId: number): Observable<void>{
    const url = `${this.url}/${productId}`;
    return this.httpClient.delete<void>(url);
  }
}
