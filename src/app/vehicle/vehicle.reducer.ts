import { ActionReducer, Action } from "@ngrx/store";
import { Vehicle } from './vehicle.service';

/*
  Action Constants
*/
export const INIT_VEHICLES = 'INIT_VEHICLES';
export const ADD_VEHICLE = 'ADD_VEHICLE';
export const REMOVE_VEHICLE = 'REMOVE_VEHICLE';
export const UPDATE_VEHICLE = 'UPDATE_VEHICLE';

/*
    Reducer for store of vehicles
*/
export const vehiclesReducer: ActionReducer<Vehicle[]> = 
  function (state: Vehicle[] = [], action: Action){
    switch(action.type){
      case 'INIT_VEHICLES':
        console.log('Vehicles initialized...')
        return action.payload;  
      case 'ADD_VEHICLE':
        return [ ...state, action.payload ];
      case 'REMOVE_VEHICLE':
        return state.filter(v => v.id !== action.payload.id);
      case 'UPDATE_VEHICLE':
        return state.map(v => v.id !== action.payload.id ? v : action.payload);
      default:
        return state;
    }
}
