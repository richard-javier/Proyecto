// producto.component.ts
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Producto } from '../../models/Producto';
import { ProductoService } from '../../services/Producto.service';

@Component({
  selector: 'app-producto',
  templateUrl: './producto.component.html',
  styleUrls: ['./producto.component.css']
})
export class ProductoComponent implements OnInit {
  productos: Producto[] = [];
  productoForm: FormGroup;

  constructor(private productoService: ProductoService, private fb: FormBuilder) {
    this.productoForm = this.fb.group({
      productoId: [0],
      nombre: ['', Validators.required],
      descripcion: ['', Validators.required],
      cantidadEnStock: [0, Validators.required],
      precio: [0, Validators.required]
    });
  }

  ngOnInit(): void {
    this.obtenerProductos();
  }

  obtenerProductos(): void {
    this.productoService.obtenerProductos().subscribe(
      data => this.productos = data,
      error => console.error(error)
    );
  }

  guardarProducto(): void {
    const producto: Producto = this.productoForm.value;
    if (producto.productoId === 0) {
      this.productoService.crearProducto(producto).subscribe(
        data => {
          this.obtenerProductos();
          this.productoForm.reset();
        },
        error => console.error(error)
      );
    } else {
      this.productoService.actualizarProducto(producto).subscribe(
        data => {
          this.obtenerProductos();
          this.productoForm.reset();
        },
        error => console.error(error)
      );
    }
  }

  editarProducto(producto: Producto): void {
    this.productoForm.patchValue(producto);
  }

  eliminarProducto(productoId: number): void {
    this.productoService.eliminarProducto(productoId).subscribe(
      data => this.obtenerProductos(),
      error => console.error(error)
    );
  }
}
