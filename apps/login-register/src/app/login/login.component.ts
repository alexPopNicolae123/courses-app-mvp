import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ValidationsService } from '../services/validations.service';

@Component({
  selector: 'courses-app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup = new FormGroup({});

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private validationService: ValidationsService
  ) {}

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
  }

  /**
   * Method to set the error messages
   * @param field
   * @param errorType
   * @returns
   */
  isFieldValid(field: string, errorType: string) {
    return this.validationService.isFieldValid(
      field,
      errorType,
      this.loginForm
    );
  }
}
