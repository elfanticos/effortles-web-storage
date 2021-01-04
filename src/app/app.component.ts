import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'effortles-web-storage';
  form: FormGroup = new FormGroup({
    name: new FormControl(),
    email: new FormControl()
  });


  submitForm(): void {
    console.log(this.form.value);
  }
}
