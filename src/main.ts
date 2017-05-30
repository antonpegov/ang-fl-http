import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { provideStore } from "@ngrx/store";
import { AppModule } from './app/app.module';
import { environment } from './environments/environment';
import { characters } from "./app/character/character.service";
import { vehicles } from "./app/vehicle/vehicle.service";

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule,[
  provideStore({
    characters, 
    vehicles, 
    //charactersFilter,
    //vehiclesFilter
  })
]);
