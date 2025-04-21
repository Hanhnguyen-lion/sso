import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Inventory } from './models/inventory';

import appConfig from '../app/config/appConfig.json'

@Injectable({
  providedIn: 'root'
})
export class InventoryService {

  url: string = `${appConfig['api-url']}/api/shopping/orders/Inventories`;

  constructor(private httpClient: HttpClient) { }

  getInventories(): Observable<Inventory[]>{
    return this.httpClient.get<Inventory[]>(this.url);
  }
}
