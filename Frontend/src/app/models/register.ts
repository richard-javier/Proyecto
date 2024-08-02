export class Register {
  id?: number; // Opcional si no es necesario para el registro
  username: string;
  password: string;
  email: string; // Asegúrate de incluir este campo
  birthdate: string; // Usa el formato adecuado para la fecha
  age: number;

  constructor(
    id?: number,
    username: string = '',
    password: string = '',
    email: string = '',
    birthdate: string = '',
    age: number = 0
  ) {
    this.id = id;
    this.username = username;
    this.password = password;
    this.email = email;
    this.birthdate = birthdate;
    this.age = age;
  }
}
