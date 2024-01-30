import { Route } from '@angular/router';
import { UsersComponent } from './users/users.component';

export const appRoutes: Route[] = [
    {
        path: '',
        pathMatch: 'full',
        component: UsersComponent
    }
];
