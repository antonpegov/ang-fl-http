import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Vehicle, VehicleService } from '../vehicle.service';
import { VehicleComponent } from '../vehicle/vehicle.component';
@Component({
  selector: 'app-vehicle-list',
  templateUrl: './vehicle-list.component.html',
  styleUrls: ['./vehicle-list.component.css']
})
export class VehicleListComponent implements OnInit {
  errorMessage: "not Initilized";
  selectedVehicle: Vehicle;
  vehicles: Vehicle[];

  constructor(private _vehicleService: VehicleService ) { }

  getVehicles(){
     this._vehicleService.getVehicles()
      .subscribe(
        vehicles => this.vehicles = vehicles, // success
        error => this.errorMessage = error    // falure
      );
  }

  select(vehicle:Vehicle){
    this.selectedVehicle = vehicle;
  }

  ngOnInit() {
    this.getVehicles();
    this.errorMessage = null;
  }

}
