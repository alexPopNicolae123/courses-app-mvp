import { Route } from '@angular/router';

export const appRoutes: Route[] = [
  // {
  //   path: '',
  //   loadChildren: () =>
  //     import('./remote-entry/entry.module').then((m) => m.RemoteEntryModule),
  // },
  {
    path: 'courses',
    loadChildren: () =>
      import('./courses-list/courses-list.module').then(
        (m) => m.CoursesListModule
      ),
  },
];
