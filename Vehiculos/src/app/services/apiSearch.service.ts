import { Injectable } from '@angular/core';
//IMPORTAR AL SERVICIO
import{HttpClient,HttpHeaders} from '@angular/common/http'
import{Observable} from "rxjs"

@Injectable({
  providedIn: 'root'
})
export class ApiSearch {
  public endpoint:string;
 

  constructor(public http:HttpClient) { 
    this.endpoint="https://www.thesportsdb.com/api/v1/json/1/"}

  getImg(busqueda:string):Observable<any>{
    return this.http.get(this.endpoint+"searchteams.php?t="+busqueda)
  }
}
