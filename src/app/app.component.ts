import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NumberParentComponent } from './components/number-parent/number-parent.component';
import { FooterComponent } from './components/footer/footer.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, NumberParentComponent, FooterComponent],
  template: `
    <div class="app-container">
      <number-parent></number-parent>
      <app-footer></app-footer>
    </div>
  `,
  styleUrls: ['./app.component.css'],
})
export class AppComponent {}
