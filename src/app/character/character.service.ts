import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
//import { MockBackend } from "@angular/http/testing";
import { AppMocks } from '../app.mocks';
import { Observable } from "rxjs/Observable";

@Injectable()
export class CharacterService {

  private realApi = 'assets/api/characters.json';
  private mockApi = AppMocks.CHARACTER_API;

  constructor(private _http: Http) { }

  public getCharacters(): Observable<Character[]>{
    return this._http.get(this.realApi)
      .map(item => item.json().data)
      .catch(this.handleError);
  } 

  public getCharacters_(): Observable<Character[]>{
    return Observable.of(this.mockApi.data);
  }

  private handleError(error: Response | any) {
    let errMsg: string;
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
  constructor(public id: number, public name: string) { }
}
