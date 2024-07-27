import { Cliente } from "./cliente";
import { Producto } from "./inventario";

export class Venta {
  id: number | undefined;
  fecha: Date | undefined;
  cliente: Cliente | undefined;
  productos: Producto[] | undefined;
  total: number | undefined;
  formaDePago: string | undefined;
}
