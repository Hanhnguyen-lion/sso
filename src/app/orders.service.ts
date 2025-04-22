import { HttpClient, HttpHeaders } from '@angular/common/http';
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

  getOrder(id: number): Observable<Orders>{
    const url = `${this.url}/${id}`;
    return this.httpClient.get<Orders>(url);
  }

  deleteOrder(id: number): Observable<void>{
    const url = `${this.url}/${id}`;
    return this.httpClient.delete<void>(url);
  }

  updateOrder(order: Orders): Observable<Orders>{
    const url = `${this.url}/${order.Id}`;
    return this.httpClient.put<Orders>(url, order,
      {headers: new HttpHeaders({"Content-Type":"application/json"})}
    );
  }

  createOrder(order: Orders): Observable<Orders>{
    return this.httpClient.post<Orders>(this.url, order, 
      {headers: new HttpHeaders({
        "Content-Type" :  "application/json"
      })}
    );
  }

  getInterests(): Observable<Orders[]>{
    const apiUrl = `${this.url}/GetInterests`;
    return this.httpClient.get<Orders[]>(apiUrl);
  }
}
