import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  allowNewServer = false;
  serverCreationStatus = 'no Server was created';
  serverName = 'testserver';

  constructor() { 
    setTimeout(() => {
      this.allowNewServer = true;
    }, 2000);
  }

  ngOnInit() {
  }

  onCreateServer() {
    this.serverCreationStatus = `server was created! Name is ${this.serverName}`;
  }
  onUpdateServer(event: Event) {
    this.serverName = (<HTMLInputElement>event.target).value;
  }

}
