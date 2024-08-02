export class Login {
  id?: number; // Opcional si no es necesario para el login
  username: string;
  password: string;
  email: string;

  constructor(id?: number, username: string = '', password: string = '', email: string = '') {
    this.id = id;
    this.username = username;
    this.password = password;
    this.email = email;
  }
}
