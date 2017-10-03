import { Component, OnInit } from '@angular/core';
import { ServersService } from './servers.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  private servers: {id: number, name: string, status: string}[] = [];

  constructor(private serversService: ServersService,
              private router: Router,
              private route: ActivatedRoute) { }

  ngOnInit() {
    this.servers = this.serversService.getServers();
  }

//  w htmlu jest button ktory ma przeladowanie strony, 
//  w przypadku kiedy byłby tam routerLink, a nie event, 
//  to aplikacja by się zepsuła, bo do scieżki dodany
//   by był kolejny '/server/server'. 

  // w programmatic routingu uzywa się scieżek relatywnych, 
  // dlatego anular nie wie na jakiej aktualnie scieżce się znajduje. 
  // Używa do tego ActivatedRoutes i dopiero od niej 
  // wytycza scieżkę startową.

  onReload() {
    this.router.navigate(['servers'], {relativeTo: this.route});
  }

}
