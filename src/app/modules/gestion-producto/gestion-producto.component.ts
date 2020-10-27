import { ProductoService } from './../../services/producto.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-gestion-producto',
  templateUrl: './gestion-producto.component.html',
  styleUrls: ['./gestion-producto.component.css'],
})
export class GestionProductoComponent implements OnInit {
  products = [];
  currentProductForm: FormGroup;

  constructor(
    private productoService: ProductoService,
    private fb: FormBuilder
  ) {}

  createForm(): void {
    this.currentProductForm = this.fb.group({
      id: [''],
      categoria: ['', [Validators.required]],
      descripcion: ['', [Validators.required]],
      estado: ['', [Validators.required]],
      nombre: ['', [Validators.required]],
      precio: ['', [Validators.required]],
      sku: ['', [Validators.required]],
      stock: ['', [Validators.required]],
      cantidad: [''],
    });
  }

  setModalProduct(producto: any): void {
    console.log(producto);
    this.currentProductForm.setValue(producto);
  }

  ngOnInit(): void {
    this.createForm();

    this.productoService.getAllProductos().subscribe((products) => {
      this.products = products.map((product) => {
        return {
          ...product,
          cantidad: 1,
        };
      });
    });
  }

  deleteProduct(id: any): void {
    Swal.fire({
      title: '¿Está seguro de eliminar el producto?',
      text: 'Esta acción no se puede revertir.',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Si, eliminar',
      cancelButtonText: 'Cancelar',
    }).then((result) => {
      if (result.isConfirmed) {
        this.productoService
          .deleteProduct(id)
          .then((resp) => {
            Swal.fire({
              icon: 'success',
              title: 'Éxito',
              text: 'Se borró el producto',
              timer: 3000,
            });
          })
          .catch((error) => {
            Swal.fire({
              icon: 'error',
              title: 'Error',
              text: 'No se borró el producto',
              timer: 3000,
            });
            console.log(error);
          });
      }
    });
  }

  updateProduct(): void {
    this.productoService
      .updateProduct(this.currentProductForm.value)
      .then(() => {
        Swal.fire({
          icon: 'success',
          title: 'Éxito',
          text: 'Se actualizó el producto',
          timer: 3000,
        });
      })
      .catch(() => {
        Swal.fire({
          icon: 'error',
          title: 'Error',
          text: 'No se actualizó el producto',
          timer: 3000,
        });
      });

    document.getElementById('closeModal').click();
  }
}
