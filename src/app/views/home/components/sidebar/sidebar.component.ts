import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  menuItems = [
    {
      ruta: '/home/creacionProducto',
      icon: 'shop_two',
      label: 'Crear producto'
    },
    {
      ruta: '/home/reporteProductos',
      icon: 'shop',
      label: 'Listado de productos'
    },
    {
      ruta: '/home/gestionProducto',
      icon: 'wysiwyg',
      label: 'Gestión de productos'
    },

  ];
  constructor() { }

  ngOnInit(): void {
  }

}
