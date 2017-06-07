import { Action } from "@ngrx/store";
import { StatusActions, CharacterActions, VehicleActions } from "../actions";
import { Status, Init } from "app/app.state";

// Начальные данные
let _status: Status = {level: 'green', text: 'Wellcome!'} 
let _init: Init = { characters: false, vehicles: false, app: false }

export const statusReducer = (state: Status = _status, action: Action): Status => {
    //console.log(action.payload)
    switch (action.type){
        case StatusActions.DATA_LOADING :
            return {level:'yellow', text:action.payload};
        case StatusActions.DATA_LOADED:
            return {level:'green', text:action.payload};
        case StatusActions.DATA_NOT_LOADED:
            return {level:'red', text:action.payload};
        case StatusActions.DATA_SAVING:
            return {level:'yellow', text:action.payload};
        case StatusActions.DATA_SAVED:
            return {level:'green', text:action.payload};
        case StatusActions.DATA_NOT_SAVED:
            return {level:'red', text:action.payload};
        default: 
            return state;
    }
}

export const initReducer = (state: Init = _init, action: Action): Init => {
    switch (action.type){
        case StatusActions.INITIALIZING:
            return state;
        case StatusActions.INITIALIZED:
            console.log('App initialized...');
            return state;
        case CharacterActions.INIT_CHARACTERS_SUCCESS:
            return state.app ? state : 
                Object.assign({}, state, {
                    characters: true,
                    app: true && state.vehicles
                });
        case VehicleActions.INIT_VEHICLES_SUCCESS: 
            return state.app ? state : 
                Object.assign({}, state, {
                    vehicles: true,
                    app: state.characters && true
                });
        default: 
            return state;
    }
}