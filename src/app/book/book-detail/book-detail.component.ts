import { Component, Input, OnInit } from '@angular/core';
import {BookDetail} from "../bookDetail";

@Component({
  selector: 'app-book-detail',
  templateUrl: './book-detail.component.html',
  styleUrl: './book-detail.component.css'
})
export class BookDetailComponent implements OnInit {

  @Input() bookDetail!: BookDetail;

  constructor() { }

  ngOnInit(): void {
  }
}
