import { ActionReducer, Action } from "@ngrx/store";
import { Character } from 'app/character/character.service';
import { Observable } from "rxjs/Observable";

/*
    Reducer for store of characters
*/
export function characterReducer(state: Character[] = [], action: Action){
    let character: Character = action.payload && action.payload.id ? action.payload : undefined;
    switch(action.type){
      case 'INIT_CHARACTERS':
        console.log('Initializing characters ...');
        return state;
      case 'INIT_CHARACTERS_SUCCESS':
        console.log('Characters ready...')
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