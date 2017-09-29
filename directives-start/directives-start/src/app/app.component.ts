import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  numbers = [1, 2, 3, 4, 5];
  oddNumbers = [];
  onlyOdd = false;
  value = 10;

  ngOnInit() {
    this.numbers.forEach(element => {
      if (element % 2 !== 0) {
        this.oddNumbers.push(element);
      }
    });
  }

}




