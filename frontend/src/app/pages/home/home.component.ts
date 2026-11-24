import { Component, signal } from '@angular/core';
import { RouterLink } from '@angular/router';

export interface TrustItem {
  title: string;
  subtitle: string;
}

export interface FeatureItem {
  number: string;
  colorClass: string;
  title: string;
  description: string;
}

export interface ProgramItem {
  number: string;
  colorClass: string;
  title: string;
  description: string;
  link: string;
}

@Component({
  selector: 'app-home',
  imports: [RouterLink],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {
  readonly trustItems = signal<TrustItem[]>([
    { title: 'KG - Grade 12', subtitle: 'Complete School Journey' },
    { title: 'Computer First', subtitle: 'Skills for Every Grade' },
    { title: 'Islamic Values', subtitle: 'Character & Faith' },
    { title: 'Safe Campus', subtitle: 'Care Beyond Classroom' },
  ]);

  readonly features = signal<FeatureItem[]>([
    {
      number: '01',
      colorClass: '',
      title: 'Computer as a Main Subject',
      description: 'Students learn typing, office skills, coding and digital creativity through hands-on activities.',
    },
    {
      number: '02',
      colorClass: 'green',
      title: 'Quran & Good Character',
      description: 'Daily Quran learning, prayer habits and Islamic manners help students grow with purpose.',
    },
    {
      number: '03',
      colorClass: 'blue',
      title: 'A Safe Learning Environment',
      description: 'A clean, caring campus with attentive teachers and regular communication with parents.',
    },
  ]);

  readonly programs = signal<ProgramItem[]>([
    {
      number: '01',
      colorClass: '',
      title: 'Computer Education',
      description: 'Practical technology education from basic computer use to programming foundations.',
      link: '/computer-education',
    },
    {
      number: '02',
      colorClass: 'green-bg',
      title: 'Islamic Education',
      description: 'Quran recitation, Islamic studies and values integrated into everyday school life.',
      link: '/islamic-education',
    },
  ]);
}
