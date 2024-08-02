import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Register } from '../../models/register';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  registerData: Register = new Register();

  constructor(private authService: AuthService) { }

  register() {
    this.authService.register(this.registerData).subscribe(
      response => {
        console.log('Registration successful', response);
      },
      error => {
        console.error('Registration failed', error);
      }
    );
  }
}
