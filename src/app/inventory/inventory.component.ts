import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { InventoryService } from '../inventory.service';
import { Inventory } from '../models/inventory';

@Component({
  standalone: false,
  selector: 'app-inventory',
  templateUrl: './inventory.component.html',
  styleUrl: './inventory.component.css'
})
export class InventoryComponent implements OnInit{

  inventories_1?: Observable<Inventory[]>;
  inventories?: Observable<Inventory[]>;

  constructor(private inventoryService: InventoryService){}

  ngOnInit(): void {
    this.getInventories();
  }

  getInventories(): void{
    this.inventories_1 = this.inventoryService.getInventories();
    this.inventories = this.inventories_1;
  }


}
