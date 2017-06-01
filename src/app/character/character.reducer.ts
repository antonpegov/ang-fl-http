import { ActionReducer, Action } from "@ngrx/store";
import { Character } from './character.service';
import { Observable } from "rxjs/Observable";

/*
  Action Constants
*/
export const INIT_CHARACTERS = 'INIT_CHARACTERS';
export const ADD_CHARACTER = 'ADD_CHARACTER';
export const REMOVE_CHARACTER = 'REMOVE_CHARACTER';
export const UPDATE_CHARACTER = 'UPDATE_CHARACTER';
/*
    Reducer for store of characters
*/
export function characterReducer(state: Character[] = [], action: Action){
    let character: Character = action.payload && action.payload.id ? action.payload : undefined;
    switch(action.type){
      case 'INIT_CHARACTERS':
        // принимает массив, в отличие от остальных вызовов
        console.log('Characters initialized...')
        return action.payload;  
      case 'ADD_CHARACTER':
        return character ? [ ...state, character ] : state;
      case 'REMOVE_CHARACTER':
        return character ? state.filter(item => item.id !== character.id) : state;
      case 'UPDATE_CHARACTER':
        return character ? state.map(c => c.id !== character.id ? c : character) : state;
      default:
        return state;
    }
}