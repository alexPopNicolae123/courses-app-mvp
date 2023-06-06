import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { sharedCourseCardRoutes } from './lib.routes';
import { CardcourseComponent } from "./cardcourse/cardcourse.component";

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(sharedCourseCardRoutes),
    RouterModule.forChild(sharedCourseCardRoutes),
  ],
  declarations: [CardcourseComponent],
})
export class SharedCourseCardModule {}
