import { Component, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

import { AuthService } from '../../../services/auth.service';

import { NotifyComponent, NotifyType } from '../../../components/notify/notify.component';
import { LoadingComponent } from '../../../components/loading/loading.component';
import { NavbarComponent } from '../../shared/navbar/navbar.component';

@Component({
  standalone: true,
  selector: 'app-login',
  imports: [
    CommonModule,
    RouterModule,
    ReactiveFormsModule,
    LoadingComponent,
    NotifyComponent,
    NavbarComponent,
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent {
  private authS = inject(AuthService);
  private router = inject(Router);

  isLoading = signal(false);

  // Notification state
  showNotification = signal(false);
  notificationMessage = signal('');
  notificationType = signal<NotifyType>('danger');

  loginFG = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required, Validators.minLength(3)]),
  });

  get email() {
    return this.loginFG.get('email');
  }
  get password() {
    return this.loginFG.get('password');
  }

  onLogin() {
    this.isLoading.set(true);
    this.authS
      .onLogin(this.loginFG.value.email!, this.loginFG.value.password!)
      .then(() => {
        this.router.navigate(['dashboard']);
      })
      .catch((error) => {
        this.showNotification.set(true);
        this.notificationMessage.set(
          'Credenciales incorrectas. Por favor, intente de nuevo.'
        );
        this.notificationType.set('danger');
      })
      .finally(() => {
        this.isLoading.set(false);
      });
  }

  onNotificationClose() {
    this.showNotification.set(false);
  }
}
