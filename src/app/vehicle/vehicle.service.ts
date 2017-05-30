import { Injectable } from '@angular/core';
import { Http, Response } from "@angular/http";
import { Observable } from 'rxjs/Observable';
import 'rxjs/Rx';
import { ActionReducer, Action } from "@ngrx/store";

@Injectable()
export class VehicleService {
  
  constructor(private _http: Http) { }
  
  getVehicles(): Observable<Vehicle[]>{
    return this._http.get('assets/api/vehicles.json')
      .map(response => <Vehicle[]>response.json().data)
      .catch(this.handleError);
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

export class Vehicle {
  constructor(public id: number, public name: string) { }
}

/*
    Reducer for store of vehicles
*/
export const vehicles: ActionReducer<Vehicle[]> = (state, action) => {
    switch(action.type){
    case 'ADD_VEHICLE':
      return [ ...state, action.payload ];
    case 'REMOVE_VEHICLE':
      return state.filter(person => person.id !== action.payload);
    case 'UPDATE_VEHICLE':
      return state.map(person => person.id !== action.payload.id ? person : action.payload);
    default:
      return state;
  }
}

/*
  Person Action Constants
*/
export const ADD_VEHICLE = 'ADD_VEHICLE';
export const REMOVE_VEHICLE = 'REMOVE_VEHICLE';
export const UPDATE_VEHICLE = 'UPDATE_VEHICLE';

