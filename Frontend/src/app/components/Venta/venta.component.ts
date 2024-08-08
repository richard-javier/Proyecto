import { Component, OnInit } from '@angular/core';
import { VentaService } from '../../services/Venta.service';
import { Venta, DetalleVenta } from '../../models/Venta';
import { Cliente } from '../../models/Cliente';

@Component({
  selector: 'app-venta',
  templateUrl: './venta.component.html',
  styleUrls: ['./venta.component.css']
})
export class VentaComponent implements OnInit {
  ventas: Venta[] = [];
  venta: Venta = new Venta();
  isEdit: boolean = false;

  constructor(private ventaService: VentaService) { }

  ngOnInit(): void {
    this.obtenerVentas();
  }

  obtenerVentas(): void {
    this.ventaService.obtenerVentas().subscribe(
      (data: Venta[]) => this.ventas = data,
      (error: any) => console.error(error)
    );
  }

  agregarVenta(): void {
    if (this.isEdit) {
      this.ventaService.actualizarVenta(this.venta).subscribe(
        () => {
          this.obtenerVentas();
          this.venta = new Venta();
          this.isEdit = false;
        },
        (error: any) => console.error(error)
      );
    } else {
      this.ventaService.crearVenta(this.venta).subscribe(
        () => {
          this.obtenerVentas();
          this.venta = new Venta();
        },
        (error: any) => console.error(error)
      );
    }
  }

  editarVenta(venta: Venta): void {
    this.venta = { ...venta };
    this.isEdit = true;
  }

  eliminarVenta(id: number): void {
    this.ventaService.eliminarVenta(id).subscribe(
      () => this.obtenerVentas(),
      (error: any) => console.error(error)
    );
  }

  agregarDetalle(): void {
    this.venta.detallesVenta.push(new DetalleVenta());
  }

  eliminarDetalle(index: number): void {
    this.venta.detallesVenta.splice(index, 1);
  }

  cancelarEdicion(): void {
    this.venta = new Venta();
    this.isEdit = false;
  }
}
