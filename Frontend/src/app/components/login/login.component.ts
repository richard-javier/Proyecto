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

  ngOnInit(): void {
  }

  login() {
    this.authService.login(this.usuario).subscribe(
      (response) => {
        // Handle successful login
        // Store the token (if your backend provides one) in local storage
        localStorage.setItem('token', response.token); // Replace 'token' with the actual token key
        this.router.navigate(['/home']); // Redirect to your home route
      },
      (error) => {
        this.errorMessage = error.error.message;
        console.error('Login error:', error);
      }
    );
  }
}
