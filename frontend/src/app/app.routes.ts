import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { AcademicsComponent } from './pages/academics/academics.component';
import { AdmissionsComponent } from './pages/admissions/admissions.component';
import { ContactComponent } from './pages/contact/contact.component';
import { GenericComponent } from './pages/generic/generic.component';
import { LoginComponent } from './pages/login/login.component';

export const routes: Routes = [
  { path: '', component: HomeComponent, title: 'Noshahi School System' },
  { path: 'about', component: AboutComponent, title: 'About Us' },
  { path: 'academics', component: AcademicsComponent, title: 'Academics' },
  { path: 'admissions', component: AdmissionsComponent, title: 'Admissions' },
  { path: 'contact', component: ContactComponent, title: 'Contact Us' },
  { path: 'login', component: LoginComponent, title: 'Login - Noshahi School System' },
  { path: 'computer-education', component: GenericComponent, title: 'Computer Education' },
  { path: 'islamic-education', component: GenericComponent, title: 'Islamic Education' },
  { path: 'campus-facilities', component: GenericComponent, title: 'Campus Facilities' },
  { path: 'faculty', component: GenericComponent, title: 'Faculty' },
  { path: 'activities', component: GenericComponent, title: 'Student Activities' },
  { path: 'prospectus', component: GenericComponent, title: 'Prospectus' },
  { path: 'fee-structure', component: GenericComponent, title: 'Fee Structure' },
  { path: '**', redirectTo: '' }
];
