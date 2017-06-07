import { Component, Input, OnInit, OnDestroy } from '@angular/core';
import { Vehicle, VehicleService } from '../vehicle.service';
import { Router, ActivatedRoute, Params } from "@angular/router";
import { Store } from "@ngrx/store";
import { VehicleActions } from 'app/store/actions';
import { MdSelect, MdOption, MdCard, MdIcon, MdSlideToggle, MdSpinner } from "@angular/material";
import { AppState, Init } from "app/app.state";
import { Observable, Subscription, Subject, BehaviorSubject } from "rxjs/Rx";

@Component({
  selector: 'app-vehicle',
  templateUrl: './vehicle.component.html',
  //styleUrls: ['./vehicle.component.css'],
})
export class VehicleComponent implements OnInit, OnDestroy {
  
  private vehicle: Vehicle// = new Vehicle(1,'asd'); 
  private vehicles$: Observable<Vehicle[]>;
  private initialized$: Observable<Init>;
  private newVehicle: boolean = true;
  private viewReady: boolean = false;  // Костыль для задержки рендеринга в случае загрузки данных
  private sub: Subscription;
  private initDone$ = new Subject<boolean>();

  constructor(
    private _route: ActivatedRoute,
    private _router: Router,
    private _vehicleService: VehicleService,
    private _vehicleActions: VehicleActions,
    private _store: Store<AppState>
  ) {
    this.vehicles$ = _store.select(s => s.vehicles);
    this.initialized$ = _store.select(s => s.initilized);
  }
  
  ngOnInit() {

    let id = this._route.snapshot.params.id ? this._route.snapshot.params.id : null;

    this.initialized$.subscribe((init: Init) => {
      if(init.app) 
        this.initDone$.next(true);
    })

    this.sub = this.vehicles$.skipUntil(this.initDone$).subscribe(vehicles => {
        //console.warn(vehicles);
        if(id)
          this.vehicle = vehicles.find(item => item.id === Number(id))     
        else 
          this.vehicle = new Vehicle(vehicles[vehicles.length-1].id+1, '');

        this.viewReady = true;
      });
    //this.initDone$.map(x=>console.info(x)).subscribe();    
  }  

  ngOnDestroy(){
    this.sub && this.sub.unsubscribe();
  }

  private createVehicle(){
    this._store.dispatch(this._vehicleActions.addVehicle(this.vehicle));
    this.navToVehicleList();
  }

  private updateVehicle(){
    this._store.dispatch(this._vehicleActions.updateVehicle(this.vehicle));
    this.navToVehicleList();
  }

  private deleteVehicle(){
    this._store.dispatch(this._vehicleActions.removeVehicle(this.vehicle));
    this.navToVehicleList(true);
  }

  private navToVehicleList(toRoot?: boolean){
    this._router.navigate(['/vehicles', { id: toRoot ? null : this.vehicle.id }]);
  }
}
