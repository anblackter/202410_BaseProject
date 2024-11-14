import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BookModule } from "./book/book.module";
import { EditorialModule } from "./editorial/editorial.module";
import { HTTP_INTERCEPTORS, HttpClientModule } from "@angular/common/http";
import { BookListComponent } from "./book/book-list/book-list.component";
import { AuthorModule } from "./author/author.module";
import { BookRoutingModule } from "./book/book-routing.module";
import { AuthorRoutingModule } from "./author/author-routing.module";
import { EditorialRoutingModule } from "./editorial/editorial-routing.module";
import { HttpErrorInterceptorService } from "./interceptors/http-error-interceptor.service";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { ToastrModule } from "ngx-toastr";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BookModule,
    EditorialModule,
    HttpClientModule,
    AuthorModule,
    BookRoutingModule,
    AuthorRoutingModule,
    EditorialRoutingModule,
    ToastrModule.forRoot({
      timeOut: 10000,
      positionClass: 'toast-bottom-right',
      preventDuplicates: true,
    }),
    BrowserAnimationsModule
  ],
  providers: [
    provideClientHydration(),
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HttpErrorInterceptorService,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
