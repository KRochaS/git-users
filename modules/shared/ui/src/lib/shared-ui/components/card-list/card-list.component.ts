import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
    selector: 'git-users-card-list',
    standalone: true,
    imports: [CommonModule],
    templateUrl: './card-list.component.html',
    styleUrl: './card-list.component.scss'
})
export class CardListComponent {
    @Input() url!: string | undefined;
    @Input() avatarUrl!: string | undefined;;
    @Input() login!: string | undefined;;
}
