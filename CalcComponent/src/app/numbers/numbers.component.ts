import { Component, OnInit, Output, EventEmitter  } from '@angular/core';

@Component({
  selector: 'app-numbers',
  templateUrl: './numbers.component.html',
  styleUrls: ['./numbers.component.css']
})
export class NumbersComponent implements OnInit {
  
  @Output() firstnumber = new EventEmitter<number>();
  @Output() secondnumber = new EventEmitter<number>();
  
  constructor() { }

  ngOnInit(): void {
  }


  findValue1 = 0;
  findValue2 = 0;

  getValue1 (value: string) {
    const parseint = parseInt(value);
  
    if(!isNaN(parseint)){
      this.findValue1 = parseint
      this.firstnumber.emit(this.findValue1);
      console.log(this.firstnumber)
    }
  }

  getValue2 (value: string) {
    const parseint = parseInt(value);
  
  if(!isNaN(parseint)){
    this.findValue2 = parseint
    this.secondnumber.emit(this.findValue2);
    console.log(this.secondnumber)
  }
}

}
