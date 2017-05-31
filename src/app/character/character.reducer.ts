import { ActionReducer, Action } from "@ngrx/store";
import { Character } from './character.service';

/*
  Action Constants
*/
export const INIT_CHARCTERS = 'INIT_CHARCTERS';
export const ADD_CHARCTER = 'ADD_CHARCTER';
export const REMOVE_CHARCTER = 'REMOVE_CHARCTER';
export const UPDATE_CHARCTER = 'UPDATE_CHARCTER';
/*
    Reducer for store of characters
*/
export const characterReducer: ActionReducer<Character[]> = 
  function (state: Character[] = [], action: Action){
    switch(action.type){
      case 'INIT_CHARCTERS':
        console.log('Vehicles initialized...')
        return action.payload;  
      case 'ADD_CHARCTER':
        return [ ...state, action.payload ];
      case 'REMOVE_CHARCTER':
        return state.filter(c => c.id !== action.payload);
      case 'UPDATE_CHARCTER':
        return state.map(c => c.id !== action.payload.id ? c : action.payload);
      default:
        return state;
    }
}