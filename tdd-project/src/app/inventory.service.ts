import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class InventoryService {
  inventoryCount: number = 0;
  
  constructor() { }
  
  increment(count: number) {
    this.inventoryCount += count;
  }

  decrement(count: number) {
    this.inventoryCount -= count;
  }
}
