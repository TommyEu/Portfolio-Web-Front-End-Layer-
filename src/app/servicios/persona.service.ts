import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Persona } from '../model/model/Persona.model';

@Injectable({
  providedIn: 'root'
})
export class PersonaService {
  URL:string = "myblog-tommyeu.koyeb.app";
  constructor(private http: HttpClient) {

   }
   public traerInfo(): Observable<Persona>{
    return this.http.get<Persona>(this.URL + '/traer/1');
   }
}
