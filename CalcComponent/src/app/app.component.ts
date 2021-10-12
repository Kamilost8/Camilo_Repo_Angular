import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'CalcComponent';

  public firstnumber = 12;
  public secondnumber = 23;
  public operation = '';
  public equal = 0;

  firstnumberEvent($event: any) {
    this.firstnumber = $event;
  }

  secondnumberEvent($event: any) {
    this.secondnumber = $event;
  }

  operationEvent($event: any) {
    this.operation = $event;
  }

  equalEvent($event: any) {
    this.equal = $event;
  }
}
