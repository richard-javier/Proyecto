import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Cliente } from '../models/Cliente';
import { environment } from '../../app/enviroments/enviroment';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {
  private myAppUrl: string = environment.apiUrl;
  private myApiUrl: string = 'api/cliente';

  constructor(private http: HttpClient) { }

  obtenerClientes(): Observable<Cliente[]> {
    return this.http.get<Cliente[]>(`${this.myAppUrl}/${this.myApiUrl}`).pipe(
      catchError(this.handleError)
    );
  }

  obtenerClientePorId(clienteId: number): Observable<Cliente> {
    return this.http.get<Cliente>(`${this.myAppUrl}/${this.myApiUrl}/${clienteId}`).pipe(
      catchError(this.handleError)
    );
  }

  crearCliente(cliente: Cliente): Observable<any> {
    return this.http.post<any>(`${this.myAppUrl}/${this.myApiUrl}`, cliente).pipe(
      catchError(this.handleError)
    );
  }

  actualizarCliente(cliente: Cliente): Observable<any> {
    return this.http.put<any>(`${this.myAppUrl}/${this.myApiUrl}/${cliente.clienteId}`, cliente).pipe(
      catchError(this.handleError)
    );
  }

  eliminarCliente(clienteId: number): Observable<any> {
    return this.http.delete<any>(`${this.myAppUrl}/${this.myApiUrl}/${clienteId}`).pipe(
      catchError(this.handleError)
    );
  }

  private handleError(error: HttpErrorResponse) {
    console.error('An error occurred:', error);
    return throwError('Something bad happened; please try again later.');
  }
}
