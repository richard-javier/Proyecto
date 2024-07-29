import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css']
})
export class ForgotPasswordComponent {
  email: string = '';
  successMessage: string = '';
  errorMessage: string = '';

  constructor(private authService: AuthService) { }

  resetPassword() {
    this.authService.resetPassword(this.email).subscribe(
      (response: any) => {  // Definimos el tipo 'any' para 'response'
        this.successMessage = 'Password reset link has been sent to your email.';
        this.errorMessage = '';
      },
      (error: any) => {  // Definimos el tipo 'any' para 'error'
        this.errorMessage = error.error.message;
        this.successMessage = '';
        console.error('Reset password error:', error);
      }
    );
  }
}
