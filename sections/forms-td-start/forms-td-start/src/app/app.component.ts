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
  defaultQ = 'pet';
  answer: string;
  genders = ['prefer not to answer', 'male', 'female']

  suggestUserName() {
    const suggestedName = 'Superuser';
    this.signupForm.setValue({
      userData: {
        username: suggestedName,
        email: ''
      },
      secret: 'teacher',
      questionAnswer: 'kowalska',
      gender: 'male'
    })
  }

  ngOnInit() {
  }
  // opcja, gdzie przekazuję argument w wywołaniu funkcji 
  // onSubmit(form: NgForm) {
  //   console.log(form.value.username);
  // }

  onSubmit() {
    console.log(this.signupForm.value.username);
    // po podzieleniu na grupy struktura. pojawia sie obiekt userData, ktory przechowuje username.
    console.log(this.signupForm.value.userData.username);
  }
 
  
}
