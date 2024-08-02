import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ListaRegistro } from '../models/lista-registros';
import { Observable } from 'rxjs';
import { environment } from '../../app/enviroments/enviroment';

@Injectable({
  providedIn: 'root'
})
export class ListaRegistrosService {
  private apiUrl = `${environment.apiUrl}/api/listaregistros`;

  constructor(private http: HttpClient) { }

  obtenerRegistros(): Observable<ListaRegistro[]> {
    return this.http.get<ListaRegistro[]>(this.apiUrl);
  }

  crearRegistro(registro: ListaRegistro): Observable<any> {
    return this.http.post(this.apiUrl, registro);
  }

  actualizarRegistro(registro: ListaRegistro): Observable<any> {
    return this.http.put(`${this.apiUrl}/${registro.id}`, registro);
  }

  eliminarRegistro(id: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }
}
