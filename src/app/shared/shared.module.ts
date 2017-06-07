import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { 
  MdIconModule, 
  MdButtonModule, 
  MdSelectModule, 
  MdOptionModule, 
  MdCheckboxModule, 
  MdCardModule, 
  MdInputModule,
  MdSlideToggleModule,
  MdProgressSpinnerModule
  //MdSnackBarModule 
} from "@angular/material";

@NgModule({
  imports: [
    CommonModule,
    MdIconModule,
    MdCheckboxModule,
    MdButtonModule, 
    MdSelectModule, 
    MdOptionModule,
    MdCardModule,
    MdInputModule,
    MdSlideToggleModule,
    MdProgressSpinnerModule
  ],
  exports:[
    CommonModule,
    MdIconModule,
    MdCheckboxModule,
    MdButtonModule, 
    MdSelectModule, 
    MdOptionModule,
    MdCardModule,
    MdInputModule,
    MdSlideToggleModule,
    MdProgressSpinnerModule
  ],
  declarations: []
})
export class SharedModule { }
