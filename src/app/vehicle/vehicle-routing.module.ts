import { NgModule } from '@angular/core';
import { RouterModule, Routes } from "@angular/router";
import { VehicleComponent } from "./vehicle/vehicle.component";
import { VehicleListComponent } from "./vehicle-list/vehicle-list.component";

const vehicleRoutes = [
  { path: 'vehicles', component: VehicleComponent },
  { path: 'vehicle/:id', component: VehicleComponent }
]

@NgModule({
  imports: [ RouterModule.forChild(vehicleRoutes) ],
  exports:[RouterModule],
})
export class VehicleRoutingModule { }
