import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { StudentComponent } from "./student/student.component";

@Component({
  selector: 'app-root',
  standalone: true,
 imports: [RouterOutlet, StudentComponent],
  templateUrl: './app.html',
  styleUrl: './app.css',

  
})
export class AppComponent {
  protected readonly title = signal('student-dashboard');
}
