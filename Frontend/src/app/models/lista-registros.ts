export class ListaRegistro {
  id: number;
  username: string;
  email: string;
  birthdate: string; // Ajuste aquí para alinear con el backend
  age: number;

  constructor(id: number, username: string, email: string, birthdate: string, age: number) {
    this.id = id;
    this.username = username;
    this.email = email;
    this.birthdate = birthdate;
    this.age = age;
  }
}
