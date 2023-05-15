import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Persona } from '../model/model/Persona.model';
import { environment } from 'src/environments/environment';
import { EducationComponent } from '../componentes/education/education.component';

@Injectable({
  providedIn: 'root'
})
export class PersonaService {
  
  Url:string = environment.URL + 'acercade/';
  constructor(private http: HttpClient) {

   }
   public traerInfo(): Observable<Persona>{
    return this.http.get<Persona>(this.Url + 'traer/1');
   }
   public modificarInfo(id: number, persona: Persona): Observable<Persona>{
    return this.http.put<any>(this.Url + `editar/${id}`, persona);
   }
}
