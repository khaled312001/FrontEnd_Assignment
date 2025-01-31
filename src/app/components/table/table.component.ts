import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-table',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css'],
})
export class TableComponent {
  tableData = [
    {
      company: 'الشركة الألمانيه للإبادة  1',
      dateAssigned: '01/12/2024',
      dateCancelled: '-',
      responsible: 'عبدالرحيم إسماعيل ناصف',
      localFacts: '7654',
      globalFacts: '122',
      amount: '61890 ج.م',
    },
    ...Array.from({ length: 49 }, (_, index) => ({
      company: `الشركة الألمانيه للإبادة ${index + 2}`,
      dateAssigned: '01/12/2024',
      dateCancelled: '01/12/2024',
      responsible: 'عبدالرحيم إسماعيل ناصف',
      localFacts: '7654',
      globalFacts: '122',
      amount: '61890 ج.م',
    })),
  ];
  
  imagePaths = {
    companyIcon: `assets/company-icon.png?v=${new Date().getTime()}`,
  };
}
