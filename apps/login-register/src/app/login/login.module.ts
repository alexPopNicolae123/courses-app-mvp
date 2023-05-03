import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {Route, RouterModule} from "@angular/router";
import { LoginComponent } from './login.component';
import { ReactiveFormsModule } from '@angular/forms';

const homeRoutes: Route[] = [
  {path: 'login', component: LoginComponent}
]

@NgModule({
  declarations: [LoginComponent],
  imports: [CommonModule, RouterModule.forChild(homeRoutes), ReactiveFormsModule],
})
export class LoginModule {}