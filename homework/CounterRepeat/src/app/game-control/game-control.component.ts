import { Component, OnInit ,Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css']
})
export class GameControlComponent implements OnInit {
  lastNumber: number = 0;
  interval;
  @Output('emitter') emitter = new EventEmitter<number>();

  constructor() { }

  ngOnInit() {
  }

  onStart() {
    this.interval = setInterval( () => { 
      this.lastNumber++;
      this.emitter.emit(this.lastNumber);
    }, 1000);
  }

  onStop() {
    clearInterval(this.interval);
  }


}
