import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { environment } from '../../app/enviroments/enviroment';
import { Login } from '../models/login';
import { Register } from '../models/register';
import { ForgotPassword } from '../models/forgot-password';
import { ListaRegistro } from '../models/lista-registros';
import { Cliente } from '../models/Cliente';
import { Compra } from '../models/Compra';
import { Producto } from '../models/Producto';
import { Venta } from '../models/Venta';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private myAppUrl: string = environment.apiUrl;
  private myApiUrl: string = 'api/';

  constructor(private http: HttpClient) { }

  // Manejo de errores
  private handleError(error: any) {
    console.error('An error occurred:', error);
    return throwError('Something bad happened; please try again later.');
  }

  // Login
  login(login: Login): Observable<Login> {
    return this.http.post<Login>(`${this.myAppUrl}/${this.myApiUrl}login`, login)
      .pipe(catchError(this.handleError));
  }

  // Register
  register(register: Register): Observable<Register> {
    return this.http.post<Register>(`${this.myAppUrl}/${this.myApiUrl}register`, register)
      .pipe(catchError(this.handleError));
  }

  // Forgot Password
  resetPassword(email: string): Observable<string> {
    return this.http.post<string>(`${this.myAppUrl}/${this.myApiUrl}forgotpassword`, { email })
      .pipe(catchError(this.handleError));
  }

  forgotPassword(forgotPassword: ForgotPassword): Observable<ForgotPassword> {
    return this.http.post<ForgotPassword>(`${this.myAppUrl}/${this.myApiUrl}forgotpassword`, forgotPassword)
      .pipe(catchError(this.handleError));
  }

  // Usuarios
  obtenerUsuarios(): Observable<ListaRegistro[]> {
    return this.http.get<ListaRegistro[]>(`${this.myAppUrl}/${this.myApiUrl}register`)
      .pipe(catchError(this.handleError));
  }

  actualizarUsuario(usuario: ListaRegistro): Observable<ListaRegistro> {
    return this.http.put<ListaRegistro>(`${this.myAppUrl}/${this.myApiUrl}register/${usuario.id}`, usuario)
      .pipe(catchError(this.handleError));
  }

  crearUsuario(usuario: ListaRegistro): Observable<ListaRegistro> {
    return this.http.post<ListaRegistro>(`${this.myAppUrl}/${this.myApiUrl}register`, usuario)
      .pipe(catchError(this.handleError));
  }

  eliminarUsuario(id: number): Observable<number> {
    return this.http.delete<number>(`${this.myAppUrl}/${this.myApiUrl}register/${id}`)
      .pipe(catchError(this.handleError));
  }

  // Cliente
  obtenerClientes(): Observable<Cliente[]> {
    return this.http.get<Cliente[]>(`${this.myAppUrl}/${this.myApiUrl}cliente`)
      .pipe(catchError(this.handleError));
  }

  obtenerClientePorId(id: number): Observable<Cliente> {
    return this.http.get<Cliente>(`${this.myAppUrl}/${this.myApiUrl}cliente/${id}`)
      .pipe(catchError(this.handleError));
  }

  crearCliente(cliente: Cliente): Observable<Cliente> {
    return this.http.post<Cliente>(`${this.myAppUrl}/${this.myApiUrl}cliente`, cliente)
      .pipe(catchError(this.handleError));
  }

  actualizarCliente(cliente: Cliente): Observable<Cliente> {
    return this.http.put<Cliente>(`${this.myAppUrl}/${this.myApiUrl}cliente/${cliente.clienteId}`, cliente)
      .pipe(catchError(this.handleError));
  }

  eliminarCliente(id: number): Observable<number> {
    return this.http.delete<number>(`${this.myAppUrl}/${this.myApiUrl}cliente/${id}`)
      .pipe(catchError(this.handleError));
  }

  // Compra
  obtenerCompras(): Observable<Compra[]> {
    return this.http.get<Compra[]>(`${this.myAppUrl}/${this.myApiUrl}compra`)
      .pipe(catchError(this.handleError));
  }

  obtenerCompraPorId(id: number): Observable<Compra> {
    return this.http.get<Compra>(`${this.myAppUrl}/${this.myApiUrl}compra/${id}`)
      .pipe(catchError(this.handleError));
  }

  crearCompra(compra: Compra): Observable<Compra> {
    return this.http.post<Compra>(`${this.myAppUrl}/${this.myApiUrl}compra`, compra)
      .pipe(catchError(this.handleError));
  }

  actualizarCompra(compra: Compra): Observable<Compra> {
    return this.http.put<Compra>(`${this.myAppUrl}/${this.myApiUrl}compra/${compra.compraId}`, compra)
      .pipe(catchError(this.handleError));
  }

  eliminarCompra(id: number): Observable<number> {
    return this.http.delete<number>(`${this.myAppUrl}/${this.myApiUrl}compra/${id}`)
      .pipe(catchError(this.handleError));
  }

  // Producto
  obtenerProductos(): Observable<Producto[]> {
    return this.http.get<Producto[]>(`${this.myAppUrl}/${this.myApiUrl}producto`)
      .pipe(catchError(this.handleError));
  }

  obtenerProductoPorId(id: number): Observable<Producto> {
    return this.http.get<Producto>(`${this.myAppUrl}/${this.myApiUrl}producto/${id}`)
      .pipe(catchError(this.handleError));
  }

  crearProducto(producto: Producto): Observable<Producto> {
    return this.http.post<Producto>(`${this.myAppUrl}/${this.myApiUrl}producto`, producto)
      .pipe(catchError(this.handleError));
  }

  actualizarProducto(producto: Producto): Observable<Producto> {
    return this.http.put<Producto>(`${this.myAppUrl}/${this.myApiUrl}producto/${producto.productoId}`, producto)
      .pipe(catchError(this.handleError));
  }

  eliminarProducto(id: number): Observable<number> {
    return this.http.delete<number>(`${this.myAppUrl}/${this.myApiUrl}producto/${id}`)
      .pipe(catchError(this.handleError));
  }

  // Venta
  obtenerVentas(): Observable<Venta[]> {
    return this.http.get<Venta[]>(`${this.myAppUrl}/${this.myApiUrl}venta`)
      .pipe(catchError(this.handleError));
  }

  obtenerVentaPorId(id: number): Observable<Venta> {
    return this.http.get<Venta>(`${this.myAppUrl}/${this.myApiUrl}venta/${id}`)
      .pipe(catchError(this.handleError));
  }

  crearVenta(venta: Venta): Observable<Venta> {
    return this.http.post<Venta>(`${this.myAppUrl}/${this.myApiUrl}venta`, venta)
      .pipe(catchError(this.handleError));
  }

  actualizarVenta(venta: Venta): Observable<Venta> {
    return this.http.put<Venta>(`${this.myAppUrl}/${this.myApiUrl}venta/${venta.ventaId}`, venta)
      .pipe(catchError(this.handleError));
  }

  eliminarVenta(id: number): Observable<number> {
    return this.http.delete<number>(`${this.myAppUrl}/${this.myApiUrl}venta/${id}`)
      .pipe(catchError(this.handleError));
  }
}
