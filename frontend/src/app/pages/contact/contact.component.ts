import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

export interface ContactFormModel {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
}

@Component({
  selector: 'app-contact',
  imports: [FormsModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css',
})
export class ContactComponent {
  protected form: ContactFormModel = {
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  };
  protected status = '';
  protected submitting = false;

  constructor(private http: HttpClient) {}

  submit() {
    this.submitting = true;
    this.http.post<{ message: string; reference: string }>('http://localhost:5081/api/contact', this.form).subscribe({
      next: result => {
        this.status = `${result.message} Reference: ${result.reference}`;
        this.submitting = false;
        this.form = { name: '', email: '', phone: '', subject: '', message: '' };
      },
      error: () => {
        this.status = 'Unable to send your message. Please try again.';
        this.submitting = false;
      }
    });
  }
}
