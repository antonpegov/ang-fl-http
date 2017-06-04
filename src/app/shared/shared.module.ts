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
  MdSlideToggleModule } from "@angular/material";

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
    MdSlideToggleModule
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
    MdSlideToggleModule
  ],
  declarations: []
})
export class SharedModule { }
