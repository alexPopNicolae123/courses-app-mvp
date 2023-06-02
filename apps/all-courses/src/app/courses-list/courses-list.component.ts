import { Component, OnInit, OnDestroy } from '@angular/core';
import { ICourse } from '../core/models/course.model';
//import { CourseService } from '../core/services/course.service';
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
  mockCourses = [
    {
      id: 1,
      title: 'Dev-Ops',
      description:
        'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fugiat incidunt hic commodi, excepturi cumque inventore voluptatibus id aspernatur autem perferendis fugit maxime iste labore, laboriosam iure minus ea in dolorum?',
    },
    {
      id: 2,
      title: 'Front-End',
      description:
        'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fugiat incidunt hic commodi, excepturi cumque inventore voluptatibus id aspernatur autem perferendis fugit maxime iste labore, laboriosam iure minus ea in dolorum?',
    },
    {
      id: 3,
      title: 'Alghoritms',
      description:
        'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fugiat incidunt hic commodi, excepturi cumque inventore voluptatibus id aspernatur autem perferendis fugit maxime iste labore, laboriosam iure minus ea in dolorum?',
    },
    {
      id: 4,
      title: 'Back-end',
      description:
        'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fugiat incidunt hic commodi, excepturi cumque inventore voluptatibus id aspernatur autem perferendis fugit maxime iste labore, laboriosam iure minus ea in dolorum?',
    },
    {
      id: 5,
      title: 'Data Structure',
      description:
        'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fugiat incidunt hic commodi, excepturi cumque inventore voluptatibus id aspernatur autem perferendis fugit maxime iste labore, laboriosam iure minus ea in dolorum?',
    },
    {
      id: 6,
      title: 'Data Structure',
      description:
        'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fugiat incidunt hic commodi, excepturi cumque inventore voluptatibus id aspernatur autem perferendis fugit maxime iste labore, laboriosam iure minus ea in dolorum?',
    },
    {
      id: 7,
      title: 'Data Structure',
      description:
        'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fugiat incidunt hic commodi, excepturi cumque inventore voluptatibus id aspernatur autem perferendis fugit maxime iste labore, laboriosam iure minus ea in dolorum?',
    },
    {
      id: 8,
      title: 'Data Structure',
      description:
        'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fugiat incidunt hic commodi, excepturi cumque inventore voluptatibus id aspernatur autem perferendis fugit maxime iste labore, laboriosam iure minus ea in dolorum?',
    },
  ];

  ngOnInit(): void {
    //this.onGetCourses();
    console.log('OnInit works');
  }

  ngOnDestroy(): void {
    // this.sub?.unsubscribe();
    console.log('Destroy works');
  }

  /**
   * Method to get the courses
   */
  // onGetCourses(): void {
  //   this.sub = this.courseService.getCourses().subscribe({
  //     next: courses => {
  //       this.courses = courses;
  //     },
  //     error: (err) => (this.errorMessage = err),
  //   });
  // }
}
