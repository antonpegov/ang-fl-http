import { Injectable } from "@angular/core";
import { Effect, Actions } from '@ngrx/effects';
import { Character, CharacterService } from "app/character/character.service";
import { CharacterActions } from "app/store/actions";

@Injectable()
export class CharacterEffects {
    constructor(
        private actions$: Actions,
        private _characterActions: CharacterActions,
        private _characterService: CharacterService
    ) {}
    
    @Effect()
    loadVehicles$ = this.actions$
        .ofType(CharacterActions.INIT_CHARACTERS)
        .switchMap(() => this._characterService.getCharacters())
        .map((characters: Character[]) => 
            this._characterActions.initCharactersSucess(characters))
}