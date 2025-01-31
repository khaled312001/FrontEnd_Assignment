import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NumberHeaderComponent } from '../number-header/number-header.component';
import { TableComponent } from '../table/table.component';
import { FooterComponent } from '../footer/footer.component';

@Component({
  selector: 'number-parent',
  standalone: true,
  imports: [CommonModule, NumberHeaderComponent, TableComponent],
  templateUrl: './number-parent.component.html',
  styleUrls: ['./number-parent.component.css'],
})
export class NumberParentComponent {
  isMenuOpen = false;

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }

  closeMenu() {
    this.isMenuOpen = false;
  }
}