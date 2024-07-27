import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../enviroments/enviroment';
import { Producto } from '../models/inventario'


@Injectable({
    providedIn: 'root'
})
export class InventarioService {

    constructor(private http: HttpClient) { }

    getInventarios(): Observable<Producto[]> {
      return this.http.get<Producto[]>(`${environment.apiUrl}/inventarios`);
    }

  getInventario(id: number): Observable<Producto> {
    return this.http.get<Producto>(`${environment.apiUrl}/inventarios/${id}`);
    }

  createInventario(inventario: Producto): Observable<Producto> {
    return this.http.post<Producto>(`${environment.apiUrl}/inventarios`, inventario);
    }

  updateInventario(id: number, inventario: Producto): Observable<Producto> {
    return this.http.put<Producto>(`${environment.apiUrl}/inventarios/${id}`, inventario);
    }

    deleteInventario(id: number): Observable<void> {
        return this.http.delete<void>(`${environment.apiUrl}/inventarios/${id}`);
    }
}
