
import { Injectable } from "@angular/core";
import { Effect, Actions } from '@ngrx/effects';
import { Vehicle, VehicleService } from "app/vehicle/vehicle.service";
import { CharacterActions, VehicleActions, StatusActions } from "app/store/actions";
import { Observable } from "rxjs/Observable";

@Injectable()
export class VehicleEffects {
    constructor(
        private actions$: Actions,
        private _vehicleActions: VehicleActions,
        private _statusActions: StatusActions,
        private _vehicleService: VehicleService,
    ) {}

    @Effect()
    loadVehicles$ = this.actions$
        .ofType(VehicleActions.INIT_VEHICLES)
        .switchMap(() => this._vehicleService.getVehicles()
            .map((vehicles: Vehicle[]) => this._vehicleActions.initVehiclesSuccess(vehicles))
            .catch(err => Observable.of(this._statusActions.dataLoadingError('vehicles')))
        );

    // loadVehicles$ = this.actions$
    // .ofType(VehicleActions.INIT_VEHICLES)
    // .mergeMap(() => Observable.from([
    //     Observable.of(this._statusActions.dataLoading('vehicles')),
    //     this._vehicleService.getVehicles()
    //         .map((vehicles: Vehicle[]) => this._vehicleActions.initVehiclesSuccess(vehicles))
    //         .catch(err => Observable.of(this._statusActions.dataLoadingError('vehicles')))
    // ]))
    // .map(action => action)

    @Effect()
    addVehicle$ = this.actions$
        .ofType(VehicleActions.ADD_VEHICLE)
        .map(() => this._statusActions.dataLoading('adding new vehicle...'))
        .map(action => 
            Observable.fromPromise(
                this._vehicleService.addVehicle(action.payload)
        ))
        .map((res) => {debugger
            var o = Observable;
            console.log(res)
            if(res)
                return this._vehicleActions.addVehicleSuccess();
            else
                return this._statusActions.dataLoadingError("Error adding vehicle");
        })
}