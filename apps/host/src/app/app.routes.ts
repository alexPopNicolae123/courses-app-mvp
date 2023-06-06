//import { NxWelcomeComponent } from './nx-welcome.component';
import { Route } from '@angular/router';

export const appRoutes: Route[] = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'admin',
    loadChildren: () => import('admin/Module').then((m) => m.RemoteEntryModule),
  },
  {
    path: 'course-details',
    loadChildren: () =>
      import('course-details/Module').then((m) => m.CoursedetailModule),
  },
  {
    path: 'create-course',
    loadChildren: () =>
      import('create-course/Module').then((m) => m.RemoteEntryModule),
  },
  {
    path: 'all-courses',
    loadChildren: () =>
      import('all-courses/Module').then((m) => m.CoursesListModule),
  },
  {
    path: 'login-register',
    loadChildren: () =>
      import('login-register/Module').then((m) => m.LoginModule),
  },
  {
    path: 'home',
    loadChildren: () => import('home/Module').then((m) => m.HomepageModule),
  },
];
