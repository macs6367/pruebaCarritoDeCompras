import { Component, OnInit } from '@angular/core';
import { ProductoService } from './../../services/producto.service';

@Component({
  selector: 'app-reporte-productos',
  templateUrl: './reporte-productos.component.html',
  styleUrls: ['./reporte-productos.component.css'],
})
export class ReporteProductosComponent implements OnInit {
  products = [];
  cart;

  constructor(private productoservice: ProductoService) {}

  ngOnInit(): void {
    this.productoservice.getProductos().subscribe((products) => {
      this.products = products.map((product) => {
        return {
          ...product,
          cantidad: 1,
        };
      });
    });
  }

  incrementar(i): any {
    this.products[i].cantidad = this.products[i].cantidad + 1;
  }

  decrementar(i): any {
    if (this.products[i].cantidad === 1) {
      this.products[i].cantidad = 1;
    } else {
      this.products[i].cantidad = this.products[i].cantidad - 1;
    }
  }

  addCart(producto): void {
    if (!this.cart) {
      this.productoservice
        .addCarrito()
        .then((resp: any) => {
          this.cart = resp.f_.path.segments[1];
          this.addProductCart(producto);
        })
        .catch((error) => {
          console.log(error);
        });
    }
    if (this.cart) {
      this.addProductCart(producto);
    }
  }

  addProductCart(producto): void {
    const indexCarrito = this.productoservice.productoCarrito.findIndex(
      (element) => element.id === producto.id
    );

    if (indexCarrito >= 0) {
      this.productoservice.productoCarrito[indexCarrito].cantidad =
        producto.cantidad +
        this.productoservice.productoCarrito[indexCarrito].cantidad;
    } else {
      this.productoservice.productoCarrito.push({
        ...producto,
        id_producto: producto.id,
        id_carrito: this.cart,
        cantidad: producto.cantidad,
      });
    }
    localStorage.setItem(
      'objCarrito',
      JSON.stringify(this.productoservice.productoCarrito)
    );
    this.productoservice.observaLength(
      this.productoservice.productoCarrito.length
    );
  }
}
