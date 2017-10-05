import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  // opcja z użyciem View Child, value zapisane pod signupForm
  @ViewChild('f') signupForm: NgForm;

  suggestUserName() {
    const suggestedName = 'Superuser';
  }

  ngOnInit() {
  }
  // opcja, gdzie przekazuję argument w wywołaniu funkcji 
  // onSubmit(form: NgForm) {
  //   console.log(form.value.username);
  // }

  onSubmit() {
    console.log(this.signupForm.value);
  }
 
  
}
