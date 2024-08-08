import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Login } from '../models/login';
import { Observable } from 'rxjs';
import { environment } from '../../app/enviroments/enviroment';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private myAppUrl: string = environment.apiUrl;
  private myApiUrl: string = 'api/login/';

  constructor(private http: HttpClient) { }

  login(login: Login): Observable<Login> {
    return this.http.post<Login>(`${this.myAppUrl}/${this.myApiUrl}`, login);
  }
}
