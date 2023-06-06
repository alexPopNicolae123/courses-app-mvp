import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ICourse } from '../../../../all-courses/src/app/core/models/course.model';

@Component({
  selector: 'courses-app-coursedetail',
  templateUrl: './coursedetail.component.html',
  styleUrls: ['./coursedetail.component.sass'],
})
export class CoursedetailComponent implements OnInit {
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

  course!: ICourse;
  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
     [this.course] = this.mockCourses.filter((course) => (course.id === +this.route.snapshot.params['id']));
  }
}
