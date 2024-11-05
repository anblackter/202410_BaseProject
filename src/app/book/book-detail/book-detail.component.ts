import { Component, Input, OnInit } from '@angular/core';
import { BookDetail } from "../bookDetail";
import { BookService } from "../book.service";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-book-detail',
  templateUrl: './book-detail.component.html',
  styleUrl: './book-detail.component.css'
})
export class BookDetailComponent implements OnInit {

  bookId!: string;
  @Input() bookDetail!: BookDetail;

  constructor(
    private route: ActivatedRoute,
    private bookService: BookService
  ) {
  }

  getBook() {
    this.bookService.getBook(this.bookId).subscribe(book => {
      this.bookDetail = book;
    })
  }

  ngOnInit(): void {
    if (this.bookDetail === undefined) {
      this.bookId = this.route.snapshot.paramMap.get('id')!
      if (this.bookId) {
        this.getBook();
      }
    }
  }
}
