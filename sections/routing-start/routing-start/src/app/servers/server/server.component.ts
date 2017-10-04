import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params, Data } from '@angular/router';
import { ServersService } from '../servers.service';


@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.css']
})
export class ServerComponent implements OnInit {
  server: {id: number, name: string, status: string};

  constructor(private serversService: ServersService,
              private route: ActivatedRoute,
              private router: Router) { }

  ngOnInit() {
    // zapis "+" przed "zdaniem" jest jednoznaczny z parseInt do liczby
    
    // const id = parseInt(this.route.snapshot.params['id'], 10);
    // const id = +this.route.snapshot.params['id'];
    // this.server = this.serversService.getServer(id);
    // this.route.params.subscribe(
    //   (params: Params) => {
    //     this.server = this.serversService.getServer(+params['id']);
    //   }
    // );
    /// 

    // using resolver
    // nazwa w tablicy przy data to nazwa z appRoutes użyta w resolve:{}
    this.route.data.subscribe(
      (data: Data) => {
        this.server = data['server'];
      }
    );


  }

  // ponieważ uzytkownik jets juz na sciezce server/id mogę użyć scieżki relatywnej i dopisać tylko edit.
  // przy wyborze tej opcji, trzeba pamiętać, że trzeba podać drugi paramets dla funkcji navigate, która mówi gdzie się znajdujemy obecnie

  onEdit() {
    this.router.navigate(['edit'], {relativeTo: this.route, queryParamsHandling: 'preserve'});

  }

}
