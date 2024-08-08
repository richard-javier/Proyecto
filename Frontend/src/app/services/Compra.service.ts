import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Compra } from '../models/Compra';
import { environment } from '../../app/enviroments/enviroment';

@Injectable({
  providedIn: 'root'
})
export class CompraService {
  private myAppUrl: string = environment.apiUrl;
  private myApiUrl: string = 'api/compra';

  constructor(private http: HttpClient) { }

  obtenerCompras(): Observable<Compra[]> {
    return this.http.get<Compra[]>(`${this.myAppUrl}/${this.myApiUrl}`).pipe(
      catchError(this.handleError)
    );
  }

  crearCompra(compra: Compra): Observable<Compra> {
    return this.http.post<Compra>(`${this.myAppUrl}/${this.myApiUrl}`, compra).pipe(
      catchError(this.handleError)
    );
  }

  actualizarCompra(compra: Compra): Observable<Compra> {
    return this.http.put<Compra>(`${this.myAppUrl}/${this.myApiUrl}/${compra.compraId}`, compra).pipe(
      catchError(this.handleError)
    );
  }

  eliminarCompra(compraId: number): Observable<void> {
    return this.http.delete<void>(`${this.myAppUrl}/${this.myApiUrl}/${compraId}`).pipe(
      catchError(this.handleError)
    );
  }

  private handleError(error: HttpErrorResponse) {
    console.error('An error occurred:', error);
    return throwError('Something bad happened; please try again later.');
  }
}
