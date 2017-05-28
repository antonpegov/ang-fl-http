import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { VehicleRoutingModule } from "./vehicle-routing.module";
import { VehicleComponent } from './vehicle/vehicle.component';
import { VehicleListComponent } from './vehicle-list/vehicle-list.component';
import { VehicleService } from './vehicle.service';

@NgModule({
  providers:[ VehicleService ],
  imports: [
    FormsModule,
    CommonModule,
    VehicleRoutingModule
  ],
  declarations: [ VehicleComponent, VehicleListComponent ],
  exports: [ VehicleListComponent]
})
export class VehicleModule { }
