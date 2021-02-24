import { async, fakeAsync, flush, TestBed, tick, waitForAsync } from '@angular/core/testing';

import { WeatherStationService } from './weather-station.service';

fdescribe('WeatherStationService', () => {
  let service: WeatherStationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WeatherStationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  xit('should agree that 1 is equal to 2, testA', (done) => {
    setTimeout(() => {
      expect(1).toEqual(2);
      done();
    })
  });

  it('should 1 is equal to 2, testB', async () => {
    await new Promise<void>(resolve => {
      setTimeout(() => {
        expect(1).not.toEqual(2);
        resolve();
      });
    });
  });

  it('should 1 is equal to 2, testC', waitForAsync(() => {
      setTimeout(() => {
        expect(1).not.toEqual(2);
    });
  }));

  it('should temperature in Bordeaux is 27 degres celcius, testA', waitForAsync(() => {
    service.getTemperature('Bordeaux')
      .subscribe((temperature) => {
        expect(temperature).toEqual(27);
      })
  }));

  it('should temperature in Bordeaux is 27 degres celcius, testB', fakeAsync(() => {
    let temperature;
    service.getTemperature('Bordeaux')
      .subscribe((_temperature) => temperature = _temperature);
    tick(1000);
    expect(temperature).toBe(27);
  }));

});
