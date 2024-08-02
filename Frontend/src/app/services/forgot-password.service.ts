import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ForgotPassword } from '../models/forgot-password';
import { Observable } from 'rxjs';
import { environment } from '../../app/enviroments/enviroment';

@Injectable({
  providedIn: 'root'
})
export class ForgotPasswordService {
  private apiUrl = `${environment.apiUrl}/api/forgotpassword`;

  constructor(private http: HttpClient) { }

  forgotPassword(forgotPassword: ForgotPassword): Observable<any> {
    return this.http.post(this.apiUrl, forgotPassword);
  }
}

