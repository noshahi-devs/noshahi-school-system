import { Component } from '@angular/core';
import { RouterLink, Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs';

@Component({
  selector: 'app-generic',
  imports: [RouterLink],
  templateUrl: './generic.component.html',
  styleUrl: './generic.component.css',
})
export class GenericComponent {
  title = 'Explore Noshahi';
  subtitle = 'Discover learning experiences designed for growth.';

  constructor(private router: Router) {
    this.update(this.router.url);
    this.router.events
      .pipe(filter(event => event instanceof NavigationEnd))
      .subscribe(() => this.update(this.router.url));
  }

  private update(url: string) {
    const map: Record<string, [string, string]> = {
      '/computer-education': [
        'Computer Education',
        'Coding, digital skills and hands-on technology learning for every grade.'
      ],
      '/islamic-education': [
        'Islamic Education',
        'Quran recitation, prayer habits and strong Islamic character.'
      ],
      '/campus-facilities': [
        'Campus Facilities',
        'A clean, secure and welcoming environment for focused learning.'
      ],
      '/faculty': [
        'Our Faculty',
        'Dedicated teachers committed to knowledge and student care.'
      ],
      '/activities': [
        'Student Activities',
        'Sports, creativity and co-curricular experiences beyond textbooks.'
      ],
      '/prospectus': [
        'School Prospectus',
        'Explore admissions, programs and the Noshahi school experience.'
      ],
      '/fee-structure': [
        'Fee Structure',
        'Contact the admissions office for current fee details and plans.'
      ]
    };
    [this.title, this.subtitle] = map[url] ?? [
      'Explore Noshahi',
      'Discover learning experiences designed for growth.'
    ];
  }
}
