import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  password: string = 'secret password';
  buttonActive = false;
  buttonClicks = [];
  counter = 0 ;

  onToggle() {
    this.buttonActive = !this.buttonActive;
    this.counter = this.counter + 1;
    this.buttonClicks.push(new Date()) ;
  }

}
