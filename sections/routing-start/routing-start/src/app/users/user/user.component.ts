import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit, OnDestroy {
  user: {id: number, name: string};
  paramsSubscription: Subscription;
  constructor(private route: ActivatedRoute) { }


  // to podejście updateuje tylko raz! w momencie inicjalizowania komponentu!
  ngOnInit() {
    this.user = {
      id: this.route.snapshot.params['idRoute'],
      name: this.route.snapshot.params['nameRoute']
    };

    // super ważne!!! to podejści sprawia że dane updateuja sie będa w tym samym komponencie!
    this.paramsSubscription = this.route.params.subscribe(
      (params: Params) => {
        this.user.id = params['idRoute'];
        this.user.name = params['nameRoute'];
        
      }
    )
  }

  // w tym przypadku jest to nie potrzebne bo angular sam czysci wszystkie subskrypcje, ale w innych przypadkach jest to wazne. 
  // to dobra prktyka!
  
  ngOnDestroy() {
    this.paramsSubscription.unsubscribe();
  }

}
