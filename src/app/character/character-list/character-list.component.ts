import { Component, OnInit } from '@angular/core';
import { Observable } from "rxjs/Observable";
import { CharacterService, Character } from "../character.service";

@Component({
  selector: 'app-character-list',
  templateUrl: './character-list.component.html',
  styleUrls: ['./character-list.component.css']
})
export class CharacterListComponent implements OnInit {

  errorMessage: "not Initilized";
  selectedCharacter : Character;
  characters: Observable<Character[]>;

  constructor(private _characterService: CharacterService) { }

  ngOnInit() {
    this.characters = this._characterService.getCharacters();
  }
}
