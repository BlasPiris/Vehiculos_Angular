import { Component, OnInit } from '@angular/core';

import{ApiSearch} from '../../services/apiSearch.service';

@Component({
  selector: 'app-servicios',
  templateUrl: './servicios.component.html',
  styleUrls: ['./servicios.component.css'],
  //AÑADIR SERVICIO EN EL DECORADOR
  providers:[ApiSearch],
})
export class ServiciosComponent implements OnInit {
  busqueda:string;
  imagen:string;
  constructor(public datos_Service:ApiSearch) { }

  ngOnInit(): void {
  }

  buscar(){

    this.datos_Service.getImg(this.busqueda).subscribe(result=>{
    this.imagen=result.teams[0].strTeamBadge
    });
  }

}
