import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css']
})
export class GameControlComponent implements OnInit {
  public counter = 0;
  public intervalId;
  constructor() { }

  ngOnInit() {
    
  }

  startGame() {
    this.intervalId = setInterval(()=> { 
      this.counter++;
      console.log(this.counter);
    }, 1000);
  }

  stopGame() {
    console.log(this.intervalId);
    clearInterval(this.intervalId);
  }

}
