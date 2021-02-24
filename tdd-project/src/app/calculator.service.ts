import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CalculatorService {
  evaluate(expression: string): any {

    return expression.split('+')
      .map(rawValue => parseInt(rawValue, 10))
      .reduce((acc, value) => acc + value, 0);
  }

  constructor() { }
}
