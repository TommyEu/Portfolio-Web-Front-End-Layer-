import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Persona } from '../model/Persona.model';
import { environment } from 'src/environments/environment';
import { Educacion } from '../model/Educacion.model';

@Injectable({
  providedIn: 'root'
})
export class EducacionService {
  URL:string = environment.URL + 'educacion/';
  constructor(private http: HttpClient) { }
      obtenerDatos(): Observable<Educacion[]>{
        return this.http.get<Educacion[]>(this.URL + 'traer/lista-education');
      }
      traerPorId(id:number): Observable<Educacion>{
        return this.http.get<Educacion>(this.URL + `traer/${id}`);
      }
      editarDatos(id:number, educacion:Educacion): Observable<any>{
        return this.http.put<any>(this.URL + `edit/${id}`, educacion);
      }
      crearDatos(educacion:Educacion): Observable<any>{
        return this.http.post<any>(this.URL + 'new/education', educacion);
      }
      eliminarDatos(id: number): Observable<any>{
        return this.http.delete(this.URL + `delete/${id}`);
      }
    }
