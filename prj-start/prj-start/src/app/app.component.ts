import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{


  ngOnInit() {
    firebase.initializeApp({
      apiKey: 'AIzaSyDKYK-elJhuzc6bVHyuw78oymnyQnDmG38',
      authDomain: 'udemy-http-7dc3f.firebaseapp.com',
    });
  }
}
