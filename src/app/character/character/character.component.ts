import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, Params } from "@angular/router";
import { CharacterService, Character } from "../character.service";
import { Store, AppState } from "app/app.state";
import { CharacterActions } from "app/store/actions";
import { MdSelect, MdOption, MdCard, MdIcon, MdSlideToggle, MdSpinner } from "@angular/material";
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
  foods = [
    {value: 'steak-0', viewValue: 'Порк'},
    {value: 'pizza-1', viewValue: 'Пица'},
    {value: 'tacos-2', viewValue: 'Чипсы'}
  ];
  selectedValue: string = 'test'; 

  constructor(
    private _route: ActivatedRoute,
    private _router: Router,
    private _characterService: CharacterService,
    private _store: Store<AppState>,
    private _characterActions: CharacterActions
  ) {
    this.characters = _store.select(s => s.characters);
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
          this._store.dispatch(this._characterActions.initCharactersSucess(characters));
          this.characters.subscribe(characters => {
            this.character = characters.find(item => item.id === this.id);
            this.viewReady = true;
          })
        });
      }
    } else {
      // id пустой, нужно создать новый объект  
      if(this._characterService.dataIsLoaded){
        this.character = new Character(this.getLastCharacterId()+1, '');
      } else {
        this.viewReady = false;
        this._router.navigate(['/characters']);      
      }
    }
  }

  private createCharacter() : void {
    this._store.dispatch(this._characterActions.addCharacter(this.character));
    this.navToCharacterList();
  }
  private updateCharacter(): void {
    this._store.dispatch(this._characterActions.updateCharacter(this.character));
    this.navToCharacterList();
  }
  private deleteCharacter(): void {
    this._store.dispatch(this._characterActions.removeCharacter(this.character));
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

