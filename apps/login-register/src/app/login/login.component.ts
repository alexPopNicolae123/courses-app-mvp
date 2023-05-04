import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { IMessages } from '../types/messages.model';
import { IValidation } from '../types/validation.model';

@Component({
  selector: 'courses-app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup = new FormGroup({});

  errorMessages: any = {
    emailMessages: '',
    passwordMessages: '',
  };

  validationMessages: any = {
    emailMessages: {
      required: 'Email is required',
      email: 'This should be a valid email',
    },
    passwordMessages: {
      required: 'Password is required',
      minlength: 'This should contains at least min 8 characters',
    },
  };

  constructor(private fb: FormBuilder, private router: Router) {}

  ngOnInit(): void {
    this.onInitLoginForm();
  }

  /**
   * Method to submit the login form
   */
  onSubmit(): void {
    if (this.loginForm.valid) {
      alert('Success');
    }
  }

  /**
   * Method to navigate to the register module
   */
  onNavigateTo(url: string): void {
    //this.router.navigateByUrl(url);
    window.location.href = url;
  }

  /**
   * Method to init the login form
   */
  private onInitLoginForm(): void {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(8)]],
    });

    const email = this.loginForm.get('email');
    const password = this.loginForm.get('password');

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
