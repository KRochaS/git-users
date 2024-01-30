import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
    selector: 'git-users-header',
    standalone: true,
    imports: [CommonModule],
    templateUrl: './header.component.html',
    styleUrl: './header.component.scss',
})
export class HeaderComponent { }
