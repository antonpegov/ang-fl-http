import { TestBed, inject } from '@angular/core/testing';
import { HttpModule, Response } from "@angular/http";
import { VehicleService } from './vehicle.service';

describe('VehicleService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpModule],
      providers: [VehicleService]
    });
  });

  it('should start', inject([VehicleService], (service: VehicleService) => {
    expect(service).toBeTruthy();
  }));

});
