import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Register } from '../models/register';
import { Observable } from 'rxjs';
import { environment } from '../../app/enviroments/enviroment';
@Injectable({
  providedIn: 'root'
})
export class RegisterService {
  private apiUrl = `${environment.apiUrl}/api/register`;

  constructor(private http: HttpClient) { }

  registerUser(register: Register): Observable<any> {
    return this.http.post(this.apiUrl, register);
  }
}
