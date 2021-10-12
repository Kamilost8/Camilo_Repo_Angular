import { Component, OnInit,Input,Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css']
})
export class ResultComponent implements OnInit {
  @Input() firstnum = 0;
  @Input() secondnum = 0;
  @Input() operat = '';
  @Output() equal = new EventEmitter<number>();
  constructor() { }

  ngOnInit(): void {
  }
  firstnumber = this.firstnum;
  secondnumber = this.secondnum;
  finalequal = 0;
  equalEvent(){
    const fnum = this.firstnum
    const snum = this.secondnum
    if(this.operat == '+'){
      const fequal = fnum + snum
      this.finalequal = fequal
      this.equal.emit(fequal);
    }
    else if(this.operat == '-'){
      const fequal = fnum - snum
      this.finalequal = fequal
      this.equal.emit(fequal);

    }
    else if(this.operat == '*'){
      const fequal = fnum * snum
      this.finalequal = fequal
      this.equal.emit(fequal);
    }
    else if(this.operat == '/'){
      const fequal = fnum / snum
      this.finalequal = fequal
      this.equal.emit(fequal);
    }
    return(this.finalequal);
  }
}
