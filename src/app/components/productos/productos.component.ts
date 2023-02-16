import { Component, OnInit } from '@angular/core';
//IMPORTACION SERVICIOS
import{DatosService} from '../../services/datos.service'

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css'],
  //AÑADIR SERVICIO EN EL DECORADOR
  providers:[DatosService],
})
export class ProductosComponent implements OnInit {
  arrayPerfiles:Array<any>=[];
  arrayTeams:Array<any>=[];
  
  constructor(public datos_Service:DatosService,) { 
  
  }

  ngOnInit(): void {
  this.getUser();
  this.getUsers();
  this.getTeams();
  }

  getUsers(){
    this.datos_Service.getUsers().subscribe(result=>{this.arrayPerfiles=result.data});
    console.log(this.arrayPerfiles)
  }

  getUser(){
    this.datos_Service.getUser().subscribe(result=>{this.arrayPerfiles.push(result.data)});
    console.log(this.arrayPerfiles)
  }

  getTeams(){
    this.datos_Service.getTeams().subscribe(result=>{
        this.arrayTeams=(result.teams);
    });
  }

  
}

