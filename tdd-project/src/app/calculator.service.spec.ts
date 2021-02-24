import { TestBed } from '@angular/core/testing';

import { CalculatorService } from './calculator.service';

describe('CalculatorService', () => {
  let service: CalculatorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CalculatorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should 1 + 2 + 3 = 6', () => {
    const calculator = new CalculatorService();
    expect(calculator.evaluate('1 + 2 + 3')).toEqual(6);
  });

  it('should 1 + 2 + 3 != 5', () => {
    const calculator = new CalculatorService();
    expect(calculator.evaluate('1 + 2 + 3')).not.toEqual(5);
  });
});
