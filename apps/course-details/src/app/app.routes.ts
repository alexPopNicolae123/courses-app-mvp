import { Route } from '@angular/router';

export const appRoutes: Route[] = [
  {
    path: 'details',
    loadChildren: () =>
      import('./coursedetail/coursedetail.module').then((m) => m.CoursedetailModule),
  },
];
