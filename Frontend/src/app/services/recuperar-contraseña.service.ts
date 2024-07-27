// recuperar-contraseña.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { RecuperarContraseña } from '../models/recuperar-contraseña';
import { environment } from '../enviroments/enviroment';

@Injectable({
  providedIn: 'root'
})
export class RecuperarContraseñaService {

  private apiUrl = environment.apiUrl;

  constructor(private http: HttpClient) { }

  enviarCorreo(recuperarContraseña: RecuperarContraseña) {
    return this.http.post(`${this.apiUrl}/recuperar-contraseña`, recuperarContraseña);
  }

}
