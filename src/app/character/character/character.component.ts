import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, Params } from "@angular/router";
import { CharacterService, Character } from "../character.service";
import { Store } from "app/app.state";
import { ADD_CHARCTER, REMOVE_CHARCTER, UPDATE_CHARCTER  } from "../character.reducer";
import { Observable } from "rxjs/Observable";

@Component({
  selector: 'app-character',
  templateUrl: './character.component.html',
  //styleUrls: ['./character.component.css']
})
export class CharacterComponent implements OnInit {

  private character: Character;
  private characters: Observable<Character[]>;

  constructor(
    private _route: ActivatedRoute,
    private _router: Router,
    private _characterService: CharacterService,
    private _store: Store<any>
  ) {
    this.characters = _store.select('characters');
  }

  ngOnInit() {
    let id: number;
    this._route.params
      .switchMap((params) => {
        id = Number(params.id); 
        return this._characterService.getCharacters();
      })
      .subscribe((characters: Character[]) => 
        this.character = characters.find(item => item.id === id)
      );
  }

  gotoCharacters(){
    let characterId = this.character ? this.character.id : null;
    this._router.navigate(['/characters', { id: characterId}]);
  }
}
