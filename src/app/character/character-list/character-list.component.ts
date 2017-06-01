import { Component, OnInit } from '@angular/core';
import { Observable } from "rxjs/Observable";
import { CharacterService, Character } from "../character.service";
import { Router, Params, ActivatedRoute } from "@angular/router";
import { Store } from "../../app.state";
import { INIT_CHARACTERS } from "../character.reducer";

@Component({
  selector: 'app-character-list',
  templateUrl: './character-list.component.html',
  //styleUrls: ['./character-list.component.css']
})
export class CharacterListComponent implements OnInit {

  private errorMessage: "not Initilized";
  private selectedCharacter: Character;
  private selectedId: number;
  private characters: Observable<Character[]>;

  constructor(
    private _characterService: CharacterService,
    private _router: Router,
    private _route: ActivatedRoute,
    private _store: Store<Character[]>
  ) {
    this.characters = _store.select('characters');
  }

  ngOnInit() {
    // Выделение персонажа по переданному id
    this._route.params
      .subscribe(
        (params: Params) => this.selectedId = Number(params["id"])
      );
    // Если не было загрузки данных, загрузить их и поместить в хранилище
    if(!this._characterService.dataIsLoaded){
      this._characterService.getCharacters().subscribe(characters => 
        this._store.dispatch({type: INIT_CHARACTERS, payload: characters})
      )
    }
    this.errorMessage = null;
  }

  private newCharacter(){
    this._router.navigate(['/character']);
  }

  private selectCharacter(character: Character){
    this.selectedCharacter = character;
    this._router.navigate(['/character', character.id]);
  }

  private isSelected(character: Character) {
    return character.id === this.selectedId; 
  }
}
