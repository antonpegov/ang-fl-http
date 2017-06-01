import { Injectable } from '@angular/core';
import { Http, Response } from "@angular/http";
import { Observable } from 'rxjs/Observable';
import 'rxjs/Rx';


@Injectable()
export class VehicleService {
  
  private realApi = 'assets/api/vehicles.json';
  public dataIsLoaded = false;

  constructor(private _http: Http) { }
  
  getVehicles(): Observable<Vehicle[]>{
    return this._http.get(this.realApi)
      .map(response => { 
        this.dataIsLoaded = true; 
        return <Vehicle[]>response.json().data;
      })
      .catch(this.handleError);
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

export class Vehicle {
  constructor(public id: number, public name: string, characterId?) { }
}
