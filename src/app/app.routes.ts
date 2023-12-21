import { Route } from '@angular/router';

export const appRoutes: Route[] = [
  {
    path: 'users',
    loadComponent: () =>
      import('@dashboard-angular-standalone/users').then(
        (m) => m.UsersComponent
      ),
  },
];
