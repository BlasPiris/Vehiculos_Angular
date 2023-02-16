
//MODULOS ROUTER ANGULAR
import {ModuleWithProviders} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

//IMPORTAR COMPONENTES
import{HomeComponent} from '../app/components/home/home.component';
import{ContactoComponent} from '../app/components/contacto/contacto.component';
import{ProductosComponent} from '../app/components/productos/productos.component';
import{ServiciosComponent} from '../app/components/servicios/servicios.component';
import{QuienesSomosComponent} from '../app/components/quienes-somos/quienes-somos.component';


//ARRAY RUTAS A LOS COMPONENTES

const appRoutes:Routes = [
    {path:"",component:HomeComponent},
    {path:"contacto",component:ContactoComponent},
    {path:"productos",component:ProductosComponent},
    {path:"servicios",component:ServiciosComponent},
    {path:"quienes_somos",component:QuienesSomosComponent},
    {path:"**",component:HomeComponent},

]

//EXPORTAMOS EL SERVICIO

export const appRoutingProviders: any[] = []; 
export const routing:ModuleWithProviders<any> = RouterModule.forRoot(appRoutes);