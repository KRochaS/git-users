import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
    selector: 'git-users-card',
    standalone: true,
    imports: [CommonModule],
    templateUrl: './card.component.html',
    styleUrl: './card.component.scss',
})
export class CardComponent {

    @Input() name!: string | undefined;
    @Input() avatarUrl!: string | undefined;
    @Input() url!: string | undefined;
    @Input() bio!: string | undefined;
    @Input() login!: string | undefined;
    @Input() followers!: number | undefined;


}
