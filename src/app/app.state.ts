
import { Vehicle } from "./vehicle/vehicle.service";
import { Character } from "./character/character.service";
import { vehiclesReducer, characterReducer, statusReducer, initReducer } from "app/store/reducers";
import * as store from '@ngrx/store';
import { compose } from '@ngrx/core/compose';
import { combineReducers} from '@ngrx/store';

export * from '@ngrx/store';

export interface AppState {
  vehicles: Vehicle[];
  characters: Character[];
  appStatus: Status;
  initilized: Init;
}

export interface Status {
  level: string,
  text: string
}

export interface Init {
  characters: boolean,
  vehicles: boolean,
  app: boolean
}

export default compose(combineReducers)({
  vehicles : vehiclesReducer,
  characters: characterReducer,
  appStatus: statusReducer,
  initilized: initReducer
});
