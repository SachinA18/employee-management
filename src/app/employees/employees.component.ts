import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-employees',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.css'],
})
export class EmployeesComponent {
  employees = [
    { id: 1, name: 'John Doe', email: 'john.doe@email.com', phone: '1234567890', salary: 60000 },
    { id: 2, name: 'Jane Smith', email: 'jane.smith@email.com', phone: '0987654321', salary: 70000 },
  ];
}
