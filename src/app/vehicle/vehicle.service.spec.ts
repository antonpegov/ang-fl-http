import { TestBed, inject } from '@angular/core/testing';
import { HttpModule, XHRBackend, Response, ResponseOptions } from "@angular/http";
import { MockBackend } from "@angular/http/testing"
import { Vehicle, VehicleService } from './vehicle.service';
import { AppMocks } from  '../app.mocks';

describe('VehicleService (real api)', () => {
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

describe('VehicleService (mocked api)', () => {

  const API = AppMocks.VEHICLES_API;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpModule],
      providers: [
        VehicleService,
        { provide: XHRBackend, useClass: MockBackend }
      ]
    });    
  });

  it('should start', inject([VehicleService, XHRBackend], (service: VehicleService, mockedBackend: MockBackend) => 
    expect(service).toBeTruthy()
  ));
  
  describe('getVehicles()', () => {
    
    it('should get an Observable<Vehicle[]> from mocked api', 
      inject([VehicleService, XHRBackend], (service: VehicleService, mockedBackend: MockBackend) => {
        mockedBackend.connections.subscribe((connection) => {
          connection.mockRespond(new Response(new ResponseOptions({body: JSON.stringify(API)})));
        });
        service.getVehicles().subscribe(
          items => expect(items[0].name).toEqual('Millennium Falcon')
        );
      }));
  });

});