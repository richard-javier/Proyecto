// clientes.component.ts
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Cliente } from '../../models/Cliente';
import { ClienteService } from '../../services/Cliente.service';

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.css']
})
export class ClientesComponent implements OnInit {
  clientes: Cliente[] = [];
  clienteForm: FormGroup;

  constructor(private clienteService: ClienteService, private fb: FormBuilder) {
    this.clienteForm = this.fb.group({
      clienteId: [0],
      nombre: ['', Validators.required],
      direccion: ['', Validators.required],
      telefono: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]]
    });
  }

  ngOnInit(): void {
    this.obtenerClientes();
  }

  obtenerClientes(): void {
    this.clienteService.obtenerClientes().subscribe(
      data => this.clientes = data,
      error => console.error(error)
    );
  }

  guardarCliente(): void {
    const cliente: Cliente = this.clienteForm.value;
    if (cliente.clienteId === 0) {
      this.clienteService.crearCliente(cliente).subscribe(
        data => {
          this.obtenerClientes();
          this.clienteForm.reset({ clienteId: 0 });
        },
        error => console.error(error)
      );
    } else {
      this.clienteService.actualizarCliente(cliente).subscribe(
        data => {
          this.obtenerClientes();
          this.clienteForm.reset({ clienteId: 0 });
        },
        error => console.error(error)
      );
    }
  }

  editarCliente(cliente: Cliente): void {
    this.clienteForm.patchValue(cliente);
  }

  eliminarCliente(clienteId: number): void {
    this.clienteService.eliminarCliente(clienteId).subscribe(
      data => this.obtenerClientes(),
      error => console.error(error)
    );
  }
}
