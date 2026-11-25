import { Component, signal, inject } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet, Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterLink, RouterLinkActive],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  protected readonly title = signal('Noshahi School System');
  private router = inject(Router);

  readonly isMobileMenuOpen = signal<boolean>(false);
  readonly activeDropdown = signal<string | null>(null);

  constructor() {
    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    ).subscribe(() => {
      window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
      this.closeMenu();
    });
  }

  toggleMobileMenu(): void {
    this.isMobileMenuOpen.update(v => !v);
  }

  closeMenu(): void {
    this.isMobileMenuOpen.set(false);
    this.activeDropdown.set(null);
  }

  openDropdown(name: string): void {
    if (typeof window !== 'undefined' && window.innerWidth > 900) {
      this.activeDropdown.set(name);
    }
  }

  closeDropdown(name: string): void {
    if (typeof window !== 'undefined' && window.innerWidth > 900) {
      if (this.activeDropdown() === name) {
        this.activeDropdown.set(null);
      }
    }
  }

  toggleDropdown(event: Event, name: string): void {
    if (typeof window !== 'undefined' && window.innerWidth <= 900) {
      event.preventDefault();
      event.stopPropagation();
      this.activeDropdown.update(curr => curr === name ? null : name);
    }
  }

  isAcademicsActive(): boolean {
    const url = this.router.url;
    return url.startsWith('/academics') ||
           url.startsWith('/curriculum') ||
           url.startsWith('/computer-education') ||
           url.startsWith('/islamic-education');
  }

  isFacilitiesActive(): boolean {
    const url = this.router.url;
    return url.startsWith('/campus-facilities') || url.startsWith('/faculty');
  }
}
