export class Usuario {
  id?: number;
  username: string;
  email: string;
  password: string;
  birthdate: string; // Ajuste aquí para alinear con el backend
  age: number;

  constructor(
    id?: number,
    username: string = '',
    email: string = '',
    password: string = '',
    birthdate: string = '',
    age: number = 0
  ) {
    this.id = id;
    this.username = username;
    this.email = email;
    this.password = password;
    this.birthdate = birthdate;
    this.age = age;
  }
}
