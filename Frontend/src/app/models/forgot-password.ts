export class ForgotPassword {
  id: number;
  email: string;
  username: string;
  birthdate: string; // Ajuste aquí para alinear con el backend

  constructor(id: number, email: string, username: string, birthdate: string) {
    this.id = id;
    this.email = email;
    this.username = username;
    this.birthdate = birthdate;
  }
}
