import { Component } from '@angular/core';
import { RegisterService } from '../../services/register.service';
import { Register } from '../../models/register';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  // Propiedad para enlazar los datos del formulario
  registerData: Register = new Register();

  constructor(private registerService: RegisterService, private router: Router) { }

  // Método para manejar el envío del formulario
  onRegister(): void {
    this.registerService.registerUser(this.registerData).subscribe(
      response => {
        console.log('Registro exitoso', response);
        this.router.navigate(['/lista-registro']); // Redirige al usuario a la página de lista de registros
      },
      error => {
        console.error('Error al registrar el usuario', error);
      }
    );
  }
}
