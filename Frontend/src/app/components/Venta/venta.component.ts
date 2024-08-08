import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Venta } from '../../models/Venta';
import { VentaService } from '../../services/Venta.service';

@Component({
  selector: 'app-venta',
  templateUrl: './venta.component.html',
  styleUrls: ['./venta.component.css']
})
export class VentaComponent implements OnInit {
  ventas: Venta[] = [];
  ventaForm: FormGroup;

  constructor(private ventaService: VentaService, private fb: FormBuilder) {
    this.ventaForm = this.fb.group({
      ventaId: [0],
      fechaVenta: ['', Validators.required],
      // clienteId field removed
    });
  }

  ngOnInit(): void {
    this.obtenerVentas();
  }

  obtenerVentas(): void {
    this.ventaService.obtenerVentas().subscribe(
      data => this.ventas = data,
      error => console.error(error)
    );
  }

  guardarVenta(): void {
    const venta: Venta = this.ventaForm.value;
    if (venta.ventaId === 0) {
      this.ventaService.crearVenta(venta).subscribe(
        data => {
          this.obtenerVentas();
          this.ventaForm.reset();
        },
        error => console.error(error)
      );
    } else {
      this.ventaService.actualizarVenta(venta).subscribe(
        data => {
          this.obtenerVentas();
          this.ventaForm.reset();
        },
        error => console.error(error)
      );
    }
  }

  editarVenta(venta: Venta): void {
    this.ventaForm.patchValue(venta);
  }

  eliminarVenta(ventaId: number): void {
    this.ventaService.eliminarVenta(ventaId).subscribe(
      data => this.obtenerVentas(),
      error => console.error(error)
    );
  }
}
