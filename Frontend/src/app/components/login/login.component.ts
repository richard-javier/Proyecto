import { Component, OnInit } from '@angular/core';
import { Usuario } from '../../models/login';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  usuario: Usuario = new Usuario();
  errorMessage: string = '';

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit(): void { }

  login() {
    this.authService.login(this.usuario).subscribe(
      (response) => {
        localStorage.setItem('token', response.token);
        this.router.navigate(['/home']);
      },
      (error) => {
        this.errorMessage = error.error.message;
        console.error('Login error:', error);
      }
    );
  }

  navigateToForgotPassword() {
    this.router.navigate(['/forgot-password']);
  }
}

