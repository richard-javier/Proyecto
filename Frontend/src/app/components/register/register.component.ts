import { Component } from '@angular/core';
import { Usuario } from '../../models/login';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  usuario: Usuario = new Usuario();
  errorMessage: string = '';
  successMessage: string = '';

  constructor(private authService: AuthService, private router: Router) { }

  register() {
    this.authService.register(this.usuario).subscribe(
      (response) => {
        this.successMessage = 'Registration successful. Please log in.';
        this.router.navigate(['/login']);
      },
      (error) => {
        this.errorMessage = error.error.message;
        console.error('Registration error:', error);
      }
    );
  }
}
