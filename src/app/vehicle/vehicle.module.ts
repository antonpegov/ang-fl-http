import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VehicleComponent } from './vehicle/vehicle.component';
import { VehicleListComponent } from './vehicle-list/vehicle-list.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [VehicleComponent, VehicleListComponent],
  exports:[VehicleListComponent]
})
export class VehicleModule { }
