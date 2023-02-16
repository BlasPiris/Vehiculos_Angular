import { Injectable } from '@angular/core';
//IMPORTAR AL SERVICIO
import{HttpClient,HttpHeaders} from '@angular/common/http'
import{Observable} from "rxjs"

@Injectable({
  providedIn: 'root'
})
export class DatosService {
  public endpoint:string;
 

  constructor(public http:HttpClient) { 
    this.endpoint="https://reqres.in"
  }

  getUser():Observable<any>{
    return this.http.get(this.endpoint+"/api/users/2")
  }

  getUsers():Observable<any>{
    return this.http.get(this.endpoint+"/api/users?page=2")
  }

  getTeams():Observable<any>{
    return this.http.get("https://www.thesportsdb.com/api/v1/json/1/search_all_teams.php?l=Formula%201")
  }
}
