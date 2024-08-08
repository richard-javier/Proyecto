import { Cliente } from './Cliente';

export class Compra {
  compraId: number;
  fechaCompra: Date;
  clienteId: number;
  cliente: Cliente;
  detallesCompra: DetalleCompra[];

  constructor(
    compraId: number = 0,
    fechaCompra: Date = new Date(),
    clienteId: number = 0,
    cliente: Cliente = new Cliente(),
    detallesCompra: DetalleCompra[] = []
  ) {
    this.compraId = compraId;
    this.fechaCompra = fechaCompra;
    this.clienteId = clienteId;
    this.cliente = cliente;
    this.detallesCompra = detallesCompra;
  }
}

export class DetalleCompra {
  detalleCompraId: number;
  compraId: number;
  productoId: number;
  cantidad: number;
  precioUnitario: number;

  constructor(
    detalleCompraId: number = 0,
    compraId: number = 0,
    productoId: number = 0,
    cantidad: number = 0,
    precioUnitario: number = 0
  ) {
    this.detalleCompraId = detalleCompraId;
    this.compraId = compraId;
    this.productoId = productoId;
    this.cantidad = cantidad;
    this.precioUnitario = precioUnitario;
  }
}
