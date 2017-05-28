import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CharacterListComponent } from './character-list/character-list.component';
import { CharacterService } from "app/character/character.service";

@NgModule({
  imports: [
    CommonModule
  ],
  providers:[CharacterService],
  declarations: [CharacterListComponent],
  exports: [CharacterListComponent]
})
export class CharacterModule { }
