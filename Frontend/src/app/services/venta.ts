import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Venta } from '../models/venta';
import { environment } from '../enviroments/enviroment';

@Injectable({
  providedIn: 'root'
})
export class VentaService {

  constructor(private http: HttpClient) { }

  getVentas(): Observable<Venta[]> {
    return this.http.get<Venta[]>(`${environment.apiUrl}/ventas`);
  }

  getVenta(id: number): Observable<Venta> {
    return this.http.get<Venta>(`${environment.apiUrl}/ventas/${id}`);
  }

  createVenta(venta: Venta): Observable<Venta> {
    return this.http.post<Venta>(`${environment.apiUrl}/ventas`, venta);
  }

  updateVenta(id: number, venta: Venta): Observable<Venta> {
    return this.http.put<Venta>(`${environment.apiUrl}/ventas/${id}`, venta);
  }

  deleteVenta(id: number): Observable<void> {
    return this.http.delete<void>(`${environment.apiUrl}/ventas/${id}`);
  }
}
