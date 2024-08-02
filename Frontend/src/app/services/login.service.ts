import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Login } from '../models/login';
import { Observable } from 'rxjs';
import { environment } from '../../app/enviroments/enviroment';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private apiUrl = `${environment.apiUrl}/api/login`;

  constructor(private http: HttpClient) { }

  login(login: Login): Observable<any> {
    return this.http.post(this.apiUrl, login);
  }
}
