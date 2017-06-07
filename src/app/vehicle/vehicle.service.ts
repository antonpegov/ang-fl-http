import { Injectable } from '@angular/core';
import { Http, Response } from "@angular/http";
import { Observable } from 'rxjs/Observable';
import { AngularFireDatabase, FirebaseListObservable, FirebaseObjectObservable } from "angularfire2/database";
import { AppState, Store } from "../app.state";
import { VehicleActions } from "app/store/actions";
import 'rxjs/Rx';


@Injectable()
export class VehicleService {
  
  private realApi = 'assets/api/vehicles.json';
  public dataIsLoaded = false;

  constructor(
    private _http: Http, 
    private _db: AngularFireDatabase,
    private _vehicleActions: VehicleActions,
    private _store: Store<AppState>
  ) { }
  
  // Возвращает поток Vehicles из БД (при необходимости предварительно её наполнив стартовыми данными) 
  public getVehicles(){
    this.getVehiclesFromDB().subscribe(data => {
        //console.log(data); // Нужно переделать так, чтобы не получать весь объект
        if(data.$exists()){ // Данные есть в БД          
          // result =  this._db.list('/vehicles');
        } else { // БД пустая, загрузить данные из файла инициализаныы
          this.getVehiclesFromFile().subscribe(vehicles =>
            //this._store.dispatch({type: INIT_VEHICLES, payload: vehicles})
            this._db.object('/vehicles').set(vehicles).catch(error =>{ console.log(error); })
          )
        }
      })
    this.dataIsLoaded = true;
    return this._db.list('/vehicles');
  }

  public addVehicle(vehicle: Vehicle) {
    var res = this._db.list('/vehicles').push(vehicle);
    res.then(res=>console.log(res))
    return res;
  }
  private getVehiclesFromDB (){
    return this._db.object('/vehicles');
  }
  private getVehiclesFromFile(){
    return this._http.get(this.realApi)
      .map(response => { 
        this.dataIsLoaded = true; 
        return <Vehicle[]>response.json().data;
      }).catch(this.handleError);
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
