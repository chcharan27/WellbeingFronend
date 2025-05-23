import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-admin-dashboard',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './admin-dashboard.component.html',
  styleUrl: './admin-dashboard.component.css'
})
export class AdminDashboardComponent {
  userData = {
    Name: '',
    Age: null,
    PhoneNumber: '',
    Email: '',
    Password: '',
    BloodGroup: '',
    MaritalStatus: '',
    JobDescription: '',
    role: ''
  };

  // Later use HTTP GET to populate `userData`
}

