import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css']
})
export class GameControlComponent implements OnInit {
  @Output() counterData = new EventEmitter <number>();
  intervalId;
  counter = 0;
  constructor() { }

  ngOnInit() {
    
  }

  onStartGame() {
      this.intervalId = setInterval(() => { 
        this.counterData.emit(this.counter + 1); 
        this.counter++;
      }, 1000);
  }

  onStopGame() {
    clearInterval(this.intervalId);
  }

}
