import { ActionReducer, Action } from "@ngrx/store";
import { Vehicle } from 'app/vehicle/vehicle.service';
import { VehicleActions } from "app/store/actions/vehicle.actions";

/*
    Reducer for store of vehicles
*/
export function vehiclesReducer (state: Vehicle[] = [], action: Action){
    switch(action.type){
      case VehicleActions.INIT_VEHICLES:
        console.log('Initializing vehicles...')
        return state;
      case VehicleActions.INIT_VEHICLES_SUCCESS:      
        console.log('Vehicles ready...')
        return action.payload;  
      case 'ADD_VEHICLE':
        console.log('Start vehicle adding...')
        return [ ...state, action.payload ];
      case VehicleActions.ADD_VEHICLE_SUCCESS:
        console.log('Succesfuly added...')
        return [ ...state, action.payload ];
      case 'REMOVE_VEHICLE':
        return state.filter(v => v.id !== action.payload.id);
      case 'UPDATE_VEHICLE':
        return state.map(v => v.id !== action.payload.id ? v : action.payload);
      default:
        return state;
    }
}
