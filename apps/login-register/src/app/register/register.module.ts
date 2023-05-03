import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {Route, RouterModule} from "@angular/router";
import { RegisterComponent } from './register.component';
import { ReactiveFormsModule } from '@angular/forms';

const homeRoutes: Route[] = [
  {path: 'register', component: RegisterComponent}
]

@NgModule({
  declarations: [RegisterComponent],
  imports: [CommonModule, RouterModule.forChild(homeRoutes), ReactiveFormsModule],
})
export class RegisterModule {}