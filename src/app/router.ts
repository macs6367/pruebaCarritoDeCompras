import { GestionProductoComponent } from './modules/gestion-producto/gestion-producto.component';
import { CarritoComponent } from './modules/carrito/carrito.component';
import { ReporteProductosComponent } from './modules/reporte-productos/reporte-productos.component';
import { CreacionProductoComponent } from './modules/creacion-producto/creacion-producto.component';
import { HomeComponent } from './views/home/home.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router'; // CLI imports router

const routes: Routes = [
  { path: '',   redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent, children: [
    { path: 'creacionProducto', component: CreacionProductoComponent  },
    { path: 'reporteProductos', component: ReporteProductosComponent  },
    { path: 'carrito', component: CarritoComponent  },
    { path: 'gestionProducto', component: GestionProductoComponent  }

  ] },
]; // sets up routes constant where you define your routes

// configures NgModule imports and exports
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
