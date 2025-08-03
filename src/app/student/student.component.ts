import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'; 
import { FormsModule } from '@angular/forms';  
@Component({

  selector: 'app-student',
  standalone:true,
  templateUrl: './student.component.html',
  styleUrls: ['./student.css'],
  imports: [CommonModule, FormsModule]
})
export class StudentComponent {
  student = {
    name: 'Gracelin',
    course: 'Angular Development',
    age: 21,
    fees: 25000,
    joiningDate: new Date('2024-07-01'),
    isActive: true
  };

  toggleStatus() {
    this.student.isActive = !this.student.isActive;
  }
}
