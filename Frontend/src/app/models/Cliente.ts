export class Cliente {
  clienteId: number;
  nombre: string;
  direccion: string;
  telefono: string;
  email: string;

  constructor(
    clienteId: number = 0,
    nombre: string = '',
    direccion: string = '',
    telefono: string = '',
    email: string = ''
  ) {
    this.clienteId = clienteId;
    this.nombre = nombre;
    this.direccion = direccion;
    this.telefono = telefono;
    this.email = email;
  }
}
