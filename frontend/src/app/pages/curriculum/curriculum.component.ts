import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

export interface Book {
  subject: string;
  publications: string;
  price: number;
  bg: string;
  accent: string;
  tag: string;
}

export interface CurriculumSection {
  id: string;
  title: string;
  subtitle: string;
  icon: string;
  badgeClass: string;
  defaultOpen?: boolean;
  isComingSoon?: boolean;
  comingSoonPrograms?: string[];
  classes: Record<string, Book[]>;
}

@Component({
  selector: 'app-curriculum',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './curriculum.component.html',
  styleUrl: './curriculum.component.css'
})
export class CurriculumComponent {
  readonly whatsappNumber = '923281642297';

  readonly sections: CurriculumSection[] = [
    {
      id: 'pre-classes',
      title: 'Pre Classes',
      subtitle: 'Early Childhood Foundation (PG, Nursery, Prep)',
      icon: 'fa-shapes',
      badgeClass: 'badge-pre',
      defaultOpen: true,
      classes: {
        'PG': [
          { subject: 'Urdu', publications: 'Arfa SRM Pre 1', price: 330, bg: '92400E', accent: 'FBBF24', tag: 'Urdu' },
          { subject: 'English', publications: 'Arfa SRM Pre 1', price: 330, bg: '1E3A8A', accent: '38BDF8', tag: 'Language' },
          { subject: 'Math', publications: 'Arfa SRM Pre 1', price: 330, bg: '065F46', accent: '34D399', tag: 'Math' },
          { subject: 'GK', publications: 'Learning Bridge', price: 450, bg: '075985', accent: '38BDF8', tag: 'General Knowledge' }
        ],
        'Nursery': [
          { subject: 'Urdu', publications: 'Arfa SRM Pre 1', price: 330, bg: '92400E', accent: 'FBBF24', tag: 'Urdu' },
          { subject: 'English', publications: 'Arfa SRM Pre 1', price: 300, bg: '1E3A8A', accent: '38BDF8', tag: 'Language' },
          { subject: 'Math', publications: 'Arfa SRM Pre 1', price: 300, bg: '065F46', accent: '34D399', tag: 'Math' },
          { subject: 'GK', publications: 'Learning Bridge', price: 450, bg: '075985', accent: '38BDF8', tag: 'General Knowledge' }
        ],
        'Prep': [
          { subject: 'Urdu', publications: 'Arfa SRM Pre 1', price: 330, bg: '92400E', accent: 'FBBF24', tag: 'Urdu' },
          { subject: 'English', publications: 'Arfa SRM Pre 1', price: 330, bg: '1E3A8A', accent: '38BDF8', tag: 'Language' },
          { subject: 'Math', publications: 'Arfa SRM Pre 1', price: 330, bg: '065F46', accent: '34D399', tag: 'Math' },
          { subject: 'GK', publications: 'Learning Bridge', price: 450, bg: '075985', accent: '38BDF8', tag: 'General Knowledge' }
        ]
      }
    },
    {
      id: 'primary',
      title: 'Primary',
      subtitle: 'Elementary Education (Class One to Class Five)',
      icon: 'fa-book-open-reader',
      badgeClass: 'badge-primary',
      defaultOpen: false,
      classes: {
        'One': [
          { subject: 'Urdu', publications: 'Learning Bridge', price: 550, bg: '92400E', accent: 'FBBF24', tag: 'Language' },
          { subject: 'English', publications: 'Talent', price: 500, bg: '1E3A8A', accent: '38BDF8', tag: 'Language' },
          { subject: 'Math', publications: 'PTB', price: 181, bg: '065F46', accent: '34D399', tag: 'Math' },
          { subject: 'GK', publications: 'Premier', price: 320, bg: '075985', accent: '38BDF8', tag: 'General Knowledge' },
          { subject: 'IS', publications: 'Gohar', price: 410, bg: '4C1D95', accent: 'A78BFA', tag: 'Islamic Studies' },
          { subject: 'Eng+Urdu Grammar', publications: 'Learning Bridge', price: 370, bg: '831843', accent: 'F472B6', tag: 'Grammar' },
          { subject: 'Computer', publications: 'Academic Plus', price: 0, bg: '1F2937', accent: '60A5FA', tag: 'IT Skills' }
        ],
        'Two': [
          { subject: 'Urdu', publications: 'Learning Bridge', price: 560, bg: '92400E', accent: 'FBBF24', tag: 'Language' },
          { subject: 'English', publications: 'Talent', price: 540, bg: '1E3A8A', accent: '38BDF8', tag: 'Language' },
          { subject: 'Math', publications: 'PTB', price: 185, bg: '065F46', accent: '34D399', tag: 'Math' },
          { subject: 'GK', publications: 'Premier', price: 380, bg: '075985', accent: '38BDF8', tag: 'General Knowledge' },
          { subject: 'IS', publications: 'Gohar', price: 450, bg: '4C1D95', accent: 'A78BFA', tag: 'Islamic Studies' },
          { subject: 'Eng+Urdu Grammar', publications: 'Learning Bridge', price: 470, bg: '831843', accent: 'F472B6', tag: 'Grammar' },
          { subject: 'Computer', publications: 'Academic Plus', price: 0, bg: '1F2937', accent: '60A5FA', tag: 'IT Skills' }
        ],
        'Three': [
          { subject: 'Urdu', publications: 'Learning Bridge', price: 580, bg: '92400E', accent: 'FBBF24', tag: 'Language' },
          { subject: 'English', publications: 'Talent', price: 560, bg: '1E3A8A', accent: '38BDF8', tag: 'Language' },
          { subject: 'Math', publications: 'PTB', price: 206, bg: '065F46', accent: '34D399', tag: 'Math' },
          { subject: 'GK', publications: 'Premier', price: 470, bg: '075985', accent: '38BDF8', tag: 'General Knowledge' },
          { subject: 'IS', publications: 'Gohar', price: 570, bg: '4C1D95', accent: 'A78BFA', tag: 'Islamic Studies' },
          { subject: 'Eng+Urdu Grammar', publications: 'Learning Bridge', price: 520, bg: '831843', accent: 'F472B6', tag: 'Grammar' },
          { subject: 'Computer', publications: 'Academic Plus', price: 0, bg: '1F2937', accent: '60A5FA', tag: 'IT Skills' }
        ],
        'Four': [
          { subject: 'Urdu', publications: 'Learning Bridge', price: 580, bg: '92400E', accent: 'FBBF24', tag: 'Language' },
          { subject: 'English', publications: 'Talent', price: 590, bg: '1E3A8A', accent: '38BDF8', tag: 'Language' },
          { subject: 'Math', publications: 'PTB', price: 238, bg: '065F46', accent: '34D399', tag: 'Math' },
          { subject: 'Science', publications: 'Premier', price: 540, bg: '0E7490', accent: '22D3EE', tag: 'Science' },
          { subject: 'IS', publications: 'Gohar', price: 640, bg: '4C1D95', accent: 'A78BFA', tag: 'Islamic Studies' },
          { subject: 'Eng+Urdu Grammar', publications: 'Learning Bridge', price: 560, bg: '831843', accent: 'F472B6', tag: 'Grammar' },
          { subject: 'Computer', publications: 'Academic Plus', price: 0, bg: '1F2937', accent: '60A5FA', tag: 'IT Skills' }
        ],
        'Five': [
          { subject: 'Urdu', publications: 'Learning Bridge', price: 0, bg: '92400E', accent: 'FBBF24', tag: 'Language' },
          { subject: 'English', publications: 'Talent', price: 0, bg: '1E3A8A', accent: '38BDF8', tag: 'Language' },
          { subject: 'Math', publications: 'PTB', price: 232, bg: '065F46', accent: '34D399', tag: 'Math' },
          { subject: 'Science', publications: 'Premier', price: 570, bg: '0E7490', accent: '22D3EE', tag: 'Science' },
          { subject: 'IS', publications: 'Gohar', price: 590, bg: '4C1D95', accent: 'A78BFA', tag: 'Islamic Studies' },
          { subject: 'Eng+Urdu Grammar', publications: 'Learning Bridge', price: 0, bg: '831843', accent: 'F472B6', tag: 'Grammar' },
          { subject: 'Computer', publications: 'Academic Plus', price: 0, bg: '1F2937', accent: '60A5FA', tag: 'IT Skills' }
        ]
      }
    },
    {
      id: 'middle',
      title: 'Middle',
      subtitle: 'Lower Secondary Education (Class Six, Seven & Eight)',
      icon: 'fa-compass-drafting',
      badgeClass: 'badge-middle',
      defaultOpen: false,
      classes: {
        'Six': [
          { subject: 'Urdu', publications: 'Learning Bridge', price: 0, bg: '92400E', accent: 'FBBF24', tag: 'Language' },
          { subject: 'English', publications: 'Talent', price: 0, bg: '1E3A8A', accent: '38BDF8', tag: 'Language' },
          { subject: 'Math', publications: 'PTB', price: 0, bg: '065F46', accent: '34D399', tag: 'Math' },
          { subject: 'Science', publications: 'PTB', price: 0, bg: '0E7490', accent: '22D3EE', tag: 'Science' },
          { subject: 'IS', publications: 'PTB', price: 0, bg: '4C1D95', accent: 'A78BFA', tag: 'Islamic Studies' },
          { subject: 'Eng Grammar', publications: 'Iqbal Grammer', price: 0, bg: '1E3A8A', accent: '38BDF8', tag: 'Grammar' },
          { subject: 'Urdu Grammar', publications: 'Learning Bridge', price: 0, bg: '831843', accent: 'F472B6', tag: 'Grammar' },
          { subject: 'THQ', publications: 'PTB', price: 0, bg: '047857', accent: '6EE7B7', tag: 'Quranic Studies' },
          { subject: 'Geography', publications: 'PTB', price: 0, bg: '854D0E', accent: 'FDE047', tag: 'Social Studies' },
          { subject: 'Computer', publications: 'Academic Plus', price: 0, bg: '1F2937', accent: '60A5FA', tag: 'IT Skills' }
        ],
        'Seven': [
          { subject: 'Urdu', publications: 'Learning Bridge', price: 0, bg: '92400E', accent: 'FBBF24', tag: 'Language' },
          { subject: 'English', publications: 'Talent', price: 0, bg: '1E3A8A', accent: '38BDF8', tag: 'Language' },
          { subject: 'Math', publications: 'PTB', price: 0, bg: '065F46', accent: '34D399', tag: 'Math' },
          { subject: 'Science', publications: 'PTB', price: 0, bg: '0E7490', accent: '22D3EE', tag: 'Science' },
          { subject: 'IS', publications: 'PTB', price: 0, bg: '4C1D95', accent: 'A78BFA', tag: 'Islamic Studies' },
          { subject: 'Eng Grammar', publications: 'Iqbal Grammer', price: 0, bg: '1E3A8A', accent: '38BDF8', tag: 'Grammar' },
          { subject: 'Urdu Grammar', publications: 'Learning Bridge', price: 0, bg: '831843', accent: 'F472B6', tag: 'Grammar' },
          { subject: 'THQ', publications: 'PTB', price: 0, bg: '047857', accent: '6EE7B7', tag: 'Quranic Studies' },
          { subject: 'Geography', publications: 'PTB', price: 0, bg: '854D0E', accent: 'FDE047', tag: 'Social Studies' },
          { subject: 'Computer', publications: 'PTB', price: 0, bg: '1F2937', accent: '60A5FA', tag: 'IT Skills' }
        ],
        'Eight': [
          { subject: 'Urdu', publications: 'Learning Bridge', price: 0, bg: '92400E', accent: 'FBBF24', tag: 'Language' },
          { subject: 'English', publications: 'Talent', price: 0, bg: '1E3A8A', accent: '38BDF8', tag: 'Language' },
          { subject: 'Math', publications: 'PTB', price: 0, bg: '065F46', accent: '34D399', tag: 'Math' },
          { subject: 'Science', publications: 'PTB', price: 0, bg: '0E7490', accent: '22D3EE', tag: 'Science' },
          { subject: 'IS', publications: 'PTB', price: 0, bg: '4C1D95', accent: 'A78BFA', tag: 'Islamic Studies' },
          { subject: 'Eng Grammar', publications: 'Iqbal Grammer', price: 0, bg: '1E3A8A', accent: '38BDF8', tag: 'Grammar' },
          { subject: 'Urdu Grammar', publications: 'Learning Bridge', price: 0, bg: '831843', accent: 'F472B6', tag: 'Grammar' },
          { subject: 'THQ', publications: 'PTB', price: 0, bg: '047857', accent: '6EE7B7', tag: 'Quranic Studies' },
          { subject: 'History & Geography', publications: 'PTB', price: 0, bg: '854D0E', accent: 'FDE047', tag: 'Social Studies' },
          { subject: 'Computer', publications: 'PTB', price: 0, bg: '1F2937', accent: '60A5FA', tag: 'IT Skills' }
        ]
      }
    },
    {
      id: 'matriculation',
      title: 'Matriculation',
      subtitle: 'Secondary School Certificate (Class Nine & Ten)',
      icon: 'fa-flask-vial',
      badgeClass: 'badge-matric',
      defaultOpen: false,
      classes: {
        'Nine': [
          { subject: 'Urdu', publications: 'PTB', price: 0, bg: '92400E', accent: 'FBBF24', tag: 'Language' },
          { subject: 'English', publications: 'PTB', price: 0, bg: '1E3A8A', accent: '38BDF8', tag: 'Language' },
          { subject: 'Math', publications: 'PTB', price: 0, bg: '065F46', accent: '34D399', tag: 'Math' },
          { subject: 'Science', publications: 'PTB', price: 0, bg: '0E7490', accent: '22D3EE', tag: 'Science' },
          { subject: 'IS', publications: 'PTB', price: 0, bg: '4C1D95', accent: 'A78BFA', tag: 'Islamic Studies' },
          { subject: 'Eng Grammar', publications: 'Sunshine', price: 0, bg: '1E3A8A', accent: '38BDF8', tag: 'Grammar' },
          { subject: 'Urdu Grammar', publications: 'Sharah Sarmaya', price: 0, bg: '831843', accent: 'F472B6', tag: 'Grammar' },
          { subject: 'THQ', publications: 'PTB', price: 0, bg: '047857', accent: '6EE7B7', tag: 'Quranic Studies' },
          { subject: 'Physics', publications: 'PTB', price: 0, bg: '075985', accent: '38BDF8', tag: 'Science' },
          { subject: 'Computer', publications: 'PTB', price: 0, bg: '1F2937', accent: '60A5FA', tag: 'IT Skills' }
        ],
        'Ten': [
          { subject: 'Urdu', publications: 'PTB', price: 0, bg: '92400E', accent: 'FBBF24', tag: 'Language' },
          { subject: 'English', publications: 'PTB', price: 0, bg: '1E3A8A', accent: '38BDF8', tag: 'Language' },
          { subject: 'Math', publications: 'PTB', price: 0, bg: '065F46', accent: '34D399', tag: 'Math' },
          { subject: 'Science', publications: 'PTB', price: 0, bg: '0E7490', accent: '22D3EE', tag: 'Science' },
          { subject: 'IS', publications: 'PTB', price: 0, bg: '4C1D95', accent: 'A78BFA', tag: 'Islamic Studies' },
          { subject: 'Eng Grammar', publications: 'Sunshine', price: 0, bg: '1E3A8A', accent: '38BDF8', tag: 'Grammar' },
          { subject: 'Urdu Grammar', publications: 'Sharah Sarmaya', price: 0, bg: '831843', accent: 'F472B6', tag: 'Grammar' },
          { subject: 'THQ', publications: 'PTB', price: 0, bg: '047857', accent: '6EE7B7', tag: 'Quranic Studies' },
          { subject: 'Physics', publications: 'PTB', price: 0, bg: '075985', accent: '38BDF8', tag: 'Science' },
          { subject: 'Computer', publications: 'PTB', price: 0, bg: '1F2937', accent: '60A5FA', tag: 'IT Skills' }
        ]
      }
    },
    {
      id: 'intermediate',
      title: 'Intermediate',
      subtitle: 'Higher Secondary (ICS, FA.IT & FA Parts 1 & 2)',
      icon: 'fa-atom',
      badgeClass: 'badge-inter',
      defaultOpen: false,
      classes: {
        'ICS Part 1': [
          { subject: 'Urdu', publications: 'PTB', price: 0, bg: '92400E', accent: 'FBBF24', tag: 'Language' },
          { subject: 'English', publications: 'PTB', price: 0, bg: '1E3A8A', accent: '38BDF8', tag: 'Language' },
          { subject: 'Math', publications: 'PTB', price: 0, bg: '065F46', accent: '34D399', tag: 'Math' },
          { subject: 'Economics', publications: 'PTB', price: 0, bg: '065F46', accent: '34D399', tag: 'Economics' },
          { subject: 'IS', publications: 'PTB', price: 0, bg: '4C1D95', accent: 'A78BFA', tag: 'Islamic Studies' },
          { subject: 'Eng Grammar', publications: 'Advanced Ideal', price: 0, bg: '1E3A8A', accent: '38BDF8', tag: 'Grammar' },
          { subject: 'Urdu Grammar', publications: 'Sharah Sarmaya', price: 0, bg: '831843', accent: 'F472B6', tag: 'Grammar' },
          { subject: 'THQ', publications: 'PTB', price: 0, bg: '047857', accent: '6EE7B7', tag: 'Quranic Studies' },
          { subject: 'Computer', publications: 'PTB', price: 0, bg: '1F2937', accent: '60A5FA', tag: 'Computer Science' }
        ],
        'FA.IT Part 1': [
          { subject: 'Urdu', publications: 'PTB', price: 0, bg: '92400E', accent: 'FBBF24', tag: 'Language' },
          { subject: 'English', publications: 'PTB', price: 0, bg: '1E3A8A', accent: '38BDF8', tag: 'Language' },
          { subject: 'IS Elective', publications: 'PTB', price: 0, bg: '4C1D95', accent: 'A78BFA', tag: 'Elective' },
          { subject: 'Economics', publications: 'PTB', price: 0, bg: '065F46', accent: '34D399', tag: 'Economics' },
          { subject: 'IS', publications: 'PTB', price: 0, bg: '4C1D95', accent: 'A78BFA', tag: 'Islamic Studies' },
          { subject: 'Eng Grammar', publications: 'Advanced Ideal', price: 0, bg: '1E3A8A', accent: '38BDF8', tag: 'Grammar' },
          { subject: 'Urdu Grammar', publications: 'Sharah Sarmaya', price: 0, bg: '831843', accent: 'F472B6', tag: 'Grammar' },
          { subject: 'THQ', publications: 'PTB', price: 0, bg: '047857', accent: '6EE7B7', tag: 'Quranic Studies' },
          { subject: 'Computer', publications: 'PTB', price: 0, bg: '1F2937', accent: '60A5FA', tag: 'Computer Science' }
        ],
        'FA Part 1': [
          { subject: 'Urdu', publications: 'PTB', price: 0, bg: '92400E', accent: 'FBBF24', tag: 'Language' },
          { subject: 'English', publications: 'PTB', price: 0, bg: '1E3A8A', accent: '38BDF8', tag: 'Language' },
          { subject: 'IS Elective', publications: 'PTB', price: 0, bg: '4C1D95', accent: 'A78BFA', tag: 'Elective' },
          { subject: 'Economics', publications: 'PTB', price: 0, bg: '065F46', accent: '34D399', tag: 'Economics' },
          { subject: 'IS', publications: 'PTB', price: 0, bg: '4C1D95', accent: 'A78BFA', tag: 'Islamic Studies' },
          { subject: 'Eng Grammar', publications: 'Advanced Ideal', price: 0, bg: '1E3A8A', accent: '38BDF8', tag: 'Grammar' },
          { subject: 'Urdu Grammar', publications: 'Sharah Sarmaya', price: 0, bg: '831843', accent: 'F472B6', tag: 'Grammar' },
          { subject: 'THQ', publications: 'PTB', price: 0, bg: '047857', accent: '6EE7B7', tag: 'Quranic Studies' },
          { subject: 'Health & Physical Education', publications: 'PTB', price: 0, bg: '0E7490', accent: '22D3EE', tag: 'Physical Ed' }
        ],
        'ICS Part 2': [
          { subject: 'Urdu', publications: 'PTB', price: 0, bg: '92400E', accent: 'FBBF24', tag: 'Language' },
          { subject: 'English', publications: 'PTB', price: 0, bg: '1E3A8A', accent: '38BDF8', tag: 'Language' },
          { subject: 'Math', publications: 'PTB', price: 0, bg: '065F46', accent: '34D399', tag: 'Math' },
          { subject: 'Economics', publications: 'PTB', price: 0, bg: '065F46', accent: '34D399', tag: 'Economics' },
          { subject: 'IS', publications: 'PTB', price: 0, bg: '4C1D95', accent: 'A78BFA', tag: 'Islamic Studies' },
          { subject: 'Eng Grammar', publications: 'Advanced Ideal', price: 0, bg: '1E3A8A', accent: '38BDF8', tag: 'Grammar' },
          { subject: 'Urdu Grammar', publications: 'Sharah Sarmaya', price: 0, bg: '831843', accent: 'F472B6', tag: 'Grammar' },
          { subject: 'THQ', publications: 'PTB', price: 0, bg: '047857', accent: '6EE7B7', tag: 'Quranic Studies' },
          { subject: 'Computer', publications: 'PTB', price: 0, bg: '1F2937', accent: '60A5FA', tag: 'Computer Science' }
        ],
        'FA.IT Part 2': [
          { subject: 'Urdu', publications: 'PTB', price: 0, bg: '92400E', accent: 'FBBF24', tag: 'Language' },
          { subject: 'English', publications: 'PTB', price: 0, bg: '1E3A8A', accent: '38BDF8', tag: 'Language' },
          { subject: 'IS Elective', publications: 'PTB', price: 0, bg: '4C1D95', accent: 'A78BFA', tag: 'Elective' },
          { subject: 'Economics', publications: 'PTB', price: 0, bg: '065F46', accent: '34D399', tag: 'Economics' },
          { subject: 'IS', publications: 'PTB', price: 0, bg: '4C1D95', accent: 'A78BFA', tag: 'Islamic Studies' },
          { subject: 'Eng Grammar', publications: 'Advanced Ideal', price: 0, bg: '1E3A8A', accent: '38BDF8', tag: 'Grammar' },
          { subject: 'Urdu Grammar', publications: 'Sharah Sarmaya', price: 0, bg: '831843', accent: 'F472B6', tag: 'Grammar' },
          { subject: 'THQ', publications: 'PTB', price: 0, bg: '047857', accent: '6EE7B7', tag: 'Quranic Studies' },
          { subject: 'Computer', publications: 'PTB', price: 0, bg: '1F2937', accent: '60A5FA', tag: 'Computer Science' }
        ],
        'FA Part 2': [
          { subject: 'Urdu', publications: 'PTB', price: 0, bg: '92400E', accent: 'FBBF24', tag: 'Language' },
          { subject: 'English', publications: 'PTB', price: 0, bg: '1E3A8A', accent: '38BDF8', tag: 'Language' },
          { subject: 'IS Elective', publications: 'PTB', price: 0, bg: '4C1D95', accent: 'A78BFA', tag: 'Elective' },
          { subject: 'Economics', publications: 'PTB', price: 0, bg: '065F46', accent: '34D399', tag: 'Economics' },
          { subject: 'IS', publications: 'PTB', price: 0, bg: '4C1D95', accent: 'A78BFA', tag: 'Islamic Studies' },
          { subject: 'Eng Grammar', publications: 'Advanced Ideal', price: 0, bg: '1E3A8A', accent: '38BDF8', tag: 'Grammar' },
          { subject: 'Urdu Grammar', publications: 'Sharah Sarmaya', price: 0, bg: '831843', accent: 'F472B6', tag: 'Grammar' },
          { subject: 'THQ', publications: 'PTB', price: 0, bg: '047857', accent: '6EE7B7', tag: 'Quranic Studies' },
          { subject: 'Health & Physical Education', publications: 'PTB', price: 0, bg: '0E7490', accent: '22D3EE', tag: 'Physical Ed' }
        ]
      }
    },
    {
      id: 'undergraduate',
      title: 'Undergraduate',
      subtitle: 'University Degree Programs (BSCS, BS IT, BS IS IT)',
      icon: 'fa-university',
      badgeClass: 'badge-undergrad',
      defaultOpen: false,
      isComingSoon: true,
      comingSoonPrograms: ['BSCS', 'BS IT', 'BS IS IT'],
      classes: {}
    }
  ];

  readonly openSections = signal<Set<string>>(new Set(['pre-classes']));
  readonly activeClasses = signal<Record<string, string>>({
    'pre-classes': 'PG',
    'primary': 'One',
    'middle': 'Six',
    'matriculation': 'Nine',
    'intermediate': 'ICS Part 1'
  });

  isSectionOpen(sectionId: string): boolean {
    return this.openSections().has(sectionId);
  }

  toggleSection(sectionId: string): void {
    this.openSections.update(current => {
      const next = new Set(current);
      if (next.has(sectionId)) {
        next.delete(sectionId);
      } else {
        next.add(sectionId);
      }
      return next;
    });
  }

  selectClass(sectionId: string, className: string): void {
    this.activeClasses.update(curr => ({
      ...curr,
      [sectionId]: className
    }));
  }

  getActiveClass(sectionId: string): string {
    const section = this.sections.find(s => s.id === sectionId);
    const available = section ? Object.keys(section.classes) : [];
    return this.activeClasses()[sectionId] || (available[0] || '');
  }

  getClassNames(section: CurriculumSection): string[] {
    return Object.keys(section.classes);
  }

  getActiveBooks(section: CurriculumSection): Book[] {
    const active = this.getActiveClass(section.id);
    return section.classes[active] || [];
  }

  getTotalBooks(section: CurriculumSection): number {
    return this.getActiveBooks(section).length;
  }

  getTotalPrice(section: CurriculumSection): number {
    return this.getActiveBooks(section).reduce((sum, b) => sum + b.price, 0);
  }

  formatPrice(amount: number): string {
    if (amount === 0) {
      return 'Available / Contact';
    }
    return `Rs. ${amount.toLocaleString('en-PK')}/-`;
  }

  formatTotalPrice(amount: number): string {
    if (amount === 0) {
      return 'Contact on WhatsApp';
    }
    return `Rs. ${amount.toLocaleString('en-PK')}/-`;
  }

  getSingleBookWaLink(sectionTitle: string, className: string, book: Book): string {
    const priceText = book.price > 0 ? this.formatPrice(book.price) : 'Contact Office for Latest Price';
    const message = 
      `Hello Ramzan Book Depo!\n` +
      `I would like to order this prescribed book:\n\n` +
      `• Academic Level: ${sectionTitle}\n` +
      `• Class: ${className}\n` +
      `• Subject: ${book.subject}\n` +
      `• Publication: ${book.publications}\n` +
      `• Price: ${priceText}\n\n` +
      `Please confirm availability and delivery.`;

    return `https://wa.me/${this.whatsappNumber}?text=${encodeURIComponent(message)}`;
  }

  getBundleWaLink(sectionTitle: string, className: string, section: CurriculumSection): string {
    const totalBooks = this.getTotalBooks(section);
    const totalPrice = this.getTotalPrice(section);
    const priceText = totalPrice > 0 ? this.formatTotalPrice(totalPrice) : 'Inquire for Latest Course Set Price';

    const message = 
      `Hello Ramzan Book Depo!\n` +
      `I would like to order:\n` +
      `Class: ${className} Complete Course\n\n` +
      `• Level: ${sectionTitle}\n` +
      `• Total Books: ${totalBooks} Books\n` +
      `• Total Course Price: ${priceText}\n\n` +
      `Please share delivery and payment details for this complete set.`;

    return `https://wa.me/${this.whatsappNumber}?text=${encodeURIComponent(message)}`;
  }

  getComingSoonWaLink(program: string): string {
    const message = 
      `Hello Ramzan Book Depo!\n` +
      `I am inquiring about the Undergraduate Program:\n` +
      `• Program: ${program}\n` +
      `Please notify me when curriculum, books, and admissions details are announced.`;

    return `https://wa.me/${this.whatsappNumber}?text=${encodeURIComponent(message)}`;
  }

  getCoverSvg(subject: string, className: string, publications: string, bgHex: string, accentHex: string): string {
    const safeSubject = subject.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
    const safeClass = className.replace(/&/g, '&amp;');
    const safePub = publications.replace(/&/g, '&amp;');

    let line1 = safeSubject;
    let line2 = '';
    if (safeSubject.length > 18) {
      const words = safeSubject.split(' ');
      const mid = Math.ceil(words.length / 2);
      line1 = words.slice(0, mid).join(' ');
      line2 = words.slice(mid).join(' ');
    }

    const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 520" width="400" height="520">
      <defs>
        <linearGradient id="bg_${bgHex}" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#${bgHex}"/>
          <stop offset="100%" stop-color="#102A43"/>
        </linearGradient>
        <linearGradient id="spineGrad" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stop-color="#000000" stop-opacity="0.38"/>
          <stop offset="3%" stop-color="#ffffff" stop-opacity="0.22"/>
          <stop offset="7%" stop-color="#000000" stop-opacity="0.18"/>
          <stop offset="100%" stop-color="#000000" stop-opacity="0"/>
        </linearGradient>
      </defs>
      <rect width="400" height="520" fill="url(#bg_${bgHex})"/>
      <circle cx="340" cy="80" r="140" fill="#ffffff" fill-opacity="0.04"/>
      <circle cx="80" cy="440" r="160" fill="#${accentHex}" fill-opacity="0.06"/>
      <line x1="30" y1="40" x2="370" y2="40" stroke="#ffffff" stroke-opacity="0.15" stroke-width="1"/>
      <line x1="30" y1="475" x2="370" y2="475" stroke="#ffffff" stroke-opacity="0.15" stroke-width="1"/>
      
      <rect x="35" y="55" width="330" height="28" rx="6" fill="#ffffff" fill-opacity="0.12"/>
      <text x="200" y="74" fill="#ffffff" font-family="'Plus Jakarta Sans', sans-serif" font-size="11" font-weight="700" letter-spacing="1.5" text-anchor="middle">NOSHAHI SCHOOL SYSTEM</text>

      <g transform="translate(160, 115)">
        <circle cx="40" cy="40" r="36" fill="#${accentHex}" fill-opacity="0.2" stroke="#${accentHex}" stroke-width="2"/>
        <circle cx="40" cy="40" r="28" fill="#102A43" stroke="#ffffff" stroke-width="1" stroke-opacity="0.3"/>
        <text x="40" y="46" fill="#ffffff" font-family="'Plus Jakarta Sans', sans-serif" font-size="16" font-weight="800" text-anchor="middle">NSS</text>
      </g>

      <rect x="70" y="210" width="260" height="32" rx="16" fill="#ffffff" fill-opacity="0.95"/>
      <text x="200" y="231" fill="#102A43" font-family="'Plus Jakarta Sans', sans-serif" font-size="13" font-weight="800" letter-spacing="1" text-anchor="middle">${safeClass}</text>

      <text x="200" y="295" fill="#ffffff" font-family="'Plus Jakarta Sans', sans-serif" font-size="22" font-weight="800" text-anchor="middle">
        <tspan x="200" dy="0">${line1}</tspan>
        ${line2 ? `<tspan x="200" dy="28">${line2}</tspan>` : ''}
      </text>

      <line x1="160" y1="365" x2="240" y2="365" stroke="#${accentHex}" stroke-width="3" stroke-linecap="round"/>

      <g transform="translate(35, 410)">
        <rect width="330" height="42" rx="8" fill="#000000" fill-opacity="0.28" stroke="#ffffff" stroke-opacity="0.12"/>
        <text x="165" y="20" fill="#F7941D" font-family="'Manrope', sans-serif" font-size="9" font-weight="700" letter-spacing="1" text-anchor="middle">PRESCRIBED TEXTBOOK</text>
        <text x="165" y="34" fill="#ffffff" font-family="'Manrope', sans-serif" font-size="12" font-weight="600" text-anchor="middle">${safePub}</text>
      </g>

      <rect width="24" height="520" fill="url(#spineGrad)"/>
    </svg>`;

    return 'data:image/svg+xml;charset=utf-8,' + encodeURIComponent(svg);
  }
}
