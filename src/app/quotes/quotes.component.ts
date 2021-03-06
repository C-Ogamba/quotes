import { Component, OnInit, Input,EventEmitter } from '@angular/core';
import { Quote } from '../quote';
@Component({
  selector: 'app-quotes',
  templateUrl: './quotes.component.html',
  styleUrls: ['./quotes.component.css'],
})
export class QuotesComponent implements OnInit {
  quotes: Quote[] = [
    new Quote(
      'Soren Kierkegaard',
      'Life is not a problem to be solved, but a reality to be experienced.',
      0,
      0,
      new Date(2022, 12, 3)
    ),
    new Quote(
      'Jack Kerouac',
      'Maybe that is what life is… a wink of the eye and winking stars.',
      0,
      0,
      new Date(2023, 10, 23)
    ),
    new Quote(
      ' Buddha',
      'Health is the greatest gift, contentment the greatest wealth, faithfulness the best relationship.',
      0,
      0,
      new Date(2022, 5, 22)
    ),
  ];
  deleteQuote(isComplete: any, index: number) {
    if (isComplete) {
      let toDelete = confirm(
        `Are you sure you want to delete ${this.quotes[index].quote}?`
      );

      if (toDelete) {
        this.quotes.splice(index, 1);
      }
    }
  }
  submitQuote(quote: Quote) {
    let quoteLength = this.quotes.length;
    // quote = quoteLength + 1;
    this.quotes.push(quote);
  }
  list: number[] = this.quotes.map((quote) => quote.like);
  most = Math.max(...this.list);
  like(i) {
    this.quotes[i].like += 1;
  }
  dislike(i) {
    this.quotes[i].dislike += 1;
  }

  constructor() {}

  ngOnInit(): void {}
}
