import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote';
@Component({
  selector: 'app-quotes',
  templateUrl: './quotes.component.html',
  styleUrls: ['./quotes.component.css'],
})
export class QuotesComponent implements OnInit {
  quotes: Quote[] = [
    new Quote(1, 'my first quote', 0, 0),
    new Quote(2, 'my second quote', 0, 0),
    new Quote(3, 'my third quote', 0, 0),
  ];

  constructor() {}

  ngOnInit(): void {}
}
