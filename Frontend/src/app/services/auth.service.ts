import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../app/enviroments/enviroment';
import { Login } from '../models/login';
import { Register } from '../models/register';
import { ForgotPassword } from '../models/forgot-password';
import { ListaRegistro } from '../models/lista-registros';

@Injectable({
  providedIn: 'root' // Esto hace que el servicio esté disponible a nivel global
})
export class AuthService {
  private apiUrl = `${environment.apiUrl}/api`;

  constructor(private http: HttpClient) { }

  login(login: Login): Observable<any> {
    return this.http.post(`${this.apiUrl}/login`, login);
  }

  register(register: Register): Observable<any> {
    return this.http.post(`${this.apiUrl}/register`, register);
  }

  resetPassword(email: string): Observable<any> {
    return this.http.post(`${this.apiUrl}/forgotpassword`, { email });
  }

  forgotPassword(forgotPassword: ForgotPassword): Observable<any> {
    return this.http.post(`${this.apiUrl}/forgotpassword`, forgotPassword);
  }

  obtenerUsuarios(): Observable<ListaRegistro[]> {
    return this.http.get<ListaRegistro[]>(`${this.apiUrl}/listaregistros`);
  }

  actualizarUsuario(usuario: ListaRegistro): Observable<any> {
    return this.http.put(`${this.apiUrl}/listaregistros/${usuario.id}`, usuario);
  }

  crearUsuario(usuario: ListaRegistro): Observable<any> {
    return this.http.post(`${this.apiUrl}/listaregistros`, usuario);
  }

  eliminarUsuario(id: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/listaregistros/${id}`);
  }
}
