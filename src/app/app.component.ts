import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HeaderComponent, LoadingModule } from '@git-users/shared-ui';

@Component({
    standalone: true,
    imports: [HeaderComponent, RouterModule, LoadingModule],
    selector: 'git-users-root',
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss',
})
export class AppComponent {
    title = 'git-users';
}
