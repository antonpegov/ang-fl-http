import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, Params } from "@angular/router";
import { CharacterService, Character } from "../character.service";
import { Store } from "app/app.state";
import { INIT_CHARACTERS, ADD_CHARACTER, REMOVE_CHARACTER, UPDATE_CHARACTER  } from "../character.reducer";
//import "rxjs";
import { Observable } from "rxjs/Observable";

@Component({
  selector: 'app-character',
  templateUrl: './character.component.html',
  //styleUrls: ['./character.component.css']
})
export class CharacterComponent implements OnInit {

  private character: Character;                 // Выбранный персонаж 
  private characters: Observable<Character[]>;  // Залочено на стрим в Store
  private viewReady: boolean = true;            // Флаг для задержки рендеринга
  private newCharacter: boolean = true;
  private id: number;   // Id персонажа, переданный через параметр в url

  constructor(
    private _route: ActivatedRoute,
    private _router: Router,
    private _characterService: CharacterService,
    private _store: Store<Character[]>
  ) {
    this.characters = _store.select('characters');
  }

  ngOnInit() {
    this.id = this._route.snapshot.params.id ? Number(this._route.snapshot.params.id) : null;
    if(this.id){
      this.newCharacter = false;
      // Проверить, загружены ли данные
      if(this._characterService.dataIsLoaded){
        this.getCharacter(this.id).subscribe(c => this.character = c);
      } else {  
        // Заблокировать вью, загрузить данные и выбрать из них подходящий персонаж
        this.viewReady = false;
        this._characterService.getCharacters().subscribe(characters => {
          this._store.dispatch({type: INIT_CHARACTERS, payload: characters});
          this.characters.subscribe(characters => {
            this.character = characters.find(item => item.id === this.id);
            this.viewReady = true;
          })
        });
      }
    } else {
      // id пустой, нужно создать новый объект  
      this._characterService.dataIsLoaded ?
        (function(self){self.character = new Character(self.getLastCharacterId()+1, '')})(this) :
        this._router.navigate(['/characters']);      
    }
  }

  private createCharacter() : void {
    this._store.dispatch({type: ADD_CHARACTER, payload: this.character});
    this.navToCharacterList();
  }
  private updateCharacter(): void {
    this._store.dispatch({type: UPDATE_CHARACTER, payload: this.character});
    this.navToCharacterList();
  }
  private deleteCharacter(): void {
    this._store.dispatch({type: REMOVE_CHARACTER, payload: this.character});
    this.navToCharacterList(true);
  }

  private getCharacter(id: number): Observable<Character> {
    return this.characters.map(characters => characters.find(c => c.id == id))
  }

  private getLastCharacterId(){
    let id: number;
    this.characters.subscribe((c:Character[]) => id = c[c.length-1].id);
    return id;
  }

  private navToCharacterList(toRoot?: boolean): void {
    this._router.navigate(['/characters', { id: toRoot ? null : this.id}]);
  }
}
