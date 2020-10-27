import { ProductoService } from './../../services/producto.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';


@Component({
  selector: 'app-creacion-producto',
  templateUrl: './creacion-producto.component.html',
  styleUrls: ['./creacion-producto.component.css'],
})
export class CreacionProductoComponent implements OnInit {
  productForm: FormGroup;
  users = [];

  constructor(
    private productoservice: ProductoService,
    private fb: FormBuilder,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.createForm();
  }

  createForm(): void {
    this.productForm = this.fb.group({
      nombre: ['', [Validators.required]],
      categoria: ['', [Validators.required]],
      precio: ['', [Validators.required]],
      descripcion: ['', [Validators.required]],
      stock: ['', [Validators.required]],
      estado: ['', [Validators.required]],
      sku: ['', [Validators.required]],
    });
  }

  addProduct(): any {

    const product = this.productForm.value;
    product.estado = (product.estado === 'true');
    product.stock = Number(product.stock);
    this.productoservice
      .addProducto(product)
      .then((resp) => {
        Swal.fire({
          icon: 'success',
          title: 'Éxito',
          text: 'Se creó el producto',
          timer: 3000
        });

        this.productForm.reset();

        setTimeout(() => {
          this.router.navigate(['home/reporteProductos']);
        }, 500);
      })
      .catch((error) => {
        Swal.fire({
          icon: 'error',
          title: 'Error',
          text: 'No se creó el producto',
          timer: 3000
        });
        console.log(error);
      });
  }
}
