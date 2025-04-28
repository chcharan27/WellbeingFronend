import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common'; // IMPORTANT!!

@Component({
  selector: 'app-report-incident-form',
  standalone: true,
  imports: [FormsModule, CommonModule], // Import BOTH FormsModule and CommonModule
  templateUrl: './report-incident-form.component.html',
  styleUrls: ['./report-incident-form.component.css'],
})
export class ReportIncidentFormComponent {
  @Output() incidentReported = new EventEmitter<any>();

  incident = {
    type: '',
    location: '',
    time: '',
    description: '',
  };

  incidentTypes = [
    'Hazard',
    'Accident',
    'Natural Disaster',
    'Fire',
    'Flood',
    'Traffic Accident',
    'Earthquake',
    'Medical Emergency',
    'Power Outage',
    'Robbery',
    'Vandalism'
  ];

  onSubmit() {
    this.incidentReported.emit({ ...this.incident });
    this.incident = { type: '', location: '', time: '', description: '' };
  }
}
