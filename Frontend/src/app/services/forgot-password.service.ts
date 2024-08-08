import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ForgotPassword } from '../models/forgot-password';
import { Observable } from 'rxjs';
import { environment } from '../../app/enviroments/enviroment';
@Injectable({
  providedIn: 'root'
})
export class ForgotPasswordService {
  private myAppUrl: string = environment.apiUrl;
  private myApiUrl: string = 'api/forgotpassword/';

  constructor(private http: HttpClient) { }

  forgotPassword(forgotPassword: ForgotPassword): Observable<ForgotPassword> {
    return this.http.post<ForgotPassword>(`${this.myAppUrl}/${this.myApiUrl}`, forgotPassword);
  }
}
