import { Observable } from 'rxjs/Observable';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  private stats = ['stable', 'critical', 'finished'];
  private statusForm: FormGroup;
  private forbiddenName = ['test', 'Test'];
  private data = {
    name: '',
    mail: '',
    status: ''
  };
  private submited = false; 

  ngOnInit() {

    this.statusForm = new FormGroup({
      'name' : new FormControl('ania', Validators.required, this.onNameAsync),
      'email' : new FormControl(null, [Validators.required, Validators.email]),
      'statusProject' : new FormControl('critical')      
    });
    console.log(this.statusForm.value);
  }

  // onName(control: FormControl): {[s: string]: boolean} {
  //   if (this.forbiddenName.indexOf(control.value) !== -1 ) {
  //     return {'nameIsForbidden' : true};
  //   }else {
  //     return null;
  //   }
  // }

  // async
  onNameAsync(control: FormControl): Promise<any> | Observable<any> {
    const promise = new Promise<any> ( (resolve, reject) => {
      if (control.value === 'test') {
        resolve ( {'nameIsForbidden' : true});
      } else {
        resolve(null);
      }
    });
    return promise;
  }

  onSubmit() {
    console.log(this.statusForm.value);
    this.submited = true;
    this.data.name = this.statusForm.value.name;
    this.data.mail = this.statusForm.value.email;
    this.data.status = this.statusForm.value.statusProject;
    this.statusForm.reset();
  }
}
