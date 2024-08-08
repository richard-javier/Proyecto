import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { ListaRegistro } from '../../models/lista-registros';

@Component({
  selector: 'app-lista-registro',
  templateUrl: './lista-registro.component.html',
  styleUrls: ['./lista-registro.component.css']
})
export class ListaRegistroComponent implements OnInit {
  usuarios: ListaRegistro[] = [];

  constructor(private authService: AuthService) { }

  ngOnInit() {
    this.obtenerUsuarios();
  }

  obtenerUsuarios() {
    this.authService.obtenerUsuarios().subscribe(
      (data: ListaRegistro[]) => {
        this.usuarios = data;
      },
      error => {
        console.error('Error fetching users', error);
      }
    );
  }

  eliminarUsuario(id: number) {
    this.authService.eliminarUsuario(id).subscribe(
      () => {
        this.usuarios = this.usuarios.filter(user => user.id !== id);
      },
      error => {
        console.error('Error deleting user', error);
      }
    );
  }
}
