import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { IValidation } from '../types/validation.model';
import { IMessages } from '../types/messages.model';

@Component({
  selector: 'courses-app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {
  registerForm: FormGroup = new FormGroup({});

  errorMessages: any = {
    firstNameMessages: '',
    lastNameMessages: '',
    emailMessages: '',
    passwordMessages: '',
  };

  validationMessages: any = {
    firstNameMessages: {
      required: 'This field is required',
    },
    lastNameMessages: {
      required: 'This field is required',
    },
    emailMessages: {
      required: 'Email is required',
      email: 'This should be a valid email',
    },
    passwordMessages: {
      required: 'Password is required',
      minlength: 'This should contains at least min 8 characters',
    },
  };

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.onRegisterForm();
  }

  /**
   * Method to submit the register form
   */
  onSubmit(): void {
    if (this.registerForm.valid) {
      alert('Success');
    }
  }

  /**
   * Method to init the register form
   */
  private onRegisterForm(): void {
    this.registerForm = this.fb.group({
      firstName: ['', [Validators.required]],
      lastName: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(8)]],
    });

    const firstName = this.registerForm.get('firstName');
    const lastName = this.registerForm.get('lastName');
    const email = this.registerForm.get('email');
    const password = this.registerForm.get('password');

    firstName?.valueChanges.subscribe((value) =>
      this.setMessage(firstName, 'firstNameMessages')
    );
    lastName?.valueChanges.subscribe((value) =>
      this.setMessage(lastName, 'lastNameMessages')
    );
    email?.valueChanges.subscribe((value) =>
      this.setMessage(email, 'emailMessages')
    );
    password?.valueChanges.subscribe((value) =>
      this.setMessage(password, 'passwordMessages')
    );
  }

  public setMessage(field: any, messageIdentifier: string): void {
    this.errorMessages[messageIdentifier] = '';
    if ((field.touched || field.dirty) && field.errors) {
      this.errorMessages[messageIdentifier] = Object.keys(field.errors)
        .map((key) => {
          return this.validationMessages[messageIdentifier][key];
        })
        .join(' ');
    }
  }
}
