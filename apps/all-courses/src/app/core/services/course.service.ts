import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, catchError, tap, throwError } from 'rxjs';
import { ICourse } from '../models/course.model';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CourseService {
  private coursesUrl = 'api/courses/courses.json';

  constructor(private httpClient: HttpClient) { }

  getCourses(): Observable<ICourse[]> {
    return this.httpClient.get<ICourse[]>(this.coursesUrl).pipe(
        tap((data) => console.log('All', data)),
        catchError(this.handleError)
    );
  }

  private handleError(err: HttpErrorResponse) {
    let errorMessage = '';
    if (err.error instanceof ErrorEvent) {
      errorMessage = `An error occurred: ${err.error.message}`;
    } else {
      errorMessage = `Server returned code: ${err.status}, error message is: ${err.message}`;
    }
    console.error(errorMessage);
    return throwError(() => errorMessage);
  }
}
