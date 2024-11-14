import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthorListComponent } from './author-list/author-list.component';
import { AuthorDetailComponent } from './author-detail/author-detail.component';
import { RouterModule } from "@angular/router";
import { AuthorRoutingModule } from "./author-routing.module";
import { AuthorCreateComponent } from './author-create/author-create.component';
import { ReactiveFormsModule } from "@angular/forms";



@NgModule({
  declarations: [
    AuthorListComponent,
    AuthorDetailComponent,
    AuthorCreateComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    AuthorRoutingModule,
    ReactiveFormsModule
  ],
  exports: [
  ]
})
export class AuthorModule { }
