import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Vehicle, VehicleService } from '../vehicle.service';
import { VehicleComponent } from '../vehicle/vehicle.component';
import { Router, ActivatedRoute, Params } from "@angular/router";

@Component({
  selector: 'app-vehicle-list',
  templateUrl: './vehicle-list.component.html',
  styleUrls: ['./vehicle-list.component.css']
})
export class VehicleListComponent implements OnInit {
  
  errorMessage: "not Initilized";
  selectedVehicle: Vehicle;
  selectedId: number;
  vehicles: Vehicle[];

  constructor(
    private _vehicleService: VehicleService,
    private _router: Router,
    private _route: ActivatedRoute,
  ) {}

  ngOnInit() {
    this.getVehicles();
    this.errorMessage = null;
    this._route.params
      .subscribe((params: Params) => this.selectedId = Number(params["id"]))
  }
  
  newVehicle(){
    this._router.navigate(['/vehicle'])
  }

  getVehicles(){
    this._vehicleService.getVehicles()
      .subscribe(
        vehicles => this.vehicles = vehicles, // success
        error => this.errorMessage = error    // falure
      );
  }

  selectVehicle(vehicle:Vehicle){
    this.selectedVehicle = vehicle;
    this._router.navigate(['/vehicle', vehicle.id])
  }

  isSelected(vehicle: Vehicle) {debugger;
    return vehicle.id === this.selectedId; 
  }

}
