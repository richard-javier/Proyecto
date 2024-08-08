export class Producto {
  productoId: number;
  nombre: string;
  descripcion: string;
  cantidadEnStock: number;
  precio: number;

  constructor(
    productoId: number = 0,
    nombre: string = '',
    descripcion: string = '',
    cantidadEnStock: number = 0,
    precio: number = 0
  ) {
    this.productoId = productoId;
    this.nombre = nombre;
    this.descripcion = descripcion;
    this.cantidadEnStock = cantidadEnStock;
    this.precio = precio;
  }
}
