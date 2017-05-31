import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { VehicleModule } from "./vehicle/vehicle.module";
import { AppComponent } from './app.component';
import { AppRoutingModule } from "app/app-routing.module";
import { CharacterModule } from "app/character/character.module";
import { AppMessageComponent } from './app-message.component';
import { StoreModule, reducer } from "./app.state";

@NgModule({
  declarations: [
    AppComponent,
    AppMessageComponent,
  ],
  imports: [
    StoreModule.provideStore(reducer),
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    VehicleModule,
    CharacterModule
  ],
   providers: [ ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
