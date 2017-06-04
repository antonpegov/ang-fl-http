import { Component, Input, OnInit } from '@angular/core';
import { Vehicle, VehicleService } from '../vehicle.service';
import { Router, ActivatedRoute, Params } from "@angular/router";
import { Store } from "@ngrx/store";
import { Observable } from "rxjs/Observable";
import { INIT_VEHICLES, ADD_VEHICLE, REMOVE_VEHICLE, UPDATE_VEHICLE } from '../vehicle.reducer';
import { MdSelect, MdOption, MdCard, MdIcon, MdSlideToggle } from "@angular/material";
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
  private viewReady: boolean = true;  // Костыль для задержки рендеринга в случае загрузки данных

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
    if(id){ 
      // Передан id, работа с существующим объектом     
      this.newVehicle = false;     
      // Если не были загружены данные, загрузить 
      if (this._vehicleService.dataIsLoaded){ 
        this.vehicles.subscribe(vehicles => 
          this.vehicle = vehicles.find(item => item.id === Number(id))
        );
      } else {
        this.viewReady = false;
        this._vehicleService.getVehicles().subscribe(vehicles => {
          this._store.dispatch({type: INIT_VEHICLES, payload: vehicles});   
          this.vehicles.subscribe(vehicles => {
            this.vehicle = vehicles.find(item => item.id === Number(id))
            this.viewReady = true;
          }); 
        })
      }   
    } else { 
      // id пустой, нужно создать новый объект  
      if (this._vehicleService.dataIsLoaded){
        this.vehicle = new Vehicle(this.getLastVehicleId()+1, '');      
      } else {
        this.viewReady = false;
        // TODO: отработать кейс обновления страницы (данных нет)
        this._router.navigate(['/vehicles']);
      }   
    }
  }  

  private createVehicle(){
    this._store.dispatch({ type: ADD_VEHICLE, payload: this.vehicle });
    this.navToVehicleList();
  }

  private updateVehicle(){
    this._store.dispatch({ type: UPDATE_VEHICLE, payload: this.vehicle });
    this.navToVehicleList();
  }

  private deleteVehicle(){
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
  private navToVehicleList(toRoot?: boolean){
    this._router.navigate(['/vehicles', { id: toRoot ? null : this.vehicle.id }]);
  }
}
