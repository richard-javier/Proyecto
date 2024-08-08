import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { DetalleVenta } from '../models/Venta';
import { environment } from '../../app/enviroments/enviroment';

@Injectable({
  providedIn: 'root'
})
export class DetalleVentaService {
  private myAppUrl: string = environment.apiUrl;
  private myApiUrl: string = 'api/detalleventas';

  constructor(private http: HttpClient) { }

  obtenerDetalleVentas(): Observable<DetalleVenta[]> {
    return this.http.get<DetalleVenta[]>(`${this.myAppUrl}/${this.myApiUrl}`).pipe(
      catchError(this.handleError)
    );
  }

  crearDetalleVenta(detalleVenta: DetalleVenta): Observable<DetalleVenta> {
    return this.http.post<DetalleVenta>(`${this.myAppUrl}/${this.myApiUrl}`, detalleVenta).pipe(
      catchError(this.handleError)
    );
  }

  actualizarDetalleVenta(detalleVenta: DetalleVenta): Observable<DetalleVenta> {
    return this.http.put<DetalleVenta>(`${this.myAppUrl}/${this.myApiUrl}/${detalleVenta.detalleVentaId}`, detalleVenta).pipe(
      catchError(this.handleError)
    );
  }

  eliminarDetalleVenta(detalleVentaId: number): Observable<void> {
    return this.http.delete<void>(`${this.myAppUrl}/${this.myApiUrl}/${detalleVentaId}`).pipe(
      catchError(this.handleError)
    );
  }

  private handleError(error: HttpErrorResponse) {
    console.error('An error occurred:', error);
    return throwError('Something bad happened; please try again later.');
  }
}
