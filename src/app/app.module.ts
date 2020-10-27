import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './router';
import { AppComponent } from './app.component';
import { HomeComponent } from './views/home/home.component';
import { CreacionProductoComponent } from './modules/creacion-producto/creacion-producto.component';
import { ReporteProductosComponent } from './modules/reporte-productos/reporte-productos.component';

import { AngularFireModule } from '@angular/fire';
import { environment } from '../environments/environment';
import { NavbarComponent } from './views/home/components/navbar/navbar.component';
import { SidebarComponent } from './views/home/components/sidebar/sidebar.component';
import { RouterModule } from '@angular/router';
import { CarritoComponent } from './modules/carrito/carrito.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { GestionProductoComponent } from './modules/gestion-producto/gestion-producto.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CreacionProductoComponent,
    ReporteProductosComponent,
    NavbarComponent,
    SidebarComponent,
    CarritoComponent,
    GestionProductoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
