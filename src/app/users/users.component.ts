import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { CardComponent } from '@git-users/shared-ui';

@Component({
    selector: 'git-users',
    standalone: true,
    imports: [CommonModule, CardComponent],
    templateUrl: './users.component.html',
    styleUrl: './users.component.scss',
})
export class UsersComponent { }
