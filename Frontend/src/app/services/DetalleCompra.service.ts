import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { DetalleCompra } from '../models/Compra';
import { environment } from '../../app/enviroments/enviroment';

@Injectable({
  providedIn: 'root'
})
export class DetalleCompraService {
  private myAppUrl: string = environment.apiUrl;
  private myApiUrl: string = 'api/detallecompras';

  constructor(private http: HttpClient) { }

  obtenerDetalleCompras(): Observable<DetalleCompra[]> {
    return this.http.get<DetalleCompra[]>(`${this.myAppUrl}/${this.myApiUrl}`).pipe(
      catchError(this.handleError)
    );
  }

  crearDetalleCompra(detalleCompra: DetalleCompra): Observable<DetalleCompra> {
    return this.http.post<DetalleCompra>(`${this.myAppUrl}/${this.myApiUrl}`, detalleCompra).pipe(
      catchError(this.handleError)
    );
  }

  actualizarDetalleCompra(detalleCompra: DetalleCompra): Observable<DetalleCompra> {
    return this.http.put<DetalleCompra>(`${this.myAppUrl}/${this.myApiUrl}/${detalleCompra.detalleCompraId}`, detalleCompra).pipe(
      catchError(this.handleError)
    );
  }

  eliminarDetalleCompra(detalleCompraId: number): Observable<void> {
    return this.http.delete<void>(`${this.myAppUrl}/${this.myApiUrl}/${detalleCompraId}`).pipe(
      catchError(this.handleError)
    );
  }

  private handleError(error: HttpErrorResponse) {
    console.error('An error occurred:', error);
    return throwError('Something bad happened; please try again later.');
  }
}
