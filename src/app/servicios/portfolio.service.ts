import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';//importar cliente HTTP de Angular
import { Observable } from 'rxjs';//importar observable

@Injectable({
  providedIn: 'root'
})
export class PortfolioService {

  constructor(private http:HttpClient) { }//inyectando el modulo HttpClient

  obtenerDatos():Observable<any>{
    return this.http.get('./assets/data/data.json');//metodo para 'obtenerDatos' de data.json mediante metodo GET del modulo http inyectado
  }
}
