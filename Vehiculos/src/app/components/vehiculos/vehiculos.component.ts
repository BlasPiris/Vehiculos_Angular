import { Component, OnInit } from '@angular/core';
import { Vehiculo } from '../../models/vehiculo';

@Component({
  selector: 'app-vehiculos',
  templateUrl: './vehiculos.component.html',
  styleUrls: ['./vehiculos.component.css']
})
export class VehiculosComponent implements OnInit {

  vehiculos:Vehiculo[]
  vehiculo:Vehiculo;
  concesionario:string[]
  newconcesionario:string;

  constructor() {
    this.vehiculos=[
      new Vehiculo ("1234-BCD","Toyota","GR Yaris",300,34500),
      new Vehiculo ("1235-BCD","Toyota","GR Supra",300,66900),
      new Vehiculo ("1236-BCD","Seat","Panda",0,0),
    ]
    this.vehiculo=new Vehiculo ("1234-BCD","Toyota","GR Yaris",300,34500)
    this.concesionario=[]
   }

  ngOnInit(): void {
    //this.mostrar();
  }

  anadir(){
    console.log(this.concesionario)
    console.log(this.newconcesionario)
   this.concesionario.push(this.newconcesionario)
  }


}
