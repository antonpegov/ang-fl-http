import { Injectable } from "@angular/core";
import { Action } from "app/app.state";
import { Character } from "app/character/character.service";


@Injectable()
export class CharacterActions {

    static INIT_CHARACTERS = 'INIT_CHARACTERS';
    public initCharacters(): Action{
        return {
            type: CharacterActions.INIT_CHARACTERS,
            payload: undefined
        }
    }

    static INIT_CHARACTERS_SUCCESS = 'INIT_CHARACTERS_SUCCESS';
    public initCharactersSucess(characters: Character[]): Action{
        return {
            type: CharacterActions.INIT_CHARACTERS_SUCCESS,
            payload: characters
        }
    }

    static ADD_CHARACTER = 'ADD_CHARACTER';
    public addCharacter(character: Character): Action{
        return {
            type: CharacterActions.ADD_CHARACTER,
            payload: character
        }
    }

    static ADD_CHARACTER_SUCCESS = 'ADD_CHARACTER_SUCCESS';
    public addCharacterSuccess(): Action{
        return {
            type: CharacterActions.ADD_CHARACTER_SUCCESS,
            payload: undefined
        }
    }

    static REMOVE_CHARACTER = 'REMOVE_CHARACTER';
    public removeCharacter(character: Character): Action {
        return {
            type: CharacterActions.REMOVE_CHARACTER,
            payload: character
        }
    }

    static REMOVE_CHARACTER_SUCCESS = 'REMOVE_CHARACTER_SUCCESS';
    public removeCharacterSuccess(): Action {
        return {
            type: CharacterActions.REMOVE_CHARACTER_SUCCESS,
            payload: undefined
        }
    }

    static UPDATE_CHARACTER = 'UPDATE_CHARACTER';
    public updateCharacter(character: Character): Action {
        return {
            type: CharacterActions.UPDATE_CHARACTER,
            payload: character
        }
    }

    static UPDATE_CHARACTER_SUCCESS = 'UPDATE_CHARACTER_SUCCESS';
    public updateCharacterSuccess(): Action {
        return {
            type: CharacterActions.UPDATE_CHARACTER_SUCCESS,
            payload: undefined
        }
    }
}