import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
    selector: 'courses-app-register',
    templateUrl: './register.component.html',
    styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {
    registerForm: FormGroup = new FormGroup({});

    constructor(private fb: FormBuilder) {
    }

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

     isFieldValid(field: string) {
        return (
            this.registerForm.controls[field].touched || this.registerForm.controls[field].dirty)
            && this.registerForm.controls[field].errors?.['required']
    }

    // get isFieldValid() {
    //     return (
    //         this.registerForm.controls['lastName'].touched || this.registerForm.controls['lastName'].dirty)
    //         && this.registerForm.controls['lastName'].errors?.['required']
    // }


}
