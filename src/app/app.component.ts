import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HeaderComponent } from '@git-users/shared-ui';

@Component({
    standalone: true,
    imports: [HeaderComponent, RouterModule],
    selector: 'git-users-root',
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss',
})
export class AppComponent {
    title = 'git-users';
}
