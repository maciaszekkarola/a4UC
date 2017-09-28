import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public oddNumbers: number[] = [];
  public evenNumbers: number[] = [];
  public intervalId;

  onIntervalStart(counterNumber: number) {
    console.log(counterNumber);

    if (counterNumber % 2 !== 0) {
      this.oddNumbers.push(counterNumber)
    } else {
      this.evenNumbers.push(counterNumber)
    }
  }
 
}
