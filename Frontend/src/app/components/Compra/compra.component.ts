import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Compra } from '../../models/Compra';
import { CompraService } from '../../services/Compra.service';

@Component({
  selector: 'app-compra',
  templateUrl: './compra.component.html',
  styleUrls: ['./compra.component.css']
})
export class CompraComponent implements OnInit {
  compras: Compra[] = [];
  compraForm: FormGroup;

  constructor(private compraService: CompraService, private fb: FormBuilder) {
    this.compraForm = this.fb.group({
      compraId: [0],
      fechaCompra: ['', Validators.required],
      clienteId: [0, Validators.required]
    });
  }

  ngOnInit(): void {
    this.obtenerCompras();
  }

  obtenerCompras(): void {
    this.compraService.obtenerCompras().subscribe(
      data => this.compras = data,
      error => console.error(error)
    );
  }

  guardarCompra(): void {
    const compra: Compra = this.compraForm.value;
    if (compra.compraId === 0) {
      this.compraService.crearCompra(compra).subscribe(
        data => {
          this.obtenerCompras();
          this.compraForm.reset();
        },
        error => console.error(error)
      );
    } else {
      this.compraService.actualizarCompra(compra).subscribe(
        data => {
          this.obtenerCompras();
          this.compraForm.reset();
        },
        error => console.error(error)
      );
    }
  }

  editarCompra(compra: Compra): void {
    this.compraForm.patchValue(compra);
  }

  eliminarCompra(compraId: number): void {
    this.compraService.eliminarCompra(compraId).subscribe(
      data => this.obtenerCompras(),
      error => console.error(error)
    );
  }
}
