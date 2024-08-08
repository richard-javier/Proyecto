import { Component, OnInit } from '@angular/core';
import { CompraService } from '../../services/Compra.service';
import { Compra, DetalleCompra } from '../../models/Compra';
import { Cliente } from '../../models/Cliente';

@Component({
  selector: 'app-compra',
  templateUrl: './compra.component.html',
  styleUrls: ['./compra.component.css']
})
export class CompraComponent implements OnInit {
  compras: Compra[] = [];
  compra: Compra = new Compra();
  isEdit: boolean = false;

  constructor(private compraService: CompraService) { }

  ngOnInit(): void {
    this.obtenerCompras();
  }

  obtenerCompras(): void {
    this.compraService.obtenerCompras().subscribe(
      (data: Compra[]) => this.compras = data,
      (error: any) => console.error(error)
    );
  }

  agregarCompra(): void {
    if (this.isEdit) {
      this.compraService.actualizarCompra(this.compra).subscribe(
        () => {
          this.obtenerCompras();
          this.compra = new Compra();
          this.isEdit = false;
        },
        (error: any) => console.error(error)
      );
    } else {
      this.compraService.crearCompra(this.compra).subscribe(
        () => {
          this.obtenerCompras();
          this.compra = new Compra();
        },
        (error: any) => console.error(error)
      );
    }
  }

  editarCompra(compra: Compra): void {
    this.compra = { ...compra };
    this.isEdit = true;
  }

  eliminarCompra(id: number): void {
    this.compraService.eliminarCompra(id).subscribe(
      () => this.obtenerCompras(),
      (error: any) => console.error(error)
    );
  }

  agregarDetalle(): void {
    this.compra.detallesCompra.push(new DetalleCompra());
  }

  eliminarDetalle(index: number): void {
    this.compra.detallesCompra.splice(index, 1);
  }

  cancelarEdicion(): void {
    this.compra = new Compra();
    this.isEdit = false;
  }
}
