import { Subscription } from 'rxjs/Subscription';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { UsersService } from './users.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {
  user1Activated = false;
  user2Activated = false;
  subscription: Subscription;
  
  constructor( private usersService: UsersService) {}

// przy użyciu Subject() w users.service używa się go jako observable i observera w jednym objekcie.

  ngOnInit() {
    this.subscription = this.usersService.userActivated.subscribe(
      (id: number) => {
        if (id === 1) {
          this.user1Activated = true;
        }
        if (id === 2) {
          this.user2Activated = true;
        }

      }
    );
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
