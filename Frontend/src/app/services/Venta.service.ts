import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Venta } from '../models/Venta';
import { environment } from '../../app/enviroments/enviroment';

@Injectable({
  providedIn: 'root'
})
export class VentaService {
  private myAppUrl: string = environment.apiUrl;
  private myApiUrl: string = 'api/venta';  // Asegúrate de que esta línea coincida con la ruta en tu controlador

  constructor(private http: HttpClient) { }

  obtenerVentas(): Observable<Venta[]> {
    return this.http.get<Venta[]>(`${this.myAppUrl}/${this.myApiUrl}`).pipe(
      catchError(this.handleError)
    );
  }

  crearVenta(venta: Venta): Observable<Venta> {
    return this.http.post<Venta>(`${this.myAppUrl}/${this.myApiUrl}`, venta).pipe(
      catchError(this.handleError)
    );
  }

  actualizarVenta(venta: Venta): Observable<Venta> {
    return this.http.put<Venta>(`${this.myAppUrl}/${this.myApiUrl}/${venta.ventaId}`, venta).pipe(
      catchError(this.handleError)
    );
  }

  eliminarVenta(ventaId: number): Observable<void> {
    return this.http.delete<void>(`${this.myAppUrl}/${this.myApiUrl}/${ventaId}`).pipe(
      catchError(this.handleError)
    );
  }

  private handleError(error: HttpErrorResponse) {
    console.error('An error occurred:', error);
    return throwError('Something bad happened; please try again later.');
  }
}
