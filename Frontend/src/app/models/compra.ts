import { Cliente } from "./cliente";
import { Producto } from "./inventario";

export class Compra {
  id: number | undefined;
  fecha: Date | undefined;
  cliente: Cliente | undefined;
  productos: Producto[] | undefined;
  total: number | undefined;
}
