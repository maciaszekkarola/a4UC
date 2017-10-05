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
  genders = ['prefer not to answer', 'male', 'female'];
  user = {
    username : '',
    email: '',
    secretQuestion: '',
    answer: '',
    gender: ''
  };
  submited = false;

  // ustawia
  suggestUserName() {
    const suggestedName = 'Superuser';

    // opcja uzupełnienia danych, z koniecznością uzupełnienia Wszystkich pól!
    // this.signupForm.setValue({
    //   userData: {
    //     username: suggestedName,
    //     email: ''
    //   },
    //   secret: 'teacher',
    //   questionAnswer: 'kowalska',
    //   gender: 'male'
    // });

    // przez patchValue można napisać tylko jedną wartośc imputa!
    // zeby sie dostac do tej funkcji trzeba dodać .form który jest częścią wrapującą z angulara
    this.signupForm.form.patchValue({
      userData: {
        username: suggestedName
      }
    });
  }

  ngOnInit() {
  }

  // opcja, gdzie przekazuję argument w wywołaniu funkcji 
  // onSubmit(form: NgForm) {
  //   console.log(form.value.username);
  // }

  onSubmit() {
    console.log(this.signupForm.value);
    // po podzieleniu na grupy pojawia sie obiekt userData, ktory przechowuje username.
    console.log(this.signupForm.value.userData.username);

    this.submited = true;

    this.user.username = this.signupForm.value.userData.username;
    this.user.email = this.signupForm.value.userData.email;
    this.user.secretQuestion = this.signupForm.value.secret;
    this.user.answer = this.signupForm.value.questionAnswer;
    this.user.gender = this.signupForm.value.gender;

    // czyszczeniei usuwanie klasy itp.
    this.signupForm.reset();
    
  }
 
  
}
