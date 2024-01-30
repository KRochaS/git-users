import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'git-users-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss',
})
export class CardComponent {}
