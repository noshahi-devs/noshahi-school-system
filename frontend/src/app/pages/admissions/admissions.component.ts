import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

export interface AdmissionFormModel {
  studentName: string;
  parentName: string;
  phone: string;
  email: string;
  grade: string;
  dateOfBirth: string;
}

@Component({
  selector: 'app-admissions',
  imports: [FormsModule],
  templateUrl: './admissions.component.html',
  styleUrl: './admissions.component.css',
})
export class AdmissionsComponent {
  protected readonly apiUrl = 'http://localhost:5081/api/admissions';
  protected form: AdmissionFormModel = {
    studentName: '',
    parentName: '',
    phone: '',
    email: '',
    grade: '',
    dateOfBirth: ''
  };
  protected status = '';
  protected submitting = false;

  constructor(private http: HttpClient) {}

  submit() {
    this.submitting = true;
    this.status = '';
    this.http.post<{ message: string; reference: string }>(this.apiUrl, this.form).subscribe({
      next: result => {
        this.status = `${result.message} Reference: ${result.reference}`;
        this.submitting = false;
        this.form = { studentName: '', parentName: '', phone: '', email: '', grade: '', dateOfBirth: '' };
      },
      error: () => {
        this.status = 'Unable to submit right now. Please call the admissions office.';
        this.submitting = false;
      }
    });
  }
}
