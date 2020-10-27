import { ProductoService } from './../../../../services/producto.service';
import { Component, OnChanges, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  cantidadCarrito = 0;
  constructor(private productSrv: ProductoService) {}

  ngOnInit(): void {
    this.cantidadCarrito = this.productSrv.productoCarrito.length;
    this.productSrv.lengthCarrito$.subscribe((resp) => {
      this.cantidadCarrito = resp;
    });
  }
}
