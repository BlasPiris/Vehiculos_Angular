import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
//FORMULARIOS
import {FormsModule} from '@angular/forms';
//ROUTING
import {appRoutingProviders, routing} from './app.routing'
//SERVICIOS
import {HttpClientModule} from '@angular/common/http';

//COMPONENTES
import { AppComponent } from './app.component';
import { VehiculosComponent } from './components/vehiculos/vehiculos.component';
import { HomeComponent } from './components/home/home.component';
import { ProductosComponent } from './components/productos/productos.component';
import { ContactoComponent } from './components/contacto/contacto.component';
import { ServiciosComponent } from './components/servicios/servicios.component';
import { QuienesSomosComponent } from './components/quienes-somos/quienes-somos.component';

@NgModule({
  declarations: [
    AppComponent,
    VehiculosComponent,
    HomeComponent,
    ProductosComponent,
    ContactoComponent,
    ServiciosComponent,
    QuienesSomosComponent,
   
  ],
  imports: [
    BrowserModule,
    FormsModule,
    routing,
    HttpClientModule,
  ],
  providers: [appRoutingProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
