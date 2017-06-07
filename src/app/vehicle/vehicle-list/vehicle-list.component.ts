import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Vehicle, VehicleService} from '../vehicle.service';
import { VehicleActions } from "app/store/actions";
import { VehicleComponent } from '../vehicle/vehicle.component';
import { Router, ActivatedRoute, Params } from "@angular/router";
import { AppState, Store } from "app/app.state";

import { AngularFireAuth, AngularFireAuthProvider,FirebaseAuthStateObservable } from "angularfire2/auth";

@Component({
  selector: 'app-vehicle-list',
  templateUrl: './vehicle-list.component.html',
  //styleUrls: ['./vehicle-list.component.css']
})
export class VehicleListComponent implements OnInit {
  
  private selectedVehicle: Vehicle;
  private selectedId: number;
  public vehicles$: Observable<Vehicle[]>;

  constructor(
    //private _vehicleService: VehicleService,
    private _router: Router,
    private _route: ActivatedRoute,
    private _store: Store<AppState>,
    private _vehicleActions: VehicleActions,
    //private _db: AngularFireDatabase,
    private _auth: AngularFireAuth
  ) {
    this.vehicles$ = _store.select(s => s.vehicles); // Подключение к разделу хранилища
  }

  ngOnInit() {
      // Выделение персонажа по переданному id
    this._route.params
      .subscribe((params: Params) => this.selectedId = Number(params["id"]))
  }
  
  public newVehicle(){
    this._router.navigate(['/vehicle'])
  }
  public selectVehicle(vehicle:Vehicle){
    this.selectedVehicle = vehicle;
    this._router.navigate(['/vehicle', vehicle.id])
  }
  public isSelected(vehicle: Vehicle) {
    return vehicle.id === this.selectedId; 
  }

}
