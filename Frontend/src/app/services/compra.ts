import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Compra } from '../models/compra';
import { environment } from '../enviroments/enviroment';

@Injectable({
  providedIn: 'root'
})
export class CompraService {

  constructor(private http: HttpClient) { }

  getCompras(): Observable<Compra[]> {
    return this.http.get<Compra[]>(`${environment.apiUrl}/compras`);
  }

  getCompra(id: number): Observable<Compra> {
    return this.http.get<Compra>(`${environment.apiUrl}/compras/${id}`);
  }

  createCompra(compra: Compra): Observable<Compra> {
    return this.http.post<Compra>(`${environment.apiUrl}/compras`, compra);
  }

  updateCompra(id: number, compra: Compra): Observable<Compra> {
    return this.http.put<Compra>(`${environment.apiUrl}/compras/${id}`, compra);
  }

  deleteCompra(id: number): Observable<void> {
    return this.http.delete<void>(`${environment.apiUrl}/compras/${id}`);
  }
}
