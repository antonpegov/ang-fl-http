import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { CharacterRoutingModule } from "./character-routing.module";
import { CharacterComponent } from './character/character.component';
import { CharacterListComponent } from './character-list/character-list.component';
import { CharacterService } from "app/character/character.service";

@NgModule({
  imports: [
    FormsModule,
    CommonModule,
    CharacterRoutingModule
  ],
  providers:[CharacterService],
  declarations: [CharacterListComponent, CharacterComponent],
  exports: [CharacterListComponent]
})
export class CharacterModule { }
