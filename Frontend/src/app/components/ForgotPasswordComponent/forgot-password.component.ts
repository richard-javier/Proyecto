import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { ForgotPassword } from '../../models/forgot-password';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css']
})
export class ForgotPasswordComponent {
  forgotPasswordData: ForgotPassword = new ForgotPassword(0, '', '', '');

  constructor(private authService: AuthService) { }

  forgotPassword() {
    this.authService.forgotPassword(this.forgotPasswordData).subscribe(
      response => {
        console.log('Forgot password email sent', response);
      },
      error => {
        console.error('Forgot password request failed', error);
      }
    );
  }
}
