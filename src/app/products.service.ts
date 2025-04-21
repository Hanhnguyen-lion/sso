import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Products } from './models/products';
import appConfig from './config/appConfig.json';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  url: string = `${appConfig['api-url']}/api/shopping/products`;
  constructor(
    private httpClient: HttpClient
  ) {}

  getProducts(): Observable<Products[]>{
    return this.httpClient.get<Products[]>(this.url);
  }
}
