import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.css']
})
export class ContactoComponent implements OnInit {
  nombre_usr:string;
  apellidos_usr:string;
  tel_usr:number;
  email_usr:string;

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(){
    console.log(this.nombre_usr)
  }
}
