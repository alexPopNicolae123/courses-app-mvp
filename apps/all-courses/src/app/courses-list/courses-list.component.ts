import { Component, OnInit, OnDestroy } from '@angular/core';
import { ICourse } from '../core/models/course.model';
import { CourseService } from '../core/services/course.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'courses-app-all-courses',
  templateUrl: 'courses-list.component.html',
  styleUrls: ['courses-list.component.sass'],
})
export class CoursesListComponent implements OnInit, OnDestroy {
  sub: Subscription | undefined;
  errorMessage = '';

  courses: ICourse[] = [];

  constructor(private courseService: CourseService) {}

  ngOnInit(): void {
    this.onGetCourses();
  }

  ngOnDestroy(): void {
    this.sub?.unsubscribe();
  }

  /**
   * Method to get the courses
   */
  onGetCourses(): void {
    this.sub = this.courseService.getCourses().subscribe({
      next: (courses) => {
        this.courses = courses;
      },
      error: (err) => (this.errorMessage = err),
    });
  }
}
