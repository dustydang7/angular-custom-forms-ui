import { Component, inject } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  nameFieldCustomErrorMessage: Record<string, string> = {
    'minlength': 'Name must be at least 10 characters long'
  }

  emailFieldCustomErrorMessage: Record<string, string> = {
    'pattern': 'Invalid email format'
  }

  countryList: string[] = ['United States', 'United Kingdom', 'France', 'Spain', 'Italy'];
  itemsList: string[] = ['Apples', 'Oranges', 'Pear', 'Peach', 'Mango']

  formGroup = new FormGroup({
    name: new FormControl('', [Validators.required, Validators.minLength(10)]),
    age: new FormControl(0, Validators.required),
    country: new FormControl(this.countryList[0], Validators.required),
    items: new FormControl(null),
    email: new FormControl('',[Validators.required, Validators.pattern('^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\\.[A-Za-z]+$')]),
  })

  submit() {
    console.log(this.formGroup.value)
  }
}
