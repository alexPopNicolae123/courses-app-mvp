import { Component, Input } from '@angular/core';

@Component({
  selector: 'courses-app-cardcourse',
  templateUrl: './cardcourse.component.html',
  styleUrls: ['./cardcourse.component.sass'],
})
export class CardcourseComponent {
  @Input()dateModified!:string|number;
  @Input()courseTitle!:string;
}
