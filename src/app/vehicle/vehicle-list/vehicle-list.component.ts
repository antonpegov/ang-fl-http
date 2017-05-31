import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Vehicle, VehicleService} from '../vehicle.service';
import { INIT_VEHICLES, ADD_VEHICLE, REMOVE_VEHICLE, UPDATE_VEHICLE } from '../vehicle.reducer';
import { VehicleComponent } from '../vehicle/vehicle.component';
import { Router, ActivatedRoute, Params } from "@angular/router";
import { Store } from "@ngrx/store";
import { AppState } from "../../app.state";

@Component({
  selector: 'app-vehicle-list',
  templateUrl: './vehicle-list.component.html',
  //styleUrls: ['./vehicle-list.component.css']
})
export class VehicleListComponent implements OnInit {
  
  private errorMessage: "not Initilized";
  private selectedVehicle: Vehicle;
  private selectedId: number;
  private vehicles: Observable<Vehicle[]>;

  constructor(
    private _vehicleService: VehicleService,
    private _router: Router,
    private _route: ActivatedRoute,
    private _store: Store<AppState>
  ) {
    this.vehicles = _store.select('vehicles');
  }

  ngOnInit() {
    // Если не было загрузки данных, загрузить их и поместить в хранилище
    if(!this._vehicleService.dataIsLoaded){
      this._vehicleService.getVehicles().subscribe(vehicles =>
        this._store.dispatch({type: INIT_VEHICLES, payload: vehicles})
      )
    }
    this.errorMessage = null;
    this._route.params
      .subscribe((params: Params) => this.selectedId = Number(params["id"]))
  }
  
  newVehicle(){
    this._router.navigate(['/vehicle'])
  }

  selectVehicle(vehicle:Vehicle){
    this.selectedVehicle = vehicle;
    this._router.navigate(['/vehicle', vehicle.id])
  }

  isSelected(vehicle: Vehicle) {
    return vehicle.id === this.selectedId; 
  }

}
