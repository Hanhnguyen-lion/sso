import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Orders } from './models/orders';
import appConfig from './config/appConfig.json'

@Injectable({
  providedIn: 'root'
})
export class OrdersService {

  url:string = `${appConfig['api-url']}/api/shopping/orders`;

  constructor(private httpClient: HttpClient) { }

  getOrders(): Observable<Orders[]>{
    return this.httpClient.get<Orders[]>(this.url);
  }

  getInterests(): Observable<Orders[]>{
    const apiUrl = `${this.url}/GetInterests`;
    return this.httpClient.get<Orders[]>(apiUrl);
  }
}
