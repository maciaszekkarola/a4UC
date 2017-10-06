import { Observable } from 'rxjs/Observable';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormArray } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  genders = ['male', 'female'];
  signupForm: FormGroup;
  forbiddenNames = ['Anna', 'Zosia'];

  // default value w gender jest wpisywane od razu przy create new FormControl
  // validator w username musi byc powiązany przez funkcję bind bo 
  // this.forbiddenNames w funkcji ponizej jest znany, ale w walidatorze this wskazuje na cos innego.
  ngOnInit() {
    this.signupForm = new FormGroup({
      'userData': new FormGroup({
        'username': new FormControl(null, [Validators.required, this.forbiddenValidator.bind(this)]),
        'email': new FormControl(null, [Validators.required, Validators.email], this.forbiddenEmails),
      }),
      'gender': new FormControl('female'),
      'hobbies': new FormArray([])
    });
    // this.signupForm.valueChanges.subscribe(
    //   (value) => {console.log(value);}
    // );
    this.signupForm.statusChanges.subscribe(
      (status) => {console.log(status); }
    );
    // sets value, ale wszystkie jednoczenie! wszystkie klucze/wartości muszą być uzupełnione
    this.signupForm.setValue({
      userData: {
        username: 'Karolina',
        email: 'op@.pl'
      },
      gender: 'female',
      hobbies: []
    });
    // ustawia tylkko wybrane wartości
    this.signupForm.patchValue({
      userData: {
        email: 'karolina@op.pl'
      }
    });
  }

  onSubmit() {
    console.log(this.signupForm);
    this.signupForm.reset();
  }

  // reaktywny formularz
  onAddHobby() {
    const control = new FormControl(null, Validators.required);
    (<FormArray>this.signupForm.get('hobbies')).push(control);
  }

  // funkcja indexOf jeśli nie znajdzie elementu w tablicy zwraca -1, czyli "true"
  forbiddenValidator(control: FormControl): {[s: string]: boolean} {
    if (this.forbiddenNames.indexOf(control.value) !== -1) {
      return { 'nameisForbidden' : true};
    } else {
      return null;
    }
  }

  // async validator - tutaj symulacja z uzyciem Timeouta, STATE: in-valid => pending => valid
  forbiddenEmails (control: FormControl): Promise<any> | Observable<any> {
    const promise = new Promise<any> ((resolve, reject) => {
      setTimeout( () => {
        if (control.value === 'test@test.com') {
          resolve({'emailIsForbidden': true});
        } else {
          resolve(null);
        }
      }, 1500);
    });
    return promise;
  }

}
