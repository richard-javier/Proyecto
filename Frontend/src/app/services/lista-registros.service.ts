import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ListaRegistro } from '../models/lista-registros';
import { Observable } from 'rxjs';
import { environment } from '../../app/enviroments/enviroment';

@Injectable({
  providedIn: 'root'
})
export class ListaRegistrosService {
  private myAppUrl: string = environment.apiUrl;
  private myApiUrl: string = 'api/listaregistros/';

  constructor(private http: HttpClient) { }

  obtenerRegistros(): Observable<ListaRegistro[]> {
    return this.http.get<ListaRegistro[]>(`${this.myAppUrl}/${this.myApiUrl}`);
  }

  crearRegistro(registro: ListaRegistro): Observable<ListaRegistro> {
    return this.http.post<ListaRegistro>(`${this.myAppUrl}/${this.myApiUrl}`, registro);
  }

  actualizarRegistro(registro: ListaRegistro): Observable<ListaRegistro> {
    return this.http.put<ListaRegistro>(`${this.myAppUrl}/${this.myApiUrl}/${registro.id}`, registro);
  }

  eliminarRegistro(id: number): Observable<ListaRegistro> {
    return this.http.delete<ListaRegistro>(`${this.myAppUrl}/${this.myApiUrl}/${id}`);
  }
}
