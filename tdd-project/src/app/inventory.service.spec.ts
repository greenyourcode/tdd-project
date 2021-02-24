import { TestBed } from '@angular/core/testing';

import { InventoryService } from './inventory.service';

describe('InventoryService', () => {
  let service: InventoryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(InventoryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should init the count', () => {
    expect(service.inventoryCount).toEqual(0);
  });

  it('should increment count to 1', () => {
    expect(service.inventoryCount).toEqual(0);
    service.increment(12);
    expect(service.inventoryCount).toEqual(12);
  });

  it('should decrement count to 1', () => {
    service.inventoryCount = 7;
    expect(service.inventoryCount).toEqual(7);
    service.decrement(4);
    expect(service.inventoryCount).toEqual(3);
  });
});
