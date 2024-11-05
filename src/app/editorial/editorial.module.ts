import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EditorialListComponent } from './editorial-list/editorial-list.component';
import { RouterModule } from "@angular/router";
import { EditorialRoutingModule } from "./editorial-routing.module";



@NgModule({
  declarations: [
    EditorialListComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    EditorialRoutingModule
  ]
})
export class EditorialModule { }
