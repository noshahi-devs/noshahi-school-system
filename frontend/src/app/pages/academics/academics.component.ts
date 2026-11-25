import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

export interface AcademicStage {
  step: string;
  title: string;
  description: string;
}

export interface ExamTerm {
  term: string;
  badge: string;
  examDate: string;
  resultDate: string;
  description: string;
}

export interface SchoolEvent {
  title: string;
  date: string;
  category: 'Islamic' | 'National' | 'School' | 'Observance';
  icon: string;
}

@Component({
  selector: 'app-academics',
  imports: [CommonModule, RouterLink],
  templateUrl: './academics.component.html',
  styleUrl: './academics.component.css',
})
export class AcademicsComponent {
  readonly stages = signal<AcademicStage[]>([
    {
      step: '01',
      title: 'Early Years',
      description: 'Play Group, Nursery and KG with a caring, activity-based introduction to learning and Islamic values.'
    },
    {
      step: '02',
      title: 'Primary School',
      description: 'Grades 1–5 build confident reading, mathematics, science, language and communication foundations.'
    },
    {
      step: '03',
      title: 'Middle School',
      description: 'Grades 6–8 develop analytical thinking, digital computer skills and independent study habits.'
    },
    {
      step: '04',
      title: 'Secondary',
      description: 'Grades 9–12 prepare students for board examinations and responsible, future-ready careers.'
    }
  ]);

  readonly examTerms = signal<ExamTerm[]>([
    {
      term: 'First Term Exam',
      badge: 'Term 1',
      examDate: '10-May-2027',
      resultDate: '19-May-2027',
      description: 'First quarterly evaluation assessing early session syllabus understanding.'
    },
    {
      term: 'Second Term Exam',
      badge: 'Term 2',
      examDate: '03-Oct-2027',
      resultDate: '13-Oct-2027',
      description: 'Mid-session comprehensive evaluation covering core concepts and progress.'
    },
    {
      term: 'Final Term Exam',
      badge: 'Final Term',
      examDate: '10-Jan-2028',
      resultDate: '31-Jan-2028',
      description: 'Annual final examinations determining session promotion and awards.'
    }
  ]);

  readonly schoolEvents = signal<SchoolEvent[]>([
    { title: 'Iftar Program', date: '21-Ramadan', category: 'Islamic', icon: 'fa-moon' },
    { title: "Labour's Day", date: '01-May-2027', category: 'National', icon: 'fa-person-digging' },
    { title: 'Youm-e-Ashura', date: '08-Muharram', category: 'Islamic', icon: 'fa-mosque' },
    { title: 'Independence Day', date: '14-Aug-2026', category: 'National', icon: 'fa-flag' },
    { title: 'Eid-e-Milad-Ul-Nabi', date: '12-Rabi-Ul-Awal', category: 'Islamic', icon: 'fa-star-and-crescent' },
    { title: 'Urs Mubarak Official', date: '2nd Thursday Assuj', category: 'Observance', icon: 'fa-kaaba' },
    { title: "Teacher's Day", date: '05-Oct-2027', category: 'School', icon: 'fa-chalkboard-user' },
    { title: "Iqbal's Day", date: '09-Nov-2027', category: 'National', icon: 'fa-book-atlas' },
    { title: "Quaid's Day", date: '25-Dec-2027', category: 'National', icon: 'fa-award' }
  ]);
}
