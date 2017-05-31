import { Component, Input, OnInit } from '@angular/core';
import { Vehicle, VehicleService } from '../vehicle.service';
import { Router, ActivatedRoute, Params } from "@angular/router";
import { Store } from "@ngrx/store";
import { Observable } from "rxjs/Observable";
import { INIT_VEHICLES, ADD_VEHICLE, REMOVE_VEHICLE, UPDATE_VEHICLE } from '../vehicle.reducer';
import { AppState } from "app/app.state";

@Component({
  selector: 'app-vehicle',
  templateUrl: './vehicle.component.html',
  //styleUrls: ['./vehicle.component.css'],
})
export class VehicleComponent implements OnInit {
  
  private vehicle: Vehicle// = new Vehicle(1,'asd'); 
  private vehicles: Observable<Vehicle[]>;
  private newVehicle: boolean = true;

  constructor(
    private _route: ActivatedRoute,
    private _router: Router,
    private _vehicleService: VehicleService,
    private _store: Store<AppState>
  ) {
    this.vehicles = _store.select('vehicles');
  }
  
  ngOnInit() {
    let id = this._route.snapshot.params.id ? this._route.snapshot.params.id : null;
    if(id){ // Передан id       
      this.newVehicle = false;     
      // Если не были загружены данные, загрузить 
      if (!this._vehicleService.dataIsLoaded){ 
        this._vehicleService.getVehicles().subscribe(vehicles => {
          this._store.dispatch({type: INIT_VEHICLES, payload: vehicles});   
          this.vehicles.subscribe(vehicles => {
            this.vehicle = vehicles.find(item => item.id === Number(id))
          }); 
        })
      } else {
        this.vehicles.subscribe(vehicles => 
          this.vehicle = vehicles.find(item => item.id === Number(id))
        );  
      }   
      if(!this.vehicle) 
        console.error('No Vehicle found!');
    } else { // id пустой, создаем новый объект      
      this.vehicle = new Vehicle(this.getLastVehicleId()+1, null, null);      
    }
  }
  
  private saveVehicle(){
    this._store.dispatch({ type: UPDATE_VEHICLE, payload: this.vehicle });
    this.navToVehicleList();
  }

  private addVehicle(){
    this._store.dispatch({ type: ADD_VEHICLE, payload: this.vehicle });
    this.navToVehicleList();
  }

  private removeVehicle(){
    this._store.dispatch({ type: REMOVE_VEHICLE, payload: this.vehicle });
    this.navToVehicleList(true);
  }

  private getLastVehicleId(){
    let id: number;
    this.vehicles.subscribe( vehicles => 
      id = vehicles[vehicles.length-1].id
    )
    return id;
  }
  private navToVehicleList(toRoot?:boolean){
    this._router.navigate(['/vehicles', { id: toRoot ? null : this.vehicle.id }]);
  }
}
