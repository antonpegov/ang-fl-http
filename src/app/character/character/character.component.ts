import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, Params } from "@angular/router";
import { CharacterService, Character } from "../character.service";

@Component({
  selector: 'app-character',
  templateUrl: './character.component.html',
  styleUrls: ['./character.component.css']
})
export class CharacterComponent implements OnInit {

  character: Character;

  constructor(
    private _route: ActivatedRoute,
    private _router: Router,
    private _characterService: CharacterService
  ) {}

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
