import { Component, OnInit } from '@angular/core';
import { Observable } from "rxjs/Observable";
import { CharacterService, Character } from "../character.service";
import { Router, Params, ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-character-list',
  templateUrl: './character-list.component.html',
  styleUrls: ['./character-list.component.css']
})
export class CharacterListComponent implements OnInit {

  errorMessage: "not Initilized";
  selectedCharacter: Character;
  selectedId: number;
  characters: Observable<Character[]>;

  constructor(
    private _characterService: CharacterService,
    private _router: Router,
    private _route: ActivatedRoute
  ) {}

  ngOnInit() {
    this._route.params
      .subscribe(
        (params: Params) => this.selectedId = Number(params["id"])
      );
    this.characters = this._characterService.getCharacters();
  }

  selectCharacter(character: Character){
    this.selectedCharacter = character;
    this._router.navigate(['/character', character.id])
  }

  isSelected(character: Character) {debugger;
    return character.id === this.selectedId; 
  }
}
