import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';
import { CoursedetailComponent } from './coursedetail.component';
import { CardcourseComponent } from 'libs/shared/course-card/src/lib/cardcourse/cardcourse.component';

const coursedetailRoute: Route[] = [
  { path: 'details', component: CoursedetailComponent },
  { path: 'details/:id', component: CoursedetailComponent },
];

@NgModule({
  declarations: [CoursedetailComponent,CardcourseComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(coursedetailRoute),
  ],
  providers: [],
  bootstrap: [CoursedetailComponent],
})
export class CoursedetailModule {}
