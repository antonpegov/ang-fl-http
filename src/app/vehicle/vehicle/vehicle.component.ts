import { Component, Input, OnInit } from '@angular/core';
import { Vehicle, VehicleService } from '../vehicle.service';
import { Router, ActivatedRoute, Params } from "@angular/router";
import { Store } from "@ngrx/store";

@Component({
  selector: 'app-vehicle',
  templateUrl: './vehicle.component.html',
  styleUrls: ['./vehicle.component.css'],
  //providers: [Store]
})
export class VehicleComponent implements OnInit {
  
  //@Input() vehicle: Vehicle;
  vehicle: Vehicle = new Vehicle(1,'tmp'); 
  
  constructor(
    private _route: ActivatedRoute,
    private _router: Router,
    private _vehicleService: VehicleService,
    private _store: Store<any>
  ) {}
  
  ngOnInit() {
    let paramsTmp: Params;
    this._route.params
    .switchMap((params: Params) => {paramsTmp = params; return this._vehicleService.getVehicles()} )
    .subscribe(
      (vehicles: Vehicle[]) => {this.vehicle = vehicles.find(item => item.id === Number(paramsTmp.id))},
      (error: any) => console.error('Can"t get Vehicle!')
    );  
  }
  
  gotoVehicles(){
    let vehicleId = this.vehicle ? this.vehicle.id : null;
    this._router.navigate(['/vehicles', { id: vehicleId}]);
  }
}
