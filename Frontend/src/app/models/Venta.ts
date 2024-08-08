import { Cliente } from './Cliente';

export class Venta {
  ventaId: number;
  fechaVenta: Date;
  clienteId: number;
  cliente: Cliente;
  detallesVenta: DetalleVenta[];

  constructor(
    ventaId: number = 0,
    fechaVenta: Date = new Date(),
    clienteId: number = 0,
    cliente: Cliente = new Cliente(),
    detallesVenta: DetalleVenta[] = []
  ) {
    this.ventaId = ventaId;
    this.fechaVenta = fechaVenta;
    this.clienteId = clienteId;
    this.cliente = cliente;
    this.detallesVenta = detallesVenta;
  }
}

export class DetalleVenta {
  detalleVentaId: number;
  ventaId: number;
  productoId: number;
  cantidad: number;
  precioUnitario: number;

  constructor(
    detalleVentaId: number = 0,
    ventaId: number = 0,
    productoId: number = 0,
    cantidad: number = 0,
    precioUnitario: number = 0
  ) {
    this.detalleVentaId = detalleVentaId;
    this.ventaId = ventaId;
    this.productoId = productoId;
    this.cantidad = cantidad;
    this.precioUnitario = precioUnitario;
  }
}
