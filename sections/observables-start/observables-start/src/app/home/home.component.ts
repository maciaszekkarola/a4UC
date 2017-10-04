import { Subscription } from 'rxjs/Subscription';
import { Observable } from 'rxjs/Observable';
import { Component, OnInit, OnDestroy } from '@angular/core';
import 'rxjs/Rx';
import { Observer } from 'rxjs/Observer';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit, OnDestroy {
  private subscriptions: Subscription[] = [];
  constructor() { }
  
  ngOnInit() {
    const myNumbers = Observable.interval(1000);
    
    this.subscriptions.push(myNumbers.subscribe(
      (number: number) => {
        console.log(number);
      }
    ));

    // Observable from scratch
    // przyjmuje 3 parametry - next(), error(), complete()
    const myObservable = Observable.create( (observer: Observer<string>) => {
      setTimeout( () => {
        observer.next('first sentence');
      }, 2000);
      setTimeout( () => {
        observer.next('second sentence');
      }, 4000);
      setTimeout( () => {
        observer.error('error message');
      }, 5000);
      setTimeout( () => {
        observer.complete();
      }, 6000);
    });

    this.subscriptions.push(myObservable.subscribe(
      (data: string) => { console.log(data); },
      (error: string) => { console.log(error); },
    ));
  }

  // funkcja usuwająca wszystkie subskrypcje
  unsubscriber(subscriptions): void {
    this.subscriptions.forEach(subscription => {
      subscription.unsubscribe();
    });
  }

  ngOnDestroy() {
    this.unsubscriber(this.subscriptions);
  }

}
