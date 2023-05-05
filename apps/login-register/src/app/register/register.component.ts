import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ValidationsService } from '../services/validations.service';

@Component({
  selector: 'courses-app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {
  registerForm: FormGroup = new FormGroup({});

  constructor(
    private fb: FormBuilder,
    private validators: ValidationsService
  ) {}

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
  }

  /**
   * Method to set the error messages
   * @param field
   * @param errorType
   * @returns
   */
  isFieldValid(field: string, errorType: string) {
    return this.validators.isFieldValid(field, errorType, this.registerForm);
  }
}
