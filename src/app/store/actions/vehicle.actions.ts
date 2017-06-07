import { Injectable } from "@angular/core";
import { Vehicle } from "app/vehicle/vehicle.service";
import { Action } from "app/app.state";

@Injectable()
export class VehicleActions {

    static INIT_VEHICLES = 'INIT_VEHICLES';
    public initVehicles(): Action {
        return {
            type: VehicleActions.INIT_VEHICLES
        };
    }

    static INIT_VEHICLES_SUCCESS = 'INIT_VEHICLES_SUCCESS';
    public initVehiclesSuccess(vehicles: Vehicle[]): Action{
        return {
            type: VehicleActions.INIT_VEHICLES_SUCCESS,
            payload: vehicles
        }
    }

    static ADD_VEHICLE = 'ADD_VEHICLE';
    public addVehicle(vehicle: Vehicle): Action {
        return {
            type: VehicleActions.ADD_VEHICLE,
            payload: vehicle
        }
    }

    static ADD_VEHICLE_SUCCESS = 'ADD_VEHICLE_SUCCESS';
    public addVehicleSuccess(): Action{
        return {
            type: VehicleActions.ADD_VEHICLE_SUCCESS,
            payload: undefined
        }
    }


    static REMOVE_VEHICLE = 'REMOVE_VEHICLE';
    public removeVehicle(vehicle: Vehicle): Action {
        return {
            type: VehicleActions.REMOVE_VEHICLE,
            payload: vehicle
        }
    }

    static REMOVE_VEHICLE_SUCCESS = 'REMOVE_VEHICLE_SUCCESS';
    public removeVehicleSuccess(): Action {
        return {
            type: VehicleActions.REMOVE_VEHICLE_SUCCESS,
            payload: undefined
        }
    }

    static UPDATE_VEHICLE = 'UPDATE_VEHICLE';
    public updateVehicle(vehicle: Vehicle): Action {
        return {
            type: VehicleActions.UPDATE_VEHICLE,
            payload: vehicle
        }
    }

    static UPDATE_VEHICLE_SUCCESS = 'UPDATE_VEHICLE_SUCCESS';
    public updateVehicleSuccess(): Action {
        return {
            type: VehicleActions.UPDATE_VEHICLE_SUCCESS,
            payload: undefined
        }
    }

}