import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Register } from '../models/register';
import { environment } from '../../app/enviroments/enviroment';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {
  private myAppUrl: string = environment.apiUrl;
  private myApiUrl: string = 'api/register';

  constructor(private http: HttpClient) { }

  registerUser(register: Register): Observable<any> {
    return this.http.post<any>(`${this.myAppUrl}/${this.myApiUrl}`, register).pipe(
      catchError(this.handleError)
    );
  }

  private handleError(error: HttpErrorResponse) {
    console.error('An error occurred:', error);
    return throwError('Something bad happened; please try again later.');
  }
}
