import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthorListComponent } from './author-list/author-list.component';
import { AuthorDetailComponent } from './author-detail/author-detail.component';
import { RouterModule } from "@angular/router";
import { AuthorRoutingModule } from "./author-routing.module";



@NgModule({
  declarations: [
    AuthorListComponent,
    AuthorDetailComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    AuthorRoutingModule
  ],
  exports: [
  ]
})
export class AuthorModule { }
