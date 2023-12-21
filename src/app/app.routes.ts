import { Route } from '@angular/router';

export const appRoutes: Route[] = [
  {
    path: '',
    pathMatch: 'full',
    loadComponent: () =>
      import('@dashboard-angular-standalone/dashboard').then(
        (m) => m.DashboardComponent
      ),
  },
  {
    path: 'users',
    loadComponent: () =>
      import('@dashboard-angular-standalone/users').then(
        (m) => m.UsersComponent
      ),
  },
];
