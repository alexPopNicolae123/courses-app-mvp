import { Route } from '@angular/router';
import { HeaderComponent } from './header/header.component';

export const sharedHeaderRoutes: Route[] = [
  {path: '', component: HeaderComponent}
];
