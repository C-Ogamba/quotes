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

 
deleteQuote(complete: boolean){
  this.isComplete.emit(complete)
}
  constructor() {}

  ngOnInit(): void {}
}
