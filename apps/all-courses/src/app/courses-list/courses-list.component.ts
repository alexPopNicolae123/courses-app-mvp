import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'courses-app-all-courses',
  templateUrl: 'courses-list.component.html',
  styleUrls: ['courses-list.component.scss'],
})
export class CoursesListComponent implements OnInit {
  courses = [
    {
      id: 1,
      title: 'Dev-Ops',
      description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fugiat incidunt hic commodi, excepturi cumque inventore voluptatibus id aspernatur autem perferendis fugit maxime iste labore, laboriosam iure minus ea in dolorum?'
    },
    {
      id: 2,
      title: 'Front-End',
      description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fugiat incidunt hic commodi, excepturi cumque inventore voluptatibus id aspernatur autem perferendis fugit maxime iste labore, laboriosam iure minus ea in dolorum?'
    }, {
      id: 3,
      title: 'Alghoritms',
      description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fugiat incidunt hic commodi, excepturi cumque inventore voluptatibus id aspernatur autem perferendis fugit maxime iste labore, laboriosam iure minus ea in dolorum?'
    }, {
      id: 4,
      title: 'Back-end',
      description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fugiat incidunt hic commodi, excepturi cumque inventore voluptatibus id aspernatur autem perferendis fugit maxime iste labore, laboriosam iure minus ea in dolorum?'
    }, {
      id: 5,
      title: 'Data Structure',
      description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fugiat incidunt hic commodi, excepturi cumque inventore voluptatibus id aspernatur autem perferendis fugit maxime iste labore, laboriosam iure minus ea in dolorum?'
    }
  ];

  ngOnInit(): void {
    console.log('works');
  }
}
