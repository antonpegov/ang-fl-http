import { TestBed, inject } from '@angular/core/testing';
import { HttpModule, Response } from "@angular/http";
import { Vehicle, VehicleService } from './vehicle.service';

describe('VehicleService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpModule],
      providers: [VehicleService]
    });    
  });

  it('should start', inject([VehicleService], (service: VehicleService) => 
    expect(service).toBeTruthy()
  ));

  
  describe('getVehicles()', () => {
    
    it('should get an Observable<Vehicle[]> from api', 
      inject([VehicleService], (service: VehicleService) => {
        service.getVehicles().subscribe(
          items => expect(items[0].name).toEqual('Millennium Falcon')
        );
      }));
  });

});
