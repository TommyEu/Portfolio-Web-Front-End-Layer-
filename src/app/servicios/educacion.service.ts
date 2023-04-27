import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Persona } from '../model/model/Persona.model';

@Injectable({
  providedIn: 'root'
})
export class EducacionService {
  URL:string = "https://myblog-tommyeu.koyeb.app/" + "educacion/";
  constructor(private http: HttpClient) { }
      obtenerDatos(): Observable<any>{
        return this.http.get(this.URL + 'traer/lista-education');
      }
}
