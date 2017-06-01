import 'hammerjs';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { VehicleModule } from "./vehicle/vehicle.module";
import { AppComponent } from './app.component';
import { AppRoutingModule } from "app/app-routing.module";
import { CharacterModule } from "app/character/character.module";
import { AppMessageComponent } from './app-message.component';
//import { StoreModule, reducer } from "./app.state";
import { StoreModule } from "./app.state";
import { vehiclesReducer } from "app/vehicle/vehicle.reducer";
import { characterReducer } from "app/character/character.reducer";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { MdButtonModule, MdCheckboxModule } from '@angular/material';

@NgModule({
  declarations: [
    AppComponent,
    AppMessageComponent,
  ],
  imports: [
    MdButtonModule, MdCheckboxModule,
    //StoreModule.provideStore(reducer),
    StoreModule.provideStore({
        vehicles: vehiclesReducer, 
        characters: characterReducer
        /* more reducers here... */ 
    }),
    BrowserAnimationsModule,
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    VehicleModule,
    CharacterModule
  ],
  providers: [ ],
  exports: [ ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
