import { NgForm } from '@angular/forms';
import { Component, ViewChild } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @ViewChild('form') loginForm: NgForm;
  defaultOption = 'Advanced';
  subOptions = ['Basic', 'Advanced', 'Pro'];
  user = {
    email: '',
    subs: '',
    password: ''
  };
  submited = false;

  onSubmit () {
    console.log(this.loginForm.value);
    this.submited = true;

    this.user.email = this.loginForm.value.email;
    this.user.subs = this.loginForm.value.subSelect;
    this.user.password = this.loginForm.value.password;
    this.loginForm.reset();
  }

}
