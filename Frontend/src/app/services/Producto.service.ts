import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Producto } from '../models/Producto';
import { environment } from '../../app/enviroments/enviroment';

@Injectable({
  providedIn: 'root'
})
export class ProductoService {
  private myAppUrl: string = environment.apiUrl;
  private myApiUrl: string = 'api/inventario';

  constructor(private http: HttpClient) { }

  // Obtener todos los productos
  obtenerProductos(): Observable<Producto[]> {
    return this.http.get<Producto[]>(`${this.myAppUrl}/${this.myApiUrl}`).pipe(
      catchError(this.handleError)
    );
  }

  // Obtener un producto por ID
  obtenerProductoPorId(id: number): Observable<Producto> {
    return this.http.get<Producto>(`${this.myAppUrl}/${this.myApiUrl}/${id}`).pipe(
      catchError(this.handleError)
    );
  }

  // Crear un nuevo producto
  crearProducto(producto: Producto): Observable<Producto> {
    return this.http.post<Producto>(`${this.myAppUrl}/${this.myApiUrl}`, producto).pipe(
      catchError(this.handleError)
    );
  }

  // Actualizar un producto existente
  actualizarProducto(producto: Producto): Observable<Producto> {
    return this.http.put<Producto>(`${this.myAppUrl}/${this.myApiUrl}/${producto.productoId}`, producto).pipe(
      catchError(this.handleError)
    );
  }

  // Eliminar un producto
  eliminarProducto(productoId: number): Observable<void> {
    return this.http.delete<void>(`${this.myAppUrl}/${this.myApiUrl}/${productoId}`).pipe(
      catchError(this.handleError)
    );
  }

  // Manejo de errores
  private handleError(error: HttpErrorResponse) {
    console.error('An error occurred:', error);
    return throwError('Something bad happened; please try again later.');
  }
}
