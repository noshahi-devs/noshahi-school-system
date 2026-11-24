import { Component, signal } from '@angular/core';

export interface AcademicStage {
  step: string;
  title: string;
  description: string;
}

@Component({
  selector: 'app-academics',
  imports: [],
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
}
