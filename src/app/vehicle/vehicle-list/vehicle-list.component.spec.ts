import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { Observable } from 'rxjs/Observable';
import 'rxjs/Rx';
import { VehicleComponent } from '../vehicle/vehicle.component';
import { VehicleListComponent } from './vehicle-list.component';
import { Vehicle, VehicleService } from '../vehicle.service';

describe('VehicleListComponent', () => {
  let component: VehicleListComponent;
  let compiled: any;
  let fixture: ComponentFixture<VehicleListComponent>;
  let vehicleServiceStub: any;
  let vehicleService : VehicleService;

  beforeEach(async(() => {
    //stub VehicleService for test purpose:
    vehicleServiceStub = { 
      getVehicles: function(){
        return Observable.of([
          new Vehicle(1, 'X-Wing Fighter'),
          new Vehicle(2, 'B-Wing Fighter'),
          new Vehicle(3, 'Y-Wing Fighter')
        ]);
      }
    }

    TestBed.configureTestingModule({
      declarations: [ VehicleListComponent, VehicleComponent ],
      providers:[{provide: VehicleService, useValue: vehicleServiceStub}]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VehicleListComponent);
    component = fixture.componentInstance;
    vehicleService = TestBed.get(VehicleService);
    fixture.detectChanges();
  });

  it('should create component', () => {
    expect(component).toBeTruthy();
  });
  
  it('should get vehicles from service', () => {
    var vehicles: Vehicle[];
    vehicleService.getVehicles().subscribe(
      items => vehicles = items,
      error => console.error(error)
    );
    expect(vehicles[0].name).toEqual('X-Wing Fighter');
  });
  
  it('should set selected vehicle', () => {
    var vehicles: Vehicle[];
    vehicleService.getVehicles().subscribe(
      items => vehicles = items,
      error => console.error(error)
    );
    component.select(vehicles[1]);
    expect(component.selectedVehicle.name).toEqual('B-Wing Fighter');
  });
  
  
  it('should render list of vehicles', () => {
    // Получить данные
    let vehicles: Vehicle[];
    vehicleService.getVehicles().subscribe(
      items => vehicles = items,
      error => console.error(error)
    );
    // Достать скомпилированный шаблон
    compiled = fixture.nativeElement;
    expect(compiled.querySelector('li').textContent).toContain('X-Wing Fighter');
  });    

  it('should render vehicle component with selected vehicle', () => {
    let vehicles: Vehicle[];
    vehicleService.getVehicles().subscribe(
      items => vehicles = items,
      error => console.error(error)
    );
    // Достать скомпилированный шаблон
    compiled = fixture.nativeElement;
    component.select(vehicles[1]);
    fixture.detectChanges();
    expect(compiled.querySelector('app-vehicle h3').textContent).toContain('B-Wing Fighter');
  });    
    
});
