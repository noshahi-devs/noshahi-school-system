import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  readonly isSignUp = signal(false);

  readonly showLoginPassword = signal(false);
  readonly showSignupPassword = signal(false);

  readonly loginEmail = signal('');
  readonly loginPassword = signal('');
  readonly rememberMe = signal(false);

  readonly signupName = signal('');
  readonly signupEmail = signal('');
  readonly signupPassword = signal('');

  readonly loginLoading = signal(false);
  readonly signupLoading = signal(false);

  readonly loginMessage = signal('');
  readonly signupMessage = signal('');

  flipCard(): void {
    this.isSignUp.update(v => !v);
  }

  toggleLoginPassword(): void {
    this.showLoginPassword.update(v => !v);
  }

  toggleSignupPassword(): void {
    this.showSignupPassword.update(v => !v);
  }

  onLogin(event: Event): void {
    event.preventDefault();
    this.loginLoading.set(true);
    this.loginMessage.set('');

    setTimeout(() => {
      this.loginLoading.set(false);
      this.loginMessage.set('Login Successful! Welcome to Noshahi School System.');
    }, 1000);
  }

  onSignup(event: Event): void {
    event.preventDefault();
    this.signupLoading.set(true);
    this.signupMessage.set('');

    setTimeout(() => {
      this.signupLoading.set(false);
      this.signupMessage.set('Account Created Successfully!');
    }, 1000);
  }
}
