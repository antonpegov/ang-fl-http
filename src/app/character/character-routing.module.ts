import { NgModule } from '@angular/core';
import { RouterModule, Routes } from "@angular/router";
import { CharacterComponent } from "./character/character.component";
import { CharacterListComponent } from "./character-list/character-list.component";

const characterRoutes = [
  { path: 'characters', component: CharacterComponent },
  { path: 'character/:id', component: CharacterComponent }
]

@NgModule({
  imports: [ RouterModule.forChild(characterRoutes) ],
  declarations: []
})
export class CharacterRoutingModule { }
