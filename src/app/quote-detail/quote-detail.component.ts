import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Quote } from '../quote';

@Component({
  selector: 'app-quote-detail',
  templateUrl: './quote-detail.component.html',
  styleUrls: ['./quote-detail.component.css'],
})
export class QuoteDetailComponent implements OnInit {
 
  like = 0;
  dislike = 0;
  quote: any;

  liking() {
    this.like++;
  }
  disliking() {
    this.dislike++;
  }
 
  constructor() {}

  ngOnInit(): void {}
}
