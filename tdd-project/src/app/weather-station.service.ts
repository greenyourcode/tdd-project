import { Injectable } from '@angular/core';
import { timer } from 'rxjs';
import { filter, map, mapTo } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class WeatherStationService {
  constructor() { }
  
  getTemperature(city: string) {
    return timer(1000).pipe(
      mapTo(city),
      filter(_city => _city !== 'Bordeaux'),
      map(_city => 20)
    );
  }
}
