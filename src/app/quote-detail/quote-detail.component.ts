import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Quote } from '../quote';

@Component({
  selector: 'app-quote-detail',
  templateUrl: './quote-detail.component.html',
  styleUrls: ['./quote-detail.component.css'],
})
export class QuoteDetailComponent implements OnInit {
  @Input() quote!: Quote;
  @Output() deleteThis = new EventEmitter<boolean>();

  deleteQuote(remove: boolean) {
    this.deleteThis.emit(remove);
  }
  like = 0;
  dislike = 0;

  liking() {
    this.like++;
  }
  disliking() {
    this.dislike++;
  }
  constructor() {}

  ngOnInit(): void {}
}
