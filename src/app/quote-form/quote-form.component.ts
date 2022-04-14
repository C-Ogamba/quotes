import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';
import { Quote } from '../quote';

@Component({
  selector: 'app-quote-form',
  templateUrl: './quote-form.component.html',
  styleUrls: ['./quote-form.component.css'],
})
export class QuoteFormComponent implements OnInit {
 
  newQuote = new Quote( '', '', 0, 0, new Date());

  @Output() addQuote = new EventEmitter<Quote>();

  submitQuote() {
    if (!this.newQuote){
      alert("This is required")
      
    }else {

    
    this.addQuote.emit(this.newQuote);
    this.newQuote = new Quote('', '', 0, 0, new Date());
    }
  }
  constructor() {}

  ngOnInit(): void {}
}
