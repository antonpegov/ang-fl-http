import { NgModule } from '@angular/core';
import { RouterModule, Routes } from "@angular/router";
import { VehicleComponent } from "./vehicle/vehicle.component";
import { VehicleListComponent } from "./vehicle-list/vehicle-list.component";
//import { PageNotFoundComponent } from "../not-found.component";

const vehicleRoutes = [
  { path: 'vehicles', component: VehicleListComponent },
  { path: 'vehicle/:id', component: VehicleComponent }
  //{ path: '**', component: PageNotFoundComponent }, //перебивает вложенные роуты
]

@NgModule({
  imports: [ RouterModule.forChild(vehicleRoutes) ],
  exports:[ RouterModule ],
})
export class VehicleRoutingModule { }
