import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
//import { MockBackend } from "@angular/http/testing";
import { AppMocks } from '../app.mocks';
import { Observable } from "rxjs/Observable";
import { Vehicle } from "app/vehicle/vehicle.service";
import { Store, AppState } from "app/app.state";

@Injectable()
export class CharacterService {

  private realApi = 'assets/api/characters.json';
  private mockApi = AppMocks.CHARACTER_API;
  public dataIsLoaded = false;

  constructor(
    private _http: Http,
    private _store: Store<AppState>,
  ) {}

  public getCharacters(): Observable<Character[]>{
    return this._http.get(this.realApi)
      .map(response => { 
        this.dataIsLoaded = true;
        return response.json().data;
      })
      .catch(this.handleError);
  } 

  public getCharacters_(): Observable<Character[]>{
    return Observable.of(this.mockApi.data);
  }

  private handleError(error: Response | any) {
    let errMsg: string;
    this.dataIsLoaded = false;
    if (error instanceof Response) {
      errMsg = `${error.status} - ${error.statusText || ''}`;
    } else {
      errMsg = error.message ? error.message : error.toString();
    }
    console.error(errMsg);
    return Observable.throw(errMsg);
  }
}

export class Character {
  constructor(public id: number, public name: string, public vehicle?: Vehicle) { 
    console.log('new character created...');
  }
}
