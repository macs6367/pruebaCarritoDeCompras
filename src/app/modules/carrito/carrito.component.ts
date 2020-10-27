import { ProductoService } from './../../services/producto.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-carrito',
  templateUrl: './carrito.component.html',
  styleUrls: ['./carrito.component.css'],
})
export class CarritoComponent implements OnInit {
  productosCarrito = [];
  constructor(private productoSrv: ProductoService) {}

  ngOnInit(): void {
    this.productosCarrito = this.productoSrv.productoCarrito;
  }

  incrementar(i): any {
    this.productosCarrito[i].cantidad = this.productosCarrito[i].cantidad + 1;
  }

  decrementar(i): any {
    if (this.productosCarrito[i].cantidad === 1) {
      this.productosCarrito[i].cantidad = 1;
    } else {
      this.productosCarrito[i].cantidad = this.productosCarrito[i].cantidad - 1;
    }
  }
  deleteProductCart(posicion: number): void {
    this.productosCarrito = this.productosCarrito.filter((e, index) => {
      return index !== posicion && e;
    });

    localStorage.setItem('objCarrito', JSON.stringify(this.productosCarrito));

    console.log(this.productosCarrito.length);
    this.productoSrv.observaLength(this.productosCarrito.length);
  }
}
