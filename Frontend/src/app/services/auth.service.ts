import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Usuario } from '../models/login';
import { environment } from '../enviroments/enviroment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  login(Usuario: Usuario): Observable<any> {
    return this.http.post(`${environment.apiUrl}/auth/login`, Usuario);
  }

  logout(): void {
    localStorage.removeItem('token');
  }

  getToken(): string | null {
    return localStorage.getItem('token');
  }

  isLoggedIn(): boolean {
    return !!this.getToken();
  }

  resetPassword(email: string): Observable<any> {  // Añadimos el método 'resetPassword'
    return this.http.post(`${environment.apiUrl}/auth/forgot-password`, { email });
  }
  register(usuario: Usuario): Observable<any> {
    return this.http.post(`${environment.apiUrl}/auth/register`, usuario);
  }
}
