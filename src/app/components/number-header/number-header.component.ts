import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'number-header',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './number-header.component.html',
  styleUrls: ['./number-header.component.css'],
})
export class NumberHeaderComponent {
  onXClick(event: Event): void {
    event.preventDefault();
    const target = event.target as HTMLElement;
    const link = target.closest('.x-button');
    if (link) {
      link.classList.toggle('active');
    }
  }
}