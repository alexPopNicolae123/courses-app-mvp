import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { CoursesListComponent } from './courses-list.component';
import { Route, RouterModule } from '@angular/router';
import { MatListModule } from '@angular/material/list';
import { MatCardModule } from '@angular/material/card'
import { MatGridListModule } from '@angular/material/grid-list'

const coursesRoute: Route[] = [
  { path: 'courses', component: CoursesListComponent },
];

@NgModule({
  declarations: [CoursesListComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(coursesRoute),
    MatListModule,
    MatCardModule,
    MatGridListModule
  ],
  providers: [],
  bootstrap: [CoursesListComponent],
})
export class CoursesListModule {}
