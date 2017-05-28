import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { CharacterListComponent } from "./character/character-list/character-list.component";
import { VehicleListComponent } from "./vehicle/vehicle-list/vehicle-list.component";
import { VehicleComponent } from "./vehicle/vehicle/vehicle.component";
import { PageNotFoundComponent } from "./not-found.component";
import { AppMessageComponent } from "app/app-message.component";

const appRoutes: Routes = [
  { path: 'vehicles', component: VehicleListComponent },
  { path: 'characters', component: CharacterListComponent },
  { path: '', redirectTo: 'vehicles', pathMatch: 'full' },
  { path: 'compose', component: AppMessageComponent, outlet: 'popup' } 
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule],
  declarations: [PageNotFoundComponent]
})

export class AppRoutingModule { }
