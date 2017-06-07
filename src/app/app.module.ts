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
import { StoreModule, default as reducer } from "./app.state";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { environment } from "../environments/environment";
import { AngularFireModule } from "angularfire2";
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { EffectsModule } from "@ngrx/effects";
import { VehicleEffects, CharacterEffects, StatusEffects } from "app/store/effects";
import { MdSnackBarModule } from "@angular/material"
import { StatusActions } from "app/store/actions";

@NgModule({
  declarations: [
    AppComponent,
    AppMessageComponent,
  ],
  imports: [   
    StoreModule.provideStore(reducer),
    EffectsModule.run(VehicleEffects),
    EffectsModule.run(CharacterEffects),
    EffectsModule.run(StatusEffects),
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    BrowserAnimationsModule,
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    VehicleModule,
    CharacterModule,
    MdSnackBarModule
  ],
  providers: [ StatusActions ],
  exports: [ ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
