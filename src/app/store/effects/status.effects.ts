
import { Injectable } from "@angular/core";
import { Effect, Actions } from '@ngrx/effects';
import { Vehicle, VehicleService } from "app/vehicle/vehicle.service";
import { CharacterActions, VehicleActions, StatusActions } from "app/store/actions";
import { Observable } from "rxjs/Observable";

@Injectable()
export class  StatusEffects {

    private targets = ['CHARACTERS','VEHICLES'];

    constructor(
        private actions$: Actions,
        private _vehicleActions: VehicleActions,
        private _statusActions: StatusActions,
        private _characterActions: CharacterActions,
    ) {}

    @Effect()
    loading$ = this.actions$
        .ofType(StatusActions.INITIALIZING)
        .mergeMap(() => Observable.from([
            this._characterActions.initCharacters(),
            this._vehicleActions.initVehicles()
        ]))

    // @Effect()
    // loaded$ = this.actions$
    //     .ofType(VehicleActions.INIT_VEHICLES_SUCCESS, CharacterActions.INIT_CHARACTERS_SUCCESS)
    //     .map(action => {           
    //         return this._statusActions.dataLoaded('data')
    //     })   
    
    @Effect()
    saving$ = this.actions$
        .ofType(
            VehicleActions.ADD_VEHICLE, 
            VehicleActions.REMOVE_VEHICLE, 
            VehicleActions.UPDATE_VEHICLE,
            CharacterActions.ADD_CHARACTER,
            CharacterActions.REMOVE_CHARACTER,
            CharacterActions.UPDATE_CHARACTER
        )
        .map(action => {           
            //return this._statusActions.dataLoading(this.getKey(action))
            return this._statusActions.dataLoading('test!')
        })

    @Effect()
    success$ = this.actions$
        .ofType(
            VehicleActions.ADD_VEHICLE_SUCCESS, 
            VehicleActions.REMOVE_VEHICLE_SUCCESS, 
            VehicleActions.UPDATE_VEHICLE_SUCCESS,
            CharacterActions.ADD_CHARACTER_SUCCESS,
            CharacterActions.REMOVE_CHARACTER_SUCCESS,
            CharacterActions.UPDATE_CHARACTER_SUCCESS
        )
        .map(action => {           
            return this._statusActions.dataLoading(this.getKey(action))
        })
    
    // Вынимает и экшена название сущнисти
    private getKey = action => {
        let go = true, i = 0;
        while(go){
            if(action.type.indexOf(this.targets[i]) !== -1 || i == this.targets.length) 
                go = false;
            else i++;
        }
        return this.targets[i].toLowerCase();    
    }

}