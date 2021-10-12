import { Component, OnInit, Output,EventEmitter} from '@angular/core';

@Component({
  selector: 'app-operation',
  templateUrl: './operation.component.html',
  styleUrls: ['./operation.component.css']
})
export class OperationComponent implements OnInit {

  @Output() operation = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
  }

  addtionValue: string = '+';
  subtractionValue: string = '-';
  multiplicationValue: string = '*';
  divisionValue: string = '/';

  
  additionEvent(){
    this.operation.emit(this.addtionValue);
  }

  subtractionEvent(){
    this.operation.emit(this.subtractionValue);
  }

  multiplicationEvent(){
    this.operation.emit(this.multiplicationValue);
  }

  divisionEvent(){
    this.operation.emit(this.divisionValue);
  }

}
