import { Component, EventEmitter, Input, OnInit, Output,  } from '@angular/core';
import { Quote } from '../quote';

@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.css'],
})
export class DeleteComponent implements OnInit {
  @Input() quote!: Quote;
  @Output() isComplete = new EventEmitter<boolean>();

  deleteQuote(isComplete: any, index: number) {
    if (isComplete) {
      let toDelete = confirm(
        `Are you sure you want to delete ${this.quote[index].quote}?`
      );

      if (toDelete) {
        this.quote.splice(index, 1);
      }
    }
  }

  constructor() {}

  ngOnInit(): void {}
}
