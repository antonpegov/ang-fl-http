import { Component, OnInit, OnDestroy } from '@angular/core';
import { VehicleActions, CharacterActions, StatusActions } from "./store/actions";
import { Store, AppState, Status, Init } from "./app.state";
import { MdSnackBar } from "@angular/material";
import { Observable, Subscription } from "rxjs/Rx";
import { Utils } from "app/core/services";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  // styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {
  
  private statusState: Subscription;
  private initState: Subscription;
  //public ready$: Observable<boolean>;

  constructor (
    private _store: Store<AppState>,
    private _vehicleActions: VehicleActions,
    private _characterActions: CharacterActions,
    private _statusActions: StatusActions,
    public snackBar: MdSnackBar,

  ) {
    _store.dispatch(_statusActions.initialize());
    //this.ready$ = new Observable;
    this.initState =  _store.select(s => s.initilized)
      .subscribe((init: Init) => {
        if(init.app){
          _store.dispatch(_statusActions.initialized())
          //this.ready$ = Observable.of(true);  
        }
      });

    this.statusState = _store.select(s => s.appStatus)
      .subscribe((status:Status) => {
        this.snackBar.open(status.text, null, {
          duration: 2000,
          extraClasses: [status.level]
        })
      });
  }

  public ngOnInit() {
  }

  public ngOnDestroy() {
    Utils.unsubscribe([this.statusState, this.initState]);
  }
}
